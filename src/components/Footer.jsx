import { Link } from "react-router-dom";
import Logo from "./Logo";
import { company, nav, services } from "../data/company";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo size={40} tagline stacked />
            <p className="muted" style={{ marginTop: "1.2rem", maxWidth: 320 }}>
              We design, build and scale web, mobile, cloud and AI products for ambitious companies worldwide.
            </p>
            <div className="footer__socials">
              {company.socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}
            </div>
          </div>
          <div>
            <h4 className="footer__title">Company</h4>
            {[{ label: "Home", to: "/" }, ...nav, { label: "Team", to: "/team" }, { label: "Careers", to: "/careers" }].map((n) => <Link key={n.to} to={n.to} className="footer__link">{n.label}</Link>)}
          </div>
          <div>
            <h4 className="footer__title">Services</h4>
            {services.map((s) => <Link key={s.slug} to={`/services#${s.slug}`} className="footer__link">{s.title}</Link>)}
          </div>
          <div>
            <h4 className="footer__title">Contact</h4>
            <a href={`mailto:${company.email}`} className="footer__link">{company.email}</a>
            <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`} className="footer__link">{company.phone}</a>
            <p className="footer__link" style={{ color: "var(--text-3)" }}>{company.address}</p>
            <div className="footer__offices">{company.offices.map((o) => <span key={o} className="tag">{o}</span>)}</div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {company.name}, Inc. All rights reserved.</span>
          <span className="footer__meta">ISO 27001 · SOC 2 Type II · GDPR · AWS Partner</span>
        </div>
      </div>
    </footer>
  );
}
