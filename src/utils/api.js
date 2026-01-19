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
export const getImageUrl = (imageData, format = 'url') => {
  if (!imageData) return null
  
  let imageUrl = null
  
  // Handle different Strapi response formats - check all possible paths
  // Priority: formats (large/medium/small) > original url > fallback
  if (imageData.data?.attributes?.formats?.[format]?.url) {
    imageUrl = imageData.data.attributes.formats[format].url
  } else if (imageData.data?.attributes?.url) {
    imageUrl = imageData.data.attributes.url
  } else if (imageData.attributes?.formats?.[format]?.url) {
    imageUrl = imageData.attributes.formats[format].url
  } else if (imageData.attributes?.url) {
    imageUrl = imageData.attributes.url
  } else if (imageData.url) {
    imageUrl = imageData.url
  } else if (imageData.formats?.[format]?.url) {
    imageUrl = imageData.formats[format].url
  }
  
  if (!imageUrl) return null
  
  // If URL is already absolute, return as is (ensure it's a valid URL)
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl
  }
  
  // Ensure the URL starts with /
  if (!imageUrl.startsWith('/')) {
    imageUrl = '/' + imageUrl
  }
  
  // Get the API base URL and construct absolute URL
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:1337/api'
  // Remove /api from the end if present
  const apiBase = baseUrl.replace(/\/api$/, '')
  
  // Construct absolute URL
  const absoluteUrl = `${apiBase}${imageUrl}`
  
  return absoluteUrl
}

export default api

