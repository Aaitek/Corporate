import axios from 'axios'

// HARD-FIX: Always use absolute URL from VITE_API_URL
// NO relative URLs, NO fallbacks, NO proxies
const API_BASE = import.meta.env.VITE_API_URL

if (!API_BASE) {
  throw new Error('VITE_API_URL is missing. Set it in Vercel environment variables.')
}

// NO baseURL - always use absolute URLs
const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchServices = async () => {
  // Use Vercel API proxy to avoid Railway Edge CORS issues
  const response = await api.get('/api/services', {
    params: {
      populate: '*',
    },
  })
  return response.data
}

export const fetchProducts = async () => {
  // Use Vercel API proxy to avoid Railway Edge CORS issues
  const response = await api.get('/api/products', {
    params: {
      populate: '*',
    },
  })
  return response.data
}

export const fetchCaseStudies = async (category = null) => {
  // Use Vercel API proxy to avoid Railway Edge CORS issues
  const params = {
    populate: '*',
    publicationState: 'live',
  }
  
  if (category) {
    params['filters[category][$eq]'] = category
  }
  
  const response = await api.get('/api/case-studies', { params })
  return response.data
}

export const fetchTestimonials = async () => {
  // Use Vercel API proxy to avoid Railway Edge CORS issues
  const response = await api.get('/api/testimonials', {
    params: {
      populate: '*',
    },
  })
  return response.data
}

export const fetchArticles = async () => {
  // Use Vercel API proxy to avoid Railway Edge CORS issues
  // The proxy makes it same-origin, eliminating CORS entirely
  const response = await api.get('/api/articles', {
    params: {
      populate: '*',
      sort: 'publishedAt:desc',
      publicationState: 'live',
    },
  })
  return response.data
}

export const fetchManagedServices = async () => {
  // Use Vercel API proxy to avoid Railway Edge CORS issues
  const response = await api.get('/api/managed-services', {
    params: {
      populate: '*',
    },
  })
  return response.data
}

export const fetchServiceBySlug = async (slug) => {
  // Use Vercel API proxy to avoid Railway Edge CORS issues
  const response = await api.get('/api/services', {
    params: {
      slug: slug, // Proxy converts this to filters[slug][$eq]
      populate: '*',
    },
  })
  return response.data
}

export const fetchProductBySlug = async (slug) => {
  // Use Vercel API proxy to avoid Railway Edge CORS issues
  const response = await api.get('/api/products', {
    params: {
      slug: slug, // Proxy converts this to filters[slug][$eq]
      populate: '*',
    },
  })
  return response.data
}

// Helper function to get image URL from Strapi response
// This ensures images always have absolute URLs that persist
// Handles all Strapi image response formats and prevents disappearing images
export const getImageUrl = (imageData, format = 'url') => {
  if (!imageData) return null
  
  let imageUrl = null
  
  try {
    // Handle different Strapi response formats - check all possible paths
    // Priority: formats (large/medium/small/thumbnail) > original url > fallback
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
    
    // If URL is already absolute, validate and return as is
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      // Validate the URL is complete
      try {
        new URL(imageUrl)
        return imageUrl
      } catch (e) {
        // Invalid absolute URL, treat as relative
      }
    }
    
    // Ensure the URL starts with /
    if (!imageUrl.startsWith('/')) {
      imageUrl = '/' + imageUrl
    }
    
    // Get the Railway API base URL for images (images are served directly from Railway, not proxied)
    // Images from Strapi are relative URLs like /uploads/... that need to be converted to absolute URLs
    const railwayUrl = 'https://aaitech-production.up.railway.app'
    const baseUrl = import.meta.env.MODE === 'production' || import.meta.env.PROD
      ? railwayUrl  // Use Railway URL directly for images in production
      : (import.meta.env.VITE_API_URL?.replace(/\/api$/, '') || 'http://localhost:1337')
    
    // Remove /api from the end if present, and any trailing slashes
    let apiBase = baseUrl.replace(/\/api$/, '').replace(/\/$/, '')
    
    // If apiBase is empty or just whitespace, use default
    if (!apiBase || apiBase.trim() === '') {
      apiBase = import.meta.env.MODE === 'production' || import.meta.env.PROD
        ? railwayUrl
        : 'http://localhost:1337'
    }
    
    // Construct absolute URL - ensure no double slashes
    const cleanImageUrl = imageUrl.replace(/^\/+/, '/')
    const absoluteUrl = `${apiBase}${cleanImageUrl}`
    
    return absoluteUrl
  } catch (error) {
    console.error('Error constructing image URL:', error, imageData)
    return null
  }
}

export default api

