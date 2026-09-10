import { useEffect, useRef } from "react";

/* Animated neural-network particle field — nodes drift, synapses light up near the cursor. */
export default function NeuralCanvas({ density = 70, className, style }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let w, h, raf, nodes = [];
    const mouse = { x: -9999, y: -9999 };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((w * h) / 1e6 * density * 6);
      nodes = Array.from({ length: Math.max(30, count) }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.8, p: Math.random() * Math.PI * 2,
      }));
    };
    const onMove = (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      const light = document.documentElement.getAttribute("data-theme") === "light";
      const base = light ? "71,85,105" : "148,163,184";
      const baseA = light ? 0.9 : 1;
      const link = 130;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!reduce) { a.x += a.vx; a.y += a.vy; }
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < link) {
            const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
            const md = Math.hypot(mx - mouse.x, my - mouse.y);
            const boost = Math.max(0, 1 - md / 220);
            const alpha = (1 - d / link) * (0.12 + boost * 0.6);
            ctx.strokeStyle = boost > 0.05 ? `rgba(34,211,238,${alpha})` : `rgba(${base},${alpha * baseA})`;
            ctx.lineWidth = 0.8 + boost;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        const pulse = 0.6 + 0.4 * Math.sin(t / 900 + n.p);
        const md = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        const near = Math.max(0, 1 - md / 220);
        ctx.fillStyle = near > 0.05 ? `rgba(139,92,246,${0.5 + near * 0.5})` : `rgba(${base},${0.35 * pulse * baseA})`;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r + near * 2, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    canvas.parentElement.addEventListener("mousemove", onMove);
    canvas.parentElement.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.parentElement?.removeEventListener("mousemove", onMove);
      canvas.parentElement?.removeEventListener("mouseleave", onLeave);
    };
  }, [density]);
  return <canvas ref={ref} className={className} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", ...style }} />;
}
