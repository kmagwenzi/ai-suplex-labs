import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = '0.0.0.0';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf'
};

function serveFile(res, filePath, statusCode = 200) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      serve404(res);
      return;
    }

    res.writeHead(statusCode, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': 'no-cache'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
}

function serve404(res) {
  const notFoundPath = path.join(__dirname, '404.html');
  if (fs.existsSync(notFoundPath)) {
    serveFile(res, notFoundPath, 404);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
  }
}

const server = http.createServer((req, res) => {
  // Only handle GET and HEAD
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Method Not Allowed');
    return;
  }

  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let decodedPath = decodeURIComponent(parsedUrl.pathname);

    // Prevent directory traversal
    const safePath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, '');
    let targetPath = path.join(__dirname, safePath);

    // If requesting directory or root
    if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) {
      const indexCandidate = path.join(targetPath, 'index.html');
      if (fs.existsSync(indexCandidate)) {
        serveFile(res, indexCandidate);
        return;
      }
    }

    // Direct file hit
    if (fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
      serveFile(res, targetPath);
      return;
    }

    // Clean URL check (e.g. /about -> /about.html, /projects/ai-suplex-ultra -> /projects/ai-suplex-ultra.html)
    if (!path.extname(targetPath)) {
      const htmlCandidate = `${targetPath}.html`;
      if (fs.existsSync(htmlCandidate) && fs.statSync(htmlCandidate).isFile()) {
        serveFile(res, htmlCandidate);
        return;
      }
    }

    // Check public directory fallback if needed
    const publicCandidate = path.join(__dirname, 'public', safePath);
    if (fs.existsSync(publicCandidate) && fs.statSync(publicCandidate).isFile()) {
      serveFile(res, publicCandidate);
      return;
    }

    // Otherwise 404
    serve404(res);
  } catch (error) {
    console.error('Server error:', error);
    serve404(res);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`AI-Suplex Labs server listening on http://${HOST}:${PORT}`);
});
