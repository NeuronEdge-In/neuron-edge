import { useState } from "react";

function resolveSrc(src) {
  if (!src) return src;
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("//") ||
    src.startsWith("data:")
  ) {
    return src;
  }
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = src.startsWith("/") ? src.slice(1) : src;
  return `${normalizedBase}${normalizedPath}`;
}

/* Image with fade-in and a graceful gradient fallback — never shows a broken-image icon. */
export default function Img({ src, alt = "", className = "", style, hover = false, ratio, ...rest }) {
  const [state, setState] = useState("loading");
  const finalSrc = resolveSrc(src);

  return (
    <div className={`img-wrap ${hover ? "img-hover" : ""} ${state === "loaded" ? "is-loaded" : ""} ${state === "error" ? "is-error" : ""} ${className}`} style={{ aspectRatio: ratio, ...style }}>
      {state !== "error" && (
        <img src={finalSrc} alt={alt} loading="lazy" decoding="async" className="img" onLoad={() => setState("loaded")} onError={() => setState("error")} {...rest} />
      )}
    </div>
  );
}
