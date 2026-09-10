import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../components/Icon";
import { Reveal, PageHero } from "../components/ui";
import { company, services } from "../data/company";
import "./Pages.css";

export default function Contact() {
  const [params] = useSearchParams();
  const role = params.get("role");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", interest: role ? "Careers" : "", budget: "", message: role ? `I'd like to apply for the ${role} role.` : "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // TODO: wire to your backend / form service (e.g. Formspree, Resend, HubSpot).
    console.log("contact form", form);
    setSent(true);
  };

  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let's build something <span className="grad-text">great.</span></>} lead="Tell us about your project, timeline and budget. We reply within one business day with next steps." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact">
          <Reveal className="contact__form card" style={{ transform: "none" }}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="ok" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="contact__ok">
                  <div className="contact__check"><Icon name="check" size={28} /></div>
                  <h3 className="h-md">Message received.</h3>
                  <p className="muted" style={{ marginTop: "0.5rem" }}>Thanks, {form.name.split(" ")[0] || "there"}. Someone from the team will be in touch at {form.email}.</p>
                  <button className="btn btn-ghost" style={{ marginTop: "1.5rem" }} onClick={() => setSent(false)}>Send another</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="grid grid-2" style={{ gap: "1rem" }}>
                    <div className="field"><label>Name</label><input required value={form.name} onChange={set("name")} placeholder="Ada Lovelace" /></div>
                    <div className="field"><label>Work email</label><input required type="email" value={form.email} onChange={set("email")} placeholder="ada@company.com" /></div>
                    <div className="field"><label>Company</label><input value={form.company} onChange={set("company")} placeholder="Company, Inc." /></div>
                    <div className="field"><label>Interested in</label>
                      <select value={form.interest} onChange={set("interest")} required>
                        <option value="">Select…</option>
                        {services.map((s) => <option key={s.slug}>{s.title}</option>)}
                        <option>Product demo</option><option>Partnership</option><option>Careers</option><option>Other</option>
                      </select>
                    </div>
                    <div className="field" style={{ gridColumn: "1 / -1" }}><label>Budget range (optional)</label>
                      <select value={form.budget} onChange={set("budget")}>
                        <option value="">Prefer not to say</option><option>Under $50k</option><option>$50k – $150k</option><option>$150k – $500k</option><option>$500k+</option>
                      </select>
                    </div>
                    <div className="field" style={{ gridColumn: "1 / -1" }}><label>Message</label><textarea required rows={5} value={form.message} onChange={set("message")} placeholder="What are you trying to build, and what's getting in the way?" /></div>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>Send message <Icon name="arrow" size={16} className="arrow" /></button>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-3)", marginTop: "1rem" }}>By submitting you agree to our privacy policy. We never share your data.</p>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          <div className="contact__side">
            <Reveal delay={0.1} className="contact__item"><div className="contact__icon"><Icon name="mail" /></div><div><div className="contact__label">Email</div><a href={`mailto:${company.email}`}>{company.email}</a></div></Reveal>
            <Reveal delay={0.15} className="contact__item"><div className="contact__icon"><Icon name="phone" /></div><div><div className="contact__label">Phone</div><a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}>{company.phone}</a></div></Reveal>
            <Reveal delay={0.2} className="contact__item"><div className="contact__icon"><Icon name="pin" /></div><div><div className="contact__label">Headquarters</div><span>{company.address}</span></div></Reveal>
            <Reveal delay={0.25} className="contact__offices">
              <div className="contact__label">Offices</div>
              {company.offices.map((o) => <div key={o} className="contact__office"><span className="hero__dot" style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)" }} /> {o}</div>)}
            </Reveal>
            <Reveal delay={0.3} className="contact__map">
              <div className="bg-grid" style={{ maskImage: "none", opacity: 0.8 }} />
              <div className="contact__pin" style={{ left: "18%", top: "38%" }} /><div className="contact__pin" style={{ left: "47%", top: "30%" }} /><div className="contact__pin" style={{ left: "70%", top: "55%" }} />
              <svg viewBox="0 0 100 60" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" stroke="rgba(34,211,238,0.5)" strokeWidth="0.4" strokeDasharray="1.5 1.5"><path d="M18 23 Q32 10 47 18 Q60 26 70 33" /></svg>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
