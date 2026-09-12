const ORDER_URL = import.meta.env.VITE_ORDER_URL || ''

export default function OrderButton({ label = 'Order Online', className = 'btn-primary' }) {
  if (ORDER_URL) {
    return (
      <a
        href={ORDER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    )
  }

  return (
    <span className={`${className} opacity-40 cursor-not-allowed`}>
      {label}
    </span>
  )
}
