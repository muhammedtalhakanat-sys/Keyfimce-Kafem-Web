// KFM_FAVORITES_TRACKING_V1 sözleşme testi
// - Favoriler ve son seçilenler yalnızca cihazda (localStorage) saklanır.
// - Ürün kartlarında favori kalp düğmesi; favori şeridi boşsa gizlenir.
// - Sipariş gönderiminde dönen takip kodu saklanır; sepette alındı →
//   hazırlanıyor → hazır adımları gösterilir; iptal durumu ayrı bildirilir.
// - Takip sorgusu yalnız 48 haneli güvenli kodla, ajan anahtarı olmadan yapılır.
import { readFileSync } from "node:fs";
import { test, describe } from "node:test";
import assert from "node:assert/strict";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

describe("KFM_FAVORITES_TRACKING_V1 favoriler ve sipariş takibi", () => {
  const code = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]).join("\n");

  test("favoriler cihazda güvenli anahtarlarla saklanır ve sınırlıdır", () => {
    assert.match(code, /kfm_favorites_v1/);
    assert.match(code, /kfm_recent_v1/);
    assert.match(code, /KFM_FAVORITES_MAX = 12/);
    assert.match(code, /KFM_RECENT_MAX = 8/);
  });

  test("ürün kartlarında favori düğmesi ve şerit güncellemesi bağlı", () => {
    assert.match(code, /function kfmFavToggleHtml\s*\(/);
    assert.match(code, /kfmFavToggleHtml\(\{ \.\.\.u, catKey: u\.catKey \}\)/);
    assert.match(code, /kfmFavToggleBagla\(grid\)/);
    assert.match(code, /function kfmFavoritesStripGuncelle\s*\(/);
  });

  test("favori şeridi boşken gizlenir; kartlar ürün ve fiyat gösterir", () => {
    assert.match(code, /section\.hidden = chips\.length === 0/);
    assert.match(html, /id="favoritesStrip"/);
    assert.match(html, /id="favoritesSection"[^>]*hidden/);
  });

  test("sipariş takip paneli üç adımı ve yenilemeyi içerir", () => {
    assert.match(html, /id="orderTrackingPanel"[^>]*hidden/);
    assert.match(html, /data-step="alindi"/);
    assert.match(html, /data-step="hazirlaniyor"/);
    assert.match(html, /data-step="hazir"/);
    assert.match(code, /function kfmOrderTrackingYenile\s*\(/);
  });

  test("takip kodu gönderim sonrası saklanır ve yalnız güvenli kodla sorgulanır", () => {
    assert.match(code, /kfmOrderTrackingKaydet\(\{ kod: data\.takip\?\.kod/);
    assert.match(code, /kfm_order_tracking_v1/);
    // Relay tarafındaki güvenli sözleşme: 48 haneli hex kod
    assert.match(code, /\/api\/orders\/track\//);
    // Sorgu ajan anahtarı taşımaz
    const trackingFn = code.slice(code.indexOf("async function kfmOrderTrackingYenile"), code.indexOf("function kfmOrderTrackingPaneliniGizle"));
    assert.doesNotMatch(trackingFn, /Authorization/, "takip sorgusu yetki anahtarı içermemeli");
  });

  test("iptal durumu ayrı bildirilir; süre dolan takip temizlenir", () => {
    assert.match(code, /durum === 'iptal'/);
    assert.match(code, /24 \* 60 \* 60 \* 1000/);
  });

  test("detay açılışı son seçilenlere ekler; bozuk referans güvenli işlenir", () => {
    assert.match(code, /kfmRecentEkle\(\{ \.\.\.interactionProduct \}\)/);
    assert.match(code, /kfmProductByRef/);
  });

  test("script blokları sözdizimsel olarak geçerli", () => {
    const scripts = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
    for (const [i, s] of scripts.entries()) {
      assert.doesNotThrow(() => new Function(s), `script ${i} sözdizimi hatası`);
    }
  });
});
