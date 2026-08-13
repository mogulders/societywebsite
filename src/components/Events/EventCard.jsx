const tagColors = {
  'Live Music': 'bg-society-red/20 text-society-red border-society-red/30',
  'Themed Night': 'bg-society-gold/20 text-society-gold border-society-gold/30',
  'Special': 'bg-white/10 text-white/70 border-white/20',
}

export default function EventCard({ event }) {
  const tagClass = tagColors[event.tag] || tagColors['Special']

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-society-gold/50 transition-all duration-200 hover:-translate-y-0.5">
      {/* Tag */}
      <span className={`inline-block border font-display uppercase tracking-widest text-xs px-3 py-1 rounded-full mb-4 ${tagClass}`}>
        {event.tag}
      </span>

      {/* Title */}
      <h3 className="font-display uppercase text-white text-2xl leading-tight mb-2">
        {event.title}
      </h3>

      {/* Day + Time */}
      <p className="font-display text-society-gold uppercase tracking-widest text-sm mb-3">
        {event.date} &nbsp;&bull;&nbsp; {event.time}
      </p>

      {/* Description */}
      <p className="font-body text-white/55 text-sm leading-relaxed">
        {event.description}
      </p>
    </div>
  )
}
