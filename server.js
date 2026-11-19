import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Serve static assets from root and public
app.use(express.static(__dirname, { extensions: ['html'] }));
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));

// Legacy route redirects for removed pages
app.get(['/projects/workflow-console', '/projects/workflow-console.html'], (_req, res) => {
  res.redirect(301, '/contact.html');
});

// Fallback to 404.html
app.use((req, res) => {
  const notFoundPath = path.join(__dirname, '404.html');
  if (fs.existsSync(notFoundPath)) {
    res.status(404).sendFile(notFoundPath);
  } else {
    res.status(404).send('404 Not Found');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`AI-Suplex Labs static server running on http://0.0.0.0:${PORT}`);
});
