import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../components/Icon";
import Img from "../components/Img";
import { Reveal, CTA, PageHero } from "../components/ui";
import { projects } from "../data/company";
import { techStack, BrandIcon } from "../components/Brands";
import "./Home.css";
import "./Pages.css";

const cats = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.category.includes(cat));
  return (
    <>
      <PageHero eyebrow="Projects" title={<>A portfolio of products <span className="grad-text">shipped.</span></>} lead="Web, mobile, cloud and AI projects across ten industries. Every number is measured after launch.">
        <div className="filters">{cats.map((c) => <button key={c} className={`filter ${cat === c ? "is-active" : ""}`} onClick={() => setCat(c)}>{c}</button>)}</div>
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div layout className="work__grid" style={{ marginTop: 0 }}>
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.div key={p.slug} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35 }}>
                  <Link to={`/projects/${p.slug}`} className={`work-card hue-${p.hue}`}>
                    <div className="work-card__art"><Img src={p.image} alt={p.title} hover style={{ position: "absolute", inset: 0 }} /><span className="work-card__cat">{p.category}</span></div>
                    <div className="work-card__body">
                      <div className="work-card__client">{p.client} · {p.industry} · {p.year}</div>
                      <h3 className="h-md" style={{ fontSize: "1.2rem" }}>{p.title}</h3>
                      <p className="muted" style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>{p.summary}</p>
                      <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginTop: "0.9rem" }}>{(p.tech || []).map((t) => <span key={t} className="tag">{t}</span>)}</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <CTA title="Want results like these?" />
    </>
  );
}

export function ProjectDetail() {
  const { slug } = useParams();
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return <Navigate to="/projects" replace />;
  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  const logos = techStack.filter((t) => p.tech.some((x) => t.name.toLowerCase().startsWith(x.toLowerCase().split(" ")[0])));
  return (
    <>
      <PageHero eyebrow={`${p.client} · ${p.industry} · ${p.year}`} title={p.title} lead={p.summary}>
        {p.tech?.length > 0 && <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "1.5rem" }}>{p.tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>}
        {(p.externalUrl || p.playStoreUrl || p.appStoreUrl) && (
          <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
            {p.externalUrl && (
              <a href={p.externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Visit Project Portfolio <Icon name="arrow" size={16} />
              </a>
            )}
            {p.playStoreUrl && (
              <a href={p.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Google Play Store <Icon name="arrow" size={16} />
              </a>
            )}
            {p.appStoreUrl && (
              <a href={p.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Apple App Store <Icon name="arrow" size={16} />
              </a>
            )}
          </div>
        )}
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal><Img src={p.image} alt={p.title} ratio="21/9" style={{ borderRadius: 24, border: "1px solid var(--line)" }} /></Reveal>
          {p.metrics?.length > 0 && (
            <div className="grid grid-3" style={{ marginTop: "1.25rem" }}>
              {p.metrics.map(([v, l], i) => <Reveal key={l} delay={i * 0.06} className="stat card"><div className="stat__value">{v}</div><div className="muted">{l}</div></Reveal>)}
            </div>
          )}
          <div className="split" style={{ marginTop: "5rem" }}>
            <Reveal><div className="eyebrow">Executive Brief</div><h2 className="h-lg" style={{ fontSize: "2rem" }}>Project Overview</h2></Reveal>
            <Reveal delay={0.1} className="split__text">
              <p className="lead" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>{p.overview || p.summary}</p>
            </Reveal>
          </div>
          {p.features && p.features.length > 0 && (
            <div className="split" style={{ marginTop: "4rem" }}>
              <Reveal><div className="eyebrow">Key Capabilities</div><h2 className="h-lg" style={{ fontSize: "2rem" }}>Features & Operational Workflows</h2></Reveal>
              <Reveal delay={0.1} className="split__text">
                <ul className="service__list">
                  {p.features.map((f, i) => {
                    const parts = f.split(":");
                    const title = parts.length > 1 ? parts[0] + ":" : "";
                    const desc = parts.length > 1 ? parts.slice(1).join(":") : f;
                    return (
                      <li key={i} style={{ marginBottom: "1.2rem", lineHeight: "1.6" }}>
                        <Icon name="check" size={16} style={{ marginTop: 4, flexShrink: 0 }} />
                        <div>
                          {title && <strong style={{ color: "var(--fg)" }}>{title} </strong>}
                          <span className="muted">{desc}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            </div>
          )}
          {p.architecture && p.architecture.length > 0 && (
            <div className="split" style={{ marginTop: "4rem" }}>
              <Reveal><div className="eyebrow">Technical Deep-Dive</div><h2 className="h-lg" style={{ fontSize: "2rem" }}>Architecture & Engineering Highlights</h2></Reveal>
              <Reveal delay={0.1} className="split__text">
                <ul className="service__list">
                  {p.architecture.map((a, i) => {
                    const parts = a.split(":");
                    const title = parts.length > 1 ? parts[0] + ":" : "";
                    const desc = parts.length > 1 ? parts.slice(1).join(":") : a;
                    return (
                      <li key={i} style={{ marginBottom: "1.2rem", lineHeight: "1.6" }}>
                        <Icon name="shield" size={16} style={{ marginTop: 4, flexShrink: 0 }} />
                        <div>
                          {title && <strong style={{ color: "var(--fg)" }}>{title} </strong>}
                          <span className="muted">{desc}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            </div>
          )}
          {logos.length > 0 && (
            <Reveal style={{ marginTop: "4rem" }}>
              <div className="eyebrow">Tech stack</div>
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginTop: "1rem" }}>{logos.map((t) => <span key={t.name} className="logo-row"><BrandIcon icon={t} />{t.name}</span>)}</div>
            </Reveal>
          )}
        </div>
      </section>
      <section className="section band" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <Link to="/projects" className="btn btn-ghost">← All projects</Link>
          <Link to={`/projects/${next.slug}`} className="btn btn-ghost">Next: {next.client} <Icon name="arrow" size={16} className="arrow" /></Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
