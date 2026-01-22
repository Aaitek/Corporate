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

// Generate all routes for prerendering
const generateRoutes = () => {
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

  return routes
}

export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: '#root', // MUST match your React mount element
      prerenderScript: path.resolve('src/prerender.jsx'), // Explicitly point to prerender function
      additionalPrerenderRoutes: generateRoutes(),
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
})
