import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchServices = async () => {
  const response = await api.get('/services?populate=*')
  return response.data
}

export const fetchProducts = async () => {
  const response = await api.get('/products?populate=*')
  return response.data
}

export const fetchCaseStudies = async (category = null) => {
  const url = category
    ? `/case-studies?filters[category][$eq]=${category}&populate=*&publicationState=live`
    : '/case-studies?populate=*&publicationState=live'
  const response = await api.get(url)
  return response.data
}

export const fetchTestimonials = async () => {
  const response = await api.get('/testimonials?populate=*')
  return response.data
}

export const fetchArticles = async () => {
  const response = await api.get('/articles?populate=*&sort=publishedAt:desc')
  return response.data
}

export const fetchManagedServices = async () => {
  const response = await api.get('/managed-services?populate=*')
  return response.data
}

export const fetchServiceBySlug = async (slug) => {
  const response = await api.get(`/services?filters[slug][$eq]=${slug}&populate=*`)
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
    
    // Get the API base URL and construct absolute URL
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:1337/api'
    // Remove /api from the end if present, and any trailing slashes
    let apiBase = baseUrl.replace(/\/api$/, '').replace(/\/$/, '')
    
    // If apiBase is empty or just whitespace, use default
    if (!apiBase || apiBase.trim() === '') {
      apiBase = 'http://localhost:1337'
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

