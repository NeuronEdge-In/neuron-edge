import { useEffect } from "react";

/**
 * Lightweight, zero-dependency SEO & Structured Data synchronizer.
 * Dynamically updates document.title, meta tags, canonical link,
 * OpenGraph, Twitter Cards, and injects Schema.org JSON-LD scripts.
 */
export default function SEO({
  title,
  description,
  image = "/brand/og-image.png",
  type = "website",
  path = "",
  schema = null,
}) {
  useEffect(() => {
    // 1. Update Document Title
    const prevTitle = document.title;
    if (title) {
      document.title = `${title} | NeuronEdge`;
    }

    // Helper to safely set or update a meta tag
    const setMeta = (name, content, isProp = false) => {
      const attr = isProp ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content || "");
    };

    // 2. Primary Meta Tags
    if (description) {
      setMeta("description", description);
    }

    // 3. Dynamic Canonical URL
    const fullUrl = `https://neuronedge.in${path}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // 4. Open Graph Tags
    const ogImage = image.startsWith("http") ? image : `https://neuronedge.in${image}`;
    setMeta("og:title", title ? `${title} | NeuronEdge` : "NeuronEdge", true);
    setMeta("og:description", description || "", true);
    setMeta("og:type", type, true);
    setMeta("og:url", fullUrl, true);
    setMeta("og:image", ogImage, true);

    // 5. Twitter Card Tags
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title ? `${title} | NeuronEdge` : "NeuronEdge");
    setMeta("twitter:description", description || "");
    setMeta("twitter:image", ogImage);

    // 6. Structured Schema.org JSON-LD
    let scriptEl = document.getElementById("route-json-ld");
    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = "route-json-ld";
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    // Cleanup on unmount or route change
    return () => {
      document.title = prevTitle;
      const s = document.getElementById("route-json-ld");
      if (s) s.remove();
    };
  }, [title, description, image, type, path, schema]);

  return null;
}
