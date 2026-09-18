import { siGooglecloud, siVercel, siStripe, siShopify, siHubspot, siAtlassian, siGithub, siDigitalocean, siCloudflare, siNotion, siAuth0, siZapier, siSupabase,
  siReact, siNextdotjs, siTypescript, siNodedotjs, siFlutter, siKotlin, siSwift, siPython, siPytorch, siTensorflow, siDocker, siKubernetes, siPostgresql, siMongodb, siGraphql, siFirebase, siTerraform, siFigma,
  siDjango, siRedis, siFastify, siExpo, siUpstash, siTailwindcss, siVite, siCelery, siBootstrap, siSqlite } from "simple-icons";

const brand = (icon, name, color) => ({ name: name || icon.title, path: icon.path, color: color || `#${icon.hex}` });
// Neutral colour for near-black brand marks so they stay visible in dark mode.
const N = "#94a3b8";

export const partners = [
  brand(siGooglecloud, "Google Cloud"), brand(siCloudflare), brand(siVercel, "Vercel", N), brand(siStripe), brand(siShopify), brand(siHubspot),
  brand(siAtlassian), brand(siGithub, "GitHub", N), brand(siDigitalocean), brand(siSupabase), brand(siAuth0, "Auth0"), brand(siZapier), brand(siNotion, "Notion", N),
];

export const techStack = [
  brand(siReact), brand(siNextdotjs, "Next.js", N), brand(siTypescript), brand(siNodedotjs, "Node.js"), brand(siDjango, "Django", "#44B78B"), brand(siFastify, "Fastify", N),
  brand(siFlutter), brand(siExpo, "Expo", N), brand(siKotlin), brand(siSwift), brand(siPython), brand(siPytorch), brand(siTensorflow),
  brand(siPostgresql), brand(siRedis, "Redis", "#FF4438"), brand(siUpstash, "Upstash", "#00E9A3"), brand(siMongodb), brand(siSqlite, "SQLite", "#0EA5E9"),
  brand(siDocker), brand(siKubernetes), brand(siTerraform), brand(siTailwindcss, "Tailwind CSS", "#06B6D4"), brand(siVite, "Vite", "#9135FF"),
  brand(siCelery, "Celery", "#37814A"), brand(siBootstrap, "Bootstrap", "#7952B3"), brand(siGraphql), brand(siFirebase), brand(siFigma),
];

export function BrandIcon({ icon, size = 28, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label={icon.name} style={style}>
      <path d={icon.path} fill={icon.color} />
    </svg>
  );
}
