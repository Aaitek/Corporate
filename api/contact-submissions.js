// Vercel API proxy for contact form submissions - eliminates CORS issues
const RAILWAY_API_URL = process.env.RAILWAY_API_URL || 'https://aaitech-production.up.railway.app/api'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const url = `${RAILWAY_API_URL}/contact-submissions`
    
    // Strapi v4 requires data wrapper for POST requests
    const requestBody = {
      data: req.body
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      const errorText = await response.text()
      let errorData = {}
      try {
        errorData = JSON.parse(errorText)
      } catch (e) {
        errorData = { message: errorText || 'Unknown error' }
      }
      
      console.error('Contact submission API error:', response.status, errorData)
      
      return res.status(response.status).json({ 
        error: {
          message: errorData.error?.message || errorData.message || 'Failed to submit contact form',
          details: errorData
        }
      })
    }

    const data = await response.json()
    
    res.setHeader('Access-Control-Allow-Origin', '*')
    
    return res.status(200).json(data)
  } catch (error) {
    console.error('Error proxying contact submission:', error)
    return res.status(500).json({ 
      error: {
        message: 'Internal server error',
        details: error.message
      }
    })
  }
}
