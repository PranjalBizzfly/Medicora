// Makes web-sized WebP copies of Dr. Mohini's HD photoshoot (source-docs, private)
// for use on the site. Originals are left untouched. Metadata is stripped.
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const SRC = path.join(__dirname, '..', 'source-docs', 'Doctor HD Photos');
const OUT = path.join(__dirname, '..', 'public', 'images', 'doctor');

const targets = [
  { src: 'SZ3_1138-1 copy.jpg', out: 'dr-mohini-standing.webp', width: 1000 },
  { src: 'SZ3_1153-1 copy.jpg', out: 'dr-mohini-stethoscope.webp', width: 1000 },
  { src: 'SZ3_1194-1 copy.jpg', out: 'dr-mohini-arms-crossed.webp', width: 1000 },
  { src: 'SZ3_1220-1 copy 2.jpg', out: 'dr-mohini-portfolio.webp', width: 1000 },
  { src: 'SZ3_1214-1 copy.jpg', out: 'dr-mohini-notes-wide.webp', width: 1920 },
  { src: 'SZ3_1216-1 copy.jpg', out: 'dr-mohini-writing-wide.webp', width: 1920 },
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  for (const t of targets) {
    const info = await sharp(path.join(SRC, t.src))
      .rotate()
      .resize({ width: t.width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(path.join(OUT, t.out));
    console.log(t.out, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)}KB`);
  }
})();
