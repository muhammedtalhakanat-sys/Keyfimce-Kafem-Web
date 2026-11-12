import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('garson çağrısı canlı Worker geri dönüşü ve zaman aşımı koruması kullanır', () => {
  assert.match(source, /KFM_WAITER_RELAY_FALLBACK_URL = 'https:\/\/keyfimce-relay\.muhammedtalhakanat-d30\.workers\.dev'/);
  assert.match(source, /kfmWaiterRelayCandidates\(relayUrls\)/);
  assert.match(source, /KFM_WAITER_RELAY_CONFIG_TIMEOUT_MS = 3000/);
  assert.match(source, /KFM_WAITER_TIMEOUT_MS = 8500/);
  assert.match(source, /signal: controller\.signal/);
});

test('ağ hatasında VPN ve proxy için kullanıcıya anlaşılır yönlendirme gösterilir', () => {
  assert.match(source, /VPN\/proxy veya reklam engelleme açıksa kapatıp tekrar deneyin/);
});

test('sipariş hatasında relay kaynaklı hata ayrıntısı kullanıcıya gösterilir', () => {
  assert.match(source, /const visibleError = isNetworkError \? t\('order_toast_network'\) : \(errorMessage \|\| t\('order_toast_failed'\)\)/);
  assert.match(source, /kfmOrderStatusGuncelle\(`\$\{t\('order_status_send_failed'\)\} \$\{visibleError\}`, 'error'\)/);
});
