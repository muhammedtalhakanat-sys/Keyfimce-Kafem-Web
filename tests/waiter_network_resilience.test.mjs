import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('garson çağrısı iki HTTPS relay hedefi ve zaman aşımı koruması kullanır', () => {
  assert.match(source, /KFM_WAITER_RELAY_SECONDARY_URL/);
  assert.match(source, /kfmWaiterRelayCandidates\(relayUrls\)/);
  assert.match(source, /KFM_WAITER_TIMEOUT_MS = 8500/);
  assert.match(source, /signal: controller\.signal/);
});

test('ağ hatasında VPN ve proxy için kullanıcıya anlaşılır yönlendirme gösterilir', () => {
  assert.match(source, /VPN\/proxy veya reklam engelleme açıksa kapatıp tekrar deneyin/);
});
