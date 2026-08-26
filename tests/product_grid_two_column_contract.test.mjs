import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const source = fs.readFileSync(path.join(here, '..', 'index.html'), 'utf8');
const twoColumnRule = 'grid-template-columns:repeat(2,minmax(0,1fr)) !important;';

for (const contract of [
  'Ürünler her ekranda ikişerli sıralanır',
  twoColumnRule,
  '.product-card-title{',
  '-webkit-line-clamp:2;',
  '.product-card-price{font-size:clamp(14px,3.7vw,18px);}',
  '@media(min-width:700px){',
]) {
  if (!source.includes(contract)) {
    throw new Error(`Eksik iki sütunlu ürün kartı sözleşmesi: ${contract}`);
  }
}

const lastTwoColumnRule = source.lastIndexOf(twoColumnRule);
const lastThreeColumnRule = source.lastIndexOf('grid-template-columns:repeat(3,minmax(0,1fr))');
const lastFourColumnRule = source.lastIndexOf('grid-template-columns:repeat(4,minmax(0,1fr))');

if (lastTwoColumnRule <= Math.max(lastThreeColumnRule, lastFourColumnRule)) {
  throw new Error('Son responsive kural ürün kartı ızgarasını iki sütunda sabitlemiyor.');
}

console.log('Ürün kartı ızgarası tüm ekran aralıklarında iki sütuna sabitlendi.');
