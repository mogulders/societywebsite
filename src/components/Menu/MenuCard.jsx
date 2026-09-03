export default function MenuCard({ item, onItemClick }) {
  return (
    <button
      type="button"
      onClick={onItemClick}
      aria-label={`${item.name}, ${item.price} — tap to view details`}
      className="menu-card text-left w-full cursor-pointer focus-visible:ring-2 focus-visible:ring-society-gold focus-visible:outline-none hover:ring-2 hover:ring-society-gold/50 overflow-hidden"
    >
      {item.image && (
        <div className="w-full aspect-[4/3] overflow-hidden rounded-t-md -mx-px -mt-px mb-3">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-display uppercase text-white text-lg leading-tight">{item.name}</h3>
        <span className="font-display text-society-gold text-lg whitespace-nowrap">{item.price}</span>
      </div>
      <p className="font-body text-white/55 text-sm leading-relaxed">{item.description}</p>
    </button>
  )
}
