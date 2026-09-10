// Headless smoke test: visits every route, checks console errors, broken images, horizontal overflow, theme switching.
import puppeteer from "puppeteer-core";
import fs from "node:fs";

const BASE = process.env.BASE || "http://localhost:5173";
const OUT = process.env.OUT || "./.smoke";
const routes = ["/", "/about", "/services", "/products", "/products/edgeflow", "/projects", "/projects/fintrack-banking-app", "/case-studies", "/case-studies/meridian-digital-banking", "/blog", "/blog/rag-in-production-lessons", "/team", "/careers", "/contact", "/does-not-exist"];
fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({ executablePath: "/usr/bin/google-chrome", headless: "new", args: ["--no-sandbox", "--disable-gpu"] });
const page = await browser.newPage();
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(`[console] ${m.text()}`); });
page.on("pageerror", (e) => errors.push(`[pageerror] ${e.message}`));

const scrollAll = async () => {
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 700) { await page.evaluate((y) => window.scrollTo(0, y), y); await new Promise((r) => setTimeout(r, 90)); }
  await new Promise((r) => setTimeout(r, 400));
  await page.evaluate(() => window.scrollTo(0, 0));
};

const waitImages = async (ms = 20000) => {
  const t0 = Date.now();
  while (Date.now() - t0 < ms) {
    const pending = await page.evaluate(() => [...document.images].filter((i) => !i.complete).length);
    if (!pending) break;
    await new Promise((r) => setTimeout(r, 300));
  }
  await new Promise((r) => setTimeout(r, 500));
};
let fail = 0;
for (const vp of [{ name: "desktop", width: 1440, height: 900 }, { name: "mobile", width: 390, height: 844 }]) {
  await page.setViewport({ width: vp.width, height: vp.height });
  for (const r of routes) {
    const before = errors.length;
    await page.goto(BASE + r, { waitUntil: "load", timeout: 60000 });
    await scrollAll();
    await waitImages();
    const info = await page.evaluate(() => {
      const imgs = [...document.images];
      const broken = imgs.filter((i) => i.complete && i.naturalWidth === 0 && i.style.display !== "none").map((i) => i.src);
      const pending = imgs.filter((i) => !i.complete).length;
      return { overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1, broken, pending, imgs: imgs.length, title: document.title, h1: document.querySelector("h1")?.textContent?.trim().slice(0, 50) };
    });
    const newErr = errors.slice(before);
    const bad = info.overflow || info.broken.length || newErr.length;
    if (bad) fail++;
    console.log(`${bad ? "FAIL" : "ok  "} ${vp.name.padEnd(7)} ${r.padEnd(40)} imgs=${info.imgs} broken=${info.broken.length} pending=${info.pending} overflow=${info.overflow} errors=${newErr.length}  h1="${info.h1}"`);
    for (const e of newErr) console.log("     " + e.slice(0, 200));
    for (const b of info.broken) console.log("     broken: " + b);
    if (vp.name === "desktop" || r === "/") await page.screenshot({ path: `${OUT}/${vp.name}${r.replace(/\//g, "_") || "_home"}.jpg`, fullPage: true, type: "jpeg", quality: 70 });
  }
}

// theme toggle test
await page.setViewport({ width: 1440, height: 900 });
await page.goto(BASE + "/", { waitUntil: "load" });
const themes = {};
for (const label of ["Light", "Dark", "System"]) {
  await page.click(`button[aria-label="${label}"]`);
  await new Promise((r) => setTimeout(r, 400));
  themes[label] = await page.evaluate(() => ({ attr: document.documentElement.getAttribute("data-theme"), bg: getComputedStyle(document.body).backgroundColor, stored: localStorage.getItem("ne-theme") }));
  if (label === "Light") await page.screenshot({ path: `${OUT}/desktop_home_light.jpg`, fullPage: true, type: "jpeg", quality: 70 });
}
console.log("themes:", JSON.stringify(themes));
if (themes.Light.attr !== "light" || themes.Dark.attr !== "dark" || themes.Light.bg === themes.Dark.bg) { console.log("FAIL theme toggle"); fail++; }

// mobile menu
await page.setViewport({ width: 390, height: 844 });
await page.goto(BASE + "/", { waitUntil: "load" });
await page.click('button[aria-label="Toggle menu"]');
await new Promise((r) => setTimeout(r, 500));
const menuLinks = await page.$$eval(".nav__mobile-link", (a) => a.length);
console.log("mobile menu links:", menuLinks);
if (menuLinks < 8) { console.log("FAIL mobile menu"); fail++; }
await page.screenshot({ path: `${OUT}/mobile_menu.jpg`, type: "jpeg", quality: 70 });

await browser.close();
console.log(fail ? `\n${fail} FAILURES` : "\nALL PASSED");
process.exit(fail ? 1 : 0);
