export default function Logo({ size = 36, withText = true, id = "ne" }) {
  const gid = `grad-${id}`;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(148,163,184,0.25)" />
        <path d="M18 46 L18 18 L46 46 L46 18" stroke={`url(#${gid})`} strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <g fill={`url(#${gid})`}>
          <circle cx="18" cy="18" r="4.6" />
          <circle cx="46" cy="46" r="4.6" />
          <circle cx="18" cy="46" r="3" />
          <circle cx="46" cy="18" r="3" />
        </g>
        <circle cx="32" cy="32" r="3.8" fill="#06080f" stroke={`url(#${gid})`} strokeWidth="2.6" />
      </svg>
      {withText && (
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: size * 0.58, letterSpacing: "-0.03em", lineHeight: 1 }}>
          Neuron<span className="grad-text">Edge</span>
        </span>
      )}
    </span>
  );
}
