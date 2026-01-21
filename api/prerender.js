// Vercel Edge Function for prerendering social media crawlers
// This uses Prerender.io service OR custom logic to serve HTML with proper meta tags

export const config = {
  runtime: 'edge',
}

const RAILWAY_API_URL = process.env.RAILWAY_API_URL || 'https://aaitech-production.up.railway.app/api'
const PRERENDER_TOKEN = process.env.PRERENDER_TOKEN // Optional: Prerender.io token

// Helper to get image URL from Strapi response
const getImageUrl = (imageData, baseUrl) => {
  if (!imageData) return null
  
  let imageUrl = null
  
  if (imageData.data?.attributes) {
    if (imageData.data.attributes.formats?.large?.url) {
      imageUrl = imageData.data.attributes.formats.large.url
    } else if (imageData.data.attributes.url) {
      imageUrl = imageData.data.attributes.url
    }
  }
  
  if (!imageUrl && imageData.attributes) {
    if (imageData.attributes.formats?.large?.url) {
      imageUrl = imageData.attributes.formats.large.url
    } else if (imageData.attributes.url) {
      imageUrl = imageData.attributes.url
    }
  }
  
  if (!imageUrl) return null
  
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl
  }
  
  if (!imageUrl.startsWith('/')) {
    imageUrl = '/' + imageUrl
  }
  
  const apiBase = baseUrl.replace(/\/api$/, '').replace(/\/$/, '')
  return `${apiBase}${imageUrl}`
}

// Fetch article from Strapi
async function fetchArticle(slug) {
  try {
    const url = `${RAILWAY_API_URL}/articles?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*&publicationState=live`
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) return null
    
    const data = await response.json()
    if (data?.data && data.data.length > 0) {
      const item = data.data[0]
      const imageUrl = getImageUrl(item.attributes?.image, RAILWAY_API_URL)
      return {
        title: item.attributes?.title || 'Article',
        description: item.attributes?.excerpt || item.attributes?.description || 'Read expert insights from Aaitek.',
        image: imageUrl || 'https://aaitek.com.au/logo-black.png',
        type: 'article',
      }
    }
  } catch (error) {
    console.error('Error fetching article:', error)
  }
  return null
}

// Fetch case study from Strapi
async function fetchCaseStudy(slug) {
  try {
    const url = `${RAILWAY_API_URL}/case-studies?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*&publicationState=live`
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) return null
    
    const data = await response.json()
    if (data?.data && data.data.length > 0) {
      const item = data.data[0]
      const imageUrl = getImageUrl(item.attributes?.image, RAILWAY_API_URL)
      return {
        title: item.attributes?.title || 'Case Study',
        description: item.attributes?.excerpt || item.attributes?.description || 'Explore our case studies.',
        image: imageUrl || 'https://aaitek.com.au/logo-black.png',
        type: 'article',
      }
    }
  } catch (error) {
    console.error('Error fetching case study:', error)
  }
  return null
}

export default async function handler(req) {
  const url = new URL(req.url)
  const pathname = url.searchParams.get('path') || url.pathname.replace('/api/prerender', '') || '/'
  const userAgent = req.headers.get('user-agent') || ''
  
  // Check if it's a social media crawler
  const isSocialCrawler = 
    userAgent.includes('facebookexternalhit') ||
    userAgent.includes('Twitterbot') ||
    userAgent.includes('LinkedInBot') ||
    userAgent.includes('WhatsApp') ||
    userAgent.includes('Slackbot') ||
    userAgent.includes('SkypeUriPreview') ||
    userAgent.includes('Discordbot') ||
    userAgent.includes('Googlebot') ||
    userAgent.includes('bingbot') ||
    userAgent.includes('Prerender') ||
    userAgent.includes('prerender')
  
  // If using Prerender.io service, forward to it
  if (PRERENDER_TOKEN && isSocialCrawler) {
    const prerenderUrl = `https://service.prerender.io/https://aaitek.com.au${pathname}`
    try {
      const response = await fetch(prerenderUrl, {
        headers: {
          'X-Prerender-Token': PRERENDER_TOKEN,
        },
      })
      if (response.ok) {
        return response
      }
    } catch (error) {
      console.error('Prerender.io error:', error)
      // Fall through to custom logic
    }
  }
  
  // Custom logic: Get page-specific meta data
  const siteUrl = 'https://aaitek.com.au'
  const defaultTitle = 'Aaitek - Empowering Businesses With AI, Data Analytics & Cloud'
  const defaultDescription = 'Transform your digital vision into reality with Aaitek. Enterprise-grade AI, cloud solutions, and digital transformation services.'
  const defaultImage = `${siteUrl}/logo-black.png`
  
  let meta = {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    type: 'website'
  }
  
  // Article pages - fetch from Strapi
  if (pathname.startsWith('/article/')) {
    const slug = pathname.split('/article/')[1]?.split('?')[0] || ''
    if (slug) {
      const article = await fetchArticle(slug)
      if (article) {
        meta = {
          title: `${article.title} - Article | Aaitek`,
          description: article.description,
          image: article.image,
          type: article.type,
        }
      }
    }
  }
  
  // Case study pages - fetch from Strapi
  if (pathname.startsWith('/case-study/')) {
    const slug = pathname.split('/case-study/')[1]?.split('?')[0] || ''
    if (slug) {
      const caseStudy = await fetchCaseStudy(slug)
      if (caseStudy) {
        meta = {
          title: `${caseStudy.title} - Case Study | Aaitek`,
          description: caseStudy.description,
          image: caseStudy.image,
          type: caseStudy.type,
        }
      }
    }
  }
  
  const fullUrl = `${siteUrl}${pathname}`
  
  // For social crawlers, return HTML with meta tags
  if (isSocialCrawler) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Primary Meta Tags -->
  <title>${meta.title}</title>
  <meta name="description" content="${meta.description}" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="${meta.type}" />
  <meta property="og:url" content="${fullUrl}" />
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.description}" />
  <meta property="og:image" content="${meta.image}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:secure_url" content="${meta.image}" />
  <meta property="og:site_name" content="Aaitek Technology Specialists" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="${fullUrl}" />
  <meta name="twitter:title" content="${meta.title}" />
  <meta name="twitter:description" content="${meta.description}" />
  <meta name="twitter:image" content="${meta.image}" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="${fullUrl}" />
  
  <!-- Favicons -->
  <link rel="icon" type="image/png" href="/logo-black.png" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>`
    
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  }
  
  // For regular users, redirect to the actual page
  return new Response(null, {
    status: 307,
    headers: {
      'Location': pathname,
    },
  })
}
