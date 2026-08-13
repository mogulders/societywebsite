const hours = [
  { day: 'Monday',    time: '11:00 AM – 2:00 AM' },
  { day: 'Tuesday',   time: '11:00 AM – 2:00 AM' },
  { day: 'Wednesday', time: '11:00 AM – 2:00 AM' },
  { day: 'Thursday',  time: '11:00 AM – 2:00 AM' },
  { day: 'Friday',    time: '11:00 AM – 2:00 AM' },
  { day: 'Saturday',  time: '11:00 AM – 2:00 AM' },
  { day: 'Sunday',    time: '11:00 AM – 2:00 AM' },
]

export default function HoursLocation() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <section id="hours" className="py-20 md:py-28 bg-[#1f1f1f] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-eyebrow mb-3">Find Us</p>
          <h2 className="section-title text-white mb-4">Hours &amp; Location</h2>
          <div className="divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Hours + Contact */}
          <div>
            <h3 className="font-display uppercase text-society-gold tracking-widest text-lg mb-6">Hours</h3>
            <div className="space-y-2 mb-8">
              {hours.map(({ day, time }) => {
                const isToday = day === today
                return (
                  <div
                    key={day}
                    className={`flex justify-between items-center py-2.5 px-4 rounded-lg ${
                      isToday
                        ? 'bg-society-red/15 border border-society-red/40'
                        : 'border border-transparent hover:border-white/10'
                    }`}
                  >
                    <span className={`font-display uppercase tracking-widest text-sm ${isToday ? 'text-white' : 'text-white/60'}`}>
                      {day}
                      {isToday && (
                        <span className="ml-2 text-society-red text-xs font-body normal-case tracking-normal">Today</span>
                      )}
                    </span>
                    <span className={`font-body text-sm ${isToday ? 'text-society-gold font-semibold' : 'text-white/50'}`}>
                      {time}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Contact */}
            <div className="border-t border-white/10 pt-8 space-y-4">
              <h3 className="font-display uppercase text-society-gold tracking-widest text-lg mb-5">Contact</h3>

              <a
                href="https://maps.google.com/?q=18+E+Coffee+St+Greenville+SC+29601"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <svg className="w-5 h-5 mt-0.5 text-society-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-body text-sm leading-relaxed group-hover:text-society-gold transition-colors">
                  18 E. Coffee St.<br />Greenville, SC 29601
                </span>
              </a>

              <a
                href="tel:+18642037046"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <svg className="w-5 h-5 text-society-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-body text-sm group-hover:text-society-gold transition-colors">(864) 203-7046</span>
              </a>

              <a
                href="mailto:hello@societygvl.com"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <svg className="w-5 h-5 text-society-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-body text-sm group-hover:text-society-gold transition-colors">hello@societygvl.com</span>
              </a>

              <div className="pt-4">
                <a
                  href="https://maps.google.com/?q=18+E+Coffee+St+Greenville+SC+29601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !text-sm !py-2 !px-6 inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-white/10 min-h-[400px] bg-society-black flex items-center justify-center">
            {/*
              TODO: Replace this placeholder with a Google Maps embed iframe.
              To get the embed URL:
              1. Go to maps.google.com and search "18 E Coffee St Greenville SC"
              2. Click Share > Embed a map > Copy HTML
              3. Paste the <iframe> src URL below

              Example:
              <iframe
                src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE"
                width="100%"
                height="100%"
                className="map-iframe"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Society Sandwich Bar location"
              />
            */}
            <div className="text-center px-8">
              <svg className="w-16 h-16 text-society-gold/30 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="font-display uppercase tracking-widest text-white/30 text-sm">18 E. Coffee St.</p>
              <p className="font-display uppercase tracking-widest text-white/20 text-sm">Greenville, SC 29601</p>
              <p className="font-body text-white/20 text-xs mt-3">Map embed coming soon</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
