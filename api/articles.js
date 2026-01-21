// Vercel API proxy for articles - eliminates CORS issues
const RAILWAY_API_URL = process.env.RAILWAY_API_URL || 'https://aaitech-production.up.railway.app/api'

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Get query parameters from request
    const queryParams = new URLSearchParams(req.query).toString()
    const url = `${RAILWAY_API_URL}/articles?populate=*&sort=publishedAt:desc&publicationState=live${queryParams ? `&${queryParams}` : ''}`
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch articles' })
    }

    const data = await response.json()
    
    // Set CORS headers (though not needed for same-origin, good practice)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300')
    
    return res.status(200).json(data)
  } catch (error) {
    console.error('Error proxying articles:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
