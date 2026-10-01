// Renders the original certificate PDFs (private, in source-docs/) to PNGs in
// source-docs/certificate-renders/ (also private). Nothing here is public.
process.env.PLAYWRIGHT_BROWSERS_PATH = '0';
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'source-docs', 'Profile Summary', 'Degrees & Certifciate');
const OUT = path.join(ROOT, 'source-docs', 'certificate-renders');
const FILES = {
  'bhms-degree': 'Degree Certificate.pdf',
  'bhms-passing': 'Degree - Passing Certificate.pdf',
  'registration': 'Degree - registration certificate.pdf',
  'md-degree': 'PG Degree Certificate (1).pdf',
  'md-passing': 'PG Passing Certificate.pdf',
};

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const pdfjs = pathToFileURL(path.join(ROOT, 'node_modules/pdfjs-dist/build/pdf.min.mjs')).href;
  const worker = pathToFileURL(path.join(ROOT, 'node_modules/pdfjs-dist/build/pdf.worker.min.mjs')).href;
  const b = await chromium.launch({ args: ['--allow-file-access-from-files'] });
  const p = await b.newPage();
  await p.goto(pathToFileURL(OUT).href);
  for (const [name, file] of Object.entries(FILES)) {
    const data = fs.readFileSync(path.join(SRC, file)).toString('base64');
    const png = await p.evaluate(async ({ pdfjs, worker, data }) => {
      const lib = await import(pdfjs);
      lib.GlobalWorkerOptions.workerSrc = worker;
      const bytes = Uint8Array.from(atob(data), (c) => c.charCodeAt(0));
      const doc = await lib.getDocument({ data: bytes }).promise;
      const page = await doc.getPage(1);
      const viewport = page.getViewport({ scale: 5 });
      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
      return canvas.toDataURL('image/png').split(',')[1];
    }, { pdfjs, worker, data });
    fs.writeFileSync(path.join(OUT, `${name}.png`), Buffer.from(png, 'base64'));
    console.log(name);
  }
  await b.close();
})();
