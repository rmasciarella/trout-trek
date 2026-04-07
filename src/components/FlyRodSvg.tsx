/**
 * SVG illustration of an extended fly rod with reel, line, and fly.
 * Each rod has a unique accent color and subtle variation via the `variant` prop.
 */
export function FlyRodSvg({
  accent = '#8B9E7C',
  variant = 0,
  className = '',
}: {
  accent?: string
  variant?: number
  className?: string
}) {
  // Slight rotation variation per card so they don't all look identical
  const rotations = [-12, -8, -15, -5, -10, -18]
  const rot = rotations[variant % rotations.length]

  return (
    <svg
      viewBox="-30 -10 260 240"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform={`rotate(${rot}, 100, 100)`}>
        {/* Rod blank — tapers from butt to tip */}
        <line
          x1="38" y1="170"
          x2="170" y2="28"
          stroke={accent}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1="38" y1="170"
          x2="170" y2="28"
          stroke="url(#rodTaper)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Thinner tip section */}
        <line
          x1="120" y1="75"
          x2="170" y2="28"
          stroke={accent}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Cork grip */}
        <rect
          x="30" y="158" width="22" height="28"
          rx="4"
          transform="rotate(-42, 41, 172)"
          fill="#D4C9A8"
          stroke="#C2B690"
          strokeWidth="0.8"
        />
        {/* Cork texture lines */}
        <line x1="33" y1="166" x2="42" y2="158" stroke="#C2B690" strokeWidth="0.4" opacity="0.5" />
        <line x1="35" y1="170" x2="44" y2="162" stroke="#C2B690" strokeWidth="0.4" opacity="0.5" />
        <line x1="37" y1="174" x2="46" y2="166" stroke="#C2B690" strokeWidth="0.4" opacity="0.5" />

        {/* Reel seat */}
        <rect
          x="22" y="176" width="16" height="20"
          rx="3"
          transform="rotate(-42, 30, 186)"
          fill="#5C6B4E"
          stroke="#3D4A30"
          strokeWidth="0.8"
        />

        {/* Reel — circle at butt */}
        <circle cx="22" cy="190" r="10" fill="none" stroke="#9E8B6E" strokeWidth="1.8" />
        <circle cx="22" cy="190" r="6" fill="none" stroke="#9E8B6E" strokeWidth="0.8" opacity="0.6" />
        <circle cx="22" cy="190" r="2.5" fill="#9E8B6E" opacity="0.4" />

        {/* Guides (snake guides along the rod) */}
        {[
          { x: 60, y: 148 },
          { x: 80, y: 128 },
          { x: 100, y: 108 },
          { x: 120, y: 88 },
          { x: 140, y: 68 },
        ].map((g, i) => (
          <circle
            key={i}
            cx={g.x}
            cy={g.y}
            r={2 - i * 0.2}
            fill="none"
            stroke="#9E8B6E"
            strokeWidth="0.8"
            opacity={0.7 - i * 0.08}
          />
        ))}

        {/* Thread wraps at guides */}
        {[
          { x: 58, y: 150, x2: 62, y2: 146 },
          { x: 78, y: 130, x2: 82, y2: 126 },
          { x: 98, y: 110, x2: 102, y2: 106 },
        ].map((w, i) => (
          <line
            key={i}
            x1={w.x} y1={w.y}
            x2={w.x2} y2={w.y2}
            stroke="#C4704B"
            strokeWidth="2"
            strokeLinecap="round"
            opacity={0.5 - i * 0.1}
          />
        ))}

        {/* Fly line — graceful curve from tip */}
        <path
          d="M 170 28 Q 182 20 186 30 Q 190 42 178 48 Q 170 52 174 60"
          fill="none"
          stroke="#C4704B"
          strokeWidth="0.8"
          opacity="0.5"
          strokeLinecap="round"
        />

        {/* Tippet */}
        <path
          d="M 174 60 Q 176 66 172 70"
          fill="none"
          stroke="#9E8B6E"
          strokeWidth="0.4"
          opacity="0.4"
          strokeLinecap="round"
        />

        {/* Fly */}
        <g transform="translate(170, 70)">
          {/* Hook */}
          <path
            d="M 0 0 Q 4 2 5 6 Q 4 10 0 8"
            fill="none"
            stroke="#5C6B4E"
            strokeWidth="0.8"
            opacity="0.6"
          />
          {/* Hackle */}
          <circle cx="1" cy="2" r="2.5" fill={accent} opacity="0.3" />
          <circle cx="1" cy="2" r="1.5" fill={accent} opacity="0.5" />
        </g>
      </g>

      <defs>
        <linearGradient id="rodTaper" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3D4A30" stopOpacity="0.4" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
