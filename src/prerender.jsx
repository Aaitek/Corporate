import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { AppRoutes } from './AppRoutes'
import { HelmetProvider } from 'react-helmet-async'
import { SEO } from './seoMap'

const SITE = 'https://aaitek.com'
const RAILWAY_API_URL = process.env.RAILWAY_API_URL || 'https://aaitech-production.up.railway.app/api'
const defaultImage = `${SITE}/og-image.png`

// Helper to normalize URL path
const normalizeUrl = (url) => {
  if (!url) return '/'
  const pathname = url.split('?')[0].split('#')[0]
  return pathname === '' ? '/' : pathname
}

// Helper to get image URL from Strapi response
const getImageUrl = (imageData) => {
  if (!imageData) return defaultImage
  if (typeof imageData === 'string') return imageData.startsWith('http') ? imageData : defaultImage
  if (imageData.data) {
    const url = imageData.data.attributes?.url || imageData.data.url
    if (url) {
      const baseUrl = url.startsWith('http') ? '' : RAILWAY_API_URL.replace('/api', '')
      return `${baseUrl}${url}`
    }
  }
  return defaultImage
}

// Fetch dynamic content from Strapi
async function fetchDynamicContent(pathname) {
  try {
    // Case study: /case-study/:slug
    if (pathname.startsWith('/case-study/')) {
      const slug = pathname.replace('/case-study/', '')
      const response = await fetch(`${RAILWAY_API_URL}/case-studies?filters[slug][$eq]=${slug}&populate=*&publicationState=live`)
      const data = await response.json()
      if (data?.data?.[0]) {
        const item = data.data[0].attributes
        return {
          title: `${item.title} - Case Study | Aaitek`,
          description: item.excerpt || item.description || `${item.title} case study by Aaitek.`,
          image: getImageUrl(item.image),
        }
      }
    }
    
    // Article: /article/:slug
    if (pathname.startsWith('/article/')) {
      const slug = pathname.replace('/article/', '')
      const response = await fetch(`${RAILWAY_API_URL}/articles?filters[slug][$eq]=${slug}&populate=*&publicationState=live`)
      const data = await response.json()
      if (data?.data?.[0]) {
        const item = data.data[0].attributes
        return {
          title: `${item.title} - Article | Aaitek`,
          description: item.excerpt || item.description || `${item.title} article by Aaitek.`,
          image: getImageUrl(item.image),
        }
      }
    }
    
    // Press release: /press-release/:slug
    if (pathname.startsWith('/press-release/')) {
      const slug = pathname.replace('/press-release/', '')
      const response = await fetch(`${RAILWAY_API_URL}/press-releases?filters[slug][$eq]=${slug}&populate=*&publicationState=live`)
      const data = await response.json()
      if (data?.data?.[0]) {
        const item = data.data[0].attributes
        return {
          title: `${item.title} - Press Release | Aaitek`,
          description: item.description || item.excerpt || `${item.title} press release from Aaitek.`,
          image: getImageUrl(item.image),
        }
      }
    }
    
    // Video: /video/:slug
    if (pathname.startsWith('/video/')) {
      const slug = pathname.replace('/video/', '')
      const response = await fetch(`${RAILWAY_API_URL}/videos?filters[slug][$eq]=${slug}&populate=*&publicationState=live`)
      const data = await response.json()
      if (data?.data?.[0]) {
        const item = data.data[0].attributes
        return {
          title: `${item.title} - Video | Aaitek`,
          description: item.description || `${item.title} video from Aaitek.`,
          image: getImageUrl(item.image),
        }
      }
    }
    
    // Webinar: /webinar/:slug
    if (pathname.startsWith('/webinar/')) {
      const slug = pathname.replace('/webinar/', '')
      const response = await fetch(`${RAILWAY_API_URL}/webinars?filters[slug][$eq]=${slug}&populate=*&publicationState=live`)
      const data = await response.json()
      if (data?.data?.[0]) {
        const item = data.data[0].attributes
        return {
          title: `${item.title} - Webinar | Aaitek`,
          description: item.description || `${item.title} webinar from Aaitek.`,
          image: getImageUrl(item.image),
        }
      }
    }
    
    // Service category: /services/category/:slug
    if (pathname.startsWith('/services/category/')) {
      // Use default service category meta
      return {
        title: `Services - ${pathname.split('/').pop()} | Aaitek`,
        description: 'Comprehensive technology services by Aaitek.',
        image: defaultImage,
      }
    }
  } catch (error) {
    console.error('Error fetching dynamic content:', error)
  }
  
  return null
}

// This function name MUST be exactly `prerender`
export async function prerender(data) {
  const url = data?.url || '/'
  const pathname = normalizeUrl(url)
  
  // CRITICAL: Always set canonical to the current page URL, never to homepage
  const canonical = `${SITE}${pathname}`
  
  // Try to get page-specific meta tags
  let meta = SEO[pathname]
  
  // If not in SEO map, try fetching from Strapi for dynamic routes
  if (!meta) {
    const dynamicMeta = await fetchDynamicContent(pathname)
    if (dynamicMeta) {
      meta = dynamicMeta
    } else {
      // Fallback to homepage meta, but canonical MUST still be the current page
      meta = SEO['/']
    }
  }
  
  // Debug: Log the image URL being used
  console.log(`[Prerender] Path: ${pathname}, Image: ${meta.image}`)
  
  // Ensure image URL is absolute
  if (meta.image && !meta.image.startsWith('http')) {
    meta.image = `${SITE}${meta.image.startsWith('/') ? '' : '/'}${meta.image}`
    console.log(`[Prerender] Fixed image URL: ${meta.image}`)
  }
  
  // Render React app with StaticRouter
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  )
  
  // Return HTML with page-specific meta tags
  // CRITICAL: canonical is ALWAYS the current page URL, never homepage
  return {
    html,
    head: {
      lang: 'en',
      title: meta.title,
      elements: new Set([
        { type: 'meta', props: { name: 'description', content: meta.description } },
        
        // CRITICAL: Canonical is ALWAYS the current page, never homepage
        { type: 'link', props: { rel: 'canonical', href: canonical } },
        
        { type: 'meta', props: { property: 'og:type', content: 'website' } },
        { type: 'meta', props: { property: 'og:url', content: canonical } },
        { type: 'meta', props: { property: 'og:title', content: meta.title } },
        { type: 'meta', props: { property: 'og:description', content: meta.description } },
        { type: 'meta', props: { property: 'og:image', content: meta.image } },
        { type: 'meta', props: { property: 'og:image:secure_url', content: meta.image } },
        { type: 'meta', props: { property: 'og:image:type', content: 'image/png' } },
        { type: 'meta', props: { property: 'og:image:width', content: '1200' } },
        { type: 'meta', props: { property: 'og:image:height', content: '630' } },
        { type: 'meta', props: { property: 'og:image:alt', content: meta.title } },
        { type: 'meta', props: { property: 'og:site_name', content: 'Aaitek Technology Specialists' } },
        
        { type: 'meta', props: { name: 'twitter:card', content: 'summary_large_image' } },
        { type: 'meta', props: { name: 'twitter:title', content: meta.title } },
        { type: 'meta', props: { name: 'twitter:description', content: meta.description } },
        { type: 'meta', props: { name: 'twitter:image', content: meta.image } },
      ]),
    },
  }
}
