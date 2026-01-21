// Vercel API proxy for case studies - eliminates CORS issues
const RAILWAY_API_URL = process.env.RAILWAY_API_URL || 'https://aaitech-production.up.railway.app/api'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Build query string from request query params
    const queryParams = new URLSearchParams()
    
    // Add populate
    queryParams.append('populate', '*')
    queryParams.append('publicationState', 'live')
    
    // Add category filter if provided
    if (req.query.category) {
      queryParams.append('filters[category][$eq]', req.query.category)
    }
    
    // Add any other query params
    Object.keys(req.query).forEach(key => {
      if (key !== 'category' && !queryParams.has(key)) {
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
      return res.status(response.status).json({ error: 'Failed to fetch case studies' })
    }

    const data = await response.json()
    
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300')
    
    return res.status(200).json(data)
  } catch (error) {
    console.error('Error proxying case studies:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
