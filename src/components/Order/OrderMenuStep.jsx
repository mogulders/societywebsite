import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { menuCategories, menuData } from '../../data/menuData'
import ItemDetailModal from '../Menu/ItemDetailModal'

export default function OrderMenuStep({ onNext }) {
  const { cart, cartCount } = useCart()
  const [activeTab, setActiveTab] = useState('sandwiches')
  const [selectedItem, setSelectedItem] = useState(null)
  const items = menuData[activeTab] || []

  const getQty = (name) => {
    const entry = cart.find(c => c.item.name === name)
    return entry ? entry.quantity : 0
  }

  return (
    <div className="flex flex-col h-full">
      {/* Category tabs */}
      <div
        className="flex gap-2 flex-wrap px-5 pt-5 pb-3 border-b border-white/10"
        role="tablist"
        aria-label="Menu categories"
      >
        {menuCategories.map(cat => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeTab === cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`font-display uppercase tracking-widest text-xs px-4 py-1.5 rounded-full border transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-society-gold focus-visible:outline-none ${
              activeTab === cat.id
                ? 'bg-society-red border-society-red text-white'
                : 'bg-transparent border-white/20 text-white/60 hover:border-society-gold hover:text-society-gold'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Items list */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3" role="list" aria-label="Menu items">
        {items.map(item => {
          const qty = getQty(item.name)
          return (
            <button
              key={item.name}
              type="button"
              role="listitem"
              onClick={() => setSelectedItem(item)}
              aria-label={`${item.name}, ${item.price}${qty > 0 ? `, ${qty} in cart` : ''} — tap to view details`}
              className={`w-full text-left flex items-start justify-between gap-4 p-4 rounded-lg border transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-society-gold focus-visible:outline-none ${
                qty > 0
                  ? 'border-society-gold/40 bg-white/5'
                  : 'border-white/10 bg-white/[0.03] hover:border-white/20'
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display uppercase text-white text-base leading-tight">{item.name}</span>
                  <span className="font-display text-society-gold text-sm whitespace-nowrap">{item.price}</span>
                </div>
                <p className="font-body text-white/50 text-xs leading-relaxed">{item.description}</p>
              </div>
              {qty > 0 && (
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-society-gold flex items-center justify-center font-display text-sm text-society-black"
                >
                  {qty}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Sticky footer CTA */}
      <div className="px-5 py-4 border-t border-white/10">
        {cartCount > 0 ? (
          <button
            onClick={onNext}
            className="btn-primary w-full text-center flex items-center justify-center gap-2"
            aria-label={`View cart, ${cartCount} item${cartCount !== 1 ? 's' : ''}`}
          >
            <span>View Cart</span>
            <span
              aria-hidden="true"
              className="bg-white/20 text-white font-display rounded-full w-6 h-6 flex items-center justify-center text-sm"
            >
              {cartCount}
            </span>
          </button>
        ) : (
          <p className="text-center text-white/30 font-body text-sm py-1" aria-live="polite">
            Add items to start your order
          </p>
        )}
      </div>

      {selectedItem && (
        <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  )
}
