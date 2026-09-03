import { useOrder } from '../context/OrderContext'
import { orderingConfig } from '../config/ordering'

export default function OrderButton({ label = 'Order Online', className = 'btn-primary' }) {
  const { openModal } = useOrder()

  if (orderingConfig.isConfigured) {
    return (
      <a
        href={orderingConfig.orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    )
  }

  return (
    <button onClick={openModal} className={className}>
      {label}
    </button>
  )
}
