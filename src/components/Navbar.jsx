import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import Icon from "./Icon";
import { ThemeToggle } from "./Theme";
import { nav } from "../data/company";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <Link to="/" aria-label="NeuronEdge home"><Logo size={34} id="nav" /></Link>
        <nav className="nav__links">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}>{n.label}</NavLink>
          ))}
        </nav>
        <div className="nav__right">
          <ThemeToggle compact />
          <Link to="/contact" className="btn btn-primary nav__cta">Get a quote <Icon name="arrow" size={16} className="arrow" /></Link>
          <button className="nav__burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="nav__mobile" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
            {[{ label: "Home", to: "/" }, ...nav, { label: "Careers", to: "/careers" }].map((n, i) => (
              <motion.div key={n.to} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                <NavLink to={n.to} end={n.to === "/"} className={({ isActive }) => `nav__mobile-link ${isActive ? "is-active" : ""}`}>
                  <span className="nav__mobile-num">{String(i + 1).padStart(2, "0")}</span>{n.label}
                </NavLink>
              </motion.div>
            ))}
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn btn-primary">Get a quote</Link>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
