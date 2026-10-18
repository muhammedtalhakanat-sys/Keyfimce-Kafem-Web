import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const menu = JSON.parse(readFileSync(new URL('../keyfimce_menu_ayarlar.json', import.meta.url), 'utf8'));

function readLiteralObject(name) {
  const match = html.match(new RegExp(String.raw`const ${name} = \{([\s\S]*?)\r?\n\s*\};`));
  assert.ok(match, `${name} object exists`);
  return new Function(`return ({${match[1]}})`)();
}

function normalize(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLocaleLowerCase('tr-TR')
    .replace(/\u0131/g, 'i')
    .replace(/\s+/g, ' ')
    .trim();
}

function localeKeys(language) {
  const start = html.indexOf('const i18n = {');
  const end = html.indexOf('const translationsDict =', start);
  const dictionary = html.slice(start, end);
  const match = new RegExp(String.raw`^\s*${language}: \{`, 'm').exec(dictionary);
  assert.ok(match, `${language} translations exist`);
  const blockStart = match.index + match[0].length;
  const nextLanguage = [...dictionary.matchAll(/^\s*(?:tr|en|ar): \{/gm)]
    .find(candidate => candidate.index > match.index);
  const block = dictionary.slice(blockStart, nextLanguage?.index ?? dictionary.length);
  return new Set([...block.matchAll(/^\s*([A-Za-z_$][\w$]*):/gm)].map(key => key[1]));
}

function localizationHelpers() {
  const start = html.indexOf('const EN_MENU_WORDS =');
  const end = html.indexOf('function refreshLocalizedControls()', start);
  const helpers = html.slice(start, end);
  const runtime = new Function('translationsDict', 'aktifDil', `
    ${helpers}
    return {
      translateMenuText,
      localizedProductName,
      localizedCategoryName,
      localizedExtraName,
      localizedProductDescription,
      setLanguage(language) { aktifDil = language; }
    };
  `);
  return runtime(readLiteralObject('translationsDict'), 'tr');
}

test('Turkish, English and Arabic UI dictionaries contain the same keys', () => {
  const turkish = localeKeys('tr');
  for (const language of ['en', 'ar']) {
    assert.deepEqual([...localeKeys(language)].sort(), [...turkish].sort(), `${language} translation keys match Turkish`);
  }
});

test('configured menu vocabulary has Arabic translations for categories and products', () => {
  const arabicWords = readLiteralObject('AR_MENU_WORDS');
  const texts = Object.values(menu.menuYedek).flatMap(category => [
    category.isim,
    ...(category.urunler || []).map(product => product.ad),
    ...(category.urunler || []).flatMap(product => (product.ekstralar || []).map(extra => extra.isim))
  ]);
  const missing = new Set();
  for (const text of texts.filter(Boolean)) {
    for (const word of normalize(text).match(/[a-z0-9]+/g) || []) {
      if (!Object.hasOwn(arabicWords, word)) missing.add(word);
    }
  }
  assert.deepEqual([...missing], [], 'every configured menu term maps to Arabic');
});

test('English catalogue labels use explicit translations or translated menu vocabulary', () => {
  const englishWords = readLiteralObject('EN_MENU_WORDS');
  const englishPhrases = new Map(
    Object.entries(readLiteralObject('translationsDict')).map(([source, translated]) => [normalize(source), translated])
  );
  const texts = Object.values(menu.menuYedek).flatMap(category => [
    category.isim,
    ...(category.urunler || []).map(product => product.ad)
  ]);
  const missing = new Set();
  for (const text of texts.filter(Boolean)) {
    if (englishPhrases.has(normalize(text))) continue;
    for (const word of normalize(text).match(/[a-z0-9]+/g) || []) {
      if (!Object.hasOwn(englishWords, word)) missing.add(word);
    }
  }
  assert.deepEqual([...missing], [], 'every catalogue label can be rendered in English');
});

test('localization helpers render the configured catalogue in Arabic and English', () => {
  const helpers = localizationHelpers();
  const products = Object.values(menu.menuYedek).flatMap(category => category.urunler || []);
  helpers.setLanguage('ar');
  for (const category of Object.values(menu.menuYedek)) {
    const categoryName = helpers.localizedCategoryName(category);
    assert.match(categoryName, /[\u0600-\u06ff]/, `${category.isim} has Arabic script`);
    assert.doesNotMatch(categoryName, /[a-z\u00c0-\u024f]/i, `${category.isim} has no Latin/Turkish fallback`);
  }
  for (const product of products) {
    const productName = helpers.localizedProductName(product);
    assert.match(productName, /[\u0600-\u06ff]/, `${product.ad} has Arabic script`);
    assert.doesNotMatch(productName, /[a-z\u00c0-\u024f]/i, `${product.ad} has no Latin/Turkish fallback`);
  }

  helpers.setLanguage('en');
  const englishWords = readLiteralObject('EN_MENU_WORDS');
  for (const product of products) {
    const sourceWords = normalize(product.ad).match(/[a-z0-9]+/g) || [];
    const hasTranslatedTerm = sourceWords.some(word => englishWords[word] && normalize(englishWords[word]) !== word);
    if (hasTranslatedTerm) {
      assert.notEqual(normalize(helpers.localizedProductName(product)), normalize(product.ad), `${product.ad} has an English label`);
    }
  }
  assert.equal(helpers.localizedExtraName({ isim: 'Fındık Şurubu' }), 'Hazelnut Syrup');
});

test('localized description uses Arabic copy and never falls back to Turkish in English or Arabic', () => {
  const helpers = localizationHelpers();
  const source = 'Bol köpüğü ve yoğun aromasıyla geleneksel Türk kahvesi keyfi.';
  helpers.setLanguage('ar');
  assert.equal(
    helpers.localizedProductDescription({ aciklama: source }, ''),
    'رشفات من القهوة التركية التقليدية برغوة غنية ونكهة عميقة.'
  );
  assert.equal(helpers.localizedProductDescription({ aciklama: 'Yönetici tarafından yazılmış açıklama.' }, ''), '');
  assert.equal(
    helpers.localizedProductDescription({ aciklama: source, aciklama_ar: 'وصف عربي مخصص' }, ''),
    'وصف عربي مخصص'
  );
  helpers.setLanguage('en');
  assert.equal(helpers.localizedProductDescription({ aciklama: 'Turkish source only' }, ''), '');
});

test('product descriptions, extras and variants prefer saved translations without leaking Turkish fallbacks', () => {
  assert.match(html, /extra\.isim_ar/);
  assert.match(html, /category\.isim_ar/);
  assert.match(html, /product\.ad_ar/);
  assert.match(html, /product\.aciklama_ar/);
  assert.match(html, /ARABIC_PRODUCT_DESCRIPTIONS\.get\(normalizeMenuTranslationKey\(source\)\) \|\| fallback/);
  assert.match(html, /function localizedVariantName\s*\(/);
  assert.match(html, /function localizedVariantGroupName\s*\(/);
  assert.match(html, /function kfmOrderCartDisplayName\s*\(/);
  assert.match(html, /urun_adi: item\.sourceProductData\s*\?\s*localizedProductName\(item\.sourceProductData\)/);
});

test('product detail and cart actions use the selected language, including Arabic RTL content', () => {
  for (const key of [
    'detail_tags_heading',
    'detail_contents_toggle',
    'variant_required',
    'variant_optional',
    'variant_out_of_stock',
    'detail_add_to_cart',
    'cart_empty',
    'cart_all_categories'
  ]) {
    assert.match(html, new RegExp(`${key}:`));
  }
  assert.match(html, /document\.getElementById\('htmlRoot'\)\.dir = aktifDil === 'ar' \? 'rtl' : 'ltr'/);
  assert.match(html, /if \(typeof kfmRenderOrderCart === 'function'\) kfmRenderOrderCart\(\)/);
});
