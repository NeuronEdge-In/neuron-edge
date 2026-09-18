import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Icon from "./Icon";
import { BrandIcon } from "./Brands";

export function Reveal({ children, delay = 0, y = 28, className, style, as = "div", ...rest }) {
  const M = motion[as] || motion.div;
  return (
    <M className={className} style={style} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} {...rest}>
      {children}
    </M>
  );
}

export function SectionHead({ eyebrow, title, lead, center }) {
  return (
    <Reveal className="section-head" style={center ? { marginInline: "auto", textAlign: "center" } : undefined}>
      {eyebrow && <div className="eyebrow" style={center ? { justifyContent: "center" } : undefined}>{eyebrow}</div>}
      <h2 className="h-lg">{title}</h2>
      {lead && <p className="lead" style={{ marginTop: "1.1rem", ...(center ? { marginInline: "auto" } : {}) }}>{lead}</p>}
    </Reveal>
  );
}

export function Counter({ value, suffix = "", decimals = 0, duration = 1800 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf, start;
    const tick = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);
  return <span ref={ref}>{n.toFixed(decimals)}{suffix}</span>;
}

export function SpotlightCard({ children, className = "", style, as: Tag = "div", ...rest }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return <Tag className={`card ${className}`} style={style} onMouseMove={onMove} {...rest}>{children}</Tag>;
}

export function CTA({ title = "Have a product in mind? Let's build it.", text = "Tell us about your idea or the system you need to modernise. We reply within one business day with next steps.", primary = "Get a free quote", secondary = "See our projects" }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal className="cta">
          <div className="glow" style={{ width: 500, height: 500, background: "var(--violet)", top: -250, right: -150 }} />
          <div className="glow" style={{ width: 400, height: 400, background: "var(--cyan)", bottom: -250, left: -100 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 className="h-lg" style={{ maxWidth: 640 }}>{title}</h2>
            <p className="lead" style={{ marginTop: "1rem" }}>{text}</p>
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginTop: "2rem" }}>
              <Link to="/contact" className="btn btn-primary">{primary} <Icon name="arrow" size={16} className="arrow" /></Link>
              <Link to="/projects" className="btn btn-ghost">{secondary}</Link>
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`.cta{position:relative;overflow:hidden;border:1px solid var(--line-strong);border-radius:28px;padding:clamp(2.5rem,6vw,5rem);background:linear-gradient(140deg,rgba(var(--fg-rgb),.04),rgba(var(--fg-rgb),.01))}`}</style>
    </section>
  );
}

export function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="page-hero">
      <div className="bg-grid" />
      <div className="glow" style={{ width: 600, height: 600, background: "var(--violet)", top: -300, right: "-10%" }} />
      <div className="glow" style={{ width: 400, height: 400, background: "var(--cyan)", top: -100, left: "-10%", opacity: 0.35 }} />
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1 className="h-xl" style={{ maxWidth: 900 }}>{title}</h1>
          {lead && <p className="lead" style={{ marginTop: "1.4rem" }}>{lead}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export function Tilt({ children, className = "", style, max = 8 }) {
  const onMove = (e) => {
    const el = e.currentTarget; const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateY(-4px)`;
  };
  const onLeave = (e) => { e.currentTarget.style.transform = ""; };
  return <div className={className} style={{ transition: "transform 0.5s var(--ease)", transformStyle: "preserve-3d", ...style }} onMouseMove={onMove} onMouseLeave={onLeave}>{children}</div>;
}

export function LogoMarquee({ items, speed = 40, reverse = false }) {
  return (
    <div className="marquee">
      <div className="marquee-track" style={{ animationDuration: `${speed}s`, animationDirection: reverse ? "reverse" : "normal" }}>
        {[...items, ...items].map((it, i) => (
          <span key={i} className="logo-row" style={{ gap: "0.7rem" }}>
            <BrandIcon icon={it} />{it.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Breadcrumb({ items }) {
  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-3)", marginBottom: "1.2rem", flexWrap: "wrap" }}>
      {items.map((it, i) => (
        <span key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {it.to ? <Link to={it.to} style={{ color: "var(--cyan)" }}>{it.label}</Link> : <span>{it.label}</span>}
          {i < items.length - 1 && <span>/</span>}
        </span>
      ))}
    </div>
  );
}
