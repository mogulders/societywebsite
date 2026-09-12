import { useState, useEffect } from 'react'
import { menuCategories, menuData } from '../../data/menuData'
import MenuCard from './MenuCard'
import ItemDetailModal from './ItemDetailModal'
import OrderButton from '../OrderButton'

export default function Menu() {
  const [activeTab, setActiveTab] = useState('sandwiches')
  const [selectedItem, setSelectedItem] = useState(null)
  const activeCategory = menuCategories.find(c => c.id === activeTab) || {}
  const activeItems = menuData[activeTab] || []

  // Lock body scroll when item modal is open
  useEffect(() => {
    document.body.style.overflow = selectedItem ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedItem])

  return (
    <section id="menu" className="py-20 md:py-28 bg-society-black scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-eyebrow mb-3">Crafted in Greenville</p>
          <h2 className="section-title text-white mb-4">The Menu</h2>
          <div className="divider mx-auto mb-6" />
          <p className="text-white/50 font-body max-w-xl mx-auto">
            Stacked sandwiches, shareable bites, craft cocktails, and more. Everything made to be enjoyed with good company.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10" role="tablist" aria-label="Menu categories">
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`font-display uppercase tracking-widest text-sm px-5 py-2 rounded-full border transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-society-gold focus-visible:outline-none ${
                activeTab === cat.id
                  ? 'bg-society-red border-society-red text-white'
                  : 'bg-transparent border-white/20 text-white/60 hover:border-society-gold hover:text-society-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Category note */}
        {activeCategory.note && (
          <p className="text-center font-body text-white/40 text-sm mb-8 italic">{activeCategory.note}</p>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" role="list" aria-label="Menu items">
          {activeItems.map(item => (
            <div key={item.name} role="listitem">
              <MenuCard item={item} onItemClick={() => setSelectedItem(item)} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/40 font-body text-sm mb-4">
            Menu items and pricing subject to change. Ask your server about daily specials.
          </p>
          {/* TODO: Update href to SkyTab ordering URL once credentials are live */}
          <OrderButton label="Order Online Now" className="btn-primary" />
        </div>

      </div>

      {selectedItem && (
        <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  )
}
