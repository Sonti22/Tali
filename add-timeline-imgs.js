const fs = require('fs');
const p = 'talyi-book.html';
let h = fs.readFileSync(p, 'utf8');

const map = [
  ["{ year: '1652'",            "images/tl-01-1652.jpg"],
  ["{ year: '1707–08'",         "images/tl-02-1708.jpg"],
  ["{ year: '1716'",            "images/tl-03-1716.jpg"],
  ["{ year: '1747'",            "images/tl-04-1747.jpg"],
  ["{ year: '1749'",            "images/tl-05-1749.jpg"],
  ["{ year: '1755'",            "images/tl-06-1755.jpg"],
  ["{ year: '1762'",            "images/tl-07-1762.jpg"],
  ["{ year: '1765'",            "images/tl-08-1765.jpg"],
  ["{ year: '1783'",            "images/tl-09-1783.jpg"],
  ["{ year: '1812'",            "images/tl-10-1812.jpg"],
  ["{ year: '1815'",            "images/tl-14-1900.jpg"],
  ["{ year: '1821'",            "images/tl-11-1821.jpg"],
  ["{ year: '1822'",            "images/tl-12-1822.jpg"],
  ["{ year: '1848'",            "images/tl-13-1848.jpg"],
  ["{ year: '1900'",            "images/tl-14-1900.jpg"],
  ["{ year: '1905–06'",         "images/tl-15-1905.jpg"],
  ["{ year: '1916'",            "images/tl-16-1916.jpg"],
  ["{ year: '1918'",            "images/tl-17-1918.jpg"],
  ["{ year: '1920'",            "images/tl-18-1920.jpg"],
  ["{ year: '1922'",            "images/tl-19-1922.jpg"],
  ["{ year: '1935'",            "images/tl-20-1935.jpg"],
  ["{ year: '1942 · июль'",     "images/tl-21-1942-07.jpg"],
  ["{ year: '1942 · 18–19 XII'","images/tl-22-1942-12.jpg"],
  ["{ year: '1943'",            "images/tl-22-1942-12.jpg"],
  ["{ year: '1956'",            "images/tl-23-1956.jpg"],
  ["{ year: '2010'",            "images/tl-24-2026.jpg"],
  ["{ year: '2026'",            "images/tl-24-2026.jpg"],
];

let count = 0;
for (const [needle, img] of map) {
  const replacement = `${needle}, img: '${img}'`;
  if (h.includes(replacement)) { console.log(`already done: ${needle}`); continue; }
  if (!h.includes(needle)) { console.log(`NOT FOUND: ${needle}`); continue; }
  h = h.replace(needle, replacement);
  count++;
}
fs.writeFileSync(p, h, 'utf8');
console.log(`done: ${count} events updated`);
