// Vercel API route to generate sitemap.xml dynamically
import { getRailwayApiUrl } from './strapi-config.js'

const RAILWAY_API_URL = getRailwayApiUrl()
const SITE_URL = 'https://aaitek.com'

async function fetchDynamicRoutes() {
  const routes = []
  
  try {
    // Fetch case studies
    const caseStudiesRes = await fetch(`${RAILWAY_API_URL}/case-studies?fields[0]=slug&publicationState=live&pagination[limit]=1000`)
    const caseStudiesData = await caseStudiesRes.json()
    if (caseStudiesData?.data) {
      caseStudiesData.data.forEach(item => {
        if (item.attributes?.slug) {
          routes.push(`/case-study/${item.attributes.slug}`)
        }
      })
    }
    
    // Fetch articles
    const articlesRes = await fetch(`${RAILWAY_API_URL}/articles?fields[0]=slug&publicationState=live&pagination[limit]=1000`)
    const articlesData = await articlesRes.json()
    if (articlesData?.data) {
      articlesData.data.forEach(item => {
        if (item.attributes?.slug) {
          routes.push(`/article/${item.attributes.slug}`)
        }
      })
    }
    
    // Fetch press releases
    const pressReleasesRes = await fetch(`${RAILWAY_API_URL}/press-releases?fields[0]=slug&publicationState=live&pagination[limit]=1000`)
    const pressReleasesData = await pressReleasesRes.json()
    if (pressReleasesData?.data) {
      pressReleasesData.data.forEach(item => {
        if (item.attributes?.slug) {
          routes.push(`/press-release/${item.attributes.slug}`)
        }
      })
    }
    
    // Fetch videos
    const videosRes = await fetch(`${RAILWAY_API_URL}/videos?fields[0]=slug&publicationState=live&pagination[limit]=1000`)
    const videosData = await videosRes.json()
    if (videosData?.data) {
      videosData.data.forEach(item => {
        if (item.attributes?.slug) {
          routes.push(`/video/${item.attributes.slug}`)
        }
      })
    }
    
    // Fetch webinars
    const webinarsRes = await fetch(`${RAILWAY_API_URL}/webinars?fields[0]=slug&publicationState=live&pagination[limit]=1000`)
    const webinarsData = await webinarsRes.json()
    if (webinarsData?.data) {
      webinarsData.data.forEach(item => {
        if (item.attributes?.slug) {
          routes.push(`/webinar/${item.attributes.slug}`)
        }
      })
    }
  } catch (error) {
    console.error('Error fetching dynamic routes for sitemap:', error)
  }
  
  return routes
}

// Generate sitemap XML
function generateSitemap(routes) {
  const urls = routes.map(route => {
    // Set priority and changefreq based on route type
    let priority = '0.8'
    let changefreq = 'weekly'
    
    if (route === '/') {
      priority = '1.0'
      changefreq = 'daily'
    } else if (route.startsWith('/services') || route.startsWith('/products')) {
      priority = '0.9'
      changefreq = 'weekly'
    } else if (route.startsWith('/article') || route.startsWith('/case-study')) {
      priority = '0.8'
      changefreq = 'monthly'
    }
    
    return `  <url>
    <loc>${SITE_URL}${route}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  }).join('\n')
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Static routes
    const staticRoutes = [
      '/',
      '/services',
      '/products',
      '/academy',
      '/industries',
      '/hire-developers',
      '/hire-talent',
      '/partner-success',
      '/case-studies',
      '/press-releases',
      '/articles',
      '/webinars',
      '/videos',
      '/resources',
      '/about',
      '/company',
      '/contact',
      '/career',
      '/careers',
      '/brand-guidelines',
      '/BrandGuidelines',
      '/privacy-policy',
      '/terms-conditions',
    ]

    // Note: Data-driven routes (academy, hire-talent, products, industries, services)
    // are included in the static sitemap.xml generated at build time.
    // This API route focuses on dynamic routes from Strapi that may change frequently.
    
    // Fetch dynamic routes from Strapi
    const dynamicRoutes = await fetchDynamicRoutes()
    
    // Combine all routes
    const allRoutes = [...staticRoutes, ...dynamicRoutes]
    
    // Remove duplicates
    const uniqueRoutes = [...new Set(allRoutes)]
    
    // Sort routes (homepage first, then alphabetical)
    uniqueRoutes.sort((a, b) => {
      if (a === '/') return -1
      if (b === '/') return 1
      return a.localeCompare(b)
    })
    
    // Generate sitemap XML
    const sitemap = generateSitemap(uniqueRoutes)
    
    // Set proper headers for XML
    res.setHeader('Content-Type', 'application/xml')
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
    
    return res.status(200).send(sitemap)
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return res.status(500).json({ error: 'Failed to generate sitemap' })
  }
}
