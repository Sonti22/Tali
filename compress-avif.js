#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'images');
const Q = 60;

(async () => {
  let processed = 0, skipped = 0, totalSaved = 0;
  const all = [];
  const walk = (d) => {
    for (const f of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, f.name);
      if (f.isDirectory()) walk(full);
      else all.push(full);
    }
  };
  walk(dir);
  for (const full of all) {
    const ext = path.extname(full).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
    const avif = full.replace(/\.(jpg|jpeg|png)$/i, '.avif');
    if (fs.existsSync(avif)) { skipped++; continue; }
    try {
      await sharp(full).avif({ quality: Q, effort: 4 }).toFile(avif);
      const before = fs.statSync(full).size;
      const after = fs.statSync(avif).size;
      totalSaved += (before - after);
      processed++;
      if (processed % 10 === 0) console.log(`  ${processed} done…`);
    } catch (e) {
      console.log(`ERR ${full}: ${e.message}`);
    }
  }
  console.log(`\nProcessed ${processed} files, skipped ${skipped}. Avg AVIF saving: ${(totalSaved/1024/1024).toFixed(1)}MB`);
})();
