#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'images');
const MAX_W = 1600;
const Q = 80;

async function process(file) {
  const full = path.join(dir, file);
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;
  const before = fs.statSync(full).size;
  const tmp = full + '.tmp';
  try {
    let pipe = sharp(full).rotate().resize({ width: MAX_W, withoutEnlargement: true });
    if (ext === '.png') pipe = pipe.png({ quality: Q, compressionLevel: 9 });
    else pipe = pipe.jpeg({ quality: Q, mozjpeg: true });
    await pipe.toFile(tmp);
    const after = fs.statSync(tmp).size;
    if (after < before) {
      fs.renameSync(tmp, full);
      console.log(`${file}: ${(before/1024).toFixed(0)}K → ${(after/1024).toFixed(0)}K (-${(100*(1-after/before)).toFixed(0)}%)`);
    } else {
      fs.unlinkSync(tmp);
      console.log(`${file}: skip (already small)`);
    }
  } catch (e) {
    if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    console.log(`${file}: ERR ${e.message}`);
  }
}

(async () => {
  const files = fs.readdirSync(dir);
  for (const f of files) await process(f);
  // Total size
  let total = 0;
  for (const f of fs.readdirSync(dir)) total += fs.statSync(path.join(dir, f)).size;
  console.log(`\nTotal: ${(total/1024/1024).toFixed(1)}MB`);
})();
