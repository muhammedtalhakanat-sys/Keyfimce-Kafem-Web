import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const webRoot = path.resolve(import.meta.dirname, '..');
const webSource = fs.readFileSync(path.join(webRoot, 'index.html'), 'utf8');

test('yönetim paneli form kontrolleri açık ve koyu temada okunabilir kalır', () => {
  assert.ok(webSource.includes('<style id="kfm-admin-control-center-style">'));
  assert.ok(webSource.includes('background:#fffdfb!important;color:#2c1a12!important'));
  assert.ok(webSource.includes('color:#715a50!important;opacity:1!important'));
  assert.ok(webSource.includes('background:#24150f!important;color:#fff4e9!important'));
  assert.ok(webSource.includes('color:#d3b6a5!important'));
  assert.ok(webSource.includes('background:#fffdfb!important;color:#2c1a12!important;}</style>') || webSource.includes('background:#fffdfb!important;color:#2c1a12!important;'));
});

test('yönetim panelinde görünür tek tıklamalı herkese yayın düğmesi ve durum alanı vardır', () => {
  assert.match(webSource, /id="adminPublishHero"/);
  assert.match(webSource, /id="adminPublishQuickBtn"[^>]*onclick="kfmAdminHerkeseYayinla\(\)"/);
  assert.match(webSource, /id="adminPublishQuickStatus"/);
  assert.match(webSource, /id="adminPublishSummary"/);
  assert.match(webSource, /onclick="kfmAdminGitHubAyarlarinaGit\(\)"/);
});

test('tek tık yayın mevcut GitHub akışını kullanır ve eksik ayarda ayar kartına yönlendirir', () => {
  assert.match(webSource, /async function kfmAdminHerkeseYayinla\(\)/);
  assert.match(webSource, /await githubPush\(\{ manual: true \}\)/);
  assert.match(webSource, /if \(!ghSettings\.token \|\| !ghSettings\.user \|\| !ghSettings\.repo \|\| !ghSettings\.file\)/);
  assert.match(webSource, /kfmAdminGitHubAyarlarinaGit\(\);/);
  assert.match(webSource, /fa-spinner fa-spin mr-2"><\/i>Yayınlanıyor\.\.\./);
});

test('ürün/kategori/görsel özeti ve GitHub durumu üst yayın kartına yansıtılır', () => {
  assert.match(webSource, /function kfmAdminPublishMetricsGuncelle\(\)/);
  assert.match(webSource, /adminPublishProductCount/);
  assert.match(webSource, /adminPublishCategoryCount/);
  assert.match(webSource, /adminPublishMissingImageCount/);
  assert.match(webSource, /const quick = document\.getElementById\('adminPublishQuickStatus'\)/);
  assert.match(webSource, /if \(document\.getElementById\('adminPanel'\)\?\.style\.display !== 'none'\) kfmAdminPublishMetricsGuncelle\(\);/);
});
