import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const webRoot = path.resolve(import.meta.dirname, '..');
const webSource = fs.readFileSync(path.join(webRoot, 'index.html'), 'utf8');

const relayRoot = path.resolve(webRoot, '..', 'keyfimce-sync-relay', 'cloudflare-worker');
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
