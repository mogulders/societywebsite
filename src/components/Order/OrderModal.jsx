import { useState, useEffect } from 'react'
import { useOrder } from '../../context/OrderContext'
import { useCart } from '../../context/CartContext'
import OrderMenuStep       from './OrderMenuStep'
import OrderCartStep       from './OrderCartStep'
import OrderCheckoutStep   from './OrderCheckoutStep'
import OrderConfirmStep    from './OrderConfirmStep'

const STEPS = ['menu', 'cart', 'checkout', 'confirm']

const stepLabel = { menu: 'Menu', cart: 'Cart', checkout: 'Checkout', confirm: 'Confirmed' }

function StepDots({ step }) {
  const visible = ['menu', 'cart', 'checkout']
  const idx = visible.indexOf(step)
  if (idx === -1) return null
  return (
    <div className="flex gap-1.5 items-center" aria-hidden="true">
      {visible.map((s, i) => (
        <div
          key={s}
          className={`rounded-full transition-all duration-300 ${
            i === idx
              ? 'w-5 h-1.5 bg-society-red'
              : i < idx
              ? 'w-1.5 h-1.5 bg-society-gold/60'
              : 'w-1.5 h-1.5 bg-white/15'
          }`}
        />
      ))}
    </div>
  )
}

export default function OrderModal() {
  const { isOpen, closeModal } = useOrder()
  const { cart, updateQty, removeItem, cartCount, clearCart } = useCart()
  const [step, setStep]               = useState('menu')
  const [confirmation, setConfirmation] = useState(null)

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Reset when closed
  const handleClose = () => {
    closeModal()
    setTimeout(() => {
      setStep('menu')
      clearCart()
      setConfirmation(null)
    }, 300)
  }

  const handleConfirm = (data) => {
    setConfirmation(data)
    setStep('confirm')
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Drawer — slides in from right */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Order online"
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[480px] bg-society-black border-l border-white/10 flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Society" className="w-8 h-8 rounded-full border border-society-gold/40" />
            <div>
              <p className="font-display uppercase tracking-widest text-white text-sm leading-none">
                {step === 'confirm' ? 'Order Confirmed' : 'Order Online'}
              </p>
              {step !== 'confirm' && (
                <p className="font-body text-white/35 text-xs mt-0.5">{stepLabel[step]}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            {step !== 'confirm' && <StepDots step={step} />}
            {/* Cart badge (visible on menu step) */}
            {step === 'menu' && cartCount > 0 && (
              <button
                onClick={() => setStep('cart')}
                className="relative cursor-pointer bg-transparent border-0 p-0 focus-visible:ring-2 focus-visible:ring-society-gold focus-visible:outline-none rounded"
                aria-label={`View cart, ${cartCount} item${cartCount !== 1 ? 's' : ''}`}
              >
                <svg className="w-6 h-6 text-white/60 hover:text-society-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span aria-hidden="true" className="absolute -top-1.5 -right-1.5 bg-society-red text-white font-display text-xs w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              </button>
            )}
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer border-0 focus-visible:ring-2 focus-visible:ring-society-gold focus-visible:outline-none"
              aria-label="Close order panel"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Step content */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {step === 'menu' && (
            <OrderMenuStep
              onNext={() => setStep('cart')}
            />
          )}
          {step === 'cart' && (
            <OrderCartStep
              cart={cart}
              onUpdateQty={updateQty}
              onRemove={removeItem}
              onBack={() => setStep('menu')}
              onNext={() => setStep('checkout')}
            />
          )}
          {step === 'checkout' && (
            <OrderCheckoutStep
              cart={cart}
              onBack={() => setStep('cart')}
              onConfirm={handleConfirm}
            />
          )}
          {step === 'confirm' && confirmation && (
            <OrderConfirmStep
              confirmation={confirmation}
              onClose={handleClose}
            />
          )}
        </div>
      </div>
    </>
  )
}
