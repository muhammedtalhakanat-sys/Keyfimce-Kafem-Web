import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const source = fs.readFileSync(path.join(here, '..', 'index.html'), 'utf8');
const pickerStart = source.indexOf('function kategoriSeciciKur()');
const pickerEnd = source.indexOf('\n    function buildNav()', pickerStart);

if (pickerStart < 0 || pickerEnd < 0) {
  throw new Error('Kategori seçici kurulumu bulunamadı.');
}

const pickerSource = source.slice(pickerStart, pickerEnd);
for (const contract of [
  "trigger.addEventListener('click'",
  "searchInput?.addEventListener('input'",
  "trigger.setAttribute('aria-expanded', String(willOpen))",
  'Arama alanı yalnız kullanıcı dokunursa odaklanır.',
  'id="searchInput"',
]) {
  if (!source.includes(contract)) {
    throw new Error(`Eksik klavye odağı sözleşmesi: ${contract}`);
  }
}

if (/searchInput\?\.focus\s*\(/.test(pickerSource)) {
  throw new Error('Kategori menüsü açılırken arama odağı otomatik veriliyor; bu mobil klavyeyi açar.');
}

console.log('Kategori menüsü açılırken ekran klavyesini tetikleyecek otomatik arama odağı bulunmuyor.');
