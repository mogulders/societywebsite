export default function OrderConfirmStep({ confirmation, onClose }) {
  const { orderId, name, orderType, address, total } = confirmation

  return (
    <div className="flex flex-col h-full">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center text-center">
        {/* Logo + checkmark */}
        <div className="relative mb-5">
          <div className="w-20 h-20 rounded-full bg-society-red/15 border-2 border-society-red/40 flex items-center justify-center">
            <img src="/logo.png" alt="Society" className="w-14 h-14 rounded-full" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-society-gold rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-society-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <p className="section-eyebrow mb-1">Order Received</p>
        <h2 className="font-display uppercase text-white text-4xl mb-1">{orderId}</h2>
        <p className="font-body text-white/50 text-sm mb-6">
          Thanks, {name}! We've got your order.
        </p>

        {/* Details card */}
        <div className="w-full rounded-xl border border-white/10 bg-white/5 divide-y divide-white/10 mb-5 text-left">
          <div className="flex justify-between px-4 py-3">
            <span className="font-body text-white/40 text-sm">Order type</span>
            <span className="font-display uppercase tracking-widest text-society-gold text-sm">
              {orderType === 'pickup' ? 'Pickup' : 'Delivery'}
            </span>
          </div>
          {orderType === 'pickup' && (
            <div className="flex justify-between px-4 py-3">
              <span className="font-body text-white/40 text-sm">Ready in</span>
              <span className="font-body text-white text-sm">~20-25 minutes</span>
            </div>
          )}
          {orderType === 'delivery' && address && (
            <div className="flex justify-between px-4 py-3">
              <span className="font-body text-white/40 text-sm">Delivering to</span>
              <span className="font-body text-white text-sm max-w-[180px] text-right">{address}</span>
            </div>
          )}
          <div className="flex justify-between px-4 py-3">
            <span className="font-body text-white/40 text-sm">Total</span>
            <span className="font-display text-society-gold text-lg">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between px-4 py-3">
            <span className="font-body text-white/40 text-sm">Payment</span>
            <span className="font-body text-white/60 text-sm">Collected at {orderType}</span>
          </div>
        </div>

        {orderType === 'pickup' && (
          <div className="w-full flex items-start gap-3 bg-society-gold/10 border border-society-gold/25 rounded-lg p-4 text-left">
            <svg className="w-5 h-5 text-society-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <p className="font-display uppercase tracking-widest text-society-gold text-xs mb-0.5">Pickup Address</p>
              <p className="font-body text-white/70 text-sm">18 E. Coffee St., Greenville, SC 29601</p>
            </div>
          </div>
        )}
      </div>

      {/* Sticky footer */}
      <div className="px-6 py-4 border-t border-white/10 flex-shrink-0">
        <button onClick={onClose} className="btn-outline-white w-full">
          Done
        </button>
        <p className="text-center text-white/25 font-body text-xs mt-2">
          Questions? Call us at (864) 203-7046
        </p>
      </div>
    </div>
  )
}
