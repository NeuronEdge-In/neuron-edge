import Icon from "../components/Icon";
import Img from "../components/Img";
import { Reveal, SectionHead, CTA, PageHero } from "../components/ui";
import { services, process, faqs } from "../data/company";
import { useState } from "react";
import "./Pages.css";

export default function Services() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <>
      <PageHero eyebrow="Services" title={<>Everything you need to build, launch and <span className="grad-text">scale.</span></>} lead="Eight practices covering strategy, design, engineering, cloud, data, AI and quality — delivered by teams who have shipped at scale." />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {services.map((s, i) => (
            <Reveal key={s.slug} className="service" id={s.slug}>
              <div className="service__idx">0{i + 1}</div>
              <div className="service__main">
                <div className="service__icon"><Icon name={s.icon} size={26} /></div>
                <h2 className="h-lg" style={{ fontSize: "clamp(1.5rem,2.5vw,2.1rem)" }}>{s.title}</h2>
                <p className="lead" style={{ marginTop: "0.6rem", fontSize: "1.05rem" }}>{s.short}</p>
                {s.description && (
                  <p className="service__desc">{s.description}</p>
                )}
                {s.tech && s.tech.length > 0 && (
                  <div className="service__tech">
                    {s.tech.map((t) => (
                      <span key={t} className="service__tech-tag">{t}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="service__side">
                <Img src={s.image} alt={s.title} ratio="16/9" hover style={{ borderRadius: 16, border: "1px solid var(--line)", marginBottom: "1.2rem" }} />
                <div className="service__cap-title">Core Deliverables & Standards</div>
                <ul className="service__list">
                  {s.bullets.map((b) => <li key={b}><Icon name="check" size={16} /> <span>{b}</span></li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <SectionHead eyebrow="Engagement model" title="How an engagement runs." center />
          <div className="grid grid-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08} className="stepcard">
                <div className="stepcard__num">{p.step}</div>
                <h3 className="h-md">{p.title}</h3>
                <p className="muted" style={{ marginTop: "0.5rem" }}>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <SectionHead eyebrow="FAQ" title="Questions we hear most." />
            <div className="faq">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.05}>
                  <button className={`faq__item ${openFaq === i ? "is-open" : ""}`} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                    <div className="faq__q">{f.q} <Icon name="plus" size={18} /></div>
                    <div className="faq__a"><p className="muted">{f.a}</p></div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA title="Not sure which practice you need?" text="That's normal. Book a free 30-minute consultation and we'll map your goals to the right approach and budget." primary="Book a free consultation" />
    </>
  );
}
