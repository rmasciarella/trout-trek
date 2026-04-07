import { createFileRoute, Link } from '@tanstack/react-router'
import { Logo } from '../components/Logo'
import { RodCard } from '../components/RodCard'
import { FlyRodSvg } from '../components/FlyRodSvg'
import { rods } from '../data/rods'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const featured = rods.slice(0, 3)

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pattern-lines opacity-50" />

        {/* Floating accent circles */}
        <div className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-sage/5 blur-3xl animate-drift" />
        <div
          className="absolute bottom-1/4 right-[15%] w-48 h-48 rounded-full bg-copper/5 blur-3xl animate-drift"
          style={{ animationDelay: '3s' }}
        />

        {/* Horizontal rule accent */}
        <div className="animate-fade-in delay-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-sage/40" />
            <span className="text-xs tracking-[0.3em] uppercase text-sage/60">
              Est. 2024 &middot; White Mountains, NH
            </span>
            <div className="w-12 h-px bg-sage/40" />
          </div>
        </div>

        {/* Logo */}
        <div className="animate-fade-up delay-200 relative z-10">
          <Logo width={420} className="max-w-full" />
        </div>

        {/* Tagline */}
        <p className="animate-fade-up delay-400 mt-8 font-[family-name:var(--font-display)] text-xl md:text-2xl text-forest/70 text-center italic max-w-lg">
          Handcrafted fly rods for anglers who feel the difference
        </p>

        {/* CTA */}
        <div className="animate-fade-up delay-600 mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <Link
            to="/collection"
            className="px-8 py-3 bg-forest text-parchment text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-forest-deep transition-all duration-300 hover:shadow-lg hover:shadow-forest/20"
          >
            View Collection
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 border border-forest/30 text-forest text-xs tracking-[0.2em] uppercase rounded-sm hover:border-forest hover:bg-forest/5 transition-all duration-300"
          >
            Our Story
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-800">
          <div className="flex flex-col items-center gap-2 text-sage/40">
            <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-sage/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Philosophy strip ── */}
      <section className="bg-forest-deep py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-lichen/90 leading-relaxed italic">
            &ldquo;A great fly rod doesn&rsquo;t announce itself. It disappears in your hand,
            leaving only the line, the fly, and the river.&rdquo;
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-sage/30" />
            <span className="text-xs tracking-[0.3em] uppercase text-lichen/80">
              Our Philosophy
            </span>
            <div className="w-8 h-px bg-sage/30" />
          </div>
        </div>
      </section>

      {/* ── Featured Rods ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-sage block mb-3">
              Handcrafted Collection
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-forest-deep">
              Featured Rods
            </h2>
            <div className="mt-4 w-16 h-px bg-copper mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((rod, i) => (
              <RodCard key={rod.id} rod={rod} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-forest/60 hover:text-forest transition-colors group"
            >
              View Full Collection
              <span className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Craftsmanship ── */}
      <section className="py-24 px-6 bg-parchment">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - visual */}
            <div className="relative">
              <div className="bg-warm-white rounded-sm p-12 border border-sand/30">
                {/* Decorative process steps */}
                <div className="space-y-8">
                  {[
                    { step: '01', title: 'Select', desc: 'Hand-picking Tonkin cane culms for straightness, node spacing, and power fiber density.' },
                    { step: '02', title: 'Split & Plane', desc: 'Each strip is split by hand, rough-planed, then finish-planed to within 0.002" of the target taper.' },
                    { step: '03', title: 'Bind & Glue', desc: 'Six strips bound into a hexagonal blank with hide glue, heat-set under tension.' },
                    { step: '04', title: 'Finish', desc: 'Multiple coats of hand-rubbed varnish, fitted hardware, and a final cast test on the water.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <span className="font-[family-name:var(--font-display)] text-3xl text-copper/30 mt-[-4px] shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="font-[family-name:var(--font-display)] text-xl text-forest-deep mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-forest/50 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-sage/30 rounded-tl-sm" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-sage/30 rounded-br-sm" />
            </div>

            {/* Right - text */}
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-sage block mb-3">
                The Process
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-forest-deep mb-6 leading-tight">
                Built by hand,
                <br />
                <span className="italic text-sage">tested on the water</span>
              </h2>
              <p className="text-forest/60 leading-relaxed mb-6">
                Every Trout Trek rod passes through over 40 individual steps, each performed
                by hand. There are no CNC machines in our shop — just sharp planes, patient
                hands, and decades of accumulated knowledge about what makes bamboo sing.
              </p>
              <p className="text-forest/60 leading-relaxed mb-8">
                Before any rod leaves the bench, it&rsquo;s assembled and cast-tested on our
                home water. We don&rsquo;t ship a rod we wouldn&rsquo;t fish ourselves.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-forest/30 text-forest text-xs tracking-[0.2em] uppercase rounded-sm hover:border-forest hover:bg-forest/5 transition-all duration-300"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Materials strip ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Tonkin Bamboo', sub: 'Hand-selected culms', accent: '#8B9E7C', v: 0 },
              { label: 'S-Glass', sub: 'Custom-tapered blanks', accent: '#7A9AAE', v: 1 },
              { label: 'Portuguese Cork', sub: 'Super-grade only', accent: '#C4704B', v: 2 },
              { label: 'Nickel Silver', sub: 'Oxidized ferrules', accent: '#9E8B6E', v: 3 },
            ].map((m) => (
              <div key={m.label} className="group">
                <FlyRodSvg
                  accent={m.accent}
                  variant={m.v}
                  className="w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <h4 className="font-[family-name:var(--font-display)] text-lg text-forest-deep">
                  {m.label}
                </h4>
                <p className="text-xs text-forest/40 mt-1">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-24 px-6 bg-forest-deep relative overflow-hidden">
        <div className="absolute inset-0 pattern-lines opacity-30" />
        <div className="max-w-xl mx-auto text-center relative z-10">
          <span className="text-xs tracking-[0.3em] uppercase text-sage/50 block mb-3">
            Stay Connected
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-cream mb-4">
            From the Bench
          </h2>
          <p className="text-lichen/60 text-sm leading-relaxed mb-8">
            Occasional dispatches about new rods, techniques, and the rivers
            that inspire us. No spam — just honest words from the workshop.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-forest/50 border border-sage/20 text-cream placeholder-sage/40 text-sm rounded-sm focus:outline-none focus:border-sage/50 transition-colors"
            />
            <button className="px-6 py-3 bg-copper text-parchment text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-copper-light transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
