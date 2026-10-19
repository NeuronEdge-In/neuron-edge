import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../components/Icon";
import Img from "../components/Img";
import SEO from "../components/SEO";
import { Reveal, PageHero, SectionHead } from "../components/ui";
import { posts } from "../data/company";
import "./Home.css";
import "./Pages.css";

const fmt = (d) => new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
const cats = ["All", ...new Set(posts.map((p) => p.category))];

export default function Blog() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? posts : posts.filter((p) => p.category === cat);
  const [featured, ...rest] = list;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "NeuronEdge Engineering Blog",
    "description": "Practical writing on web, mobile, cloud and AI engineering from NeuronEdge.",
    "url": "https://neuronedge.in/blog",
    "publisher": {
      "@type": "Organization",
      "name": "NeuronEdge",
      "url": "https://neuronedge.in",
      "logo": "https://neuronedge.in/brand/logo-mark-96.png"
    }
  };

  return (
    <>
      <SEO
        title="Engineering Blog & Technical Insights"
        description="Practical writing on web, mobile, cloud, and AI engineering — from the architects and engineers who build production systems every day."
        path="/blog"
        schema={blogSchema}
      />
      <PageHero eyebrow="Blog" title={<>Insights from the <span className="grad-text">engineering floor.</span></>} lead="Practical writing on web, mobile, cloud and AI — from the people who build it every day.">
        <div className="filters">{cats.map((c) => <button key={c} className={`filter ${cat === c ? "is-active" : ""}`} onClick={() => setCat(c)}>{c}</button>)}</div>
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {featured && (
            <Reveal>
              <Link to={`/blog/${featured.slug}`} className="cs-card">
                <Img src={featured.image} alt={featured.title} ratio="16/10" hover className="cs-card__img" />
                <div className="cs-card__body">
                  <div className="post-card__meta"><span className="tag">{featured.category}</span><span>{fmt(featured.date)} · {featured.read}</span></div>
                  <h2 className="h-md" style={{ fontSize: "1.8rem", marginTop: "1rem" }}>{featured.title}</h2>
                  <p className="muted" style={{ marginTop: "0.8rem" }}>{featured.excerpt}</p>
                  <div className="author" style={{ marginTop: "1.2rem" }}><Img src={featured.authorImg} alt={featured.author} className="author__img" style={{ background: "rgba(var(--fg-rgb), 0.05)", padding: 3 }} /><span>{featured.author}</span></div>
                </div>
              </Link>
            </Reveal>
          )}
          <motion.div layout className="grid grid-3" style={{ marginTop: "1.5rem" }}>
            <AnimatePresence mode="popLayout">
              {rest.map((p) => (
                <motion.div key={p.slug} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3 }}>
                  <Link to={`/blog/${p.slug}`} className="post-card">
                    <Img src={p.image} alt={p.title} ratio="16/9" hover />
                    <div className="post-card__body">
                      <div className="post-card__meta"><span className="tag">{p.category}</span><span>{p.read}</span></div>
                      <h3 className="h-md" style={{ fontSize: "1.15rem", marginTop: "0.8rem" }}>{p.title}</h3>
                      <p className="muted" style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>{p.excerpt}</p>
                      <div className="author" style={{ marginTop: "1rem" }}><Img src={p.authorImg} alt={p.author} className="author__img" style={{ background: "rgba(var(--fg-rgb), 0.05)", padding: 3 }} /><span>{p.author} · {fmt(p.date)}</span></div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <section className="section band">
        <div className="container newsletter">
          <SectionHead eyebrow="Newsletter" title="One email a month. Zero fluff." lead="Engineering notes, product updates and the occasional strong opinion." />
          <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
            <div className="field" style={{ flex: 1 }}><input type="email" placeholder="you@company.com" required aria-label="Email" /></div>
            <button className="btn btn-primary" type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const idx = posts.findIndex((p) => p.slug === slug);
  if (idx === -1) return <Navigate to="/blog" replace />;
  const p = posts[idx];
  const related = posts.filter((x) => x.slug !== slug && x.category === p.category).concat(posts.filter((x) => x.slug !== slug && x.category !== p.category)).slice(0, 3);

  // High-authority Schema.org TechArticle for GEO and SEO
  const postSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": p.title,
    "description": p.excerpt,
    "image": p.image.startsWith("http") ? p.image : `https://neuronedge.in${p.image}`,
    "datePublished": p.date,
    "dateModified": p.date,
    "author": {
      "@type": "Organization",
      "name": p.author,
      "url": "https://neuronedge.in",
      "logo": "https://neuronedge.in/brand/logo-mark-96.png"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NeuronEdge",
      "url": "https://neuronedge.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://neuronedge.in/brand/logo-mark-96.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://neuronedge.in/blog/${p.slug}`
    },
    "articleSection": p.category,
    "articleBody": p.body.join(" ")
  };

  return (
    <>
      <SEO
        title={p.title}
        description={p.excerpt}
        image={p.image}
        type="article"
        path={`/blog/${p.slug}`}
        schema={postSchema}
      />
      <PageHero eyebrow={`${p.category} · ${fmt(p.date)} · ${p.read} read`} title={p.title} lead={p.excerpt}>
        <div className="author" style={{ marginTop: "1.6rem" }}><Img src={p.authorImg} alt={p.author} className="author__img author__img--lg" style={{ background: "rgba(var(--fg-rgb), 0.05)", padding: 6 }} /><div><strong>{p.author}</strong><div className="muted" style={{ fontSize: "0.8rem" }}>Engineering & Insights</div></div></div>
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal><Img src={p.image} alt={p.title} ratio="21/9" style={{ borderRadius: 24, border: "1px solid var(--line)" }} /></Reveal>
          
          {/* AEO / GEO Executive Takeaway Block */}
          <Reveal delay={0.05}>
            <div
              className="aeo-summary"
              style={{
                margin: "2.5rem 0 2rem",
                padding: "1.5rem 1.75rem",
                borderRadius: "16px",
                background: "linear-gradient(135deg, rgba(var(--cyan-rgb), 0.08), rgba(var(--violet-rgb), 0.05))",
                border: "1px solid rgba(var(--cyan-rgb), 0.25)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem", color: "var(--cyan)", fontWeight: 600, fontSize: "0.95rem" }}>
                <Icon name="sparkle" size={18} /> Executive Summary & Key Takeaways
              </div>
              <p style={{ margin: 0, fontSize: "1.02rem", lineHeight: "1.65", color: "var(--fg)" }}>
                {p.excerpt}
              </p>
            </div>
          </Reveal>

          <Reveal className="article">
            {p.body.map((para, i) => <p key={i}>{para}</p>)}
            <blockquote>“Ship it, measure it, improve it. Everything else is a slide deck.”</blockquote>
            <p>If you're facing this decision on your own team, we're happy to compare notes — <Link to="/contact" style={{ color: "var(--cyan)" }}>get in touch</Link>.</p>
          </Reveal>
          <div className="divider" style={{ margin: "4rem 0 3rem" }} />
          <SectionHead eyebrow="Keep reading" title="Related articles" />
          <div className="grid grid-3" style={{ marginTop: "-2rem" }}>
            {related.map((r) => (
              <Link key={r.slug} to={`/blog/${r.slug}`} className="post-card"><Img src={r.image} alt={r.title} ratio="16/9" hover /><div className="post-card__body"><div className="post-card__meta"><span className="tag">{r.category}</span><span>{r.read}</span></div><h3 className="h-md" style={{ fontSize: "1.05rem", marginTop: "0.7rem" }}>{r.title}</h3></div></Link>
            ))}
          </div>
          <div style={{ marginTop: "3rem" }}><Link to="/blog" className="btn btn-ghost">← All articles</Link></div>
        </div>
      </section>
    </>
  );
}

