#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const htmlPath = path.join(__dirname, 'talyi-book.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Remove Babel CDN script
html = html.replace(
  /\s*<script src="https:\/\/unpkg\.com\/@babel\/standalone[^"]*"[^>]*><\/script>\n?/g,
  ''
);

// Also remove integrity hashes from react/react-dom scripts (keep them but make them production)
html = html.replace(
  'react.development.js',
  'react.production.min.js'
);
html = html.replace(
  'react-dom.development.js',
  'react-dom.production.min.js'
);

// Strip SRI integrity + crossorigin from react/react-dom — hashes were for dev bundles
html = html.replace(
  /(<script src="https:\/\/unpkg\.com\/react[^"]*")\s+integrity="[^"]*"\s+crossorigin="[^"]*"(><\/script>)/g,
  '$1$2'
);

// Swap unpkg CDN → local /vendor/* (works without internet, не блокируется в РФ)
html = html.replace(
  /https:\/\/unpkg\.com\/react@[\d.]+\/umd\/react\.production\.min\.js/g,
  'vendor/react.production.min.js'
);
html = html.replace(
  /https:\/\/unpkg\.com\/react-dom@[\d.]+\/umd\/react-dom\.production\.min\.js/g,
  'vendor/react-dom.production.min.js'
);

// Inline local fonts CSS (заменяем Google Fonts @import на локальные WOFF2)
const fontsCssPath = path.join(__dirname, 'fonts', 'fonts.css');
if (fs.existsSync(fontsCssPath)) {
  const localFontsCSS = fs.readFileSync(fontsCssPath, 'utf8');
  html = html.replace(
    /@import url\('https:\/\/fonts\.googleapis\.com\/css2[^']*'\);?/g,
    '/* Google Fonts → local */\n' + localFontsCSS
  );
}

// Compile each babel script block
const babelBlockRe = /<script type="text\/babel"[^>]*>([\s\S]*?)<\/script>/g;
let match;
let count = 0;

html = html.replace(babelBlockRe, (fullMatch, code) => {
  count++;
  try {
    const result = babel.transformSync(code, {
      presets: [
        ['@babel/preset-react', { runtime: 'classic' }],
        ['@babel/preset-env', {
          targets: { browsers: ['> 1%', 'last 2 versions', 'not dead'] },
          modules: false,
        }],
      ],
      filename: `block${count}.jsx`,
    });
    console.log(`✓ Block ${count} compiled (${result.code.length} chars)`);
    return `<script>\n${result.code}\n</script>`;
  } catch (e) {
    console.error(`✗ Block ${count} FAILED:`, e.message);
    // Keep original on failure
    return fullMatch;
  }
});

const outPath = path.join(__dirname, 'index.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log(`\nDone! ${count} blocks compiled → index.html`);

// Auto-bump SW version (forces cache refresh on every deploy)
const swPath = path.join(__dirname, 'sw.js');
if (fs.existsSync(swPath)) {
  let sw = fs.readFileSync(swPath, 'utf8');
  const newVer = `taly-${Date.now()}`;
  sw = sw.replace(/const VERSION = '[^']+'/, `const VERSION = '${newVer}'`);
  fs.writeFileSync(swPath, sw, 'utf8');
  console.log(`SW version bumped: ${newVer}`);
}
