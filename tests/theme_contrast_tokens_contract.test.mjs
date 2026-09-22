// KFM_THEME_TOKENS_V1 sözleşme testi
// Tek okunabilir kontrast sistemi: açık/koyu/auto temalar aynı token adlarını
// paylaşır; durum rozetleri ve odak halkası sabit ışık-renkleri yerine token
// kullanır. data-theme="auto" koyu paleti data-theme="dark" ile birebir aynıdır.
import { readFileSync } from "node:fs";
import { test, describe } from "node:test";
import assert from "node:assert/strict";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

function extractCss() {
  return [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map(m => m[1]).join("\n");
}

function extractBlock(css, startMarker, fromMarker) {
  const from = fromMarker ? css.indexOf(fromMarker) : 0;
  const start = css.indexOf(startMarker, from);
  assert.ok(start >= 0, `${startMarker} bulunamadı`);
  const open = css.indexOf("{", start);
  let depth = 0;
  for (let i = open; i < css.length; i++) {
    if (css[i] === "{") depth++;
    else if (css[i] === "}") { depth--; if (depth === 0) return css.slice(open + 1, i); }
  }
  throw new Error(`${startMarker} bloğu kapanmamış`);
}

function tokens(block) {
  const map = {};
  for (const m of block.matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/g)) map[`--${m[1]}`] = m[2].trim();
  return map;
}

describe("KFM_THEME_TOKENS_V1 tek kontrast sistemi", () => {
  const css = extractCss();

  test("CSS blokları dengeli ve token bloğu belgede en son :root olarak geliyor", () => {
    const open = (css.match(/{/g) || []).length;
    const close = (css.match(/}/g) || []).length;
    assert.equal(open, close, "süslü parantez dengesi bozuk");
    assert.ok(css.includes("KFM_THEME_TOKENS_V1"), "kanonik token bloğu yok");
    const lastRoot = css.lastIndexOf(":root");
    assert.ok(css.indexOf("KFM_THEME_TOKENS_V1") < lastRoot, "token bloğu son :root’tan önce");
  });

  test("zorunlu kontrast tokenları açık temada tanımlı", () => {
    const required = ["--bg", "--surface", "--surface2", "--border", "--border2", "--rust", "--rust-dk",
      "--rust-lt", "--gold", "--ink", "--muted", "--muted2", "--on-rust",
      "--ok-bg", "--ok-fg", "--ok-border", "--warn-bg", "--warn-fg", "--warn-border",
      "--err-bg", "--err-fg", "--err-border", "--focus-ring"];
    const light = tokens(extractBlock(css, ":root {", "KFM_THEME_TOKENS_V1"));
    for (const name of required) assert.ok(light[name], `açık temada ${name} yok`);
  });

  test("koyu tema ve auto koyu paleti birebir aynı token değerlerini paylaşır", () => {
    const dark = tokens(extractBlock(css, 'html[data-theme="dark"] {', "KFM_THEME_TOKENS_V1"));
    const autoBlock = css.slice(css.indexOf("@media (prefers-color-scheme: dark)", css.indexOf("KFM_THEME_TOKENS_V1")));
    const auto = tokens(extractBlock(autoBlock, 'html[data-theme="auto"] {'));
    assert.ok(Object.keys(dark).length >= 23, "koyu tema tokenları eksik");
    assert.deepEqual(auto, dark, 'data-theme="auto" koyu paleti data-theme="dark" ile aynı olmalı');
  });

  test("durum rozetleri ve stok rozeti sabit renk yerine token kullanır", () => {
    assert.match(css, /\.gh-status\.idle\s*{[^}]*var\(--ok-(bg|fg)\)/);
    assert.match(css, /\.gh-status\.saving\s*{[^}]*var\(--warn-(bg|fg)\)/);
    assert.match(css, /\.gh-status\.error\s*{[^}]*var\(--err-(bg|fg)\)/);
    assert.match(css, /\.stok-badge\s*{[^}]*var\(--err-bg\)/);
    // Eski sabit tanımların artık aktif olmaması için token sonraya yazılmalı
    const lastErr = css.lastIndexOf(".gh-status.error");
    assert.ok(css.indexOf("var(--err-fg)", lastErr) > 0, "gh-status.error token tanımı bloktan sonra gelmiyor");
  });

  test("odak halkası tek kaynaktan gelir", () => {
    assert.match(css, /\*:focus-visible\s*{[^}]*var\(--focus-ring\)/);
  });

  test("koyu temada gövde metin kontrastı WCAG AA eşiğini geçer", () => {
    // --ink #fff4e9, koyu zemin --bg #160f0c
    const lum = hex => {
      const c = hex.replace("#", "").match(/.{2}/g).map(h => {
        const v = parseInt(h, 16) / 255;
        return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
      });
      return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
    };
    const ink = lum("#fff4e9"), bg = lum("#160f0c");
    const ratio = (Math.max(ink, bg) + 0.05) / (Math.min(ink, bg) + 0.05);
    assert.ok(ratio >= 4.5, `koyu tema gövde kontrastı ${ratio.toFixed(2)}:1 < 4.5:1`);
    // Açık tema --ink #2b1912 üzerinde --bg #f7f3ee
    const inkL = lum("#2b1912"), bgL = lum("#f7f3ee");
    const ratioL = (Math.max(inkL, bgL) + 0.05) / (Math.min(inkL, bgL) + 0.05);
    assert.ok(ratioL >= 4.5, `açık tema gövde kontrastı ${ratioL.toFixed(2)}:1 < 4.5:1`);
  });
});
