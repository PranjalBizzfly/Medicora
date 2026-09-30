// Prints the plain text (and embedded media list) of a .docx file.
// Usage: node scripts/extract-docx.cjs <file.docx>
const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync(process.argv[2]);

// Walk the central directory so entries with data descriptors are handled.
const eocd = buf.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
const count = buf.readUInt16LE(eocd + 10);
let p = buf.readUInt32LE(eocd + 16);
const entries = {};
for (let i = 0; i < count; i++) {
  const method = buf.readUInt16LE(p + 10);
  const size = buf.readUInt32LE(p + 20);
  const nameLen = buf.readUInt16LE(p + 28);
  const extraLen = buf.readUInt16LE(p + 30);
  const commentLen = buf.readUInt16LE(p + 32);
  const offset = buf.readUInt32LE(p + 42);
  const name = buf.toString('utf8', p + 46, p + 46 + nameLen);
  entries[name] = { method, size, offset };
  p += 46 + nameLen + extraLen + commentLen;
}

function read(name) {
  const e = entries[name];
  const lnl = buf.readUInt16LE(e.offset + 26);
  const lel = buf.readUInt16LE(e.offset + 28);
  const start = e.offset + 30 + lnl + lel;
  const data = buf.subarray(start, start + e.size);
  return e.method === 8 ? zlib.inflateRawSync(data) : data;
}

const xml = read('word/document.xml').toString('utf8');
const text = xml
  .replace(/<\/w:p>/g, '\n')
  .replace(/<w:tab\/>/g, '\t')
  .replace(/<[^>]+>/g, '')
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'")
  .split('\n').map((l) => l.trim()).filter(Boolean).join('\n');

console.log(text);
console.log('\n[media]', Object.keys(entries).filter((n) => n.startsWith('word/media/')).join(', ') || 'none');
