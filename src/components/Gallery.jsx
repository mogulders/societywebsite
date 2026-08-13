const PLACEHOLDER_TONES = [
  'bg-society-red/20',
  'bg-society-gold/15',
  'bg-white/5',
  'bg-society-red/10',
  'bg-white/5',
  'bg-society-gold/10',
  'bg-society-red/15',
  'bg-white/5',
  'bg-society-gold/20',
  'bg-white/5',
  'bg-society-red/10',
  'bg-society-gold/10',
]

function CameraIcon() {
  return (
    <svg className="w-8 h-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#1a1a1a] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-eyebrow mb-3">The Vibe</p>
          <h2 className="section-title text-white mb-4">Gallery</h2>
          <div className="divider mx-auto mb-6" />
          <p className="text-white/50 font-body max-w-xl mx-auto">
            Photos coming soon. In the meantime, follow us on Instagram for a taste of what's happening at Society.
          </p>
        </div>

        {/* Grid
            TODO: Replace placeholder divs with <img> elements once photography is available.
            Suggested: use loading="lazy" and consider a lightbox library like
            yet-another-react-lightbox for a full gallery experience. */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {PLACEHOLDER_TONES.map((tone, i) => (
            <div
              key={i}
              className={`${tone} border border-white/10 aspect-square rounded-lg flex items-center justify-center hover:border-society-gold/30 transition-colors duration-200`}
            >
              <CameraIcon />
            </div>
          ))}
        </div>

        {/* Instagram link */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/societygvl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-society-gold hover:text-white transition-colors font-display uppercase tracking-widest text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow us @societygvl
          </a>
        </div>

      </div>
    </section>
  )
}
