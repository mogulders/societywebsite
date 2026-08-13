export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#1f1f1f] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Visual side */}
          <div className="flex flex-col items-center lg:items-start gap-6 order-2 lg:order-1">
            <div className="relative">
              {/* Gold ring glow */}
              <div className="absolute inset-0 rounded-full bg-society-gold/10 blur-3xl scale-125" />
              <img
                src="/logo.png"
                alt="Society Sandwich Bar and Social Club logo"
                className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full border-4 border-society-gold/50 shadow-2xl"
              />
            </div>
            {/* Stat badges */}
            <div className="flex gap-4">
              <div className="bg-society-red/10 border border-society-red/30 rounded-lg px-5 py-3 text-center">
                <p className="font-display text-society-red text-3xl uppercase">7</p>
                <p className="text-white/50 text-xs uppercase tracking-widest font-body">Days a Week</p>
              </div>
              <div className="bg-society-gold/10 border border-society-gold/30 rounded-lg px-5 py-3 text-center">
                <p className="font-display text-society-gold text-3xl uppercase">15+</p>
                <p className="text-white/50 text-xs uppercase tracking-widest font-body">Hours Daily</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg px-5 py-3 text-center">
                <p className="font-display text-white text-3xl uppercase">GVL</p>
                <p className="text-white/50 text-xs uppercase tracking-widest font-body">Downtown</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <p className="section-eyebrow mb-3">A Greenville Original</p>
            <h2 className="section-title text-white mb-4">
              More Than a<br />
              <span className="text-society-gold">Sandwich Shop</span>
            </h2>
            <div className="divider mb-8" />

            <div className="space-y-5 text-white/70 font-body text-base sm:text-lg leading-relaxed">
              <p>
                A neighborhood favorite off Main Street Greenville, Society Sandwich Bar and Social Club elevates the simple sandwich into an art form — and the good times into an experience worth sharing.
              </p>
              <p>
                Step inside and you'll find it's far more than your average sandwich shop. It's a lively hangout where inventive, flavor-packed sandwiches meet craft cocktails, rotating beers, and a laid-back vibe that feels like your coolest friend's living room.
              </p>
              <p>
                Whether you're grabbing lunch between meetings, lingering over an evening bite, or slipping in for a late-night drink — Society invites you to stay awhile.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="bg-society-red/10 border border-society-red/30 text-society-red font-display uppercase tracking-widest text-xs px-4 py-2 rounded-full">
                Craft Sandwiches
              </span>
              <span className="bg-society-gold/10 border border-society-gold/30 text-society-gold font-display uppercase tracking-widest text-xs px-4 py-2 rounded-full">
                Cocktail Bar
              </span>
              <span className="bg-white/5 border border-white/20 text-white/70 font-display uppercase tracking-widest text-xs px-4 py-2 rounded-full">
                Live Music
              </span>
              <span className="bg-white/5 border border-white/20 text-white/70 font-display uppercase tracking-widest text-xs px-4 py-2 rounded-full">
                Late Night
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
