// Vercel API proxy for articles - eliminates CORS issues
const RAILWAY_API_URL = process.env.RAILWAY_API_URL || 'https://aaitech-production.up.railway.app/api'

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Build query string from request query params
    const queryParams = new URLSearchParams()
    
    // Check if this is a detail page request (has slug filter)
    const isDetailPage = req.query['filters[slug][$eq]'] || req.query.slug
    
    // Add populate (always needed)
    queryParams.set('populate', '*')
    
    // Add default params only for list requests (not detail pages)
    if (!isDetailPage) {
      queryParams.set('sort', 'publishedAt:desc')
    }
    
    // Add publicationState if not already in query
    if (!req.query.publicationState) {
      queryParams.set('publicationState', 'live')
    }
    
    // Add all query params from request (including nested filters)
    Object.keys(req.query).forEach(key => {
      // Skip params we've already set
      if (key !== 'populate' && key !== 'sort' && key !== 'publicationState') {
        // Handle nested filter params like filters[slug][$eq]
        // URLSearchParams will properly encode brackets
        queryParams.append(key, req.query[key])
      }
    })
    
    const url = `${RAILWAY_API_URL}/articles?${queryParams.toString()}`
    
    console.log('Proxy request URL:', url) // Debug log
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      console.error('Railway API error:', response.status, response.statusText)
      return res.status(response.status).json({ error: 'Failed to fetch articles' })
    }

    const data = await response.json()
    
    // Set CORS headers (though not needed for same-origin, good practice)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate')
    
    return res.status(200).json(data)
  } catch (error) {
    console.error('Error proxying articles:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
