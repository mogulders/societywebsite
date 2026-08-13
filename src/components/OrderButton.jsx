import { useOrder } from '../context/OrderContext'
import { skytabConfig } from '../config/skytab'

/**
 * OrderButton
 *
 * While SkyTab is not yet configured: opens the on-site ordering flow (OrderModal).
 * Once VITE_SKYTAB_EMBED_URL is set in .env.local, switches to the live SkyTab URL.
 *
 * To wire up real order fulfillment:
 *   1. Set VITE_SKYTAB_RESTAURANT_ID and VITE_SKYTAB_EMBED_URL in .env.local
 *   2. The button below will automatically use the SkyTab link.
 *   3. Or: keep using the on-site flow and replace the submitOrder() stub in
 *      OrderCheckoutStep.jsx with the actual SkyTab API call.
 */
export default function OrderButton({ label = 'Order Online', className = 'btn-primary' }) {
  const { openModal } = useOrder()

  if (skytabConfig.isConfigured) {
    return (
      <a
        href={skytabConfig.embedUrl}
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
