import { asset } from "../lib/asset";
import { company } from "../data/company";
import "./Logo.css";

const SRC_SET = [96, 256].map((w) => `${asset(`brand/logo-mark-${w}.png`)} ${w}w`).join(", ");

export default function Logo({ size = 36, mark = true, withText = true, tagline = false, stacked = false, className = "" }) {
  return (
    <span className={`logo ${stacked ? "logo--stacked" : ""} ${className}`} style={{ "--logo-size": `${size}px` }}>
      {mark && (
        <img
          className="logo__mark"
          src={asset("brand/logo-mark-256.png")}
          srcSet={SRC_SET}
          sizes={`${stacked ? Math.round(size * 1.5) : size}px`}
          width={size}
          height={size}
          alt={withText ? "" : `${company.name} logo`}
          aria-hidden={withText || undefined}
          decoding="async"
        />
      )}
      {withText && (
        <span className="logo__text">
          <span className="logo__word">Neuron<span className="grad-text">Edge</span></span>
          {tagline && <span className="logo__tagline">{company.promise}</span>}
        </span>
      )}
    </span>
  );
}
