import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

assert.match(
  html,
  /#catNav\.wheel-pro-mode:not\(\.wheel-collapsed\)\{\n  transform:translateZ\(0\)!important;/,
  'Açık çark yatay 3B dönüş yerine kararlı bir kompozit katman kullanmalıdır.'
);

assert.match(
  html,
  /#catNav\.wheel-pro-mode \.wheel-proximity-preview\{display:none!important;\}/,
  'Geçici yakınlık etiketleri sürükleme sırasında görünmemelidir.'
);

assert.match(
  html,
  /item\.style\.transform = `translate\(-50%, -50%\) translateY\(\$\{y\.toFixed\(1\)\}px\) scale\(\$\{scale\.toFixed\(3\)\}\)`;/,
  'Kategori kartları yalnızca dikey eksende ilerlemelidir.'
);

assert.doesNotMatch(
  html,
  /nav\.style\.setProperty\('--wheel-gesture-tilt', `\$\{clamp\(\(liveIndex - dragStartIndex\)/,
  'Sürükleme sırasında yatay çark eğimi yeniden uygulanmamalıdır.'
);

console.log('Çark dikey hareket sözleşmesi doğrulandı.');
