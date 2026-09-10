import { Link } from "react-router-dom";
import { Reveal, SectionHead, SpotlightCard, CTA, PageHero, Counter } from "../components/ui";
import Img from "../components/Img";
import { values, milestones, stats, company } from "../data/company";
import "./Pages.css";

export default function About() {
  return (
    <>
      <PageHero eyebrow="About NeuronEdge" title={<>A technology partner that <span className="grad-text">ships.</span></>} lead={`Founded in ${company.founded}, NeuronEdge is an IT services and product company of 120+ engineers, designers and strategists. We build web, mobile, cloud and AI solutions — and our own SaaS products — for companies in ${company.offices.length} regions.`} />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split">
            <Reveal>
              <div className="eyebrow">Our story</div>
              <h2 className="h-lg">From a two-person studio to a global team.</h2>
            </Reveal>
            <Reveal delay={0.1} className="split__text">
              <p className="lead">NeuronEdge started in 2016 with two founders, one laptop each and a simple promise: build software that actually launches. Our first client was a local retailer who needed an online store in six weeks. It shipped in five.</p>
              <p className="muted" style={{ marginTop: "1rem" }}>That promise scaled. We added mobile, then cloud, then data and AI practices — always led by engineers who had shipped it before. In 2022 we launched EdgeFlow, our first product, and today four NeuronEdge products are used by hundreds of businesses.</p>
              <p className="muted" style={{ marginTop: "1rem" }}>Today we're 120+ people across {company.offices.join(", ")}, with 250+ projects delivered for startups, scale-ups and Fortune 500 enterprises.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="about__gallery">
            <Img src="https://picsum.photos/seed/ne-office-1/1000/900" alt="NeuronEdge office" hover style={{ borderRadius: 18, height: "100%" }} />
            <Img src="https://picsum.photos/seed/ne-office-2/600/400" alt="Team workshop" hover style={{ borderRadius: 18 }} />
            <Img src="https://picsum.photos/seed/ne-office-3/600/400" alt="Design review" hover style={{ borderRadius: 18 }} />
            <Img src="https://picsum.photos/seed/ne-office-4/600/400" alt="Engineering" hover style={{ borderRadius: 18 }} />
            <Img src="https://picsum.photos/seed/ne-office-5/600/400" alt="Team retreat" hover style={{ borderRadius: 18 }} />
          </Reveal>
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
          <SectionHead eyebrow="Values" title="Four principles we hire, build and ship by." />
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

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split">
            <SectionHead eyebrow="Leadership" title="Meet the people behind the work." lead="Practice leads who have shipped at scale, and who stay hands-on with every client." />
            <Reveal><Link to="/team" className="btn btn-primary">Meet the team</Link> <Link to="/careers" className="btn btn-ghost" style={{ marginLeft: "0.6rem" }}>We're hiring</Link></Reveal>
          </div>
        </div>
      </section>
      <CTA title="Want to know how we'd approach your project?" />
    </>
  );
}
