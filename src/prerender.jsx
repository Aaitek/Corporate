import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { AppRoutes } from './AppRoutes'
import { HelmetProvider } from 'react-helmet-async'
import { SEO } from './seoMap'

const SITE = 'https://aaitek.com'
const DEFAULT_IMAGE = `${SITE}/footer-logo.png`
const RAILWAY_API_URL = 'https://aaitech-production.up.railway.app'

// Normalize URL - strip query params and hash, remove trailing slash
function normalizeUrl(input = '/') {
  const u = input.split('#')[0].split('?')[0]
  const cleaned = u.replace(/\/$/, '')
  return cleaned === '' ? '/' : cleaned
}

// Convert any image path to absolute URL
function toAbsUrl(img) {
  if (!img) return null
  if (img.startsWith('http')) return img
  if (!img.startsWith('/')) return `${SITE}/${img}`
  return `${SITE}${img}`
}

// Helper to extract image URL from Strapi image data
function getImageUrl(imageData, format = 'url') {
  if (!imageData) return null
  
  let imageUrl = null
  
  try {
    // Check nested data.attributes first (most common in Strapi v4)
    if (imageData.data?.attributes) {
      if (imageData.data.attributes.formats?.[format]?.url) {
        imageUrl = imageData.data.attributes.formats[format].url
      } else if (imageData.data.attributes.url) {
        imageUrl = imageData.data.attributes.url
      }
    }
    
    // Check direct attributes (alternative format)
    if (!imageUrl && imageData.attributes) {
      if (imageData.attributes.formats?.[format]?.url) {
        imageUrl = imageData.attributes.formats[format].url
      } else if (imageData.attributes.url) {
        imageUrl = imageData.attributes.url
      }
    }
    
    // Check direct properties (fallback)
    if (!imageUrl) {
      if (imageData.formats?.[format]?.url) {
        imageUrl = imageData.formats[format].url
      } else if (imageData.url) {
        imageUrl = imageData.url
      }
    }
    
    if (!imageUrl) return null
    
    // If URL is already absolute, check if it's from Railway
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      // If it's a Railway URL, proxy it through main domain for social media crawlers
      if (imageUrl.includes('railway.app') || imageUrl.includes('aaitech-production')) {
        return `${SITE}/api/image-proxy?url=${encodeURIComponent(imageUrl)}`
      }
      return imageUrl
    }
    
    // Convert relative URL to absolute Railway URL, then proxy it
    if (!imageUrl.startsWith('/')) {
      imageUrl = '/' + imageUrl
    }
    const railwayUrl = `${RAILWAY_API_URL}${imageUrl}`
    return `${SITE}/api/image-proxy?url=${encodeURIComponent(railwayUrl)}`
  } catch (e) {
    return null
  }
}

// Fetch article by slug from Strapi
async function fetchArticle(slug) {
  try {
    const url = `${RAILWAY_API_URL}/api/articles?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*&publicationState=live`
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) return null
    
    const data = await response.json()
    if (data.data && data.data.length > 0) {
      const article = data.data[0]
      // Try to get image in order: large, medium, original
      const largeImage = getImageUrl(article.attributes?.image, 'large')
      const mediumImage = getImageUrl(article.attributes?.image, 'medium')
      const originalImage = getImageUrl(article.attributes?.image)
      const imageUrl = largeImage || mediumImage || originalImage
      
      return {
        title: article.attributes?.title || '',
        description: article.attributes?.excerpt || article.attributes?.description || '',
        image: imageUrl,
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching article in prerender:', error)
    return null
  }
}

// Fetch case study by slug from Strapi
async function fetchCaseStudy(slug) {
  try {
    const url = `${RAILWAY_API_URL}/api/case-studies?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*&publicationState=live`
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) return null
    
    const data = await response.json()
    if (data.data && data.data.length > 0) {
      const caseStudy = data.data[0]
      // Try to get image in order: large, medium, original
      const largeImage = getImageUrl(caseStudy.attributes?.image, 'large')
      const mediumImage = getImageUrl(caseStudy.attributes?.image, 'medium')
      const originalImage = getImageUrl(caseStudy.attributes?.image)
      const imageUrl = largeImage || mediumImage || originalImage
      
      return {
        title: caseStudy.attributes?.title || '',
        description: caseStudy.attributes?.description || caseStudy.attributes?.excerpt || '',
        image: imageUrl,
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching case study in prerender:', error)
    return null
  }
}

// Get page-specific meta tags, including fetching dynamic content (articles/case studies)
async function getMetaByUrl(url) {
  const normalizedUrl = normalizeUrl(url)
  
  // Check static routes first
  const staticMeta = SEO[normalizedUrl]
  if (staticMeta) {
    return staticMeta
  }
  
  // Dynamic: Articles - route is /article/:slug (singular)
  const articleMatch = normalizedUrl.match(/^\/article\/([^/]+)$/)
  if (articleMatch) {
    const slug = articleMatch[1]
    const article = await fetchArticle(slug)
    if (article) {
      return {
        title: `${article.title} - Article | Aaitek`,
        description: article.description || '',
        image: article.image || DEFAULT_IMAGE,
      }
    }
  }
  
  // Dynamic: Case studies - route is /case-study/:slug (singular)
  const caseStudyMatch = normalizedUrl.match(/^\/case-study\/([^/]+)$/)
  if (caseStudyMatch) {
    const slug = caseStudyMatch[1]
    const caseStudy = await fetchCaseStudy(slug)
    if (caseStudy) {
      return {
        title: `${caseStudy.title} - Case Study | Aaitek`,
        description: caseStudy.description || '',
        image: caseStudy.image || DEFAULT_IMAGE,
      }
    }
  }
  
  // Fallback to homepage defaults
  return SEO['/'] || {
    title: 'Aaitek - Empowering Businesses With AI, Data Analytics & Cloud',
    description: 'Transform your digital vision into reality with Aaitek. Enterprise-grade AI, cloud solutions, and digital transformation services.',
    image: DEFAULT_IMAGE,
  }
}

// This function name MUST be exactly `prerender`
export async function prerender(data) {
  const url = data?.url || '/'
  const normalizedUrl = normalizeUrl(url)
  const canonical = `${SITE}${normalizedUrl}`
  
  // Get page-specific meta tags (may fetch from Strapi for articles/case studies)
  const meta = await getMetaByUrl(normalizedUrl)
  
  // Ensure image is absolute URL
  const image = toAbsUrl(meta.image) || toAbsUrl(DEFAULT_IMAGE)
  
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
  return {
    html,
    head: {
      lang: 'en',
      title: meta.title,
      elements: new Set([
        { type: 'meta', props: { name: 'description', content: meta.description } },
        
        { type: 'link', props: { rel: 'canonical', href: canonical } },
        
        { type: 'meta', props: { property: 'og:type', content: 'website' } },
        { type: 'meta', props: { property: 'og:url', content: canonical } },
        { type: 'meta', props: { property: 'og:title', content: meta.title } },
        { type: 'meta', props: { property: 'og:description', content: meta.description } },
        { type: 'meta', props: { property: 'og:image', content: image } },
        { type: 'meta', props: { property: 'og:image:secure_url', content: image } },
        { type: 'meta', props: { property: 'og:image:width', content: '1200' } },
        { type: 'meta', props: { property: 'og:image:height', content: '630' } },
        { type: 'meta', props: { property: 'og:site_name', content: 'Aaitek Technology Specialists' } },
        
        { type: 'meta', props: { name: 'twitter:card', content: 'summary_large_image' } },
        { type: 'meta', props: { name: 'twitter:title', content: meta.title } },
        { type: 'meta', props: { name: 'twitter:description', content: meta.description } },
        { type: 'meta', props: { name: 'twitter:image', content: image } },
      ]),
    },
  }
}
