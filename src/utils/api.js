import axios from 'axios'

// Use Vercel API proxy routes (same-origin, no CORS issues)
// In production, always use /api proxy routes (they proxy to Railway)
// In development, use direct API URL if VITE_API_URL is set, otherwise localhost
const API_URL = import.meta.env.MODE === 'production' || import.meta.env.PROD
  ? '/api'  // Always use proxy in production
  : (import.meta.env.VITE_API_URL || 'http://localhost:1337/api')

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchServices = async () => {
  // Use proxy route in production, direct API in development
  const url = API_URL.startsWith('/api') ? '/api/services' : '/services?populate=*'
  const response = await api.get(url)
  return response.data
}

export const fetchProducts = async () => {
  const url = API_URL.startsWith('/api') ? '/api/products' : '/products?populate=*'
  const response = await api.get(url)
  return response.data
}

export const fetchCaseStudies = async (category = null) => {
  if (API_URL.startsWith('/api')) {
    // Use proxy route
    const url = category ? `/api/case-studies?category=${category}` : '/api/case-studies'
    const response = await api.get(url)
    return response.data
  } else {
    // Direct API call (development)
    const url = category
      ? `/case-studies?filters[category][$eq]=${category}&populate=*&publicationState=live`
      : '/case-studies?populate=*&publicationState=live'
    const response = await api.get(url)
    return response.data
  }
}

export const fetchTestimonials = async () => {
  const url = API_URL.startsWith('/api') ? '/api/testimonials' : '/testimonials?populate=*'
  const response = await api.get(url)
  return response.data
}

export const fetchArticles = async () => {
  const url = API_URL.startsWith('/api') ? '/api/articles' : '/articles?populate=*&sort=publishedAt:desc&publicationState=live'
  const response = await api.get(url)
  return response.data
}

export const fetchManagedServices = async () => {
  const url = API_URL.startsWith('/api') ? '/api/managed-services' : '/managed-services?populate=*'
  const response = await api.get(url)
  return response.data
}

export const fetchServiceBySlug = async (slug) => {
  if (API_URL.startsWith('/api')) {
    const response = await api.get(`/api/services?slug=${slug}`)
    return response.data
  } else {
    const response = await api.get(`/services?filters[slug][$eq]=${slug}&populate=*`)
    return response.data
  }
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

