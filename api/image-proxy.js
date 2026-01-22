// Vercel API proxy for images - serves Railway images through main domain for social media crawlers
export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { url } = req.query

    if (!url) {
      return res.status(400).json({ error: 'Image URL is required' })
    }

    // Decode the URL if it's encoded
    const imageUrl = decodeURIComponent(url)

    // Validate that it's a Railway URL (for security)
    if (!imageUrl.includes('aaitech-production.up.railway.app') && 
        !imageUrl.includes('railway.app') &&
        !imageUrl.startsWith('http://localhost:1337')) {
      return res.status(400).json({ error: 'Invalid image source' })
    }

    // Log the image URL for debugging
    console.log('Image Proxy - Fetching image:', imageUrl)
    
    // Fetch the image from Railway
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; AaitekImageProxy/1.0)',
        'Accept': 'image/*,*/*',
      },
      // Add redirect handling
      redirect: 'follow',
    })

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unable to read error')
      console.error('Image Proxy - Failed to fetch:', {
        status: response.status,
        statusText: response.statusText,
        url: imageUrl,
        error: errorText
      })
      return res.status(response.status).json({ 
        error: `Failed to fetch image: ${response.statusText}`,
        url: imageUrl,
        status: response.status
      })
    }

    // Get the image data
    const imageBuffer = await response.arrayBuffer()
    const contentType = response.headers.get('content-type') || 'image/jpeg'

    // Set appropriate headers for image serving
    res.setHeader('Content-Type', contentType)
    // Cache for 1 year but allow revalidation for social media crawlers
    res.setHeader('Cache-Control', 'public, max-age=31536000, must-revalidate')
    res.setHeader('Access-Control-Allow-Origin', '*')
    // Add CORS headers for social media crawlers
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    
    // Return the image
    return res.status(200).send(Buffer.from(imageBuffer))
  } catch (error) {
    console.error('Image Proxy - Error:', {
      message: error.message,
      stack: error.stack,
      url: req.query.url
    })
    return res.status(500).json({ 
      error: 'Failed to proxy image',
      message: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    })
  }
}
