const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT    = 3005;
const baseDir = path.resolve(__dirname);

const mimeTypes = {
  '.html': 'text/html; charset=UTF-8',
  '.css':  'text/css; charset=UTF-8',
  '.js':   'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.xml':  'application/xml',
  '.txt':  'text/plain; charset=UTF-8'
};

http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  let safePath = path.normalize(urlPath).replace(/^(\.\.[\/\\])+/, '');

  if (safePath === '/' || safePath === '\\') safePath = 'index.html';

  const filePath = path.join(baseDir, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // SPA-style fallback → index.html
      const fallback = path.join(baseDir, 'index.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
      return fs.createReadStream(fallback).pipe(res);
    }
    const ext         = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
}).listen(PORT, () => {
  console.log('═══════════════════════════════════════════════════════');
  console.log('⚡  ARKENOR LABS — Landing (Estática)');
  console.log(`🌐  http://localhost:${PORT}`);
  console.log('═══════════════════════════════════════════════════════');
});
