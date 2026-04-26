const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'images', 'dynasties');
(async () => {
  for (const f of fs.readdirSync(dir)) {
    const ext = path.extname(f).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
    const full = path.join(dir, f);
    const tmpJpg = full + '.compressed.jpg';
    const webp = full.replace(/\.\w+$/, '.webp');
    try {
      const before = fs.statSync(full).size;
      await sharp(full).resize({ width: 1400, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile(tmpJpg);
      await sharp(full).resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 80 }).toFile(webp);
      fs.renameSync(tmpJpg, full.replace(/\.\w+$/, '.jpg'));
      if (full !== full.replace(/\.\w+$/, '.jpg')) fs.unlinkSync(full);
      const afterJpg = fs.statSync(full.replace(/\.\w+$/, '.jpg')).size;
      console.log(`${f}: ${(before/1024).toFixed(0)}K → ${(afterJpg/1024).toFixed(0)}K`);
    } catch (e) {
      console.log(`${f}: ERR ${e.message}`);
    }
  }
})();
