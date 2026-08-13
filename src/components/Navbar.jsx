import { useState, useEffect } from 'react'
import OrderButton from './OrderButton'

const navLinks = [
  { label: 'Menu',   href: '#menu'   },
  { label: 'Events', href: '#events' },
  { label: 'Hours',  href: '#hours'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-society-black/95 backdrop-blur-sm border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Society Sandwich Bar and Social Club"
            className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-society-gold/60 group-hover:border-society-gold transition-colors"
          />
          <span className="font-display text-white text-xl md:text-2xl uppercase tracking-widest leading-none">
            Society
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-display uppercase tracking-widest text-white/80 hover:text-society-gold transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <OrderButton label="Order Online" className="btn-primary !py-2 !px-5 !text-sm" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer bg-transparent border-0 p-0"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-society-black/98 border-b border-white/10 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-display uppercase tracking-widest text-white/80 hover:text-society-gold transition-colors text-lg py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 mt-1">
            <OrderButton label="Order Online" className="btn-primary !text-sm !py-2 !px-4" />
          </div>
        </div>
      </div>
    </header>
  )
}
