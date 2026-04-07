import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream/70 pattern-lines">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <p
              className="font-[family-name:var(--font-script)] text-3xl text-cream mb-4"
            >
              trout trek
            </p>
            <p className="text-sm leading-relaxed max-w-sm opacity-70">
              Handcrafted fly fishing rods built one at a time in small batches.
              Each rod carries the story of the hands that shaped it and the
              water it was born to fish.
            </p>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-display)] text-lg text-parchment mb-4 tracking-wide">
              Explore
            </h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-parchment transition-colors">
                Home
              </Link>
              <Link to="/collection" className="hover:text-parchment transition-colors">
                Collection
              </Link>
              <Link to="/about" className="hover:text-parchment transition-colors">
                Our Story
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-display)] text-lg text-parchment mb-4 tracking-wide">
              Connect
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <span className="opacity-70">hello@trouttrek.com</span>
              <span className="opacity-70">White Mountains, New Hampshire</span>
            </div>
          </div>
        </div>

        <div className="border-t border-sage/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/50">
            &copy; {new Date().getFullYear()} Trout Trek. All rods handcrafted
            with care.
          </p>
          <p className="text-lg text-cream/50 font-[family-name:var(--font-display)] italic">
            &ldquo;The best rod is the one that makes you forget you&rsquo;re holding it.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  )
}
