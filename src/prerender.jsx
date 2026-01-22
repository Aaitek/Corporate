import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { AppRoutes } from './AppRoutes'
import { HelmetProvider } from 'react-helmet-async'

// Import data files to get meta information
import { academyData } from './data/academyData'
import { hireTalentData } from './data/hireTalentData'
import { partnerSuccessData } from './data/partnerSuccessData'
import { productsData } from './data/productsData'
import { industriesData } from './data/industriesData'
import { servicesData } from './data/servicesData'

const siteUrl = 'https://aaitek.com'
const defaultTitle = 'Aaitek - Empowering Businesses With AI, Data Analytics & Cloud'
const defaultDescription = 'Transform your digital vision into reality with Aaitek. Enterprise-grade AI, cloud solutions, and digital transformation services.'
const defaultImage = 'https://aaitek.com/footer-logo.png'

// Get page-specific meta tags based on URL
function getPageMeta(url) {
  const pathname = url === '/' ? '/' : url.split('?')[0]
  
  // Static pages
  if (pathname === '/') {
    return {
      title: defaultTitle,
      description: defaultDescription,
      image: defaultImage,
    }
  }
  
  if (pathname === '/articles') {
    return {
      title: 'Articles - Insights & Expert Perspectives | Aaitek',
      description: 'Read expert articles and insights on technology, delivery, and industry trends from Aaitek practitioners, architects, and consultants.',
      image: 'https://aaitek.com/Aaitek%20logo%20in%20Black.png',
    }
  }
  
  if (pathname === '/services') {
    return {
      title: 'Services - Aaitek Technology Specialists',
      description: 'Comprehensive technology services including AI solutions, cloud services, software engineering, digital transformation, and enterprise platforms.',
      image: defaultImage,
    }
  }
  
  if (pathname === '/products') {
    return {
      title: 'Products - AI Agents & Platforms | Aaitek',
      description: 'Intelligent AI agents that automate business processes, enhance customer experience, and drive operational efficiency across industries.',
      image: defaultImage,
    }
  }
  
  if (pathname === '/academy') {
    return {
      title: 'Academy - Training Courses | Aaitek',
      description: 'Premium training courses by Aaitek. Enterprise-ready outcomes and delivery readiness.',
      image: 'https://aaitek.com/Aaitek%20logo%20in%20Black.png',
    }
  }
  
  if (pathname === '/about') {
    return {
      title: 'About Us - Aaitek Technology Specialists',
      description: 'Learn about Aaitek, our mission, values, and commitment to delivering enterprise-grade technology solutions.',
      image: defaultImage,
    }
  }
  
  if (pathname === '/contact') {
    return {
      title: 'Contact Us - Aaitek Technology Specialists',
      description: 'Get in touch with Aaitek. Let\'s discuss how we can help transform your digital vision into reality.',
      image: defaultImage,
    }
  }
  
  if (pathname === '/career' || pathname === '/careers') {
    return {
      title: 'Careers - Join Aaitek | Aaitek Technology Specialists',
      description: 'Join the Aaitek team. Explore career opportunities in technology, engineering, and digital transformation.',
      image: defaultImage,
    }
  }
  
  // Academy detail pages
  if (pathname.startsWith('/academy/')) {
    const slug = pathname.split('/academy/')[1]
    const course = academyData[slug]
    if (course) {
      let description = course.description || course.subtitle || ''
      if (!description) {
        description = `${course.title} training course by Aaitek. Premium training pathway designed for delivery readiness, not theory. Enterprise-ready outcomes.`
      }
      if (description.length > 160) {
        const truncated = description.substring(0, 157)
        const lastPeriod = truncated.lastIndexOf('.')
        description = lastPeriod > 120 ? truncated.substring(0, lastPeriod + 1) : truncated + '...'
      }
      return {
        title: `${course.title} - Academy Course | Aaitek`,
        description: description,
        image: 'https://aaitek.com/Aaitek%20logo%20in%20Black.png',
      }
    }
  }
  
  // Hire Talent detail pages
  if (pathname.startsWith('/hire-talent/')) {
    const slug = pathname.split('/hire-talent/')[1]
    const item = hireTalentData[slug]
    if (item) {
      let description = item.description || item.subtitle || ''
      if (!description) {
        description = `${item.title} by Aaitek. Premium onshore/offshore delivery with strong governance. Scale teams fast without compromising quality.`
      }
      if (description.length > 160) {
        const truncated = description.substring(0, 157)
        const lastPeriod = truncated.lastIndexOf('.')
        description = lastPeriod > 100 ? truncated.substring(0, lastPeriod + 1) : truncated + '...'
      }
      return {
        title: `${item.title} - Hire Talent | Aaitek`,
        description: description,
        image: 'https://aaitek.com/Aaitek%20logo%20in%20Black.png',
      }
    }
  }
  
  // Partner Success detail pages
  if (pathname.startsWith('/partner-success/')) {
    const slug = pathname.split('/partner-success/')[1]
    const item = partnerSuccessData[slug]
    if (item) {
      let description = item.description || item.subtitle || ''
      if (!description) {
        description = `${item.title} by Aaitek. Real-world examples of enterprise delivery and measurable impact.`
      }
      if (description.length > 160) {
        const truncated = description.substring(0, 157)
        const lastPeriod = truncated.lastIndexOf('.')
        description = lastPeriod > 100 ? truncated.substring(0, lastPeriod + 1) : truncated + '...'
      }
      return {
        title: `${item.title} - Partner Success | Aaitek`,
        description: description,
        image: defaultImage,
      }
    }
  }
  
  // Product detail pages
  if (pathname.startsWith('/products/')) {
    const slug = pathname.split('/products/')[1]
    const product = productsData[slug]
    if (product) {
      return {
        title: `${product.title} - Product | Aaitek`,
        description: product.description || defaultDescription,
        image: defaultImage,
      }
    }
  }
  
  // Industry detail pages
  if (pathname.startsWith('/industries/')) {
    const slug = pathname.split('/industries/')[1]
    const industry = industriesData[slug]
    if (industry) {
      return {
        title: `${industry.title} - Industry Solutions | Aaitek`,
        description: industry.description || industry.subtitle || defaultDescription,
        image: defaultImage,
      }
    }
  }
  
  // Service detail pages
  if (pathname.startsWith('/services/')) {
    const slug = pathname.split('/services/')[1]
    const service = servicesData[slug]
    if (service) {
      return {
        title: `${service.title} - Service | Aaitek`,
        description: service.description || service.subtitle || defaultDescription,
        image: defaultImage,
      }
    }
  }
  
  // Default fallback
  return {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
  }
}

// This function name MUST be exactly `prerender`
export async function prerender(data) {
  const url = data?.url || '/'
  const pathname = url === '/' ? '/' : url.split('?')[0]
  
  // Render React app with StaticRouter
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  )
  
  // Get page-specific meta tags
  const meta = getPageMeta(url)
  const canonical = `${siteUrl}${pathname}`
  
  // Create head elements for OG tags
  const headElements = new Set([
    { type: 'meta', props: { name: 'description', content: meta.description } },
    
    { type: 'meta', props: { property: 'og:title', content: meta.title } },
    { type: 'meta', props: { property: 'og:description', content: meta.description } },
    { type: 'meta', props: { property: 'og:image', content: meta.image } },
    { type: 'meta', props: { property: 'og:image:secure_url', content: meta.image } },
    { type: 'meta', props: { property: 'og:url', content: canonical } },
    { type: 'meta', props: { property: 'og:type', content: 'website' } },
    { type: 'meta', props: { property: 'og:site_name', content: 'Aaitek Technology Specialists' } },
    
    { type: 'meta', props: { name: 'twitter:card', content: 'summary_large_image' } },
    { type: 'meta', props: { name: 'twitter:title', content: meta.title } },
    { type: 'meta', props: { name: 'twitter:description', content: meta.description } },
    { type: 'meta', props: { name: 'twitter:image', content: meta.image } },
    
    { type: 'link', props: { rel: 'canonical', href: canonical } },
  ])
  
  return {
    html,
    head: {
      title: meta.title,
      elements: headElements,
    },
  }
}
