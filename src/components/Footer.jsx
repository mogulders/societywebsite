const navLinks = [
  { label: 'Menu',     href: '#menu'    },
  { label: 'Events',   href: '#events'  },
  { label: 'Hours',    href: '#hours'   },
  { label: 'About',    href: '#about'   },
]

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-society-black border-t border-white/10">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Society Sandwich Bar and Social Club"
                className="h-12 w-12 rounded-full border-2 border-society-gold/50"
              />
              <span className="font-display text-white text-xl uppercase tracking-widest">Society</span>
            </a>
            <p className="text-white/40 font-body text-sm text-center md:text-left max-w-xs">
              Sandwich Bar &amp; Social Club. Greenville's neighborhood spot for craft sandwiches, cocktails, and late nights.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/societygvl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Society on Instagram"
                className="text-white/40 hover:text-society-gold transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/SocietyGVL/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Society on Facebook"
                className="text-white/40 hover:text-[#1877F2] transition-colors"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-col items-center gap-3">
            <h4 className="font-display uppercase tracking-widest text-society-gold text-sm mb-1">Quick Links</h4>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-white/50 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <h4 className="font-display uppercase tracking-widest text-society-gold text-sm mb-1">Find Us</h4>
            <p className="font-body text-white/50 text-sm text-center md:text-right">
              18 E. Coffee St.<br />
              Greenville, SC 29601
            </p>
            <a href="tel:+18642037046" className="font-body text-white/50 hover:text-white transition-colors text-sm">
              (864) 203-7046
            </a>
            <a href="mailto:hello@societygvl.com" className="font-body text-white/50 hover:text-white transition-colors text-sm">
              hello@societygvl.com
            </a>
          </div>

        </div>

        {/* Sister restaurant co-branding */}
        <div className="border-t border-white/5 pt-8 pb-6">
          <div className="flex flex-col items-center gap-3">
            <p className="font-display uppercase tracking-widest text-white/30 text-xs">Sister Restaurant</p>
            <a
              href="https://www.citytaverngvl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <img
                src="/city-tavern-logo.jpeg"
                alt="The City Tavern"
                className="h-10 w-10 rounded-full object-cover border border-white/20 group-hover:border-white/50 transition-colors"
              />
              <div className="text-left">
                <p className="font-display uppercase tracking-widest text-white/50 group-hover:text-white transition-colors text-sm leading-tight">
                  The City Tavern
                </p>
                <p className="font-body text-white/25 text-xs">Greenville, SC · 128 N Main St</p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/5 pt-6 text-center space-y-1">
          <p className="font-body text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Society Sandwich Bar and Social Club &nbsp;&bull;&nbsp; 18 E. Coffee St., Greenville, SC 29601
          </p>
          <p className="font-body text-white/15 text-xs">
            Website by Neighbored LLC
          </p>
        </div>
      </div>
    </footer>
  )
}
