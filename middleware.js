// Vercel Edge Middleware - intercepts requests before they reach the SPA
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|avif)).*)',
  ],
}

export default async function middleware(request) {
  const userAgent = request.headers.get('user-agent') || ''
  
  // Check if it's a social media crawler
  const isSocialCrawler = 
    userAgent.includes('facebookexternalhit') ||
    userAgent.includes('Twitterbot') ||
    userAgent.includes('LinkedInBot') ||
    userAgent.includes('WhatsApp') ||
    userAgent.includes('Slackbot') ||
    userAgent.includes('SkypeUriPreview') ||
    userAgent.includes('Discordbot')
  
  // Only intercept for social crawlers
  if (isSocialCrawler) {
    const url = new URL(request.url)
    const pathname = url.pathname
    const search = url.search
    const fullUrl = `https://aaitek.com.au${pathname}${search}`
    
    // Get page-specific meta data
    const getPageMeta = (path) => {
      const siteUrl = 'https://aaitek.com.au'
      const defaultTitle = 'Aaitek - Empowering Businesses With AI, Data Analytics & Cloud'
      const defaultDescription = 'Transform your digital vision into reality with Aaitek. Enterprise-grade AI, cloud solutions, and digital transformation services.'
      const defaultImage = `${siteUrl}/logo.png`
      
      // Service pages
      if (path.startsWith('/services/')) {
        const slug = path.split('/services/')[1]?.split('?')[0] || ''
        
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
        type: 'website',
      }
    }
    
    const meta = getPageMeta(pathname)
    
    // Return HTML with proper meta tags
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
  
  // For regular users, continue normally
  return new Response(null, {
    status: 200,
  })
}
