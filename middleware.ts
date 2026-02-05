// Vercel Edge Middleware - intercepts all requests and serves proper meta tags for social crawlers
export const config = {
  runtime: 'edge',
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - og-image.png (image file - let it be served directly)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|og-image.png).*)',
  ],
}

const RAILWAY_API_URL = process.env.RAILWAY_API_URL || 'https://aaitech-production.up.railway.app/api'
const SITE_URL = 'https://www.aaitek.com'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png` // Use og-image.png for better social previews - MUST be absolute URL

// Type definitions for Strapi API responses
interface StrapiResponse<T> {
  data: T[]
  meta?: any
}

interface StrapiArticle {
  id: number
  attributes: {
    title?: string
    excerpt?: string
    description?: string
    image?: any
    slug?: string
  }
}

interface StrapiCaseStudy {
  id: number
  attributes: {
    title?: string
    description?: string
    image?: any
    slug?: string
  }
}

// Helper to get image URL from Strapi format
const getImageUrl = (image: any, size = 'large') => {
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
async function fetchArticle(slug: string) {
  try {
    const url = `${RAILWAY_API_URL}/articles?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*&publicationState=live`
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) return null
    
    const data = await response.json() as StrapiResponse<StrapiArticle>
    if (data.data && data.data.length > 0) {
      const article = data.data[0]
      const imageUrl = getImageUrl(article.attributes?.image)
      const railwayImageUrl = imageUrl 
        ? (imageUrl.startsWith('http') ? imageUrl : `https://aaitech-production.up.railway.app${imageUrl}`)
        : null
      
      return {
        title: article.attributes?.title || '',
        description: article.attributes?.excerpt || article.attributes?.description || '',
        image: railwayImageUrl || DEFAULT_IMAGE,
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
}

// Fetch case study by slug from Strapi
async function fetchCaseStudy(slug: string) {
  try {
    const url = `${RAILWAY_API_URL}/case-studies?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*&publicationState=live`
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) return null
    
    const data = await response.json() as StrapiResponse<StrapiCaseStudy>
    if (data.data && data.data.length > 0) {
      const caseStudy = data.data[0]
      const imageUrl = getImageUrl(caseStudy.attributes?.image)
      const railwayImageUrl = imageUrl 
        ? (imageUrl.startsWith('http') ? imageUrl : `https://aaitech-production.up.railway.app${imageUrl}`)
        : null
      
      return {
        title: caseStudy.attributes?.title || '',
        description: caseStudy.attributes?.description || '',
        image: railwayImageUrl || DEFAULT_IMAGE,
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching case study:', error)
    return null
  }
}

export default async function handler(req: Request) {
  const url = new URL(req.url)
  const pathname = url.pathname
  const userAgent = req.headers.get('user-agent') || ''
  const referer = req.headers.get('referer') || ''
  
  // Check if it's a social media crawler
  // LinkedIn uses various user agents, so we check for multiple patterns
  // CRITICAL: LinkedIn Post Inspector uses different user agents than the actual crawler
  // Also check referer for LinkedIn Post Inspector
  // Make detection case-insensitive and more comprehensive
  const ua = userAgent.toLowerCase()
  const ref = referer.toLowerCase()
  
  const isSocialCrawler = 
    ua.includes('facebookexternalhit') ||
    ua.includes('facebookcatalog') ||
    ua.includes('twitterbot') ||
    ua.includes('linkedinbot') ||
    ua.includes('linkedin') ||
    ua.includes('whatsapp') ||
    ua.includes('slackbot') ||
    ua.includes('skypeuripreview') ||
    ua.includes('discordbot') ||
    ua.includes('applebot') ||
    ua.includes('googlebot') ||
    ua.includes('bingbot') ||
    ua.includes('yandexbot') ||
    ua.includes('baiduspider') ||
    ua.includes('duckduckbot') ||
    ua.includes('slurp') ||
    ua.includes('crawler') ||
    ua.includes('spider') ||
    ua.includes('bot') ||
    // Check referer for social media platforms
    ref.includes('linkedin.com') ||
    ref.includes('facebook.com') ||
    ref.includes('twitter.com') ||
    ref.includes('whatsapp.com') ||
    ref.includes('t.co') ||
    // Check for LinkedIn's internal crawler patterns
    userAgent.includes('LinkedIn') ||
    userAgent.includes('linkedin')
  
  // Only intercept social crawlers - let regular users pass through to React app
  // Regular users will get meta tags updated client-side by react-helmet-async
  // For page source, users will see defaults, but social media previews will be correct
  if (!isSocialCrawler) {
    // Don't intercept - let the request continue to the React app
    return undefined as any
  }
  
  // Log for debugging (only in development)
  if (process.env.NODE_ENV !== 'production') {
    console.log('Middleware intercepting:', { pathname, userAgent, isSocialCrawler })
  }
  
  const siteUrl = SITE_URL
  const defaultTitle = 'Aaitek - Empowering Businesses With AI, Data Analytics & Cloud'
  const defaultDescription = 'Transform your digital vision into reality with Aaitek. Enterprise-grade AI, cloud solutions, and digital transformation services.'
  const defaultImage = DEFAULT_IMAGE
  
  // Ensure image URL is absolute and accessible
  // Use clean URL without query parameters for better social media compatibility
  const ensureAbsoluteImageUrl = (imageUrl: string): string => {
    if (!imageUrl) return defaultImage
    let absoluteUrl: string
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      absoluteUrl = imageUrl.split('?')[0] // Remove any existing query params
    } else if (imageUrl.startsWith('/')) {
      absoluteUrl = `${siteUrl}${imageUrl.split('?')[0]}`
    } else {
      absoluteUrl = `${siteUrl}/${imageUrl.split('?')[0]}`
    }
    return absoluteUrl
  }
  
  let meta = {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage, // Already absolute URL from DEFAULT_IMAGE constant
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
          image: ensureAbsoluteImageUrl(article.image || defaultImage),
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
          image: ensureAbsoluteImageUrl(caseStudy.image || defaultImage),
          type: 'article'
        }
      }
    }
  } else if (pathname === '/articles') {
    meta = {
      title: 'Articles - Insights & Expert Perspectives | Aaitek',
      description: 'Read expert articles and insights on technology, delivery, and industry trends from Aaitek practitioners, architects, and consultants.',
      image: defaultImage,
      type: 'website'
    }
  } else if (pathname.startsWith('/academy/')) {
    const slug = pathname.split('/academy/')[1]?.split('?')[0] || ''
    if (slug) {
      // Academy course data - matches academyData.js
      const academyCourses: Record<string, { title: string; description: string }> = {
        'full-stack-engineering': {
          title: 'Full-Stack Engineering Training - Academy Course | Aaitek',
          description: 'Build End-to-End Applications the Way Enterprises Do. This training develops engineers who can design, build, and maintain complete applications—from frontend to backend—using enterprise-ready patterns. Premium training course by Aaitek.',
        },
        'cloud-engineering': {
          title: 'Cloud Engineering Training - Academy Course | Aaitek',
          description: 'Design, Build, and Operate Cloud-Native Systems. Learn how modern systems are architected, deployed, and operated in cloud environments. Premium training course by Aaitek.',
        },
        'data-ai-engineering': {
          title: 'Data & AI Engineering Training - Academy Course | Aaitek',
          description: 'Turn Data into Intelligent, Actionable Systems. Designed for engineers working with data pipelines, analytics, and AI-enabled applications. Premium training course by Aaitek.',
        },
      }
      
      const course = academyCourses[slug]
      if (course) {
        meta = {
          title: course.title,
          description: course.description,
          image: defaultImage,
          type: 'website'
        }
      } else {
        // Fallback for unknown academy courses
        const formattedTitle = slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
        meta = {
          title: `${formattedTitle} - Academy Course | Aaitek`,
          description: `Premium training course by Aaitek. Enterprise-ready outcomes and delivery readiness.`,
          image: defaultImage,
          type: 'website'
        }
      }
    } else {
      meta = {
        title: 'Academy - Training Courses | Aaitek',
        description: 'Premium training courses by Aaitek. Enterprise-ready outcomes and delivery readiness.',
        image: defaultImage,
        type: 'website'
      }
    }
  }
  
  // Ensure image is always set to defaultImage if not explicitly set
  if (!meta.image) {
    meta.image = defaultImage
  } else {
    // Ensure image URL is absolute and clean (no query params)
    meta.image = ensureAbsoluteImageUrl(meta.image)
  }
  
  const fullUrl = `${siteUrl}${pathname}`
  
  // Return HTML with proper meta tags for social crawlers
  // This ensures social media previews show page-specific content
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Primary Meta Tags -->
  <title>${meta.title}</title>
  <meta name="description" content="${meta.description}" />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  
  <!-- Open Graph / Facebook / LinkedIn -->
  <meta property="og:type" content="${meta.type}" />
  <meta property="og:url" content="${fullUrl}" />
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.description}" />
  <meta property="og:image" content="${meta.image}" />
  <meta property="og:image:url" content="${meta.image}" />
  <meta property="og:image:secure_url" content="${meta.image}" />
  <meta name="image" property="og:image" content="${meta.image}" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${meta.title}" />
  <meta property="og:site_name" content="Aaitek Technology Specialists" />
  
  <!-- LinkedIn specific meta tags -->
  <meta property="linkedin:owner" content="aaitek" />
  <meta name="linkedin:image" content="${meta.image}" />
  
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
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>`
  
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'X-Robots-Tag': 'index, follow',
    },
  })
}
