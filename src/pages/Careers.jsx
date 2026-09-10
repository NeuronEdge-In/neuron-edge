import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { Reveal, SectionHead, CTA, PageHero } from "../components/ui";
import { jobs, perks } from "../data/company";
import "./Pages.css";

export default function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title={<>Build products used by <span className="grad-text">millions.</span></>} lead="We're hiring across web, mobile, cloud, AI, design, QA and consulting. Remote-first, with hubs in San Francisco, London, Bengaluru and Dubai." />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead eyebrow="Open roles" title={`${jobs.length} positions open right now.`} />
          <div className="jobs">
            {jobs.map((j, i) => (
              <Reveal key={j.title} delay={i * 0.05}>
                <Link to={`/contact?role=${encodeURIComponent(j.title)}`} className="job">
                  <div>
                    <div className="job__title">{j.title}</div>
                    <div className="job__meta"><span>{j.team}</span><span>{j.location}</span><span>{j.type}</span></div>
                  </div>
                  <span className="job__cta">Apply <Icon name="arrow" size={16} className="arrow" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <div className="split">
            <SectionHead eyebrow="Why NeuronEdge" title="What it's like here." />
            <div className="grid grid-2" style={{ gap: "1rem" }}>
              {perks.map((p, i) => (
                <Reveal key={p} delay={i * 0.04}><div className="perk"><Icon name="check" size={16} /> {p}</div></Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="How we hire" title="Four steps, two weeks, no whiteboard trivia." center />
          <div className="grid grid-4">
            {[["01", "Intro call", "30 minutes with the hiring manager about you and the role."], ["02", "Technical deep-dive", "Walk us through something you've built. We ask real questions."], ["03", "Practical", "A paid, time-boxed problem close to what the team does daily."], ["04", "Team round", "Meet future teammates. Offer within 48 hours."]].map(([n, t, d], i) => (
                <Reveal key={n} delay={i * 0.08} className="stepcard">
                  <div className="stepcard__num">{n}</div>
                  <h3 className="h-md">{t}</h3>
                  <p className="muted" style={{ marginTop: "0.5rem" }}>{d}</p>
                </Reveal>
              ))}
          </div>
        </div>
      </section>
      <CTA title="Don't see the right role?" text="We hire exceptional people before we have the req. Send us a note about what you'd want to build." primary="Say hello" secondary="Meet the team" />
    </>
  );
}
