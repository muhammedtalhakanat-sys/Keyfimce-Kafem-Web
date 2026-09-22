// KFM_PUBLISH_VERIFY_V1 sözleşme testi
// GitHub başarılı yazma mesajı, gerçek Pages/CDN doğrulamasıyla eşleştirilir:
// commit SHA okunur, canlı URL no-store ile çekilir, içerik karşılaştırılır.
// Doğrulama yayın sonucunu engellemez; durum rozetinde açıkça bildirilir.
import { readFileSync } from "node:fs";
import { test, describe } from "node:test";
import assert from "node:assert/strict";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

function mainScript() {
  const scripts = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  return scripts.find(code => code.includes("function githubPush")) || scripts.join("\n");
}

describe("KFM_PUBLISH_VERIFY_V1 yayın sonrası canlı doğrulama", () => {
  const code = mainScript();

  test("doğrulama işlevi tanımlı ve push akışına bağlı", () => {
    assert.match(code, /async function kfmGithubPublishDogrula\s*\(/);
    assert.match(code, /const verify = await kfmGithubPublishDogrula\(file, content\)/);
  });

  test("canlı doğrulama Pages adresini ve no-store önbellek atlamayı kullanır", () => {
    assert.match(code, /github\.io/);
    assert.match(code, /cache:\s*'no-store'/);
    assert.match(code, /dogrula/, "cache-busting sorgu anahtarı yok");
  });

  test("commit SHA’sı okunup içerik karşılaştırmasına katılır", () => {
    assert.match(code, /\/commits\?path=/);
    assert.match(code, /result\.commit = commits\?\.\[0\]\?\.sha/);
    assert.match(code, /liveText\.trim\(\) === expectedContent\.trim\(\)/);
  });

  test("doğrulama yayın sonucunu engellemez ve durumu ayrı bildirir", () => {
    // Yazma başarılıysa doğrulama başarısız olsa da true döner
    assert.match(code, /result\.ok = true; \/\/ doğrulama altyapısı başarısız olsa da yazma başarılıdır/);
    assert.match(code, /canlı doğrulama sürüyor/);
    assert.match(code, /Kaydedildi; canlı yayın kontrol ediliyor/);
  });

  test("script blokları sözdizimsel olarak geçerli", () => {
    const scripts = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
    for (const [i, s] of scripts.entries()) {
      assert.doesNotThrow(() => new Function(s), `script ${i} sözdizimi hatası`);
    }
  });
});
