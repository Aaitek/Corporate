// This is a Vercel Edge Function that serves HTML with proper meta tags for social crawlers
// It should be deployed as an edge function

export const config = {
  runtime: 'edge',
}

const RAILWAY_API_URL = process.env.RAILWAY_API_URL || 'https://aaitech-production.up.railway.app/api'

// Helper to get image URL from Strapi format
const getImageUrl = (image, size = 'large') => {
  if (!image || !image.data) return null
  const formats = image.data.attributes?.formats
  if (formats && formats[size]) {
    return formats[size].url
  }
  if (formats && formats.medium) {
    return formats.medium.url
  }
  if (image.data.attributes?.url) {
    return image.data.attributes.url
  }
  return null
}

// Fetch article by slug from Strapi
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
    if (data.data && data.data.length > 0) {
      const article = data.data[0]
      const imageUrl = getImageUrl(article.attributes?.image)
      const railwayImageUrl = imageUrl 
        ? (imageUrl.startsWith('http') ? imageUrl : `https://aaitech-production.up.railway.app${imageUrl}`)
        : null
      
      return {
        title: article.attributes?.title || '',
        description: article.attributes?.excerpt || article.attributes?.description || '',
        image: railwayImageUrl || 'https://aaitek.com/footer-logo.png',
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
}

// Fetch case study by slug from Strapi
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
    if (data.data && data.data.length > 0) {
      const caseStudy = data.data[0]
      const imageUrl = getImageUrl(caseStudy.attributes?.image)
      const railwayImageUrl = imageUrl 
        ? (imageUrl.startsWith('http') ? imageUrl : `https://aaitech-production.up.railway.app${imageUrl}`)
        : null
      
      return {
        title: caseStudy.attributes?.title || '',
        description: caseStudy.attributes?.description || '',
        image: railwayImageUrl || 'https://aaitek.com/footer-logo.png',
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching case study:', error)
    return null
  }
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
    userAgent.includes('Discordbot')
  
  const siteUrl = 'https://aaitek.com'
  const defaultTitle = 'Aaitek - Empowering Businesses With AI, Data Analytics & Cloud'
  const defaultDescription = 'Transform your digital vision into reality with Aaitek. Enterprise-grade AI, cloud solutions, and digital transformation services.'
  const defaultImage = `${siteUrl}/footer-logo.png`
  
  let meta = {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    type: 'website'
  }
  
  // Fetch real data for dynamic pages
  if (pathname.startsWith('/article/')) {
    const slug = pathname.split('/article/')[1]?.split('?')[0] || ''
    if (slug) {
      const article = await fetchArticle(slug)
      if (article) {
        meta = {
          title: `${article.title} - Article | Aaitek`,
          description: article.description || defaultDescription,
          image: article.image,
          type: 'article'
        }
      } else {
        meta = {
          title: `Article - ${defaultTitle}`,
          description: defaultDescription,
          image: defaultImage,
          type: 'article'
        }
      }
    }
  } else if (pathname.startsWith('/case-study/')) {
    const slug = pathname.split('/case-study/')[1]?.split('?')[0] || ''
    if (slug) {
      const caseStudy = await fetchCaseStudy(slug)
      if (caseStudy) {
        meta = {
          title: `${caseStudy.title} - Case Study | Aaitek`,
          description: caseStudy.description || defaultDescription,
          image: caseStudy.image,
          type: 'article'
        }
      } else {
        meta = {
          title: `Case Study - ${defaultTitle}`,
          description: defaultDescription,
          image: defaultImage,
          type: 'article'
        }
      }
    }
  } else if (pathname === '/articles') {
    meta = {
      title: 'Articles - Insights & Expert Perspectives | Aaitek',
      description: 'Read expert articles and insights on technology, delivery, and industry trends from Aaitek practitioners, architects, and consultants.',
      image: 'https://aaitek.com/Aaitek%20logo%20in%20Black.png',
      type: 'website'
    }
  } else if (pathname.startsWith('/video/')) {
    meta = {
      title: `${defaultTitle} - Video`,
      description: defaultDescription,
      image: defaultImage,
      type: 'video.other'
    }
  } else if (pathname.startsWith('/webinar/')) {
    meta = {
      title: `${defaultTitle} - Webinar`,
      description: defaultDescription,
      image: defaultImage,
      type: 'website'
    }
  } else if (pathname.startsWith('/press-release/')) {
    meta = {
      title: `${defaultTitle} - Press Release`,
      description: defaultDescription,
      image: defaultImage,
      type: 'article'
    }
  } else if (pathname.startsWith('/services/')) {
    const slug = pathname.split('/services/')[1]?.split('?')[0] || ''
    
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
      meta = {
        ...serviceMeta[slug],
        type: 'website',
      }
    } else {
      meta = {
        title: 'Services - Aaitek Technology Specialists',
        description: 'Comprehensive technology services including AI solutions, cloud services, software engineering, digital transformation, and enterprise platforms.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
        type: 'website',
      }
    }
  } else if (pathname.startsWith('/products/')) {
    const slug = pathname.split('/products/')[1]?.split('?')[0] || ''
    
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
      meta = {
        ...productMeta[slug],
        type: 'website',
      }
    } else {
      meta = {
        title: 'Products - AI Agents & Platforms | Aaitek',
        description: 'Intelligent AI agents that automate business processes, enhance customer experience, and drive operational efficiency across industries.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
        type: 'website',
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
  <meta property="og:image:url" content="${meta.image}" />
  <meta property="og:image:secure_url" content="${meta.image}" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${meta.title}" />
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
  <link rel="icon" type="image/png" href="/Aaitek logo in Black.png" />
  
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
    const response = await fetch(`${siteUrl}${pathname}`)
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
