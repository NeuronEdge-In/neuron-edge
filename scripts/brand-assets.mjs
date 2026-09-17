import fs from "fs";
import { decode, encode, crop, resize, blank, composite, roundMask } from "./lib/png.mjs";

/* ------------------------------------------------------------------ *
 * Derives the site's brand assets from the master art in
 * public/generated_logos/. Run with `npm run brand`.
 * ------------------------------------------------------------------ */

const SRC = new URL("../public/generated_logos/", import.meta.url).pathname;
const OUT = new URL("../public/brand/", import.meta.url).pathname;

/* The master art is neon drawn on black: its dark pixels are backdrop, not ink.
   Re-express the emitted light (rgb x alpha) as straight alpha so the mark
   composites cleanly on light and dark themes alike. */
function unblack(img) {
  const { w, h, data } = img;
  const out = Buffer.alloc(w * h * 4);
  for (let i = 0; i < w * h; i++) {
    const o = i * 4, a = data[o + 3] / 255;
    const r = data[o] * a, g = data[o + 1] * a, b = data[o + 2] * a;
    const m = Math.max(r, g, b);
    if (m < 1) continue;
    const na = Math.min(1, m / 255);
    out[o] = Math.min(255, Math.round(r / na));
    out[o + 1] = Math.min(255, Math.round(g / na));
    out[o + 2] = Math.min(255, Math.round(b / na));
    out[o + 3] = Math.round(na * 255);
  }
  return { w, h, data: out };
}

function trim(img, t) {
  const { w, h, data } = img;
  let x0 = w, y0 = h, x1 = -1, y1 = -1;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (data[(y * w + x) * 4 + 3] > t) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  }
  return crop(img, x0, y0, x1, y1);
}

const report = (f) => console.log(` -> ${f}  ${(fs.statSync(OUT + f).size / 1024).toFixed(1)} KB`);

fs.mkdirSync(OUT, { recursive: true });

// Square, evenly padded mark — used by <Logo /> and every icon below.
let mark = trim(unblack(decode(SRC + "logo-mark-transparent.png")), 12);
{
  const s = Math.max(mark.w, mark.h), p = Math.round(s * 0.03), side = s + p * 2;
  const canvas = blank(side, side);
  composite(canvas, mark, Math.round((side - mark.w) / 2), Math.round((side - mark.h) / 2));
  mark = canvas;
}
for (const s of [256, 96]) { const n = `logo-mark-${s}.png`; encode(resize(mark, s, s), OUT + n); report(n); }

// Favicons / PWA icons: the mark inset on the brand's near-black tile.
for (const [s, name, round] of [[32, "favicon-32.png", 1], [64, "favicon-64.png", 1], [180, "apple-touch-icon.png", 1], [192, "icon-192.png", 0], [512, "icon-512.png", 0]]) {
  const tile = blank(s, s, [8, 10, 18, 255]);
  const inset = Math.round(s * 0.09);
  composite(tile, resize(mark, s - inset * 2, s - inset * 2), inset, inset);
  if (round) roundMask(tile, Math.round(s * 0.22));
  encode(tile, OUT + name); report(name);
}

// Social card: the full lockup (wordmark is white, so it stays on the dark ground).
{
  const lock = trim(unblack(decode(SRC + "logo-lockup-transparent.png")), 10);
  const og = blank(1200, 630, [6, 8, 15, 255]);
  const lw = 740, lh = Math.round(lock.h * lw / lock.w);
  composite(og, resize(lock, lw, lh), Math.round((1200 - lw) / 2), Math.round((630 - lh) / 2));
  encode(og, OUT + "og-image.png"); report("og-image.png");
}
