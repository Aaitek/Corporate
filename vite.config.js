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

const RAILWAY_API_URL = 'https://aaitech-production.up.railway.app'

// Fetch articles from Strapi
async function fetchArticleSlugs() {
  try {
    const response = await fetch(`${RAILWAY_API_URL}/api/articles?fields[0]=slug&publicationState=live&pagination[limit]=1000`)
    if (!response.ok) return []
    const data = await response.json()
    return (data.data || []).map(item => item.attributes?.slug).filter(Boolean)
  } catch (error) {
    console.warn('Could not fetch article slugs during build:', error.message)
    return []
  }
}

// Fetch case studies from Strapi
async function fetchCaseStudySlugs() {
  try {
    const response = await fetch(`${RAILWAY_API_URL}/api/case-studies?fields[0]=slug&publicationState=live&pagination[limit]=1000`)
    if (!response.ok) return []
    const data = await response.json()
    return (data.data || []).map(item => item.attributes?.slug).filter(Boolean)
  } catch (error) {
    console.warn('Could not fetch case study slugs during build:', error.message)
    return []
  }
}

// Generate all routes for prerendering
async function generateRoutes() {
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

  // Fetch and add article routes from Strapi (route is /article/:slug - singular)
  const articleSlugs = await fetchArticleSlugs()
  articleSlugs.forEach(slug => {
    routes.push(`/article/${slug}`)
  })

  // Fetch and add case study routes from Strapi (route is /case-study/:slug - singular)
  const caseStudySlugs = await fetchCaseStudySlugs()
  caseStudySlugs.forEach(slug => {
    routes.push(`/case-study/${slug}`)
  })

  return routes
}

// Generate routes synchronously for initial config
// The plugin will use the async function when needed
const baseRoutes = [
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

// Add static data routes
Object.keys(academyData).forEach(slug => baseRoutes.push(`/academy/${slug}`))
Object.keys(hireTalentData).forEach(slug => baseRoutes.push(`/hire-talent/${slug}`))
Object.keys(partnerSuccessData).forEach(slug => baseRoutes.push(`/partner-success/${slug}`))
Object.keys(productsData).forEach(slug => baseRoutes.push(`/products/${slug}`))
Object.keys(industriesData).forEach(slug => baseRoutes.push(`/industries/${slug}`))
Object.keys(servicesData).forEach(slug => baseRoutes.push(`/services/${slug}`))

export default defineConfig(async () => {
  // Fetch dynamic routes (articles, case studies) during config
  const dynamicRoutes = []
  
  const articleSlugs = await fetchArticleSlugs()
  articleSlugs.forEach(slug => {
    dynamicRoutes.push(`/articles/${slug}`)
    dynamicRoutes.push(`/article/${slug}`)
  })
  
  const caseStudySlugs = await fetchCaseStudySlugs()
  caseStudySlugs.forEach(slug => {
    dynamicRoutes.push(`/case-studies/${slug}`)
    dynamicRoutes.push(`/case-study/${slug}`)
  })
  
  const allRoutes = [...baseRoutes, ...dynamicRoutes]
  
  return {
    plugins: [
      react(),
      vitePrerenderPlugin({
        renderTarget: '#root', // MUST match your React mount element
        prerenderScript: path.resolve('src/prerender.jsx'), // Explicitly point to prerender function
        additionalPrerenderRoutes: allRoutes,
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
