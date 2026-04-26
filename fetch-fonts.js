#!/usr/bin/env node
/* Скачивает CSS Google Fonts → парсит WOFF2 URLs → скачивает все файлы → пишет local CSS */
const fs = require('fs');
const path = require('path');
const https = require('https');

const FONTS_URL = 'https://fonts.googleapis.com/css2?'
  + 'family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500'
  + '&family=PT+Serif:ital,wght@0,400;0,700;1,400'
  + '&family=Inter:wght@300;400;500;600'
  + '&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400'
  + '&family=Lobster'
  + '&family=Marck+Script'
  + '&family=Tinos:ital,wght@0,400;0,700;1,400'
  + '&display=swap';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

function get(url, opts = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': UA, ...opts.headers } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return get(res.headers.location, opts).then(resolve, reject);
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks), headers: res.headers }));
    }).on('error', reject);
  });
}

(async () => {
  const fontsDir = path.join(__dirname, 'fonts');
  fs.mkdirSync(fontsDir, { recursive: true });

  console.log('Fetching Google Fonts CSS…');
  const cssRes = await get(FONTS_URL);
  let css = cssRes.body.toString('utf8');

  /* Парсим src: url(...) format('woff2') */
  const urlRe = /url\((https:\/\/fonts\.gstatic\.com\/[^\)]+)\)/g;
  const found = new Set();
  let m;
  while ((m = urlRe.exec(css))) found.add(m[1]);
  console.log(`Found ${found.size} font files.`);

  /* Только cyrillic + latin диапазоны (не cyrillic-ext / vietnamese / etc — экономия) */
  /* Простой фильтр: оставим всё, иначе не угадаешь какой блок что */

  let i = 0;
  for (const url of found) {
    i++;
    const localName = `f${i}.woff2`;
    const r = await get(url);
    if (r.status !== 200) { console.log(`skip ${url}: ${r.status}`); continue; }
    fs.writeFileSync(path.join(fontsDir, localName), r.body);
    css = css.split(url).join('fonts/' + localName);
    console.log(`  ✓ ${localName}: ${(r.body.length/1024).toFixed(1)}K`);
  }

  fs.writeFileSync(path.join(fontsDir, 'fonts.css'), css);
  const total = fs.readdirSync(fontsDir)
    .filter(f => f.endsWith('.woff2'))
    .reduce((s, f) => s + fs.statSync(path.join(fontsDir, f)).size, 0);
  console.log(`\nDone. Total fonts: ${(total/1024/1024).toFixed(2)}MB. CSS: fonts/fonts.css`);
})();
