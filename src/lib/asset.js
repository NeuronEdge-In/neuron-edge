/* Resolve a path inside /public against the deploy base (the site ships under a sub-path). */
export function asset(src) {
  if (!src) return src;
  if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) return src;
  const base = import.meta.env.BASE_URL || "/";
  return `${base.endsWith("/") ? base : `${base}/`}${src.startsWith("/") ? src.slice(1) : src}`;
}
