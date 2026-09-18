import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import NeuralCanvas from "../components/NeuralCanvas";
import Icon from "../components/Icon";
import Img from "../components/Img";
import { Reveal, SectionHead, Counter, SpotlightCard, CTA, /* Tilt, */ LogoMarquee } from "../components/ui";
import { partners, techStack } from "../components/Brands";
import { stats, services, projects, /* products, */ process, testimonials, posts, industries } from "../data/company";
import "./Home.css";

const fade = (d = 0) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] } });

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -80]);
  const y2 = useTransform(scrollY, [0, 600], [0, -140]);
  const y3 = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <NeuralCanvas density={70} />
        <div className="bg-grid" />
        <div className="glow" style={{ width: 700, height: 700, background: "var(--violet)", top: -350, right: "-15%" }} />
        <div className="glow" style={{ width: 500, height: 500, background: "var(--cyan)", bottom: -250, left: "-10%", opacity: 0.4 }} />
        <div className="container hero__inner hero__split">
          <div>
            <motion.div className="hero__badge" {...fade(0)}><span className="hero__dot" /> Web · Mobile · Cloud · AI/ML</motion.div>
            <motion.h1 className="hero__title" {...fade(0.1)}>
              We build digital<br />products that<br /><span className="shimmer">scale.</span>
            </motion.h1>
            <motion.p className="lead hero__lead" {...fade(0.2)}>
              NeuronEdge is an IT services and product company. We design, engineer and launch web apps, mobile apps, cloud platforms and AI solutions for startups and enterprises — from first sketch to millions of users.
            </motion.p>
            <motion.div className="hero__actions" {...fade(0.3)}>
              <Link to="/contact" className="btn btn-primary">Get a free quote <Icon name="arrow" size={16} className="arrow" /></Link>
              <Link to="/projects" className="btn btn-ghost">View our projects</Link>
            </motion.div>
            <motion.div className="hero__stats" {...fade(0.45)}>
              {stats.map((s) => (
                <div key={s.label} className="hero__stat">
                  <div className="hero__stat-value"><Counter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} /></div>
                  <div className="hero__stat-label">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div className="hero__visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <motion.div className="hero__card hero__card--a float" style={{ y: y1 }}>
              <Img src={projects[0].image} alt={projects[0].title} ratio="4/3" />
              <div className="hero__card-label"><span className="tag">Mobile</span>{projects[0].client}</div>
            </motion.div>
            <motion.div className="hero__card hero__card--b float" style={{ y: y2, animationDelay: "-2s" }}>
              <Img src={projects[1].image} alt={projects[1].title} ratio="16/10" />
              <div className="hero__card-label"><span className="tag">Web</span>{projects[1].client}</div>
            </motion.div>
            <motion.div className="hero__card hero__card--c float" style={{ y: y3, animationDelay: "-4s" }}>
              <div className="hero__mini">
                <div className="hero__mini-row"><span className="hero__dot" /> Deploy succeeded</div>
                <div className="hero__mini-bar"><span style={{ width: "82%" }} /></div>
                <div className="hero__mini-meta"><span>prod · us-east-1</span><span>1.2s</span></div>
              </div>
            </motion.div>
            <div className="hero__ring" /><div className="hero__ring hero__ring--2" />
          </motion.div>
        </div>
        <div className="hero__scroll"><span /></div>
      </section>

      {/* PARTNERS */}
      <section className="clients">
        <div className="container"><p className="clients__label">Platforms we build on</p></div>
        <LogoMarquee items={partners} speed={45} />
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="work__head">
            <SectionHead eyebrow="What we do" title="End-to-end technology services under one roof." lead="Strategy, design, engineering and operations — one accountable team from idea to scale." />
            <Reveal><Link to="/services" className="btn btn-ghost">All services <Icon name="arrow" size={16} className="arrow" /></Link></Reveal>
          </div>
          <div className="grid grid-4" style={{ marginTop: "2.5rem" }}>
            {services.slice(0, 8).map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <SpotlightCard as={Link} to={`/services#${s.slug}`} className="svc gborder" style={{ display: "block", height: "100%" }}>
                  <div className="svc__icon"><Icon name={s.icon} /></div>
                  <h3 className="h-md" style={{ fontSize: "1.15rem" }}>{s.title}</h3>
                  <p className="muted" style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>{s.short}</p>
                  <span className="svc__more">Learn more <Icon name="arrow" size={14} /></span>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS — section hidden for now (see README). Re-enable by removing this comment wrapper.
      <section className="section band" style={{ overflow: "hidden" }}>
        <div className="glow" style={{ width: 500, height: 500, background: "var(--cyan)", left: -200, top: "20%", opacity: 0.2 }} />
        <div className="container">
          <SectionHead eyebrow="Our products" title="SaaS products born from real client problems." lead="Alongside services, we build and run our own software. Each product started as a pattern we solved for clients again and again." />
          <div className="grid grid-2">
            {products.slice(0, 2).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Tilt>
                  <Link to={`/products/${p.slug}`} className={`product-card hue-${p.hue}`}>
                    <Img src={p.image} alt={p.name} ratio="16/9" hover className="product-card__img" />
                    <div className="product-card__body">
                      <span className="tag">{p.tag}</span>
                      <h3 className="h-md" style={{ marginTop: "0.8rem" }}>{p.name}</h3>
                      <p className="muted" style={{ marginTop: "0.4rem" }}>{p.tagline}</p>
                    </div>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: "2rem" }}><Link to="/products" className="btn btn-ghost">Explore all products <Icon name="arrow" size={16} className="arrow" /></Link></Reveal>
        </div>
      </section>
      */}

      {/* PROJECTS */}
      <section className="section">
        <div className="container">
          <div className="work__head">
            <SectionHead eyebrow="Featured projects" title="Work we're proud to put our name on." />
            <Reveal><Link to="/projects" className="btn btn-ghost">All projects <Icon name="arrow" size={16} className="arrow" /></Link></Reveal>
          </div>
          <div className="work__grid">
            {projects.slice(0, 6).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <Link to={`/projects/${p.slug}`} className={`work-card hue-${p.hue}`}>
                  <div className="work-card__art">
                    <Img src={p.image} alt={p.title} hover style={{ position: "absolute", inset: 0 }} />
                    <span className="work-card__cat">{p.category}</span>
                  </div>
                  <div className="work-card__body">
                    <div className="work-card__client">{p.client} · {p.industry}</div>
                    <h3 className="h-md" style={{ fontSize: "1.2rem" }}>{p.title}</h3>
                    <div className="work-card__results">
                      {p.metrics.slice(0, 2).map(([v, l]) => <div key={l}><strong>{v}</strong><span>{l}</span></div>)}
                    </div>
                    {p.tech?.length > 0 && (
                      <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginTop: "0.9rem" }}>
                        {p.tech.slice(0, 4).map((t) => <span key={t} className="tag">{t}</span>)}
                        {p.tech.length > 4 && <span className="tag" style={{ color: "var(--cyan)" }}>+{p.tech.length - 4} more</span>}
                      </div>
                    )}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO + INDUSTRIES */}
      <section className="section manifesto">
        <div className="glow" style={{ width: 600, height: 600, background: "var(--cyan)", left: "50%", top: "50%", transform: "translate(-50%,-50%)", opacity: 0.18 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <p className="manifesto__text">
              Great software is a <span className="grad-text">business outcome</span>, not a deliverable. We measure our work in conversions, retention, uptime and cost saved — because that's how you measure yours.
            </p>
          </Reveal>
          <div className="manifesto__row">
            {industries.map((t, i) => (
              <Reveal key={t} delay={i * 0.04}><span className="tag" style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}>{t}</span></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="clients" style={{ borderTop: 0 }}>
        <div className="container"><p className="clients__label">Technologies we master</p></div>
        <LogoMarquee items={techStack.slice(0, 9)} speed={38} />
        <div style={{ height: "1.2rem" }} />
        <LogoMarquee items={techStack.slice(9)} speed={42} reverse />
      </section>

      {/* PROCESS */}
      <section className="section process">
        <div className="container">
          <SectionHead eyebrow="How we work" title="A proven process, from discovery to launch." center />
          <div className="process__grid">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1} className="process__item">
                <div className="process__step">{p.step}</div>
                <h3 className="h-md">{p.title}</h3>
                <p className="muted" style={{ marginTop: "0.5rem" }}>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead eyebrow="Client voices" title="What our clients say." />
          <div className="grid grid-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.org} delay={i * 0.08}>
                <SpotlightCard className="quote" style={{ height: "100%" }}>
                  <div className="quote__stars">{[0, 1, 2, 3, 4].map((k) => <Icon key={k} name="star" size={14} />)}</div>
                  <p className="quote__text">“{t.quote}”</p>
                  <div className="quote__who">
                    <div className="quote__badge" data-i={i}>{t.name.split(" ").map((w) => w[0]).join("")}</div>
                    <div className="quote__info">
                      <strong className="quote__name">{t.name}</strong>
                      <span className="quote__meta">{t.role} · <span className="quote__org">{t.org}</span></span>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="section band">
        <div className="container">
          <div className="work__head">
            <SectionHead eyebrow="Insights" title="From the NeuronEdge blog." />
            <Reveal><Link to="/blog" className="btn btn-ghost">All articles <Icon name="arrow" size={16} className="arrow" /></Link></Reveal>
          </div>
          <div className="grid grid-3" style={{ marginTop: "2.5rem" }}>
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to={`/blog/${p.slug}`} className="post-card">
                  <Img src={p.image} alt={p.title} ratio="16/9" hover />
                  <div className="post-card__body">
                    <div className="post-card__meta"><span className="tag">{p.category}</span><span>{p.read} read</span></div>
                    <h3 className="h-md" style={{ fontSize: "1.15rem", marginTop: "0.8rem" }}>{p.title}</h3>
                    <p className="muted" style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>{p.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
