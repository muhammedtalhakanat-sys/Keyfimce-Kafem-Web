import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const source = fs.readFileSync(path.join(here, '..', 'index.html'), 'utf8');

const requiredContracts = [
  'id="toast" role="status" aria-live="polite" aria-atomic="true"',
  'id="cartAddToast" role="status" aria-live="polite" aria-atomic="true"',
  'id="cartAddToastProduct" class="cart-add-toast-product"',
  'id="cartAddToastIcon" class="fa-solid fa-bag-shopping cart-add-toast-icon"',
  '#cartAddToast.is-visible',
  'function kfmCartAddToast(productName, quantity)',
  'function kfmCartIconBounce()',
  'kfmCartIconBounce();',
  "icon.classList.add('is-bouncing');",
  'kfmCartIconBounce',
  'prefers-reduced-motion: reduce',
  "el.classList.add('is-visible');",
  "el._t = setTimeout(() => el.classList.remove('is-visible'), 2800);",
  'kfmCartAddToast(name, existing ? existing.quantity : 1);',
  '@media (prefers-reduced-motion: reduce)',
  'id="orderCartList" class="order-cart-list" role="list" aria-live="polite"',
  'id="orderStatusMessage" role="status" aria-live="polite" aria-atomic="true"',
  'id="orderCartQuickGo" class="order-cart-quick-go" type="button"',
  'function kfmOrderStatusGuncelle(message, mode = \'idle\')',
  'kfmOrderStatusGuncelle(\'Siparişiniz ekibe iletildi.',
  'kfmOrderStatusGuncelle(\'Sipariş iletiliyor…\', \'loading\')',
  'kfmOrderStatusGuncelle(\'Sipariş şu anda iletilemedi.',
  'function kfmOrderCartChange(index, delta)',
  'toast(`✓ ${item.name} sepetten çıkarıldı.`);',
  'toast(`✓ ${item.name} adedi ${item.quantity} oldu.`);',
  'aria-label="${escapeHtml(item.name)} adedini azalt"',
  'aria-label="${escapeHtml(item.name)} adedini artır"',
  'width:34px;height:34px',
  "toast(testMode ? (aktifDil === 'en' ? 'Waiter test request sent.' : 'Garson çağırma test isteği gönderildi.') : t('waiter_sent'));",
  'fa-hand waiter-call-nav-icon',
  '#bottomNav #bnav-waiter .waiter-call-nav-icon',
  'function oneriIstekPenceresiAc()',
  '<option value="oneri">Öneri / İstek</option>',
  'id="detailGallery" class="detail-gallery" hidden',
  'galeri_gorselleri: Array.isArray(product?.galeri_gorselleri)',
  'id="detailVariants" class="detail-variants" hidden',
  'function kfmOrderProductVariants(product)',
  'function kfmOrderVariantGroups(variants)',
  'function kfmMissingRequiredVariantGroups(product, selectedNames = [])',
  'function kfmUnavailableRequiredVariantGroups(product)',
  'function kfmExceededVariantGroups(product, selectedNames = [])',
  'function kfmSelectedOrderVariants(product, selectedNames = [])',
  'alt_secenekler: Array.isArray(item.alt_secenekler)',
  'alt_secenek_gruplari: Array.isArray(item.alt_secenek_gruplari)',
  'Önce seçin:',
  'Stokta seçenek yok:',
  'grup_sira',
  'grup_max_secim',
  'stokta_var',
  'stok_uyari',
  'stok_miktar',
  'stok_birim',
  'Stokta yok',
  'Stok eşiğinde',
  'Kalan:',
  'product-card-stock-warning',
  'stokUyari: product?.stok_uyari === true',
  'stokMiktar: product?.stok_miktar',
  'data-variant-selection-counter',
  'detail-variant-selection-counter',
  'is-required',
  'is-complete',
  'Limit doldu',
  'Seçim limitini azaltın:',
  'Alt seçenekleri seçip ürünü sepetinize ekleyin.',
  '#productDetailModal .detail-content { min-height:0; overflow-y:auto;',
  'max-height:calc(100dvh - 24px)',
  'https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js',
  'Masa QR Kodları',
  'id="apQrTableNumber"',
  'id="apTableQrOutput"',
  'function kfmMasaParametresiniUygula()',
  'function kfmMasaQrUrl(masa)',
  'function kfmMasaQrOlustur()',
  'function kfmMasaQrIndir()',
  'function kfmMasaQrYazdir()',
  "url.searchParams.set('masa', masa);",
  "['orderTableNumber', 'waiterTableNumber']",
  'kfmMasaParametresiniUygula();',
  'function kfmStaticInternetGorselleriniUygula(remoteMenu, staticMenu)',
  'function kfmStatikMenuGorselleriniYukle()',
  "fetch(jsonDosyaAdi, { cache: 'no-store'",
  'kfmStaticInternetGorselleriniUygula(liveCatalog.menu, staticImageMenu)',
  'data-image-state="loading" aria-busy="true"',
  'function setupCardImageReveal()',
  'wrap.dataset.imageState = \'ready\';',
  'wrap.setAttribute(\'aria-busy\', \'false\');',
  'kfmImageSkeleton',
];

for (const contract of requiredContracts) {
  if (!source.includes(contract)) {
    throw new Error(`Eksik web sipariş UX sözleşmesi: ${contract}`);
  }
}

const inlineScripts = [...source.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
  .map((match) => match[1])
  .filter((script) => script.trim());

for (const [index, script] of inlineScripts.entries()) {
  try {
    new Function(script);
  } catch (error) {
    throw new Error(`Gömülü betik ${index + 1} ayrıştırılamadı: ${error.message}`);
  }
}

console.log(`${inlineScripts.length} gömülü betik ayrıştırıldı; sepet miktar denetimleri ve erişilebilir toast sözleşmeleri doğrulandı.`);
