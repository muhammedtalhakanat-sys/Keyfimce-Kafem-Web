// KFM_DETAIL_TAGS_V1 sözleşme testi
// Ürün detayına yönetilebilir açıklama-içerik ve alerjen etiketleri:
// - Yönetim panelinde İçerik / Alerjenler / Alerjen notu alanları vardır.
// - Ziyaretçi detay penceresinde içerik etiketleri normal, alerjen etiketleri
//   vurgulu (is-allergen) gösterilir; yalnız dolu alanlarla bölüm görünür.
// - Alt seçenek, stok ve sepet davranışı değişmez.
import { readFileSync } from "node:fs";
import { test, describe } from "node:test";
import assert from "node:assert/strict";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

describe("KFM_DETAIL_TAGS_V1 içerik ve alerjen etiketleri", () => {
  const code = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]).join("\n");

  test("detay penceresinde içerik/alерjen bölümü tanımlı", () => {
    assert.match(html, /id="detailContentTags"/);
    assert.match(html, /id="detailContentPills"/);
    assert.match(html, /id="detailAllergenNotice"/);
  });

  test("doldurma işlevi boş veride bölümü gizler, dolu veride etiket üretir", () => {
    assert.match(code, /function kfmUrunIcerikEtiketleriniGoster\s*\(/);
    assert.match(code, /section\.hidden = true/, "boş veride gizleme yok");
    assert.match(code, /section\.hidden = false/, "dolu veride gösterme yok");
    assert.match(code, /detail-content-tag is-allergen/, "alerjen vurgusu yok");
  });

  test("yaygın alerjenler Türkçe/İngilizce etikete eşlenir", () => {
    assert.match(code, /KFM_YAYGIN_ALERJENLER/);
    assert.match(code, /gluten/i);
    assert.match(code, /etiket_en/, "İngilizce etiket yok");
  });

  test("yönetim panelinde içerik, alerjen ve not alanları kaydı ürünle ilişkilendirir", () => {
    assert.match(code, /function apIcerikGuncelle\s*\(/);
    assert.match(code, /function apAlerjenGuncelle\s*\(/);
    assert.match(code, /function apAlerjenNotuGuncelle\s*\(/);
    assert.match(code, /u\.icerik = String\(value/);
    assert.match(code, /u\.alerjenler = String\(value/);
    assert.match(code, /u\.alerjen_notu = String\(value/);
  });

  test("detay açılışı etiketleri doldurur; sepet ve varyant akışı korunur", () => {
    assert.match(code, /kfmUrunIcerikEtiketleriniGoster\(item\);/);
    assert.match(html, /id="detailVariants"/);
    assert.match(html, /detailAddToCart/);
  });

  test("script blokları sözdizimsel olarak geçerli", () => {
    const scripts = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
    for (const [i, s] of scripts.entries()) {
      assert.doesNotThrow(() => new Function(s), `script ${i} sözdizimi hatası`);
    }
  });
});
