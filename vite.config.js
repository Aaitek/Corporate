import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'
import path from 'node:path'

// Import data files to generate all routes dynamically
import { academyData } from './src/data/academyData.js'
import { hireTalentData } from './src/data/hireTalentData.js'
import { partnerSuccessData } from './src/data/partnerSuccessData.js'
import { productsData } from './src/data/productsData.js'
import { industriesData } from './src/data/industriesData.js'
import { servicesData } from './src/data/servicesData.js'

// Fetch dynamic routes from Strapi at build time with timeout
async function fetchDynamicRoutes() {
  const RAILWAY_API_URL = process.env.RAILWAY_API_URL || 'https://aaitech-production.up.railway.app/api'
  const routes = []
  const TIMEOUT = 5000 // 5 second timeout per request
  
  // Helper to fetch with timeout
  const fetchWithTimeout = async (url) => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT)
    try {
      const response = await fetch(url, { signal: controller.signal })
      clearTimeout(timeoutId)
      return response
    } catch (error) {
      clearTimeout(timeoutId)
      throw error
    }
  }
  
  try {
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
  } catch (error) {
    console.warn('Warning: Could not fetch dynamic routes from Strapi:', error.message)
    console.warn('Continuing with static routes only...')
  }
  
  return routes
}

// Generate static routes for prerendering (synchronous)
function generateStaticRoutes() {
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
  
  // Add service category routes (these are dynamic based on services)
  Object.keys(servicesData).forEach(slug => {
    routes.push(`/services/category/${slug}`)
  })

  return routes
}

// Start fetching dynamic routes in background (non-blocking)
let dynamicRoutesPromise = null
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'development') {
  // Only fetch in production builds, and don't block
  dynamicRoutesPromise = fetchDynamicRoutes().catch(err => {
    console.warn('Dynamic routes fetch failed, using static routes only:', err.message)
    return []
  })
}

export default defineConfig(() => {
  // Start with static routes immediately
  const staticRoutes = generateStaticRoutes()
  
  // Return config - dynamic routes will be added by the plugin if available
  return {
    plugins: [
      react(),
      vitePrerenderPlugin({
        renderTarget: '#root', // MUST match your React mount element
        prerenderScript: path.resolve('src/prerender.jsx'), // Explicitly point to prerender function
        additionalPrerenderRoutes: staticRoutes, // Use static routes for now
        // Dynamic routes will be handled by the prerender script itself
      }),
    ],
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://localhost:1337',
          changeOrigin: true,
        },
      },
    },
  }
})
