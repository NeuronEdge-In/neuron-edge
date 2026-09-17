/* A tiny anti-aliased 2D drawing layer over an RGBA buffer.
   Every shape is defined as an inside-test and sampled on an SSxSS grid,
   which keeps the primitives short and the edges clean. */

const SS = 4;

export function painter(img) {
  const { w, h, data } = img;
  const blend = (x, y, col, a) => {
    if (a <= 0 || x < 0 || y < 0 || x >= w || y >= h) return;
    const o = (y * w + x) * 4;
    for (let k = 0; k < 3; k++) data[o + k] = Math.round(data[o + k] * (1 - a) + col[k] * a);
  };

  const shape = (x0, y0, x1, y1, inside, col, alpha = 1) => {
    for (let y = Math.max(0, Math.floor(y0)); y <= Math.min(h - 1, Math.ceil(y1)); y++) {
      for (let x = Math.max(0, Math.floor(x0)); x <= Math.min(w - 1, Math.ceil(x1)); x++) {
        let hit = 0;
        for (let sy = 0; sy < SS; sy++) for (let sx = 0; sx < SS; sx++) {
          if (inside(x + (sx + 0.5) / SS, y + (sy + 0.5) / SS)) hit++;
        }
        if (hit) blend(x, y, col, (hit / (SS * SS)) * alpha);
      }
    }
  };

  // Signed distance to a rounded rect, negative inside.
  const rrSdf = (px, py, x, y, rw, rh, r) => {
    const dx = Math.abs(px - (x + rw / 2)) - (rw / 2 - r);
    const dy = Math.abs(py - (y + rh / 2)) - (rh / 2 - r);
    const ox = Math.max(dx, 0), oy = Math.max(dy, 0);
    return Math.hypot(ox, oy) + Math.min(Math.max(dx, dy), 0) - r;
  };

  const segSdf = (px, py, x0, y0, x1, y1) => {
    const vx = x1 - x0, vy = y1 - y0;
    const t = Math.max(0, Math.min(1, ((px - x0) * vx + (py - y0) * vy) / (vx * vx + vy * vy || 1)));
    return Math.hypot(px - (x0 + t * vx), py - (y0 + t * vy));
  };

  return {
    rect(x, y, rw, rh, col, { r = 0, stroke = 0, alpha = 1 } = {}) {
      const m = stroke + 2;
      shape(x - m, y - m, x + rw + m, y + rh + m,
        (px, py) => {
          const d = rrSdf(px, py, x, y, rw, rh, r);
          return stroke ? d <= 0 && d >= -stroke : d <= 0;
        }, col, alpha);
    },
    circle(cx, cy, rad, col, { stroke = 0, alpha = 1 } = {}) {
      shape(cx - rad - 2, cy - rad - 2, cx + rad + 2, cy + rad + 2,
        (px, py) => {
          const d = Math.hypot(px - cx, py - cy) - rad;
          return stroke ? d <= 0 && d >= -stroke : d <= 0;
        }, col, alpha);
    },
    line(x0, y0, x1, y1, width, col, { alpha = 1 } = {}) {
      const m = width + 2;
      shape(Math.min(x0, x1) - m, Math.min(y0, y1) - m, Math.max(x0, x1) + m, Math.max(y0, y1) + m,
        (px, py) => segSdf(px, py, x0, y0, x1, y1) <= width / 2, col, alpha);
    },
    glow(cx, cy, rad, col, strength) {
      for (let y = Math.max(0, cy - rad | 0); y <= Math.min(h - 1, cy + rad); y++) {
        for (let x = Math.max(0, cx - rad | 0); x <= Math.min(w - 1, cx + rad); x++) {
          const d = Math.hypot(x - cx, y - cy);
          if (d < rad) blend(x, y, col, (1 - d / rad) ** 2 * strength);
        }
      }
    },
    grid(step, col, alpha) {
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
        if (x % step === 0 || y % step === 0) blend(x, y, col, alpha);
      }
    },
  };
}
