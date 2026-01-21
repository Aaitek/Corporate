// This is a Vercel Edge Function that serves HTML with proper meta tags for social crawlers
// It fetches real data from Strapi for dynamic pages

export const config = {
  runtime: 'edge',
}

const RAILWAY_API_URL = process.env.RAILWAY_API_URL || 'https://aaitech-production.up.railway.app/api'

// Helper to get image URL from Strapi response
const getImageUrl = (imageData, baseUrl) => {
  if (!imageData) return null
  
  let imageUrl = null
  
  // Check nested data.attributes first (most common in Strapi v4)
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
  
  // If already absolute, return as is
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl
  }
  
  // Make absolute URL
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
        title: item.attributes?.title || 'Article | Aaitek',
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
        title: item.attributes?.title || 'Case Study | Aaitek',
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
  const pathname = url.pathname
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
    userAgent.includes('bingbot')
  
  // Get page-specific meta data based on route
  const getPageMeta = async (path) => {
    const siteUrl = 'https://aaitek.com.au'
    const defaultTitle = 'Aaitek - Empowering Businesses With AI, Data Analytics & Cloud'
    const defaultDescription = 'Transform your digital vision into reality with Aaitek. Enterprise-grade AI, cloud solutions, and digital transformation services.'
    const defaultImage = `${siteUrl}/logo-black.png`
    
    // Article pages - fetch from Strapi
    if (path.startsWith('/article/')) {
      const slug = path.split('/article/')[1]?.split('?')[0] || ''
      if (slug) {
        const article = await fetchArticle(slug)
        if (article) {
          return article
        }
      }
      return {
        title: `${defaultTitle} - Article`,
        description: defaultDescription,
        image: defaultImage,
        type: 'article'
      }
    }
    
    // Case study pages - fetch from Strapi
    if (path.startsWith('/case-study/')) {
      const slug = path.split('/case-study/')[1]?.split('?')[0] || ''
      if (slug) {
        const caseStudy = await fetchCaseStudy(slug)
        if (caseStudy) {
          return caseStudy
        }
      }
      return {
        title: `${defaultTitle} - Case Study`,
        description: defaultDescription,
        image: defaultImage,
        type: 'article'
      }
    }
    
    // Video pages
    if (path.startsWith('/video/')) {
      return {
        title: `${defaultTitle} - Video`,
        description: defaultDescription,
        image: defaultImage,
        type: 'video.other'
      }
    }
    
    // Webinar pages
    if (path.startsWith('/webinar/')) {
      return {
        title: `${defaultTitle} - Webinar`,
        description: defaultDescription,
        image: defaultImage,
        type: 'website'
      }
    }
    
    // Case study pages
    if (path.startsWith('/case-study/')) {
      return {
        title: `${defaultTitle} - Case Study`,
        description: defaultDescription,
        image: defaultImage,
        type: 'website'
      }
    }
    
    // Press release pages
    if (path.startsWith('/press-release/')) {
      return {
        title: `${defaultTitle} - Press Release`,
        description: defaultDescription,
        image: defaultImage,
        type: 'article'
      }
    }
    
    // Service pages
    if (path.startsWith('/services/')) {
      const slug = path.split('/services/')[1]?.split('?')[0] || ''
      
      // Service-specific meta data
      const serviceMeta = {
        'web-platform-development': {
          title: 'Web Platform Development - Service | Aaitek',
          description: 'Develop robust, scalable web platforms that grow with your business. From simple websites to complex web applications, we deliver solutions that perform.',
          image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
        },
        'mobile-app-development': {
          title: 'Mobile Application Development - Service | Aaitek',
          description: 'Create powerful mobile applications for iOS and Android that engage users and drive business growth. From native to cross-platform solutions.',
          image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
        },
        'ecommerce-solutions': {
          title: 'eCommerce Solutions - Service | Aaitek',
          description: 'Build high-performing eCommerce platforms that drive sales and provide exceptional shopping experiences. From setup to optimization.',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
        },
        'ux-ui-design': {
          title: 'UX & UI Design - Service | Aaitek',
          description: 'Transform user interactions with thoughtful design that combines aesthetics with functionality. Our UX/UI design services create digital experiences that users love.',
          image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
        },
      }
      
      if (serviceMeta[slug]) {
        return {
          ...serviceMeta[slug],
          type: 'website',
        }
      }
      
      return {
        title: 'Services - Aaitek Technology Specialists',
        description: 'Comprehensive technology services including AI solutions, cloud services, software engineering, digital transformation, and enterprise platforms.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
        type: 'website',
      }
    }
    
    // Product pages
    if (path.startsWith('/products/')) {
      const slug = path.split('/products/')[1]?.split('?')[0] || ''
      
      const productMeta = {
        'ai-sales-agent': {
          title: 'AI Sales Agent - Product | Aaitek',
          description: 'Sales teams lose time on manual follow-ups, inconsistent engagement, and low-quality leads. The AI Sales Agent was built to remove friction from the sales lifecycle.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
        },
        'ai-booking-agent': {
          title: 'AI Booking Agent - Product | Aaitek',
          description: 'Booking delays and manual coordination impact customer experience and operational efficiency. The AI Booking Agent was created to deliver instant, accurate, and seamless booking interactions.',
          image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80',
        },
        'ai-trade-strategy-agent': {
          title: 'AI Trade Strategy Agent - Product | Aaitek',
          description: 'Modern markets generate vast volumes of data, yet decision-making often remains reactive. The AI Trade Strategy Agent was built to help organisations analyse trends, signals, and historical patterns.',
          image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
        },
      }
      
      if (productMeta[slug]) {
        return {
          ...productMeta[slug],
          type: 'website',
        }
      }
      
      return {
        title: 'Products - AI Agents & Platforms | Aaitek',
        description: 'Intelligent AI agents that automate business processes, enhance customer experience, and drive operational efficiency across industries.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
        type: 'website',
      }
    }
    
    // Default
    return {
      title: defaultTitle,
      description: defaultDescription,
      image: defaultImage,
      type: 'website'
    }
  }
  
  const meta = await getPageMeta(pathname)
  const fullUrl = `https://aaitek.com.au${pathname}`
  
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
  
  <!-- Preconnect for performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>`
    
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    })
  }
  
  // For regular users, fetch and return the actual page
  // This allows the React app to load normally
  try {
    const response = await fetch(`https://aaitek.com.au${pathname}`)
    if (response.ok) {
      return response
    }
  } catch (e) {
    // Fallback: redirect to pathname
  }
  
  return new Response(null, {
    status: 307,
    headers: {
      'Location': pathname,
    },
  })
}

