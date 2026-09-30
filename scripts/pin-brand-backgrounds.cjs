// One-off: solid backgrounds that use the accent token switch to a fixed brand
// maroon, so maroon surfaces stay maroon in dark mode (text accents keep --color-primary).
const fs = require('fs');
const path = require('path');

const walk = (d) => fs.readdirSync(d, { withFileTypes: true })
  .flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));

let changed = 0;
for (const file of walk('src').filter((f) => f.endsWith('.css'))) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  let touched = false;
  const next = lines.map((line) => {
    if (!/^\s*background(-color)?\s*:/.test(line)) return line;
    const updated = line
      .replace(/var\(--color-primary-hover\)/g, 'var(--brand-maroon-deep)')
      .replace(/var\(--color-primary\)/g, 'var(--brand-maroon)');
    if (updated !== line) { touched = true; changed += 1; }
    return updated;
  });
  if (touched) fs.writeFileSync(file, next.join('\n'));
}

// Define the fixed tokens once.
const index = fs.readFileSync('src/index.css', 'utf8');
if (!index.includes('--brand-maroon:')) {
  fs.writeFileSync('src/index.css', index.replace(':root {', ':root {\n  /* Fixed brand maroon for solid surfaces (unchanged in dark mode). */\n  --brand-maroon: #641703;\n  --brand-maroon-deep: #4D1102;\n'));
}
console.log('background declarations updated:', changed);
