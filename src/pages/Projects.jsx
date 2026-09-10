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
  const list = cat === "All" ? projects : projects.filter((p) => p.category === cat);
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
                      <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginTop: "0.9rem" }}>{p.tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>
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
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "1.5rem" }}>{p.tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>
        {(p.externalUrl || p.playStoreUrl) && (
          <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
            {p.externalUrl && (
              <a href={p.externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Visit Live Site <Icon name="arrow" size={16} />
              </a>
            )}
            {p.playStoreUrl && (
              <a href={p.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Google Play Store <Icon name="arrow" size={16} />
              </a>
            )}
          </div>
        )}
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal><Img src={p.image} alt={p.title} ratio="21/9" style={{ borderRadius: 24, border: "1px solid var(--line)" }} /></Reveal>
          <div className="grid grid-3" style={{ marginTop: "1.25rem" }}>
            {p.metrics.map(([v, l], i) => <Reveal key={l} delay={i * 0.06} className="stat card"><div className="stat__value">{v}</div><div className="muted">{l}</div></Reveal>)}
          </div>
          <div className="split" style={{ marginTop: "5rem" }}>
            <Reveal><div className="eyebrow">The brief</div><h2 className="h-lg" style={{ fontSize: "2rem" }}>What {p.client} needed</h2></Reveal>
            <Reveal delay={0.1} className="split__text">
              <p className="lead">{p.client} came to us with an ambitious goal in the {p.industry.toLowerCase()} space and a legacy setup that couldn't get them there. They needed a partner to own the product end-to-end — design, engineering, cloud and launch.</p>
              <p className="muted" style={{ marginTop: "1rem" }}>Our team ran a discovery sprint, aligned on measurable success criteria, and shipped the first production release inside the first quarter.</p>
            </Reveal>
          </div>
          <div className="split" style={{ marginTop: "4rem" }}>
            <Reveal><div className="eyebrow">What we delivered</div><h2 className="h-lg" style={{ fontSize: "2rem" }}>Engineering highlights</h2></Reveal>
            <Reveal delay={0.1} className="split__text">
              <ul className="service__list">
                {p.highlights ? p.highlights.map((h, i) => (
                  <li key={i}><Icon name="check" size={16} /> {h}</li>
                )) : (
                  <>
                    <li><Icon name="check" size={16} /> Product discovery, UX research and clickable prototypes validated with real users.</li>
                    <li><Icon name="check" size={16} /> {p.category} build on {p.tech.slice(0, 2).join(" and ")} with a shared design system.</li>
                    <li><Icon name="check" size={16} /> Cloud infrastructure as code, CI/CD pipelines and automated test coverage.</li>
                    <li><Icon name="check" size={16} /> Analytics, monitoring and an operator dashboard for the client's team.</li>
                    <li><Icon name="check" size={16} /> Launch support, hypercare and an ongoing enhancement roadmap.</li>
                  </>
                )}
              </ul>
            </Reveal>
          </div>
          {logos.length > 0 && (
            <Reveal style={{ marginTop: "4rem" }}>
              <div className="eyebrow">Tech stack</div>
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>{logos.map((t) => <span key={t.name} className="logo-row"><BrandIcon icon={t} />{t.name}</span>)}</div>
            </Reveal>
          )}
          <div className="grid grid-2" style={{ marginTop: "4rem" }}>
            <Reveal><Img src={`https://picsum.photos/seed/${p.slug}-a/900/600`} alt="" ratio="3/2" hover style={{ borderRadius: 18, border: "1px solid var(--line)" }} /></Reveal>
            <Reveal delay={0.1}><Img src={`https://picsum.photos/seed/${p.slug}-b/900/600`} alt="" ratio="3/2" hover style={{ borderRadius: 18, border: "1px solid var(--line)" }} /></Reveal>
          </div>
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
