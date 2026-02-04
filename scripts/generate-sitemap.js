// Build-time script to generate sitemap.xml
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const SITE_URL = 'https://aaitek.com'
const RAILWAY_API_URL = process.env.RAILWAY_API_URL || 'https://aaitech-production.up.railway.app/api'

// Import data files
import { academyData } from '../src/data/academyData.js'
import { hireTalentData } from '../src/data/hireTalentData.js'
import { partnerSuccessData } from '../src/data/partnerSuccessData.js'
import { productsData } from '../src/data/productsData.js'
import { industriesData } from '../src/data/industriesData.js'
import { servicesData } from '../src/data/servicesData.js'

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
    } else if (route.startsWith('/academy') || route.startsWith('/hire-talent')) {
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

async function main() {
  console.log('Generating sitemap.xml...')
  
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

  // Add data-driven routes
  Object.keys(academyData).forEach(slug => {
    staticRoutes.push(`/academy/${slug}`)
  })

  Object.keys(hireTalentData).forEach(slug => {
    staticRoutes.push(`/hire-talent/${slug}`)
  })

  Object.keys(partnerSuccessData).forEach(slug => {
    staticRoutes.push(`/partner-success/${slug}`)
  })

  Object.keys(productsData).forEach(slug => {
    staticRoutes.push(`/products/${slug}`)
  })

  Object.keys(industriesData).forEach(slug => {
    staticRoutes.push(`/industries/${slug}`)
  })

  Object.keys(servicesData).forEach(slug => {
    staticRoutes.push(`/services/${slug}`)
    staticRoutes.push(`/services/category/${slug}`)
  })

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
  
  // Write to public folder
  const outputPath = join(__dirname, '..', 'public', 'sitemap.xml')
  writeFileSync(outputPath, sitemap, 'utf8')
  
  console.log(`✅ Sitemap generated successfully with ${uniqueRoutes.length} URLs`)
  console.log(`   Saved to: ${outputPath}`)
}

main().catch(error => {
  console.error('Error generating sitemap:', error)
  process.exit(1)
})
