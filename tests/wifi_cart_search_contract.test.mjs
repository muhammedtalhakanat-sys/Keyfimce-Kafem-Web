import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const source = fs.readFileSync(path.join(here, '..', 'index.html'), 'utf8');

const requiredContracts = [
  'id="wifiPassDisplay"',
  'function wifiSifreyiKopyala()',
  'function wifiBaglan()',
  "wifiYedek: { ad: wifiData?.ad || '', sifre: String(wifiData?.sifre || '') }",
  'wifiYedek: { ad: wifiData.ad, sifre: "********" }',
  'id="orderCartSearch"',
  'oninput="kfmOrderCartFilterUygula(this.value)"',
  'id="orderCartSearchClear"',
  'function kfmOrderCartFilterMetni(item)',
  'function kfmOrderCartFilterUygula(rawQuery)',
  'function kfmOrderCartFilterTemizle()',
  'function kfmOrderCartFilterDurumunuSifirla()',
  'data-cart-index="${index}"',
  'kfmOrderCartFilterUygula(document.getElementById(\'orderCartSearch\')?.value || \'\');',
  '.order-cart-filter-empty',
  'html[data-theme="dark"] .order-cart-filter input',
];

for (const contract of requiredContracts) {
  if (!source.includes(contract)) throw new Error(`Eksik Wi-Fi/sepet sözleşmesi: ${contract}`);
}

const wifiPublishSection = source.slice(source.indexOf('function kfmGithubPayloadFromState'), source.indexOf('async function githubPush'));
const wifiExportSection = source.slice(source.indexOf('function sistemiDisariAktarJSON'), source.indexOf('function sistemiIceriAktarJSON'));
if (!wifiExportSection.includes('sifre: "********"')) throw new Error('Yerel JSON dışa aktarımında Wi-Fi parolası maskelenmiyor.');
if (wifiPublishSection.includes("sifre: '********'")) {
  throw new Error('GitHub yayın payloadı Wi-Fi parolasını yıldızla maskeliyor.');
}

const inlineScripts = [...source.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
  .map((match) => match[1])
  .filter((script) => script.trim());
for (const [index, script] of inlineScripts.entries()) {
  try { new Function(script); }
  catch (error) { throw new Error(`Gömülü betik ${index + 1} ayrıştırılamadı: ${error.message}`); }
}

console.log(`${inlineScripts.length} gömülü betik ayrıştırıldı; Wi-Fi gerçek parola ve sepet arama sözleşmeleri doğrulandı.`);
