const sharp = require('sharp');
const fs = require('fs');

/* Standard icon — full bleed letter "Т" */
const iconStd = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#3d4f30"/>
  <circle cx="256" cy="256" r="220" fill="#f4ead5" stroke="#3d2f1f" stroke-width="6"/>
  <g fill="none" stroke="#3d4f30" stroke-width="6" stroke-linecap="round">
    <path d="M 256 60 Q 240 200 270 320 Q 300 440 256 460"/>
    <path d="M 256 130 Q 190 150 140 130"/>
    <path d="M 270 220 Q 360 240 410 220"/>
    <path d="M 260 310 Q 180 340 110 310"/>
  </g>
  <text x="256" y="300" text-anchor="middle"
        font-family="Georgia, serif" font-style="italic" font-weight="700"
        font-size="180" fill="#8b4a2b">Т</text>
</svg>`;

/* Maskable icon — important content within safe zone (40% margin) */
const iconMaskable = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#3d4f30"/>
  <text x="256" y="320" text-anchor="middle"
        font-family="Georgia, serif" font-style="italic" font-weight="700"
        font-size="240" fill="#f4ead5">Т</text>
</svg>`;

(async () => {
  await sharp(Buffer.from(iconStd)).resize(192, 192).png().toFile('icons/icon-192.png');
  await sharp(Buffer.from(iconStd)).resize(512, 512).png().toFile('icons/icon-512.png');
  await sharp(Buffer.from(iconMaskable)).resize(192, 192).png().toFile('icons/icon-maskable-192.png');
  await sharp(Buffer.from(iconMaskable)).resize(512, 512).png().toFile('icons/icon-maskable-512.png');
  /* Apple touch icon — solid no transparency */
  await sharp(Buffer.from(iconStd)).resize(180, 180).png().toFile('icons/apple-touch-180.png');
  console.log('icons generated: 5 files');
})();
