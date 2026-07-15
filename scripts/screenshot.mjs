// Quick visual + console-error check against the running dev server.
// Usage: node scripts/screenshot.mjs [route] [port]
// Example: node scripts/screenshot.mjs /courses 3000
import { chromium } from 'playwright';

const route = process.argv[2] || '/';
const port = process.argv[3] || '3000';
const url = `http://localhost:${port}${route}`;
const outFile = `screenshot${route.replace(/\W+/g, '-') || '-home'}.png`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
page.on('pageerror', err => errors.push('pageerror: ' + err.message));

await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(1000);
await page.screenshot({ path: outFile });

console.log('URL:', url);
console.log('Title:', await page.title());
console.log('Screenshot saved to:', outFile);
console.log('Console errors:', errors.length ? JSON.stringify(errors, null, 2) : 'none');

await browser.close();
