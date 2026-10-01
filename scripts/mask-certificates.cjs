// Step 3: build the public certificate previews. Starts from the private crops
// (source-docs/certificate-renders) and covers sensitive details — PRNs,
// registration / serial numbers, barcodes and signatures — before saving a
// web-sized WebP to public/images/certificates. Nothing else is altered.
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const SRC = path.join(__dirname, '..', 'source-docs', 'certificate-renders');
const OUT = path.join(__dirname, '..', 'public', 'images', 'certificates');
const WIDTH = 2000;

// Mask rectangles [x, y, w, h] in the 1600px-wide crop.
const CERTS = {
  'bhms-degree': [[1300, 100, 225, 105], [245, 765, 200, 40], [705, 1055, 180, 120]],
  registration: [[1140, 70, 200, 65], [500, 495, 245, 80], [910, 1850, 360, 100]],
  'md-degree': [[390, 130, 240, 55], [1220, 255, 275, 125], [665, 1390, 325, 55], [685, 1820, 270, 120]],
  'bhms-passing': [[160, 245, 300, 65], [1160, 208, 225, 48], [1160, 272, 135, 46], [1185, 920, 415, 115]],
  'md-passing': [[130, 205, 270, 65], [1045, 145, 245, 58], [1075, 205, 150, 48], [1095, 800, 230, 112]],
};

const mask = ([x, y, w, h]) =>
  `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="#E9E4DC"/>` +
  `<text x="${x + w / 2}" y="${y + h / 2}" font-family="Arial, sans-serif" font-size="${Math.min(22 * (w / Math.max(w, 1)) * 1.5, h * 0.45)}" fill="#8A8178" text-anchor="middle" dominant-baseline="middle">Hidden for privacy</text></g>`;

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  for (const [name, rects] of Object.entries(CERTS)) {
    const file = path.join(SRC, `${name}-crop.png`);
    const { width, height } = await sharp(file).metadata();
    // Blur each sensitive area. Pixelate first (destroys detail), then a heavy
    // blur so it reads as soft blur; nothing in the area stays legible.
    const layers = [];
    for (const r of rects) {
      const [x, y, w, h] = r.map((v) => Math.round(v * (width / 1600)));
      const left = Math.max(0, x);
      const top = Math.max(0, y);
      const cw = Math.min(w, width - left);
      const ch = Math.min(h, height - top);
      const region = await sharp(file).extract({ left, top, width: cw, height: ch }).png().toBuffer();
      const tiny = await sharp(region).resize({ width: Math.max(4, Math.round(cw / 24)), height: Math.max(2, Math.round(ch / 24)) }).toBuffer();
      const input = await sharp(tiny).resize({ width: cw, height: ch, kernel: 'cubic' }).blur(Math.max(6, Math.min(cw, ch) / 6)).png().toBuffer();
      layers.push({ input, left, top });
    }
    const masked = await sharp(file).composite(layers).png().toBuffer();
    const info = await sharp(masked)
      .resize({ width: WIDTH })
      .webp({ quality: 88 })
      .toFile(path.join(OUT, `${name}.webp`));
    console.log(name, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)}KB`);
  }
})();
