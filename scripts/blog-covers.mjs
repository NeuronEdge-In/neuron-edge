/* ------------------------------------------------------------------ *
 * Original cover art for the blog, one motif per category, drawn in
 * the site's own palette so the index reads as a set. `npm run covers`.
 * ------------------------------------------------------------------ */
import fs from "fs";
import { encode, blank } from "./lib/png.mjs";
import { painter } from "./lib/draw.mjs";

const OUT = new URL("../public/blog/", import.meta.url).pathname;
const W = 1200, H = 700;

const INK = [10, 13, 22];
const CYAN = [34, 211, 238];
const VIOLET = [139, 92, 246];
const LIME = [163, 230, 53];
const FAINT = [148, 163, 184];

/* Every cover: near-black ground, a faint grid, two accent glows, motif on top. */
function cover(name, [a, b], motif) {
  const img = blank(W, H, [...INK, 255]);
  const p = painter(img);
  p.grid(40, FAINT, 0.05);
  p.glow(210, 130, 620, a, 0.30);
  p.glow(1010, 600, 560, b, 0.26);
  motif(p, a, b);
  encode(img, OUT + name);
  console.log(` -> ${name}  ${(fs.statSync(OUT + name).size / 1024).toFixed(0)} KB`);
}

fs.mkdirSync(OUT, { recursive: true });

// Architecture — request falling through stacked layers, one of them hot.
cover("architecture.png", [CYAN, VIOLET], (p, a, b) => {
  const x = 330, w = 540;
  [0, 1, 2, 3].forEach((i) => {
    const y = 150 + i * 110;
    p.rect(x, y, w, 76, i === 2 ? b : FAINT, { r: 14, stroke: 3, alpha: i === 2 ? 1 : 0.5 });
    if (i === 2) p.rect(x, y, w, 76, b, { r: 14, alpha: 0.12 });
    if (i < 3) p.line(x + w / 2, y + 76, x + w / 2, y + 110, 3, a, { alpha: 0.65 });
  });
  p.circle(x + w / 2, 128, 13, a);
});

// Mobile — two devices reconciling after one has been offline.
cover("mobile.png", [CYAN, LIME], (p, a, b) => {
  [[300, a], [700, b]].forEach(([x, col], i) => {
    p.rect(x, 130, 200, 440, col, { r: 30, stroke: 3, alpha: 0.9 });
    p.rect(x + 70, 150, 60, 8, col, { r: 4, alpha: 0.7 });
    [0, 1, 2, 3].forEach((k) => p.rect(x + 26, 210 + k * 70, i ? 148 : 120, 40, col, { r: 8, alpha: k === 1 && i === 0 ? 0.15 : 0.35 }));
  });
  for (let k = 0; k < 3; k++) p.line(515 + k * 24, 350, 530 + k * 24, 350, 5, FAINT, { alpha: 0.75 });
});

// Cloud — one control plane fanning out to a fleet of nodes.
cover("cloud.png", [VIOLET, CYAN], (p, a, b) => {
  const hub = [600, 200];
  const nodes = [[300, 470], [460, 530], [620, 500], [780, 545], [930, 460]];
  nodes.forEach((n) => p.line(hub[0], hub[1], n[0], n[1], 2, b, { alpha: 0.4 }));
  nodes.forEach(([x, y], i) => {
    p.rect(x - 56, y - 36, 112, 72, i === 2 ? b : FAINT, { r: 12, stroke: 3, alpha: i === 2 ? 0.95 : 0.55 });
    p.circle(x, y, 7, i === 2 ? b : FAINT, { alpha: i === 2 ? 1 : 0.6 });
  });
  p.rect(hub[0] - 110, hub[1] - 48, 220, 96, a, { r: 18, stroke: 4 });
  p.rect(hub[0] - 110, hub[1] - 48, 220, 96, a, { r: 18, alpha: 0.12 });
});

// AI/ML — a small feed-forward network, one path lit.
cover("ai-ml.png", [CYAN, VIOLET], (p, a, b) => {
  const layers = [[4, 300], [5, 600], [3, 900]];
  const pts = layers.map(([n, x]) => Array.from({ length: n }, (_, i) => [x, 350 + (i - (n - 1) / 2) * 96]));
  for (let l = 0; l < pts.length - 1; l++)
    for (const s of pts[l]) for (const t of pts[l + 1]) p.line(s[0], s[1], t[0], t[1], 1.5, FAINT, { alpha: 0.16 });
  const path = [pts[0][0], pts[1][3], pts[2][0]];
  for (let i = 0; i < path.length - 1; i++) p.line(path[i][0], path[i][1], path[i + 1][0], path[i + 1][1], 3, a);
  pts.flat().forEach(([x, y]) => p.circle(x, y, 15, FAINT, { stroke: 3, alpha: 0.45 }));
  path.forEach(([x, y]) => { p.circle(x, y, 17, b); p.circle(x, y, 26, b, { stroke: 2, alpha: 0.5 }); });
});

// Design — tokens resolving into overlapping surfaces.
cover("design.png", [VIOLET, CYAN], (p, a, b) => {
  p.rect(300, 200, 300, 300, a, { r: 24, alpha: 0.30 });
  p.rect(430, 290, 300, 300, b, { r: 24, alpha: 0.30 });
  p.rect(300, 200, 300, 300, a, { r: 24, stroke: 3, alpha: 0.9 });
  p.rect(430, 290, 300, 300, b, { r: 24, stroke: 3, alpha: 0.9 });
  [0, 1, 2, 3].forEach((i) => {
    p.circle(830, 240 + i * 82, 20, i % 2 ? b : a, { alpha: 0.9 });
    p.rect(870, 230 + i * 82, 130, 20, FAINT, { r: 10, alpha: 0.28 });
  });
});

// Data — a pipeline landing as a distribution.
cover("data.png", [LIME, CYAN], (p, a, b) => {
  const bars = [120, 200, 165, 280, 230, 330, 300, 390];
  bars.forEach((v, i) => {
    const x = 300 + i * 76, y = 560 - v;
    p.rect(x, y, 48, v, i === bars.length - 1 ? a : b, { r: 8, alpha: i === bars.length - 1 ? 0.95 : 0.35 });
  });
  for (let i = 0; i < bars.length - 1; i++)
    p.line(324 + i * 76, 560 - bars[i] - 26, 324 + (i + 1) * 76, 560 - bars[i + 1] - 26, 3, a, { alpha: 0.8 });
  bars.forEach((v, i) => p.circle(324 + i * 76, 560 - v - 26, 7, a));
  p.line(280, 590, 940, 590, 2, FAINT, { alpha: 0.4 });
});

// QA — a test matrix with one red cell.
cover("qa.png", [LIME, CYAN], (p, a, b) => {
  const FAIL = [248, 113, 113];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) {
    const x = 300 + c * 104, y = 200 + r * 100;
    const bad = r === 2 && c === 3;
    const col = bad ? FAIL : a;
    p.rect(x, y, 80, 76, col, { r: 12, stroke: 3, alpha: bad ? 1 : 0.55 });
    if (bad) {
      p.line(x + 26, y + 26, x + 54, y + 50, 5, FAIL);
      p.line(x + 54, y + 26, x + 26, y + 50, 5, FAIL);
    } else {
      p.line(x + 24, y + 40, x + 36, y + 52, 5, a, { alpha: 0.8 });
      p.line(x + 36, y + 52, x + 58, y + 24, 5, a, { alpha: 0.8 });
    }
  }
});

// Strategy — a decision branching, one route committed to.
cover("strategy.png", [VIOLET, LIME], (p, a, b) => {
  const root = [300, 350];
  const mid = [[600, 220], [600, 480]];
  const leaf = [[900, 150], [900, 300], [900, 420], [900, 560]];
  p.line(root[0], root[1], mid[0][0], mid[0][1], 4, b);
  p.line(root[0], root[1], mid[1][0], mid[1][1], 3, FAINT, { alpha: 0.35 });
  p.line(mid[0][0], mid[0][1], leaf[0][0], leaf[0][1], 3, FAINT, { alpha: 0.35 });
  p.line(mid[0][0], mid[0][1], leaf[1][0], leaf[1][1], 4, b);
  p.line(mid[1][0], mid[1][1], leaf[2][0], leaf[2][1], 3, FAINT, { alpha: 0.35 });
  p.line(mid[1][0], mid[1][1], leaf[3][0], leaf[3][1], 3, FAINT, { alpha: 0.35 });
  [...mid, ...leaf].forEach(([x, y]) => p.circle(x, y, 22, FAINT, { stroke: 3, alpha: 0.4 }));
  [mid[0], leaf[1]].forEach(([x, y]) => { p.circle(x, y, 24, b); p.circle(x, y, 36, b, { stroke: 2, alpha: 0.45 }); });
  p.circle(root[0], root[1], 30, a);
  p.circle(root[0], root[1], 44, a, { stroke: 3, alpha: 0.5 });
});
