// Vercel Edge Middleware - intercepts all requests and serves proper meta tags for social crawlers
export const config = {
  runtime: 'edge',
}

const RAILWAY_API_URL = process.env.RAILWAY_API_URL || 'https://aaitech-production.up.railway.app/api'

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
async function fetchCaseStudy(slug: string) {
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

export default async function handler(req: Request) {
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
  
  // Only intercept social crawlers - let regular users pass through to React app
  // Regular users will get meta tags updated client-side by react-helmet-async
  if (!isSocialCrawler) {
    // Let the request pass through normally to the React app
    return new Response(null, {
      status: 200,
    })
  }
  
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
      }
    }
  } else if (pathname === '/articles') {
    meta = {
      title: 'Articles - Insights & Expert Perspectives | Aaitek',
      description: 'Read expert articles and insights on technology, delivery, and industry trends from Aaitek practitioners, architects, and consultants.',
      image: 'https://aaitek.com/Aaitek%20logo%20in%20Black.png',
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
          image: 'https://aaitek.com/Aaitek%20logo%20in%20Black.png',
          type: 'website'
        }
      } else {
        // Fallback for unknown academy courses
        const formattedTitle = slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
        meta = {
          title: `${formattedTitle} - Academy Course | Aaitek`,
          description: `Premium training course by Aaitek. Enterprise-ready outcomes and delivery readiness.`,
          image: 'https://aaitek.com/Aaitek%20logo%20in%20Black.png',
          type: 'website'
        }
      }
    } else {
      meta = {
        title: 'Academy - Training Courses | Aaitek',
        description: 'Premium training courses by Aaitek. Enterprise-ready outcomes and delivery readiness.',
        image: 'https://aaitek.com/Aaitek%20logo%20in%20Black.png',
        type: 'website'
      }
    }
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
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="${meta.type}" />
  <meta property="og:url" content="${fullUrl}" />
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.description}" />
  <meta property="og:image" content="${meta.image}" />
  <meta property="og:image:secure_url" content="${meta.image}" />
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
    },
  })
}
