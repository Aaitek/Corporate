/** Browser bundle: derive Strapi origin from Vercel env or fall back to live Railway hostname */
export function getStrapiOrigin() {
  const api = import.meta.env.VITE_API_URL
  if (api && typeof api === 'string') {
    return api.replace(/\/api\/?$/, '').replace(/\/+$/, '')
  }
  return 'https://corporate-production-07c0.up.railway.app'
}
