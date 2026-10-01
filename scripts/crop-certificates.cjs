// Step 2 (private): crop each certificate out of its scanned page, turn it
// upright and save at a fixed width so masks can be placed in known pixels.
const sharp = require('sharp');
const path = require('path');

const DIR = path.join(__dirname, '..', 'source-docs', 'certificate-renders');
// Crop boxes as fractions of the rendered page (left, top, width, height) + rotation.
const CROPS = {
  'bhms-degree': { box: [0.43, 0.015, 0.555, 0.975], rotate: 90 },
  'registration': { box: [0.505, 0.005, 0.49, 0.99], rotate: 0 },
  'md-degree': { box: [0.44, 0.01, 0.545, 0.985], rotate: 0 },
  'bhms-passing': { box: [0.255, 0.045, 0.73, 0.69], rotate: 270 },
  'md-passing': { box: [0.155, 0.055, 0.815, 0.885], rotate: 270 },
};

(async () => {
  for (const [name, c] of Object.entries(CROPS)) {
    const img = sharp(path.join(DIR, `${name}.png`));
    const { width, height } = await img.metadata();
    const [l, t, w, h] = c.box;
    // sharp rotates before extracting within one pipeline, so crop first in its own step.
    const cropped = await img
      .extract({ left: Math.round(l * width), top: Math.round(t * height), width: Math.round(w * width), height: Math.round(h * height) })
      .png()
      .toBuffer();
    const out = await sharp(cropped)
      .rotate(c.rotate)
      .resize({ width: 2400 })
      .png()
      .toFile(path.join(DIR, `${name}-crop.png`));
    console.log(name, `${out.width}x${out.height}`);
  }
})();
