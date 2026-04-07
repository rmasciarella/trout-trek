import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { getRodById, rods } from '../data/rods'
import { FlyRodSvg } from '../components/FlyRodSvg'

export const Route = createFileRoute('/rod/$rodId')({
  component: RodDetailPage,
  loader: ({ params }) => {
    const rod = getRodById(params.rodId)
    if (!rod) throw notFound()
    return rod
  },
})

function RodDetailPage() {
  const rod = Route.useLoaderData()

  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 animate-fade-in">
          <div className="flex items-center gap-2 text-xs text-forest/40">
            <Link to="/" className="hover:text-forest transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/collection" className="hover:text-forest transition-colors">
              Collection
            </Link>
            <span>/</span>
            <span className="text-forest/60">{rod.name}</span>
          </div>
        </nav>

        {/* Hero area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="animate-fade-up delay-100">
            <div
              className="relative rounded-sm overflow-hidden border border-sand/30 aspect-square flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${rod.accent}12, ${rod.accent}05, #FAF8F3)`,
              }}
            >
              <FlyRodSvg
                accent={rod.accent}
                variant={rods.findIndex((r) => r.id === rod.id)}
                className="w-52 h-52 animate-drift"
              />

              {/* Series badge */}
              <span className="absolute top-6 left-6 text-xs tracking-[0.2em] uppercase text-forest/40 bg-warm-white/70 px-3 py-1.5 rounded-sm">
                {rod.series}
              </span>

              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-sage/20 rounded-tr-sm" />
              <div className="absolute bottom-4 left-4 w-10 h-10 border-b border-l border-sage/20 rounded-bl-sm" />
            </div>
          </div>

          {/* Details */}
          <div className="animate-fade-up delay-200">
            <span className="text-xs tracking-[0.3em] uppercase text-sage block mb-2">
              {rod.series}
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-forest-deep mb-2">
              {rod.name}
            </h1>
            <p className="font-[family-name:var(--font-display)] text-lg text-driftwood italic mb-6">
              {rod.tagline}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-[family-name:var(--font-display)] text-3xl text-copper">
                ${rod.price.toLocaleString()}
              </span>
              <span className="text-xs text-forest/30">Handcrafted to order</span>
            </div>

            {/* Specs grid */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-5 bg-parchment rounded-sm border border-sand/30">
              {[
                { label: 'Length', value: rod.length },
                { label: 'Line Wt', value: rod.lineWeight },
                { label: 'Weight', value: rod.weight },
                { label: 'Pieces', value: `${rod.pieces}-piece` },
                { label: 'Action', value: rod.action },
                { label: 'Material', value: rod.material },
              ].map((spec) => (
                <div key={spec.label}>
                  <dt className="text-xs tracking-[0.15em] uppercase text-forest/30 mb-1">
                    {spec.label}
                  </dt>
                  <dd className="text-sm text-forest-deep font-medium">{spec.value}</dd>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-forest/60 leading-relaxed mb-8">{rod.description}</p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/checkout/$rodId"
                params={{ rodId: rod.id }}
                className="flex-1 px-6 py-3.5 bg-forest text-parchment text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-forest-deep transition-all duration-300 hover:shadow-lg hover:shadow-forest/20 text-center"
              >
                Inquire to Purchase
              </Link>
              <a
                href="mailto:hello@trouttrek.com"
                className="px-6 py-3.5 border border-forest/30 text-forest text-xs tracking-[0.2em] uppercase rounded-sm hover:border-forest hover:bg-forest/5 transition-all duration-300 text-center"
              >
                Ask a Question
              </a>
            </div>

            <p className="text-xs text-forest/30 mt-4">
              Each rod is built to order. Current lead time: 8–12 weeks.
            </p>
          </div>
        </div>

        {/* Full description & features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Story */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-copper" />
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-forest-deep">
                The Story
              </h2>
            </div>
            <p className="text-forest/60 leading-relaxed text-base">{rod.longDescription}</p>
          </div>

          {/* Features + Ideal for */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-copper" />
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-forest-deep">
                Features
              </h2>
            </div>
            <ul className="space-y-3 mb-10">
              {rod.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-forest/60">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-copper/60 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="bg-parchment p-6 rounded-sm border border-sand/30">
              <h3 className="font-[family-name:var(--font-display)] text-lg text-forest-deep mb-2">
                Ideal For
              </h3>
              <p className="text-sm text-forest/50 leading-relaxed">{rod.idealFor}</p>
            </div>
          </div>
        </div>

        {/* Back to collection */}
        <div className="text-center border-t border-sand/30 pt-12">
          <Link
            to="/collection"
            className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-forest/50 hover:text-forest transition-colors group"
          >
            <span className="inline-block transition-transform group-hover:-translate-x-1">
              &larr;
            </span>
            Back to Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
