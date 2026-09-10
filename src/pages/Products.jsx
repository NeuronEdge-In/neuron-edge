import { Link, Navigate, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import Img from "../components/Img";
import { Reveal, SectionHead, CTA, PageHero, Tilt } from "../components/ui";
import { products } from "../data/company";
import "./Home.css";
import "./Pages.css";

export default function Products() {
  return (
    <>
      <PageHero eyebrow="Products" title={<>Software we build, run and <span className="grad-text">stand behind.</span></>} lead="Four SaaS products used by hundreds of businesses — each one born from a problem we kept solving for clients." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {products.map((p, i) => (
            <Reveal key={p.slug} className={`product-row ${i % 2 ? "is-flipped" : ""}`}>
              <Tilt max={5}>
                <Link to={`/products/${p.slug}`} className={`product-card hue-${p.hue}`}><Img src={p.image} alt={p.name} ratio="16/10" hover /></Link>
              </Tilt>
              <div>
                <span className="tag">{p.tag}</span>
                <h2 className="h-lg" style={{ marginTop: "1rem" }}>{p.name}</h2>
                <p className="lead" style={{ marginTop: "0.8rem" }}>{p.tagline}</p>
                <p className="muted" style={{ marginTop: "0.8rem" }}>{p.description}</p>
                <ul className="service__list" style={{ marginTop: "1.2rem" }}>{p.features.map((f) => <li key={f}><Icon name="check" size={16} /> {f}</li>)}</ul>
                <div style={{ display: "flex", gap: "0.8rem", alignItems: "center", marginTop: "1.6rem", flexWrap: "wrap" }}>
                  <Link to={`/products/${p.slug}`} className="btn btn-primary">Learn more <Icon name="arrow" size={16} className="arrow" /></Link>
                  <span className="muted" style={{ fontSize: "0.85rem" }}>{p.pricing}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA title="Need a custom product instead?" text="We build bespoke platforms too — and we can white-label any of ours." primary="Talk to us" />
    </>
  );
}

export function ProductDetail() {
  const { slug } = useParams();
  const p = products.find((x) => x.slug === slug);
  if (!p) return <Navigate to="/products" replace />;
  const others = products.filter((x) => x.slug !== slug).slice(0, 3);
  return (
    <>
      <PageHero eyebrow={p.tag} title={p.name} lead={p.tagline}>
        <div style={{ display: "flex", gap: "0.8rem", marginTop: "1.8rem", flexWrap: "wrap" }}>
          <Link to="/contact" className="btn btn-primary">Request a demo <Icon name="arrow" size={16} className="arrow" /></Link>
          <span className="btn btn-ghost" style={{ cursor: "default" }}>{p.pricing}</span>
        </div>
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal><Img src={p.image} alt={p.name} ratio="21/9" style={{ borderRadius: 24, border: "1px solid var(--line)" }} /></Reveal>
          <div className="split" style={{ marginTop: "4rem" }}>
            <SectionHead eyebrow="Overview" title={`What ${p.name} does`} />
            <div className="split__text">
              <p className="lead">{p.description}</p>
              <div className="grid grid-2" style={{ marginTop: "2rem", gap: "1rem" }}>
                {p.features.map((f, i) => <Reveal key={f} delay={i * 0.05}><div className="perk"><Icon name="check" size={16} /> {f}</div></Reveal>)}
              </div>
            </div>
          </div>
          <div className="grid grid-3" style={{ marginTop: "4rem" }}>
            {[["Setup", "Live in days", "Guided onboarding, migrations and integrations handled by our team."], ["Security", "Enterprise-grade", "SSO, RBAC, audit logs, encryption at rest and in transit."], ["Support", "24/7 coverage", "Dedicated success manager and engineering escalation path."]].map(([k, t, d], i) => (
              <Reveal key={k} delay={i * 0.06} className="stepcard"><div className="stepcard__num" style={{ fontSize: "0.8rem" }}>{k}</div><h3 className="h-md">{t}</h3><p className="muted" style={{ marginTop: "0.5rem" }}>{d}</p></Reveal>
            ))}
          </div>
          <SectionHead eyebrow="More products" title="You may also like" />
          <div className="grid grid-3" style={{ marginTop: "-2rem" }}>
            {others.map((o) => (
              <Link key={o.slug} to={`/products/${o.slug}`} className="product-card"><Img src={o.image} alt={o.name} ratio="16/9" hover /><div className="product-card__body"><span className="tag">{o.tag}</span><h3 className="h-md" style={{ fontSize: "1.15rem", marginTop: "0.6rem" }}>{o.name}</h3></div></Link>
            ))}
          </div>
        </div>
      </section>
      <CTA title={`See ${p.name} in action.`} text="Book a 30-minute walkthrough with a product specialist." primary="Request a demo" secondary="All products" />
    </>
  );
}
