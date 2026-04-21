// Vercel API proxy for case studies - eliminates CORS issues
// Prefer env var on Vercel. Fallback points at the Strapi (Corporate) Railway service.
const RAILWAY_API_URL =
  process.env.RAILWAY_API_URL || 'https://corporate-production-07c0.up.railway.app/api'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Build query string from request query params
    const queryParams = new URLSearchParams()
    
    // Add populate (always needed)
    queryParams.set('populate', '*')
    
    // Check if this is a detail page request (has slug filter)
    const isDetailPage = req.query['filters[slug][$eq]'] || req.query.slug
    
    // Add category filter if provided (for list pages)
    if (req.query.category && !isDetailPage) {
      queryParams.append('filters[category][$eq]', req.query.category)
    }
    
    // Add all query params from request (including nested filters)
    Object.keys(req.query).forEach(key => {
      // Skip params we've already handled
      if (key !== 'category' && key !== 'populate') {
        // Handle nested filter params like filters[slug][$eq]
        queryParams.append(key, req.query[key])
      }
    })
    
    const url = `${RAILWAY_API_URL}/case-studies?${queryParams.toString()}`
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Railway API error:', response.status, response.statusText)
      console.error('Railway API error body:', errorText)
      return res
        .status(response.status)
        .json({ error: 'Failed to fetch case studies', status: response.status, body: errorText })
    }

    const data = await response.json()
    
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300')
    
    return res.status(200).json(data)
  } catch (error) {
    console.error('Error proxying case studies:', error)
    return res.status(502).json({ error: 'Bad gateway', detail: String(error?.message || error) })
  }
}
