import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../components/Icon";
import { Reveal, PageHero } from "../components/ui";
import { company, services } from "../data/company";
import "./Pages.css";

function CustomSelect({ value, onChange, options, placeholder = "Select…" }) {
  const [open, setOpen] = useState(false);
  const ref = useState(null)[0] || { current: null };
  const containerRef = useState(() => ({ current: null }))[0];

  return (
    <div
      className="cselect"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
      tabIndex={-1}
    >
      <button
        type="button"
        className={`cselect__trigger ${open ? "is-open" : ""} ${!value ? "is-placeholder" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{value || placeholder}</span>
        <Icon name="chevron" size={16} className={`cselect__arrow ${open ? "is-rotated" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="cselect__menu"
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            {options.map((opt) => {
              const isSelected = opt === value;
              return (
                <li
                  key={opt}
                  role="option"
                  aria-selected={isSelected}
                  className={`cselect__option ${isSelected ? "is-selected" : ""}`}
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                >
                  <span>{opt}</span>
                  {isSelected && <Icon name="check" size={14} className="cselect__check" />}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const [params] = useSearchParams();
  const role = params.get("role");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: role ? "Careers" : "",
    budget: "",
    message: role ? `I'd like to apply for the ${role} role.` : ""
  });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const setVal = (k) => (val) => setForm((prev) => ({ ...prev, [k]: val }));

  const interestOptions = [
    ...services.map((s) => s.title),
    "Product demo",
    "Partnership",
    "Careers",
    "Other"
  ];

  const budgetOptions = [
    "Prefer not to say",
    "Under $50k",
    "$50k – $150k",
    "$150k – $500k",
    "$500k+"
  ];

  const submit = (e) => {
    e.preventDefault();
    console.log("Contact form submission:", form);
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
                  <button className="btn btn-ghost" style={{ marginTop: "1.5rem" }} onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", interest: "", budget: "", message: "" }); }}>Send another</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="grid grid-2" style={{ gap: "1rem" }}>
                    <div className="field"><label>Name</label><input required value={form.name} onChange={set("name")} placeholder="Ada Lovelace" /></div>
                    <div className="field"><label>Work email</label><input required type="email" value={form.email} onChange={set("email")} placeholder="ada@company.com" /></div>
                    <div className="field"><label>Company</label><input value={form.company} onChange={set("company")} placeholder="Company, Inc." /></div>
                    <div className="field"><label>Interested in</label>
                      <CustomSelect
                        value={form.interest}
                        onChange={setVal("interest")}
                        options={interestOptions}
                        placeholder="Select service or topic…"
                      />
                    </div>
                    <div className="field" style={{ gridColumn: "1 / -1" }}><label>Budget range (optional)</label>
                      <CustomSelect
                        value={form.budget}
                        onChange={setVal("budget")}
                        options={budgetOptions}
                        placeholder="Select budget range…"
                      />
                    </div>
                    <div className="field" style={{ gridColumn: "1 / -1" }}><label>Message</label><textarea required rows={5} value={form.message} onChange={set("message")} placeholder="What are you trying to build, and what's getting in the way?" /></div>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
                    Send message <Icon name="arrow" size={16} className="arrow" />
                  </button>
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
              <div className="contact__pin" style={{ left: "64%", top: "46%" }} />
              <div style={{ position: "absolute", left: "64%", top: "46%", transform: "translate(-50%, -50%)", width: 48, height: 48, borderRadius: "50%", border: "1px solid rgba(34,211,238,0.3)", animation: "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite" }} />
              <div style={{ position: "absolute", left: "64%", top: "62%", transform: "translateX(-50%)", fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--cyan)", background: "rgba(var(--bg-rgb), 0.85)", padding: "2px 8px", borderRadius: 999, border: "1px solid var(--line)" }}>Gujarat, IN</div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
