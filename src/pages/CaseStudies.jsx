import { Link, Navigate, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import Img from "../components/Img";
import { Reveal, CTA, PageHero } from "../components/ui";
import { caseStudies } from "../data/company";
import "./Home.css";
import "./Pages.css";

export default function CaseStudies() {
  return (
    <>
      <PageHero eyebrow="Case studies" title={<>Deep dives into the <span className="grad-text">outcomes.</span></>} lead="The challenge, our approach and the measured results — written for people who have to make the same decisions." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={0.05}>
              <Link to={`/case-studies/${c.slug}`} className={`cs-card hue-${c.hue} ${i % 2 ? "is-flipped" : ""}`}>
                <Img src={c.image} alt={c.title} ratio="16/10" hover className="cs-card__img" />
                <div className="cs-card__body">
                  <div className="work-card__client">{c.client} · {c.industry}</div>
                  <h2 className="h-md" style={{ fontSize: "1.6rem" }}>{c.title}</h2>
                  <p className="muted" style={{ marginTop: "0.8rem" }}>{c.excerpt}</p>
                  <div className="work-card__results">{c.results.map(([v, l]) => <div key={l}><strong>{v}</strong><span>{l}</span></div>)}</div>
                  <span className="svc__more">Read case study <Icon name="arrow" size={14} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA title="Could your project be our next case study?" />
    </>
  );
}

export function CaseStudyDetail() {
  const { slug } = useParams();
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  if (idx === -1) return <Navigate to="/case-studies" replace />;
  const c = caseStudies[idx];
  const next = caseStudies[(idx + 1) % caseStudies.length];
  return (
    <>
      <PageHero eyebrow={`Case study · ${c.client} · ${c.industry}`} title={c.title} lead={c.excerpt}>
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "1.5rem" }}>{c.services.map((t) => <span key={t} className="tag">{t}</span>)}</div>
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal><Img src={c.image} alt={c.title} ratio="21/9" style={{ borderRadius: 24, border: "1px solid var(--line)" }} /></Reveal>
          <div className="grid grid-3" style={{ marginTop: "1.25rem" }}>
            {c.results.map(([v, l], i) => <Reveal key={l} delay={i * 0.06} className="stat card"><div className="stat__value">{v}</div><div className="muted">{l}</div></Reveal>)}
          </div>
          <div className="split" style={{ marginTop: "5rem" }}>
            <Reveal><div className="eyebrow">Challenge</div><h2 className="h-lg" style={{ fontSize: "2rem" }}>Where they started</h2></Reveal>
            <Reveal delay={0.1} className="split__text"><p className="lead">{c.challenge}</p></Reveal>
          </div>
          <div className="split" style={{ marginTop: "4rem" }}>
            <Reveal><div className="eyebrow">Approach</div><h2 className="h-lg" style={{ fontSize: "2rem" }}>What we did</h2></Reveal>
            <Reveal delay={0.1} className="split__text">
              <ol className="steps">{c.approach.map((a, i) => <li key={i}><span className="steps__n">{String(i + 1).padStart(2, "0")}</span><span>{a}</span></li>)}</ol>
            </Reveal>
          </div>
          <div className="split" style={{ marginTop: "4rem" }}>
            <Reveal><div className="eyebrow">Outcome</div><h2 className="h-lg" style={{ fontSize: "2rem" }}>The result</h2></Reveal>
            <Reveal delay={0.1} className="split__text card" style={{ transform: "none" }}><p className="lead">{c.outcome}</p></Reveal>
          </div>
        </div>
      </section>
      <section className="section band" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <Link to="/case-studies" className="btn btn-ghost">← All case studies</Link>
          <Link to={`/case-studies/${next.slug}`} className="btn btn-ghost">Next: {next.client} <Icon name="arrow" size={16} className="arrow" /></Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
