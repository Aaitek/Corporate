// Vercel API proxy for products - eliminates CORS issues
const RAILWAY_API_URL = process.env.RAILWAY_API_URL || 'https://aaitech-production.up.railway.app/api'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Build query string from request query params
    const queryParams = new URLSearchParams()
    queryParams.set('populate', '*')
    
    // Handle slug filter for product detail pages
    if (req.query.slug) {
      queryParams.append('filters[slug][$eq]', req.query.slug)
    }
    
    // Add any other query params (including nested filters)
    Object.keys(req.query).forEach(key => {
      if (key !== 'slug' && key !== 'populate') {
        // Handle nested filter params like filters[slug][$eq]
        queryParams.append(key, req.query[key])
      }
    })
    
    const url = `${RAILWAY_API_URL}/products?${queryParams.toString()}`
    
    console.log('Proxy request URL:', url) // Debug log
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch products' })
    }

    const data = await response.json()
    
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300')
    
    return res.status(200).json(data)
  } catch (error) {
    console.error('Error proxying products:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
