// One-off migration: align design tokens and hard-coded colours with the
// official Dr. Mohini Mutha brand colours (sampled from public/brand logo files).
const fs = require('fs');
const path = require('path');

const walk = (d) =>
  fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]
  );

const tokens = {
  '--color-primary': '#641703',
  '--color-primary-hover': '#4D1102',
  '--color-primary-light': '#7E2410',
  '--color-primary-soft': '#F6ECE8',
  '--color-primary-muted': 'rgba(100, 23, 3, 0.08)',
  '--color-secondary': '#1A1A1A',
  '--color-secondary-light': '#2B2B2B',
  '--color-secondary-dark': '#111111',
  '--color-accent-mint': '#CFE1E5',
  '--color-accent-mint-soft': '#EBF3F5',
  '--color-accent-sand': '#DFD5C6',
  '--color-accent-sand-soft': '#F2EDE6',
  '--bg-page': '#F3F4F3',
  '--bg-subtle': '#F2EDE6',
  '--bg-dark': '#1A1A1A',
  '--bg-dark-card': '#262626',
  '--text-main': '#1A1A1A',
  '--text-muted': '#5C5C5C',
  '--text-light': '#8C8C8C',
  '--border-light': '#E3DDD4',
  '--border-subtle': '#ECE8E2',
  '--border-focus': '#641703',
};

let css = fs.readFileSync('src/index.css', 'utf8');
for (const [key, value] of Object.entries(tokens)) {
  const re = new RegExp(`(${key}:\\s*)[^;]+;`);
  if (!re.test(css)) throw new Error(`Token not found: ${key}`);
  css = css.replace(re, `$1${value};`);
}
fs.writeFileSync('src/index.css', css);

const replacements = [
  [/107,\s*29,\s*18/g, '100, 23, 3'],
  [/196,\s*214,\s*214/g, '207, 225, 229'],
  [/31,\s*56,\s*66/g, '26, 26, 26'],
  [/23,\s*43,\s*51/g, '17, 17, 17'],
  [/249,\s*239,\s*234/g, '246, 236, 232'],
  [/#6B1D12/gi, '#641703'],
  [/#54150C/gi, '#4D1102'],
  [/#F9EFEA/gi, '#F6ECE8'],
  [/#1F3842/gi, '#1A1A1A'],
  [/#C4D6D6/gi, '#CFE1E5'],
  [/#EEF4F4/gi, '#EBF3F5'],
  [/#EAE3D9/gi, '#DFD5C6'],
  [/#FAF8F5/gi, '#F3F4F3'],
];

let changed = 0;
for (const file of walk('src').filter((f) => /\.(css|jsx|js)$/.test(f))) {
  let text = fs.readFileSync(file, 'utf8');
  const original = text;
  for (const [pattern, value] of replacements) text = text.replace(pattern, value);
  if (text !== original) {
    fs.writeFileSync(file, text);
    changed += 1;
    console.log('updated', file);
  }
}
console.log('files changed:', changed);
