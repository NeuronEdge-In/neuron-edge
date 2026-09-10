import { createContext, useContext, useEffect, useState } from "react";
import Icon from "./Icon";

const ThemeCtx = createContext({ pref: "system", resolved: "dark", setPref: () => {} });
const KEY = "ne-theme";

function systemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }) {
  const [pref, setPref] = useState(() => { try { return localStorage.getItem(KEY) || "system"; } catch { return "system"; } });
  const [resolved, setResolved] = useState(() => (pref === "system" ? systemTheme() : pref));

  useEffect(() => {
    const apply = () => {
      const r = pref === "system" ? systemTheme() : pref;
      setResolved(r);
      document.documentElement.setAttribute("data-theme", r);
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", r === "dark" ? "#06080f" : "#f6f8fc");
    };
    apply();
    try { localStorage.setItem(KEY, pref); } catch { /* ignore */ }
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [pref]);

  return <ThemeCtx.Provider value={{ pref, resolved, setPref }}>{children}</ThemeCtx.Provider>;
}

export const useTheme = () => useContext(ThemeCtx);

const options = [["light", "sun", "Light"], ["dark", "moon", "Dark"], ["system", "monitor", "System"]];

export function ThemeToggle({ compact = false }) {
  const { pref, setPref } = useTheme();
  return (
    <div className="theme-toggle" role="radiogroup" aria-label="Colour theme">
      {options.map(([v, icon, label]) => (
        <button key={v} role="radio" aria-checked={pref === v} className={`theme-toggle__btn ${pref === v ? "is-active" : ""}`} onClick={() => setPref(v)} title={label} aria-label={label}>
          <Icon name={icon} size={16} />{compact ? null : <span>{label}</span>}
        </button>
      ))}
    </div>
  );
}
