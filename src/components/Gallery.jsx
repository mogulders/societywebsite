import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const GALLERY_IMAGES = [
  { src: '/images/gallery/gallery-01-dining-room.jpg', alt: 'Society dining room with neon sign and full house' },
  { src: '/images/gallery/gallery-02-neon-sign.jpg', alt: 'Society neon sign glowing above the crowd' },
  { src: '/images/gallery/gallery-03-bartender-shaking.jpg', alt: 'Bartender shaking cocktails at the bar' },
  { src: '/images/gallery/gallery-04-bartender-hype.jpg', alt: 'Bartender bringing the energy behind the bar' },
  { src: '/images/gallery/gallery-10-bar-pour.jpg', alt: 'Bartender pouring a cocktail' },
  { src: '/images/gallery/gallery-11-cocktails.jpg', alt: 'Row of handcrafted cocktails lined up' },
  { src: '/images/gallery/gallery-12-guests.jpg', alt: 'Guests enjoying drinks at Society' },
  { src: '/images/gallery/gallery-13-crowd-bw.jpg', alt: 'Packed house on a busy night' },
  { src: '/images/gallery/gallery-14-food-spread.jpg', alt: 'Society small plates spread' },
  { src: '/images/gallery/gallery-05-kitchen-bw.jpg', alt: 'Chef focused in the kitchen' },
  { src: '/images/gallery/gallery-06-bar-pour-bw.jpg', alt: 'Bartender crafting drinks' },
  { src: '/images/gallery/gallery-07-bar-bw.jpg', alt: 'Behind the bar at Society' },
  { src: '/images/gallery/gallery-08-kitchen-cook.jpg', alt: 'Cook working the line' },
  { src: '/images/gallery/gallery-09-chef-grill.jpg', alt: 'Chef at the grill in a Society shirt' },
  { src: '/images/gallery/gallery-15-sign-mascot.jpg', alt: 'Society Sandwich Bar neon sign with mascot, Greenville SC' },
  { src: '/images/gallery/gallery-16-staff-bw.jpg', alt: 'Society staff member at the bar' },
]

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  function openLightbox(index) {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#1a1a1a] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-eyebrow mb-3">The Vibe</p>
          <h2 className="section-title text-white mb-4">Gallery</h2>
          <div className="divider mx-auto mb-6" />
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {GALLERY_IMAGES.map((image, i) => (
            <button
              key={i}
              type="button"
              onClick={() => openLightbox(i)}
              className="aspect-square rounded-lg overflow-hidden border border-white/10 hover:border-society-gold/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-society-gold transition-all duration-200 group"
              aria-label={`View photo: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </button>
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

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={GALLERY_IMAGES}
      />
    </section>
  )
}
