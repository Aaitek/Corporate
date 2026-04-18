/**
 * Canonical Strapi API base (must end with /api).
 * Override with RAILWAY_API_URL or VITE_API_URL on Vercel / CI — must match your live Railway Strapi service.
 */
export const DEFAULT_STRAPI_API_URL =
  'https://corporate-production-07c0.up.railway.app/api'

export function getRailwayApiUrl() {
  const raw = (
    process.env.RAILWAY_API_URL ||
    process.env.VITE_API_URL ||
    DEFAULT_STRAPI_API_URL
  ).trim()
  const base = raw.replace(/\/+$/, '')
  return base.endsWith('/api') ? base : `${base}/api`
}

/** Origin only (no /api), for building absolute media URLs */
export function getStrapiOrigin() {
  return getRailwayApiUrl().replace(/\/api$/, '')
}
