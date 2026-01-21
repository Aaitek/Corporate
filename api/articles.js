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
    
    // Add default params
    queryParams.set('populate', '*')
    queryParams.set('sort', 'publishedAt:desc')
    queryParams.set('publicationState', 'live')
    
    // Add any additional query params from request (including filters for single article)
    Object.keys(req.query).forEach(key => {
      if (key !== 'populate' && key !== 'sort' && key !== 'publicationState') {
        // Handle nested filter params like filters[slug][$eq]
        queryParams.append(key, req.query[key])
      }
    })
    
    const url = `${RAILWAY_API_URL}/articles?${queryParams.toString()}`
    
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
