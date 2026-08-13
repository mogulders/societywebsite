import { useState } from 'react'

function Field({ label, error, children }) {
  return (
    <div className="space-y-1.5">
      <label className="font-display uppercase tracking-widest text-white/60 text-xs">{label}</label>
      {children}
      {error && <p className="text-society-red text-xs font-body">{error}</p>}
    </div>
  )
}

const inputClass =
  'w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 font-body text-white text-sm placeholder-white/25 focus:outline-none focus:border-society-gold transition-colors'

export default function OrderCheckoutStep({ cart, onBack, onConfirm }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    orderType: 'pickup',
    address: '',
    notes: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const subtotal = cart.reduce((sum, c) => {
    return sum + parseFloat(c.item.price.replace('$', '')) * c.quantity
  }, 0)
  const tax = subtotal * 0.07
  const total = subtotal + tax

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }))

  const validate = () => {
    const e = {}
    if (!form.name.trim())  e.name  = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (form.orderType === 'delivery' && !form.address.trim()) {
      e.address = 'Delivery address is required'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setLoading(true)

    // ============================================================
    // TODO: Replace this simulated delay with your real API call.
    //
    // Example SkyTab / Shift4 Dine order submission:
    //   const res = await fetch(skytabConfig.embedUrl + '/orders', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${skytabConfig.apiKey}`,
    //     },
    //     body: JSON.stringify({
    //       restaurantId: skytabConfig.restaurantId,
    //       customer: { name: form.name, phone: form.phone },
    //       orderType: form.orderType,
    //       deliveryAddress: form.address || null,
    //       notes: form.notes,
    //       items: cart.map(c => ({
    //         itemId: c.item.id,
    //         name: c.item.name,
    //         price: parseFloat(c.item.price.replace('$', '')),
    //         quantity: c.quantity,
    //       })),
    //     }),
    //   })
    //   const { orderId } = await res.json()
    //   onConfirm({ ...form, orderId, total })
    // ============================================================

    await new Promise(r => setTimeout(r, 1400)) // simulated network delay
    const orderId = `SOC-${Math.floor(1000 + Math.random() * 9000)}`
    setLoading(false)
    onConfirm({ ...form, orderId, total })
  }

  return (
    <div className="flex flex-col h-full">
      {/* Back */}
      <div className="px-5 pt-5 pb-3 border-b border-white/10">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white/50 hover:text-society-gold transition-colors font-display uppercase tracking-widest text-xs cursor-pointer bg-transparent border-0"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Cart
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
        {/* Order type */}
        <Field label="Order Type">
          <div className="flex gap-3">
            {['pickup', 'delivery'].map(type => (
              <button
                key={type}
                onClick={() => set('orderType', type)}
                className={`flex-1 py-3 rounded-lg border font-display uppercase tracking-widest text-sm transition-all cursor-pointer ${
                  form.orderType === type
                    ? 'bg-society-red/20 border-society-red text-white'
                    : 'bg-transparent border-white/15 text-white/50 hover:border-white/30'
                }`}
              >
                {type === 'pickup' ? 'Pickup' : 'Delivery'}
              </button>
            ))}
          </div>
          {form.orderType === 'pickup' && (
            <p className="font-body text-white/35 text-xs mt-2">
              Ready in ~20-25 minutes · 18 E. Coffee St., Greenville SC
            </p>
          )}
        </Field>

        {/* Name */}
        <Field label="Your Name" error={errors.name}>
          <input
            type="text"
            placeholder="Jane Smith"
            value={form.name}
            onChange={e => set('name', e.target.value)}
            className={`${inputClass} ${errors.name ? 'border-society-red' : ''}`}
          />
        </Field>

        {/* Phone */}
        <Field label="Phone Number" error={errors.phone}>
          <input
            type="tel"
            placeholder="(864) 555-0100"
            value={form.phone}
            onChange={e => set('phone', e.target.value)}
            className={`${inputClass} ${errors.phone ? 'border-society-red' : ''}`}
          />
        </Field>

        {/* Delivery address */}
        {form.orderType === 'delivery' && (
          <Field label="Delivery Address" error={errors.address}>
            <input
              type="text"
              placeholder="123 Main St, Greenville SC"
              value={form.address}
              onChange={e => set('address', e.target.value)}
              className={`${inputClass} ${errors.address ? 'border-society-red' : ''}`}
            />
          </Field>
        )}

        {/* Special instructions */}
        <Field label="Special Instructions (optional)">
          <textarea
            placeholder="Allergies, modifications, etc."
            rows={3}
            value={form.notes}
            onChange={e => set('notes', e.target.value)}
            className={`${inputClass} resize-none`}
          />
        </Field>

        {/* Order summary */}
        <div className="rounded-lg border border-white/10 bg-white/3 divide-y divide-white/10">
          {cart.map(c => (
            <div key={c.id} className="flex justify-between px-4 py-2.5 text-sm">
              <span className="font-body text-white/60">
                {c.quantity}× {c.item.name}
              </span>
              <span className="font-body text-white/60">
                ${(parseFloat(c.item.price.replace('$', '')) * c.quantity).toFixed(2)}
              </span>
            </div>
          ))}
          <div className="flex justify-between px-4 py-2.5 text-sm">
            <span className="font-body text-white/40">Tax (7%)</span>
            <span className="font-body text-white/40">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between px-4 py-3">
            <span className="font-display uppercase tracking-widest text-white text-sm">Total</span>
            <span className="font-display text-society-gold text-lg">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="px-5 py-4 border-t border-white/10">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn-primary w-full flex items-center justify-center gap-3 disabled:opacity-70"
        >
          {loading ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Placing Order...
            </>
          ) : (
            'Place Order'
          )}
        </button>
        <p className="text-center text-white/25 font-body text-xs mt-2">
          Payment collected at {form.orderType === 'pickup' ? 'pickup' : 'delivery'}
        </p>
      </div>
    </div>
  )
}
