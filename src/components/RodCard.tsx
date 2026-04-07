import { Link } from '@tanstack/react-router'
import type { Rod } from '../data/rods'
import { FlyRodSvg } from './FlyRodSvg'

export function RodCard({ rod, index = 0 }: { rod: Rod; index?: number }) {
  return (
    <Link
      to="/rod/$rodId"
      params={{ rodId: rod.id }}
      className={`rod-card block bg-parchment rounded-sm overflow-hidden border border-sand/50 animate-fade-up delay-${(index % 4) * 100 + 200}`}
    >
      {/* Image area */}
      <div
        className="relative h-64 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${rod.accent}15, ${rod.accent}08)`,
        }}
      >
        <FlyRodSvg
          accent={rod.accent}
          variant={index}
          className="w-36 h-36 animate-drift"
        />

        {/* Series badge */}
        <span className="absolute top-4 left-4 text-xs tracking-[0.2em] uppercase text-forest/50 bg-warm-white/60 px-3 py-1 rounded-sm">
          {rod.series}
        </span>

        {/* Decorative corner line */}
        <svg className="absolute bottom-0 right-0 w-16 h-16 opacity-20" viewBox="0 0 64 64">
          <path d="M 64 0 L 64 64 L 0 64" fill="none" stroke={rod.accent} strokeWidth="1" />
        </svg>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-[family-name:var(--font-display)] text-2xl text-forest-deep mb-1">
          {rod.name}
        </h3>
        <p className="text-xs text-driftwood italic mb-3 font-[family-name:var(--font-display)]">
          {rod.tagline}
        </p>
        <p className="text-sm text-forest/60 leading-relaxed mb-4 line-clamp-2">
          {rod.description}
        </p>

        {/* Specs row */}
        <div className="flex items-center gap-3 text-xs text-forest/40 mb-4">
          <span>{rod.length}</span>
          <span className="w-px h-3 bg-sand" />
          <span>{rod.lineWeight}</span>
          <span className="w-px h-3 bg-sand" />
          <span>{rod.material}</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="font-[family-name:var(--font-display)] text-xl text-copper">
            ${rod.price.toLocaleString()}
          </span>
          <span className="text-xs tracking-[0.2em] uppercase text-sage hover:text-forest transition-colors">
            View Details &rarr;
          </span>
        </div>
      </div>
    </Link>
  )
}
