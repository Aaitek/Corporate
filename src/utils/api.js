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
    ? `/case-studies?filters[category][$eq]=${category}&populate=*`
    : '/case-studies?populate=*'
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

export default api

