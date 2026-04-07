import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { RodCard } from '../components/RodCard'
import { Seo } from '../components/Seo'
import { rods } from '../data/rods'

export const Route = createFileRoute('/collection')({
  component: CollectionPage,
})

const series = ['All', ...new Set(rods.map((r) => r.series))]

function CollectionPage() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? rods : rods.filter((r) => r.series === filter)

  return (
    <div className="pt-24 pb-24 px-6">
      <Seo
        title="Collection"
        description="Browse our full collection of handcrafted fly fishing rods. Bamboo, fiberglass, and hybrid rods built one at a time in the White Mountains of New Hampshire."
        canonical="/collection"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Trout Trek Rod Collection',
          description: 'Handcrafted fly fishing rods — bamboo, fiberglass, and hybrid.',
          url: 'https://www.trout-trek.com/collection',
        }}
      />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-sage block mb-3 animate-fade-in">
            Handcrafted with Purpose
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl text-forest-deep animate-fade-up delay-100">
            The Collection
          </h1>
          <p className="mt-4 text-forest/50 max-w-lg mx-auto animate-fade-up delay-200">
            Each rod in our collection represents a specific approach to the water.
            Choose the one that matches the way you fish.
          </p>
          <div className="mt-4 w-16 h-px bg-copper mx-auto" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-up delay-300">
          {series.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-5 py-2 text-xs tracking-[0.15em] uppercase rounded-sm transition-all duration-300 ${
                filter === s
                  ? 'bg-forest text-parchment'
                  : 'bg-parchment text-forest/50 border border-sand/50 hover:border-sage/50 hover:text-forest'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Rod grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((rod, i) => (
            <RodCard key={rod.id} rod={rod} index={i} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-[family-name:var(--font-display)] text-2xl text-forest/30 italic">
              No rods in this series yet
            </p>
          </div>
        )}

        {/* Bottom note */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-parchment border border-sand/50 rounded-sm px-8 py-6 max-w-lg">
            <p className="font-[family-name:var(--font-display)] text-lg text-forest-deep mb-2">
              Custom Orders Welcome
            </p>
            <p className="text-sm text-forest/50 leading-relaxed">
              Don&rsquo;t see exactly what you&rsquo;re looking for? We build custom rods
              to your specifications. Reach out to discuss your dream rod.
            </p>
            <a
              href="mailto:hello@trouttrek.com"
              className="inline-block mt-4 text-xs tracking-[0.15em] uppercase text-copper hover:text-copper-light transition-colors"
            >
              hello@trouttrek.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
