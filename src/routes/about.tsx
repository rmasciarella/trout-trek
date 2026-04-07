import { createFileRoute, Link } from '@tanstack/react-router'
import { FlyRodSvg } from '../components/FlyRodSvg'
import { Seo } from '../components/Seo'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="pt-24 pb-24">
      <Seo
        title="Our Story"
        description="Trout Trek started in the White Mountains of New Hampshire with a block of Tonkin cane and a hand plane. Learn about our philosophy, materials, and process."
        canonical="/about"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Trout Trek',
          description: 'The story behind Trout Trek handcrafted fly rods.',
          url: 'https://www.trout-trek.com/about',
        }}
      />
      {/* Hero */}
      <section className="px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-sage block mb-3 animate-fade-in">
            Our Story
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl text-forest-deep animate-fade-up delay-100 leading-tight">
            Born on the river,
            <br />
            <span className="italic text-sage">built at the bench</span>
          </h1>
          <div className="mt-6 w-16 h-px bg-copper mx-auto animate-fade-up delay-200" />
          <p className="mt-8 text-forest/60 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-300">
            Trout Trek started the way most good things do — with a question
            nobody was asking. What if a fly rod could carry the same quiet
            intention as the rivers we fish? Not louder, not flashier, just
            more honest.
          </p>
        </div>
      </section>

      {/* Origin story */}
      <section className="px-6 mb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="bg-parchment rounded-sm p-10 border border-sand/30 relative">
                  <FlyRodSvg accent="#7A9AAE" variant={3} className="w-32 h-32 mx-auto mb-4" />
                  <p className="font-[family-name:var(--font-display)] text-xl text-forest-deep italic">
                    &ldquo;I wanted to build rods that felt like the places I fished —
                    unhurried, deliberate, alive.&rdquo;
                  </p>
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-copper/30" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-copper/30" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-forest-deep mb-4">
                  The Beginning
                </h3>
                <p className="text-forest/60 leading-relaxed">
                  It started in a workshop in the White Mountains of New Hampshire,
                  with a block of Tonkin cane and a hand plane borrowed from a neighbor.
                  The first rod took three months to build and cast terribly. The second
                  was worse. But somewhere around rod number seven, something clicked —
                  the strips fell into alignment, the taper did what the math said it
                  should, and for the first time, a cast unrolled across the
                  Pemigewasset River with the kind of grace that makes you forget
                  you&rsquo;re the one casting.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-forest-deep mb-4">
                  The Philosophy
                </h3>
                <p className="text-forest/60 leading-relaxed">
                  We don&rsquo;t build the fastest rods or the lightest rods or the
                  most technologically advanced rods. We build rods that feel right —
                  rods with a soul. Every taper we develop is tested obsessively, not
                  in a lab, but on the water. We cast them in wind. We fish them in
                  rain. We let our friends break them so we can learn where they fail.
                </p>
                <p className="text-forest/60 leading-relaxed mt-4">
                  When a taper earns its name, it goes into production — a word we use
                  loosely, since &ldquo;production&rdquo; means one person, one rod, one
                  bench. We build in small batches because that&rsquo;s the only way to
                  build with the attention these materials deserve.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-forest-deep mb-4">
                  The Materials
                </h3>
                <p className="text-forest/60 leading-relaxed">
                  Our bamboo comes from the Tonkin region of Vietnam — the same
                  source that has supplied rod builders for over a century. We select
                  culms by hand, looking for straight nodes, tight power fibers, and
                  the deep amber color that indicates proper curing. Our fiberglass
                  blanks are tapered in-house from premium S-glass and E-glass cloth,
                  wrapped on custom mandrels we designed ourselves.
                </p>
                <p className="text-forest/60 leading-relaxed mt-4">
                  Hardware is sourced from the best remaining suppliers: nickel-silver
                  ferrules from Bellinger, agate guides from England, cork from
                  Portugal. Where we can&rsquo;t find what we need, we make it — our
                  reel seats are turned on a lathe from locally sourced hardwoods.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-forest-deep mb-4">
                  The Promise
                </h3>
                <p className="text-forest/60 leading-relaxed">
                  Every rod that leaves our shop is one we&rsquo;d fish ourselves.
                  That&rsquo;s not a marketing line — it&rsquo;s literally true.
                  Before a rod ships, it&rsquo;s assembled, strung up, and cast on
                  the water. If it doesn&rsquo;t make us smile, it goes back to the
                  bench. Life is too short for mediocre fly rods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 bg-forest-deep mb-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-cream">
              What We Believe
            </h2>
            <div className="mt-4 w-12 h-px bg-copper mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Slow is better',
                body: 'Great things take time. We refuse to rush the process or cut corners to meet demand. If you want a Trout Trek rod, it\'s worth the wait.',
              },
              {
                title: 'Materials matter',
                body: 'The difference between a good rod and a great rod often comes down to the quality of what goes into it. We use the best, period.',
              },
              {
                title: 'Fish more',
                body: 'A rod that sits in a tube is just a stick. We build rods to be used — scratched, dinged, and loved. Take it fishing.',
              },
            ].map((v) => (
              <div key={v.title} className="bg-forest/30 p-8 rounded-sm border border-sage/10">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-lichen mb-3">
                  {v.title}
                </h3>
                <p className="text-lichen/60 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-forest-deep mb-4">
            Ready to find your rod?
          </h2>
          <p className="text-forest/50 mb-8 max-w-md mx-auto">
            Browse our collection or reach out to discuss a custom build
            tailored to the water you love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/collection"
              className="px-8 py-3 bg-forest text-parchment text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-forest-deep transition-all duration-300"
            >
              View Collection
            </Link>
            <a
              href="mailto:hello@trouttrek.com"
              className="px-8 py-3 border border-forest/30 text-forest text-xs tracking-[0.2em] uppercase rounded-sm hover:border-forest hover:bg-forest/5 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
