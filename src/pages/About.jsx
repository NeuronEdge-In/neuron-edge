import { Link } from "react-router-dom";
import { Reveal, SectionHead, SpotlightCard, CTA, PageHero, Counter } from "../components/ui";
import Img from "../components/Img";
import { values, milestones, stats, company } from "../data/company";
import "./Pages.css";

export default function About() {
  return (
    <>
      <PageHero eyebrow="About NeuronEdge" title={<>A technology partner that <span className="grad-text">ships.</span></>} lead="Founded in 2022 by two engineer brothers, NeuronEdge is a digital engineering studio delivering full-stack web, mobile, cloud and AI/ML platforms for businesses and startups worldwide." />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split">
            <Reveal>
              <div className="eyebrow">Our story</div>
              <h2 className="h-lg">Built on Computer Science Fundamentals & Enterprise Rigor.</h2>
            </Reveal>
            <Reveal delay={0.1} className="split__text">
              <p className="lead">NeuronEdge was founded four years ago by two brothers with a shared vision: to build reliable, high-performance software with zero engineering fluff. Following the completion of an MSc in Computer Science in Bangalore in 2022, we set out to build digital products combining deep computational theory with modern software agility.</p>
              <p className="muted" style={{ marginTop: "1rem" }}>While working as software engineers across global multinational corporations (MNCs), we gained extensive experience in enterprise-scale systems, distributed data pipelines, and robust security practices. We brought that exact engineering standard to NeuronEdge, architecting and shipping mission-critical systems for clients across logistics, non-profit foundations, healthcare, and enterprise ERP.</p>
              <p className="muted" style={{ marginTop: "1rem" }}>Today, our engineering practice is at the cutting edge of AI/ML integration — embedding Large Language Models (LLMs), RAG architectures, computer vision models, and intelligent automation workflows directly into production systems that scale.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead eyebrow="Engineering Pillars" title="How we engineer for production scale." />
          <div className="grid grid-2" style={{ marginTop: "2rem" }}>
            {[
              { num: "01", title: "Applied AI & LLM Systems", text: "Production RAG pipelines, autonomous agentic workflows, custom vector embeddings, and real-time computer vision inference with sub-second latencies." },
              { num: "02", title: "Full-Stack Architecture", text: "High-performance React 19 web applications, cross-platform React Native & Expo mobile clients, Django REST, and Fastify microservices." },
              { num: "03", title: "Serverless & Distributed Data", text: "PostgreSQL with compound indexing and UUIDv7, Upstash Redis caching, serverless event-driven queues (QStash), and Docker containerization." },
              { num: "04", title: "Enterprise Craftsmanship", text: "Clean architecture, end-to-end type safety, automated CI/CD testing pipelines, and observable systems engineered for long-term maintainability." },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <SpotlightCard style={{ height: "100%", padding: "2rem" }}>
                  <div className="value__num" style={{ fontSize: "0.9rem" }}>{p.num}</div>
                  <h3 className="h-md" style={{ fontSize: "1.25rem" }}>{p.title}</h3>
                  <p className="muted" style={{ marginTop: "0.6rem", lineHeight: "1.6" }}>{p.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <div className="grid grid-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="stat">
                <div className="stat__value"><Counter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} /></div>
                <div className="muted">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Values" title="Four principles we architect, build and ship by." />
          <div className="grid grid-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <SpotlightCard style={{ height: "100%" }}>
                  <div className="value__num">0{i + 1}</div>
                  <h3 className="h-md">{v.title}</h3>
                  <p className="muted" style={{ marginTop: "0.6rem" }}>{v.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead eyebrow="Timeline" title="Milestones so far." />
          <div className="timeline">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08} className="timeline__item">
                <div className="timeline__year">{m.year}</div>
                <div className="timeline__dot" />
                <p className="muted">{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION — hidden for now — see README
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split">
            <SectionHead eyebrow="Leadership" title="Meet the people behind the work." lead="Practice leads who have shipped at scale, and who stay hands-on with every client." />
            <Reveal><Link to="/team" className="btn btn-primary">Meet the team</Link> <Link to="/careers" className="btn btn-ghost" style={{ marginLeft: "0.6rem" }}>We're hiring</Link></Reveal>
          </div>
        </div>
      </section>
      */}
      <CTA title="Want to know how we'd approach your project?" />
    </>
  );
}
