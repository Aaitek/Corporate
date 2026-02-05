// Script to generate routes list for vite.config.js
// This runs before vite build to fetch dynamic routes synchronously

import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Import data files
import { academyData } from '../src/data/academyData.js'
import { hireTalentData } from '../src/data/hireTalentData.js'
import { partnerSuccessData } from '../src/data/partnerSuccessData.js'
import { productsData } from '../src/data/productsData.js'
import { industriesData } from '../src/data/industriesData.js'
import { servicesData } from '../src/data/servicesData.js'

// Helper function for fetch with timeout
async function fetchWithTimeout(url, options = {}, timeout = 5000) {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    })
    clearTimeout(id)
    return response
  } catch (error) {
    clearTimeout(id)
    throw error
  }
}

// Fetch dynamic routes from Strapi
async function fetchDynamicRoutes() {
  const RAILWAY_API_URL = process.env.RAILWAY_API_URL || 'https://aaitech-production.up.railway.app/api'
  const routes = []
  
  // Fetch case studies
  try {
    const caseStudiesRes = await fetchWithTimeout(`${RAILWAY_API_URL}/case-studies?fields[0]=slug&publicationState=live&pagination[limit]=1000`)
    if (caseStudiesRes.ok) {
      const caseStudiesData = await caseStudiesRes.json()
      if (caseStudiesData?.data) {
        caseStudiesData.data.forEach(item => {
          if (item.attributes?.slug) {
            routes.push(`/case-study/${item.attributes.slug}`)
          }
        })
      }
    }
  } catch (e) {
    console.warn('Failed to fetch case studies:', e.message)
  }
  
  // Fetch articles
  try {
    const articlesRes = await fetchWithTimeout(`${RAILWAY_API_URL}/articles?fields[0]=slug&publicationState=live&pagination[limit]=1000`)
    if (articlesRes.ok) {
      const articlesData = await articlesRes.json()
      if (articlesData?.data) {
        articlesData.data.forEach(item => {
          if (item.attributes?.slug) {
            routes.push(`/article/${item.attributes.slug}`)
          }
        })
      }
    }
  } catch (e) {
    console.warn('Failed to fetch articles:', e.message)
  }
  
  // Fetch press releases
  try {
    const pressReleasesRes = await fetchWithTimeout(`${RAILWAY_API_URL}/press-releases?fields[0]=slug&publicationState=live&pagination[limit]=1000`)
    if (pressReleasesRes.ok) {
      const pressReleasesData = await pressReleasesRes.json()
      if (pressReleasesData?.data) {
        pressReleasesData.data.forEach(item => {
          if (item.attributes?.slug) {
            routes.push(`/press-release/${item.attributes.slug}`)
          }
        })
      }
    }
  } catch (e) {
    console.warn('Failed to fetch press releases:', e.message)
  }
  
  // Fetch videos
  try {
    const videosRes = await fetchWithTimeout(`${RAILWAY_API_URL}/videos?fields[0]=slug&publicationState=live&pagination[limit]=1000`)
    if (videosRes.ok) {
      const videosData = await videosRes.json()
      if (videosData?.data) {
        videosData.data.forEach(item => {
          if (item.attributes?.slug) {
            routes.push(`/video/${item.attributes.slug}`)
          }
        })
      }
    }
  } catch (e) {
    console.warn('Failed to fetch videos:', e.message)
  }
  
  // Fetch webinars
  try {
    const webinarsRes = await fetchWithTimeout(`${RAILWAY_API_URL}/webinars?fields[0]=slug&publicationState=live&pagination[limit]=1000`)
    if (webinarsRes.ok) {
      const webinarsData = await webinarsRes.json()
      if (webinarsData?.data) {
        webinarsData.data.forEach(item => {
          if (item.attributes?.slug) {
            routes.push(`/webinar/${item.attributes.slug}`)
          }
        })
      }
    }
  } catch (e) {
    console.warn('Failed to fetch webinars:', e.message)
  }
  
  return routes
}

// Generate all routes
async function generateAllRoutes() {
  const routes = [
    // Static routes
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

  // Add academy detail routes
  Object.keys(academyData).forEach(slug => {
    routes.push(`/academy/${slug}`)
  })

  // Add hire-talent detail routes
  Object.keys(hireTalentData).forEach(slug => {
    routes.push(`/hire-talent/${slug}`)
  })

  // Add partner-success detail routes
  Object.keys(partnerSuccessData).forEach(slug => {
    routes.push(`/partner-success/${slug}`)
  })

  // Add product detail routes
  Object.keys(productsData).forEach(slug => {
    routes.push(`/products/${slug}`)
  })

  // Add industry detail routes
  Object.keys(industriesData).forEach(slug => {
    routes.push(`/industries/${slug}`)
  })

  // Add ALL service detail routes
  Object.keys(servicesData).forEach(slug => {
    routes.push(`/services/${slug}`)
  })
  
  // Add service category routes
  Object.keys(servicesData).forEach(slug => {
    routes.push(`/services/category/${slug}`)
  })

  // Fetch and add dynamic routes from Strapi
  console.log('Fetching dynamic routes from Strapi...')
  const dynamicRoutes = await fetchDynamicRoutes()
  routes.push(...dynamicRoutes)
  console.log(`Generated ${routes.length} total routes (${dynamicRoutes.length} dynamic)`)

  return routes
}

// Main execution
try {
  const routes = await generateAllRoutes()
  const routesFile = join(__dirname, '..', 'routes.json')
  writeFileSync(routesFile, JSON.stringify(routes, null, 2), 'utf-8')
  console.log(`✅ Routes file generated: ${routesFile}`)
} catch (error) {
  console.error('❌ Error generating routes:', error)
  process.exit(1)
}
