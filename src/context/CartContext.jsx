import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = (item, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(c => c.item.name === item.name)
      if (existing) {
        return prev.map(c =>
          c.item.name === item.name ? { ...c, quantity: c.quantity + qty } : c
        )
      }
      return [...prev, { id: `${item.name}-${Date.now()}`, item, quantity: qty }]
    })
  }

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      setCart(prev => prev.filter(c => c.id !== id))
    } else {
      setCart(prev => prev.map(c => (c.id === id ? { ...c, quantity: qty } : c)))
    }
  }

  const removeItem = (id) => setCart(prev => prev.filter(c => c.id !== id))

  const clearCart = () => setCart([])

  const cartCount = cart.reduce((n, c) => n + c.quantity, 0)
  const cartTotal = cart.reduce(
    (sum, c) => sum + parseFloat(c.item.price.replace('$', '')) * c.quantity,
    0
  )

  return (
    <CartContext.Provider value={{ cart, addItem, updateQty, removeItem, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
