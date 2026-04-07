import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'nav-blur bg-parchment/85 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-[family-name:var(--font-script)] text-2xl text-forest hover:text-forest-deep transition-colors"
        >
          trout trek
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-light tracking-widest uppercase text-forest/70 hover:text-forest transition-colors"
            activeProps={{ className: 'text-sm font-light tracking-widest uppercase !text-forest !font-medium' }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/collection"
            className="text-sm font-light tracking-widest uppercase text-forest/70 hover:text-forest transition-colors"
            activeProps={{ className: 'text-sm font-light tracking-widest uppercase !text-forest !font-medium' }}
          >
            Collection
          </Link>
          <Link
            to="/about"
            className="text-sm font-light tracking-widest uppercase text-forest/70 hover:text-forest transition-colors"
            activeProps={{ className: 'text-sm font-light tracking-widest uppercase !text-forest !font-medium' }}
          >
            Our Story
          </Link>
          <Link
            to="/collection"
            className="ml-4 px-5 py-2 bg-forest text-parchment text-xs tracking-widest uppercase rounded-sm hover:bg-forest-deep transition-colors"
          >
            Shop
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-px bg-forest transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[4px]' : ''
            }`}
          />
          <span
            className={`w-5 h-px bg-forest transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-5 h-px bg-forest transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[4px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 nav-blur bg-parchment/95 ${
          menuOpen ? 'max-h-64 border-b border-sage/20' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          <Link
            to="/"
            className="text-sm tracking-widest uppercase text-forest"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/collection"
            className="text-sm tracking-widest uppercase text-forest"
            onClick={() => setMenuOpen(false)}
          >
            Collection
          </Link>
          <Link
            to="/about"
            className="text-sm tracking-widest uppercase text-forest"
            onClick={() => setMenuOpen(false)}
          >
            Our Story
          </Link>
        </div>
      </div>
    </header>
  )
}
