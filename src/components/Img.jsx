import { useState } from "react";

/* Image with fade-in and a graceful gradient fallback — never shows a broken-image icon. */
export default function Img({ src, alt = "", className = "", style, hover = false, ratio, ...rest }) {
  const [state, setState] = useState("loading");
  return (
    <div className={`img-wrap ${hover ? "img-hover" : ""} ${state === "loaded" ? "is-loaded" : ""} ${state === "error" ? "is-error" : ""} ${className}`} style={{ aspectRatio: ratio, ...style }}>
      {state !== "error" && (
        <img src={src} alt={alt} loading="lazy" decoding="async" className="img" onLoad={() => setState("loaded")} onError={() => setState("error")} {...rest} />
      )}
    </div>
  );
}
