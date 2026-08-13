import OrderButton from './OrderButton'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 60%, rgba(190,24,35,0.30) 0%, transparent 55%),
          radial-gradient(ellipse at 80% 30%, rgba(215,141,5,0.18) 0%, transparent 50%),
          #171717
        `,
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,1) 2px,
            rgba(255,255,255,1) 3px
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
        {/* Logo */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 rounded-full bg-society-gold/20 blur-2xl scale-150" />
          <img
            src="/logo.png"
            alt="Society Sandwich Bar and Social Club"
            className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full border-4 border-society-gold shadow-2xl"
          />
        </div>

        {/* Eyebrow */}
        <p className="section-eyebrow mb-4">Greenville, SC &middot; 18 E. Coffee St.</p>

        {/* Headline */}
        <h1 className="font-display uppercase leading-none text-white mb-2" style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>
          Society
        </h1>
        <h2 className="font-display uppercase leading-none text-society-gold mb-6" style={{ fontSize: 'clamp(1.2rem, 4vw, 2.5rem)', letterSpacing: '0.15em' }}>
          Sandwich Bar &amp; Social Club
        </h2>

        {/* Tagline */}
        <p className="text-white/60 font-body text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Pull up a seat, raise a glass, and be part of the Society — where good food and good company always go hand in hand.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <OrderButton label="Order Online" className="btn-primary" />
          <a href="#menu" className="btn-outline-white">
            View Menu
          </a>
        </div>

        {/* Hours quick-hit */}
        <p className="mt-10 text-white/40 text-sm font-body">
          Open Daily &nbsp;&bull;&nbsp; 11:00 AM – 2:00 AM
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-0.5 h-8 bg-white/20 rounded-full" />
        <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
