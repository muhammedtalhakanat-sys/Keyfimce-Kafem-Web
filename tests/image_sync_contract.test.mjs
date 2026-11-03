import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const webRoot = path.resolve(import.meta.dirname, '..');
const webSource = fs.readFileSync(path.join(webRoot, 'index.html'), 'utf8');

const relayRoot = path.resolve(webRoot, '..', 'Keyfimce-Waiter-Relay', 'cloudflare-worker');
const relaySource = fs.readFileSync(path.join(relayRoot, 'keyfimce-relay-core-worker.mjs'), 'utf8');

test('web canlı katalog isteği sürüm/zaman cache anahtarı ve no-store kullanır', () => {
  assert.match(webSource, /KFM_LIVE_CATALOG_CLIENT_BUILD\s*=\s*['"]2026\.09\.01-image-sync\.13['"]/);
  assert.match(webSource, /catalogUrl\.searchParams\.set\(['"]client_build['"],\s*KFM_LIVE_CATALOG_CLIENT_BUILD\)/);
  assert.match(webSource, /catalogUrl\.searchParams\.set\(['"]t['"],\s*String\(Date\.now\(\)\)\)/);
  assert.match(webSource, /cache:\s*['"]no-store['"]/);
});

test('relay canlı katalog yanıtı edge ve tarayıcı cache’ine bırakılmaz', () => {
  assert.match(relaySource, /"cache-control":\s*"no-store, no-cache, must-revalidate, max-age=0"/);
  assert.match(relaySource, /"cdn-cache-control":\s*"no-store"/);
  assert.match(relaySource, /"cloudflare-cdn-cache-control":\s*"no-store"/);
  assert.match(relaySource, /"pragma":\s*"no-cache"/);
});

test('web canlı görseli mevcutsa statik yedek yalnız boş veya bilinen bozuk URL’de uygulanır', () => {
  assert.match(webSource, /if \(fallback && \(!current \|\| kfmKnownBrokenRemote\(product, current\)\)\) product\.gorsel = fallback/);
});

test('web ürün görseli geçerli Google thumbnail URL\'sini yükleme öncesi fallback\'e çevirmez', () => {
  assert.doesNotMatch(
    webSource,
    /!explicit \|\| explicit\.startsWith\(['"]file:['"]\) \|\| \/encrypted-tbn0\.gstatic\.com/,
  );
});

test('D1 kataloğu statik yayındaki geçerli çevirileri alır ve canlı çevirilerin üstüne yazmaz', () => {
  const start = webSource.indexOf('function kfmImageKey');
  const end = webSource.indexOf('function kfmStaticImageKey', start);
  assert.ok(start >= 0 && end > start, 'menu merge helper exists');
  const normalize = value => String(value || '')
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/g, 'i')
    .replace(/\s+/g, ' ')
    .trim();
  const merge = new Function('normalizeMenuTranslationKey', 'kfmKnownBrokenRemote', `
    ${webSource.slice(start, end)}
    return kfmMergeUserMenuData;
  `)(normalize, () => false);
  const live = {
    'cat-kahve': { isim: '☕ Kahveler', urunler: [{
      id: 'p-1', ad: 'Yeni Latte', ad_en: '', ad_ar: '', aciklama: 'Sütlü kahve',
      gorsel: '', ekstralar: [{ isim: 'Fındık' }], varyantlar: [{ isim: 'Büyük', grup: 'Boy' }]
    }] }
  };
  const published = {
    'cat-kahve': { isim: '☕ Kahveler', isim_en: 'Coffee', isim_ar: 'قهوة', urunler: [{
      id: 'p-1', ad: 'Yeni Latte', ad_en: 'New Latte', ad_ar: 'لاتيه جديد',
      aciklama: 'Sütlü kahve', aciklama_en: 'Coffee with milk', aciklama_ar: 'قهوة بالحليب',
      gorsel: 'https://example.test/latte.jpg',
      ekstralar: [{ isim: 'Fındık', isim_en: 'Hazelnut', isim_ar: 'بندق' }],
      varyantlar: [{ isim: 'Büyük', grup: 'Boy', isim_en: 'Large', isim_ar: 'كبير', grup_en: 'Size', grup_ar: 'الحجم' }]
    }] }
  };
  const merged = merge(live, published);
  const product = merged['cat-kahve'].urunler[0];
  assert.equal(merged['cat-kahve'].isim_ar, 'قهوة');
  assert.equal(product.ad_en, 'New Latte');
  assert.equal(product.aciklama_ar, 'قهوة بالحليب');
  assert.equal(product.gorsel, 'https://example.test/latte.jpg');
  assert.equal(product.ekstralar[0].isim_ar, 'بندق');
  assert.equal(product.varyantlar[0].grup_en, 'Size');
  assert.equal(live['cat-kahve'].urunler[0].ad_en, '');

  live['cat-kahve'].urunler[0].ad_en = 'Live English';
  assert.equal(merge(live, published)['cat-kahve'].urunler[0].ad_en, 'Live English');
});
