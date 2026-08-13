function QtyButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white font-display flex items-center justify-center transition-colors cursor-pointer border-0 text-lg leading-none"
    >
      {children}
    </button>
  )
}

export default function OrderCartStep({ cart, onUpdateQty, onRemove, onBack, onNext }) {
  const subtotal = cart.reduce((sum, c) => {
    const price = parseFloat(c.item.price.replace('$', ''))
    return sum + price * c.quantity
  }, 0)

  return (
    <div className="flex flex-col h-full">
      {/* Back */}
      <div className="px-5 pt-5 pb-3 border-b border-white/10">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white/50 hover:text-society-gold transition-colors font-display uppercase tracking-widest text-xs cursor-pointer bg-transparent border-0"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Menu
        </button>
      </div>

      {/* Cart items */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
        {cart.length === 0 && (
          <p className="text-white/30 font-body text-sm text-center py-8">Your cart is empty.</p>
        )}
        {cart.map(entry => {
          const price = parseFloat(entry.item.price.replace('$', ''))
          return (
            <div key={entry.id} className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/3">
              <div className="flex-1 min-w-0">
                <p className="font-display uppercase text-white text-sm leading-tight">{entry.item.name}</p>
                <p className="font-body text-white/40 text-xs mt-0.5">
                  {entry.item.price} each · <span className="text-society-gold">${(price * entry.quantity).toFixed(2)}</span>
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <QtyButton onClick={() => onUpdateQty(entry.id, entry.quantity - 1)}>−</QtyButton>
                <span className="font-display text-white text-sm w-4 text-center">{entry.quantity}</span>
                <QtyButton onClick={() => onUpdateQty(entry.id, entry.quantity + 1)}>+</QtyButton>
                <button
                  onClick={() => onRemove(entry.id)}
                  className="w-7 h-7 rounded-full bg-society-red/20 hover:bg-society-red/40 text-society-red flex items-center justify-center transition-colors cursor-pointer border-0 ml-1"
                  aria-label={`Remove ${entry.item.name}`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Totals + CTA */}
      <div className="px-5 py-4 border-t border-white/10 space-y-3">
        <div className="flex justify-between items-center">
          <span className="font-body text-white/50 text-sm">Subtotal</span>
          <span className="font-display text-white text-lg">${subtotal.toFixed(2)}</span>
        </div>
        <p className="font-body text-white/25 text-xs">Tax and fees calculated at checkout</p>
        <button
          onClick={onNext}
          disabled={cart.length === 0}
          className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Checkout
        </button>
      </div>
    </div>
  )
}
