import { useState, useEffect } from 'react'

const ORDER_URL = import.meta.env.VITE_ORDER_URL || ''
const SESSION_KEY = 'society_order_modal_seen'

export default function SpotOnLandingModal() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, '1')
    setVisible(false)
  }

  const handleOrder = () => {
    if (ORDER_URL) window.open(ORDER_URL, '_blank', 'noopener,noreferrer')
    dismiss()
  }

  if (!visible) return null

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Order online"
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none"
      >
        <div className="pointer-events-auto w-full max-w-sm bg-society-black border border-white/10 rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center">
          <img
            src="/logo.png"
            alt="Society"
            className="w-16 h-16 rounded-full border-2 border-society-gold/60 mb-5"
          />
          <h2 className="font-display uppercase tracking-widest text-white text-2xl mb-2">
            Order Online
          </h2>
          <p className="font-body text-white/60 text-sm mb-7 leading-relaxed">
            Skip the wait — order ahead for pickup or delivery through SpotOn.
          </p>

          <button
            onClick={handleOrder}
            disabled={!ORDER_URL}
            className={`w-full btn-primary mb-3 ${
              !ORDER_URL
                ? 'opacity-40 cursor-not-allowed'
                : ''
            }`}
          >
            {ORDER_URL ? 'Order Now' : 'Coming Soon'}
          </button>

          <button
            onClick={dismiss}
            className="font-body text-white/40 hover:text-white/70 text-sm transition-colors cursor-pointer bg-transparent border-0"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </>
  )
}
