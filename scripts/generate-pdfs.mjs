// Renders every built locale page in dist/ to a downloadable PDF (dist/cv-<lang>.pdf).
//
// Run after `astro build`:  node scripts/generate-pdfs.mjs
//
// It serves dist/ with `astro preview`, opens each page in headless Chrome with
// print media emulated, and saves it with page.pdf(). The PDF is the site's own
// print stylesheet, so it always matches the published content.
//
// Browser: uses the installed Google Chrome (preinstalled on GitHub's
// ubuntu-latest runners). Set CHROME_PATH to use a different Chromium binary.
// The file name convention `cv-<lang>.pdf` must match `pdfPath()` in src/utils/url.ts.
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { preview } from "astro";
import { chromium } from "playwright-core";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

/** Finds dist/index.html plus any dist/<dir>/index.html, keyed by their <html lang>. */
async function findLocalePages() {
  const candidates = [""];
  for (const entry of await readdir(dist, { withFileTypes: true })) {
    if (entry.isDirectory() && !entry.name.startsWith("_")) candidates.push(entry.name);
  }

  const pages = [];
  for (const dir of candidates) {
    const file = path.join(dist, dir, "index.html");
    const exists = await stat(file).then(
      () => true,
      () => false,
    );
    if (!exists) continue;
    const html = await readFile(file, "utf-8");
    const lang = html.match(/<html[^>]*\slang="([^"]+)"/)?.[1];
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    if (lang) pages.push({ lang, route: dir ? `${dir}/` : "", canonical });
  }
  return pages;
}

const pages = await findLocalePages();
if (pages.length === 0) {
  console.error("No built pages found in dist/. Run `astro build` first.");
  process.exit(1);
}

// The build's base path (e.g. "/Neil-Alan-Rodriguez-Elias/" in production, "/" on stage) is read
// back from the root page's canonical URL, so preview serves dist/ the same way.
const rootPage = pages.find((page) => page.route === "");
const base = rootPage?.canonical ? new URL(rootPage.canonical).pathname.replace(/\/?$/, "/") : "/";

const server = await preview({ root, base, logLevel: "warn" });

const executablePath = process.env.CHROME_PATH;
const browser = await chromium.launch(executablePath ? { executablePath } : { channel: "chrome" });

try {
  const origin = `http://localhost:${server.port}`;
  const context = await browser.newContext({ colorScheme: "light" });

  for (const { lang, route } of pages) {
    const page = await context.newPage();
    const url = `${origin}${base}${route}`;
    const response = await page.goto(url, { waitUntil: "networkidle" });
    if (!response?.ok()) throw new Error(`Failed to load ${url}: ${response?.status()}`);

    await page.emulateMedia({ media: "print", colorScheme: "light" });
    const out = path.join(dist, `cv-${lang}.pdf`);
    await page.pdf({ path: out, printBackground: true, preferCSSPageSize: true });
    console.log(`PDF  ${url}  →  ${path.relative(root, out)}`);
    await page.close();
  }
} finally {
  await browser.close();
  await server.stop();
}
