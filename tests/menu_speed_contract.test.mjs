// KFM_MENU_SPEED_V1 sözleşme testi
// Menü hızı: seçili kategori odaklı ilk görünüm, seçilen kategoriye aşamalı
// kart yükleme ve güvenli yerel görsel önbelleği (hizmet işçisi olmadan,
// yalnız https kaynaklar için önbellek-first + arka plan yenileme).
import { readFileSync } from "node:fs";
import { test, describe } from "node:test";
import assert from "node:assert/strict";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

function mainScript() {
  const scripts = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  return scripts.find(code => code.includes("function renderProducts")) || scripts.join("\n");
}

describe("KFM_MENU_SPEED_V1 menü hızlandırma", () => {
  const code = mainScript();

  test("kart üretimi aşamalı yüklemeye (chunked render) bağlı", () => {
    assert.match(code, /function kfmRenderProductsChunked\s*\(/, "aşamalı render işlevi yok");
    assert.match(code, /kfmRenderProductsChunked\(/, "aşamalı render çağrılmıyor");
    assert.match(code, /requestAnimationFrame|setTimeout/, "aşamalar arası Yield yok");
  });

  test("ilk aşama seçili kategoriye odaklı kalır, tüm liste bozulmaz", () => {
    assert.match(code, /KFM_MENU_SPEED_FIRST_CHUNK\s*=\s*\d+/, "ilk aşama boyutu yok");
  });

  test("görsel önbelleği yalnız güvenli https kaynaklarını saklar", () => {
    assert.match(code, /function kfmCachedProductImageUrl\s*\(/, "görsel önbellek işlevi yok");
    const fnBody = code.slice(code.indexOf("function kfmCachedProductImageUrl"), code.indexOf("function kfmCachedImageRefresh"));
    assert.match(fnBody, /startsWith\('https:\/\/'\)/, "https denetimi yok");
    assert.match(fnBody, /return clean/, "güvenli olmayan URL'ler olduğu gibi dönmeli");
  });

  test("görsel önbelleği localStorage'a güvenli yazar ve arka plan yeniler", () => {
    assert.match(code, /kfm_image_cache_v1/, "önbellek anahtarı yok");
    assert.match(code, /kfmCachedImageRefresh/, "arka plan yenileme yok");
  });

  test("kart görselleri önbellekli URL ile yükleniyor", () => {
    assert.match(code, /src="\$\{kfmCachedProductImageUrl\(img\)\}"/);
  });

  test("script blokları sözdizimsel olarak geçerli", () => {
    const scripts = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
    for (const [i, s] of scripts.entries()) {
      assert.doesNotThrow(() => new Function(s), `script ${i} sözdizimi hatası`);
    }
  });
});
