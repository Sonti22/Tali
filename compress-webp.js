#!/usr/bin/env node
/* Генерирует WebP-копии для всех jpg/png. Браузеры с поддержкой WebP получат меньшие файлы. */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'images');
const Q = 78;

(async () => {
  const files = fs.readdirSync(dir);
  let saved = 0, total = 0;
  for (const f of files) {
    const ext = path.extname(f).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
    const base = f.replace(/\.(jpg|jpeg|png)$/i, '');
    const webp = path.join(dir, base + '.webp');
    if (fs.existsSync(webp)) continue;
    try {
      const before = fs.statSync(path.join(dir, f)).size;
      await sharp(path.join(dir, f)).webp({ quality: Q, effort: 5 }).toFile(webp);
      const after = fs.statSync(webp).size;
      total += before; saved += (before - after);
      console.log(`${f}: ${(before/1024).toFixed(0)}K → ${(after/1024).toFixed(0)}K (-${(100*(1-after/before)).toFixed(0)}%)`);
    } catch (e) {
      console.log(`${f}: ERR ${e.message}`);
    }
  }
  console.log(`\nWebP saving total: ${(saved/1024/1024).toFixed(1)}MB`);
})();
