import { createContext, useContext, useState } from 'react'

const OrderContext = createContext(null)

export function OrderProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal  = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <OrderContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  return useContext(OrderContext)
}
