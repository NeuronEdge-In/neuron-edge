import { Link } from "react-router-dom";
import { Reveal, SectionHead, SpotlightCard, CTA, PageHero } from "../components/ui";
import Img from "../components/Img";
import { team, company } from "../data/company";
import "./Pages.css";

export default function Team() {
  return (
    <>
      <PageHero eyebrow="Team" title={<>Leaders who still <span className="grad-text">write code.</span></>} lead={`120+ people across ${company.offices.join(", ")}. Our practice leads come from product companies, cloud providers and AI labs — and stay hands-on with every engagement.`} />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05}>
                <SpotlightCard className="person" style={{ height: "100%" }}>
                  <Img src={m.img} alt={m.name} className="person__photo" hover />
                  <h3 className="h-md" style={{ fontSize: "1.15rem" }}>{m.name}</h3>
                  <div className="person__role">{m.role}</div>
                  <p className="muted" style={{ fontSize: "0.9rem", marginTop: "0.7rem" }}>{m.bio}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section band">
        <div className="container">
          <SectionHead eyebrow="Culture" title="Small teams, big ownership." lead="We run in squads of 4–8 with a tech lead, a designer and a QA engineer. Every squad owns its outcome end-to-end — from discovery to the on-call rotation." />
          <Reveal><Link to="/careers" className="btn btn-primary">See open roles</Link></Reveal>
        </div>
      </section>
      <CTA title="Want to work with this team?" />
    </>
  );
}
