/**
 * SkyTab / Shift4 Dine Online Ordering Configuration
 *
 * To enable online ordering:
 * 1. Create .env.local in the project root (copy from .env.example)
 * 2. Set VITE_SKYTAB_RESTAURANT_ID to your SkyTab restaurant ID
 * 3. Set VITE_SKYTAB_EMBED_URL to the ordering URL/embed endpoint from SkyTab
 * 4. In OrderButton.jsx, replace the <a href> with the SkyTab widget code if needed
 *
 * SkyTab docs: https://shift4.com/products/skytab/
 * Restart the dev server after editing .env.local
 */
export const skytabConfig = {
  restaurantId: import.meta.env.VITE_SKYTAB_RESTAURANT_ID || '',
  embedUrl:     import.meta.env.VITE_SKYTAB_EMBED_URL || '',
  isConfigured: !!(
    import.meta.env.VITE_SKYTAB_RESTAURANT_ID &&
    import.meta.env.VITE_SKYTAB_EMBED_URL
  ),
}
