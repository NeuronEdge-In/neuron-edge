import { siGooglecloud, siVercel, siStripe, siShopify, siHubspot, siAtlassian, siGithub, siDigitalocean, siCloudflare, siNotion, siAuth0, siZapier, siSupabase,
  siReact, siNextdotjs, siTypescript, siNodedotjs, siFlutter, siKotlin, siSwift, siPython, siPytorch, siTensorflow, siDocker, siKubernetes, siPostgresql, siMongodb, siGraphql, siFirebase, siTerraform, siFigma } from "simple-icons";

const brand = (icon, name, color) => ({ name: name || icon.title, path: icon.path, color: color || `#${icon.hex}` });
// Neutral colour for near-black brand marks so they stay visible in dark mode.
const N = "#94a3b8";

export const partners = [
  brand(siGooglecloud, "Google Cloud"), brand(siCloudflare), brand(siVercel, "Vercel", N), brand(siStripe), brand(siShopify), brand(siHubspot),
  brand(siAtlassian), brand(siGithub, "GitHub", N), brand(siDigitalocean), brand(siSupabase), brand(siAuth0, "Auth0"), brand(siZapier), brand(siNotion, "Notion", N),
];

export const techStack = [
  brand(siReact), brand(siNextdotjs, "Next.js", N), brand(siTypescript), brand(siNodedotjs, "Node.js"), brand(siFlutter), brand(siKotlin), brand(siSwift), brand(siPython), brand(siPytorch),
  brand(siTensorflow), brand(siDocker), brand(siKubernetes), brand(siPostgresql), brand(siMongodb), brand(siGraphql), brand(siFirebase), brand(siTerraform), brand(siFigma),
];

export function BrandIcon({ icon, size = 28, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label={icon.name} style={style}>
      <path d={icon.path} fill={icon.color} />
    </svg>
  );
}
