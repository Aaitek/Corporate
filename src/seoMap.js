// SEO map for all routes - used by prerender function
// Each route has its own title, description, and image for social media previews

const SITE = 'https://aaitek.com'
const defaultImage = `${SITE}/footer-logo.png`
const logoImage = `${SITE}/Aaitek%20logo%20in%20Black.png`

// Import data to get dynamic route information
import { academyData } from './data/academyData'
import { hireTalentData } from './data/hireTalentData'
import { partnerSuccessData } from './data/partnerSuccessData'
import { productsData } from './data/productsData'
import { industriesData } from './data/industriesData'
import { servicesData } from './data/servicesData'

// Helper to create SEO entry
const createSEO = (title, description, image = defaultImage) => ({
  title,
  description,
  image,
})

// Generate SEO map dynamically from data files
const generateSEOMap = () => {
  const seoMap = {
    // Homepage - use logo image for better social preview
    '/': createSEO(
      'Aaitek - Empowering Businesses With AI, Data Analytics & Cloud',
      'Transform your digital vision into reality with Aaitek. Enterprise-grade AI, cloud solutions, and digital transformation services.',
      logoImage
    ),
    
    // Static pages
    '/services': createSEO(
      'Services - Aaitek Technology Specialists',
      'Comprehensive technology services including AI solutions, cloud services, software engineering, digital transformation, and enterprise platforms.'
    ),
    '/products': createSEO(
      'Products - AI Agents & Platforms | Aaitek',
      'Intelligent AI agents that automate business processes, enhance customer experience, and drive operational efficiency across industries.'
    ),
    '/academy': createSEO(
      'Academy - Training Courses | Aaitek',
      'Premium training courses by Aaitek. Enterprise-ready outcomes and delivery readiness.'
    ),
    '/industries': createSEO(
      'Industries - Industry Solutions | Aaitek',
      'Industry-focused solutions built for real-world impact across finance, healthcare, retail, government, and more.'
    ),
    '/hire-developers': createSEO(
      'Hire Developers - Aaitek Technology Specialists',
      'Access experienced, delivery-ready developers with flexible engagement models. Scale teams fast without compromising quality.'
    ),
    '/hire-talent': createSEO(
      'Hire Talent - Aaitek Technology Specialists',
      'Premium talent solutions by Aaitek. Access experienced, delivery-ready professionals with flexible engagement models.'
    ),
    '/partner-success': createSEO(
      'Partner Success - Aaitek Technology Specialists',
      'Real-world examples of enterprise delivery, measurable impact, and trusted partnerships. See how Aaitek delivers results.'
    ),
    '/case-studies': createSEO(
      'Case Studies - Aaitek Technology Specialists',
      'Deep dives into how Aaitek partnered with organisations to solve complex challenges — from discovery to delivery.'
    ),
    '/articles': createSEO(
      'Articles - Insights & Expert Perspectives | Aaitek',
      'Read expert articles and insights on technology, delivery, and industry trends from Aaitek practitioners, architects, and consultants.'
    ),
    '/webinars': createSEO(
      'Webinars & Events - Aaitek Technology Specialists',
      'Join our webinars and events to learn about the latest in technology, AI, cloud solutions, and digital transformation.'
    ),
    '/videos': createSEO(
      'Videos & Media - Aaitek Technology Specialists',
      'Watch videos, demos, and media content from Aaitek on technology, solutions, and industry insights.'
    ),
    '/press-releases': createSEO(
      'Press Releases - Aaitek Technology Specialists',
      'Latest news, announcements, and press releases from Aaitek Technology Specialists.'
    ),
    '/resources': createSEO(
      'Resources - Aaitek Technology Specialists',
      'Access resources, articles, case studies, webinars, videos, and more from Aaitek.'
    ),
    '/about': createSEO(
      'About Us - Aaitek Technology Specialists',
      'Learn about Aaitek, our mission, values, and commitment to delivering enterprise-grade technology solutions.'
    ),
    '/company': createSEO(
      'Company - Aaitek Technology Specialists',
      'Learn about Aaitek, our mission, values, and commitment to delivering enterprise-grade technology solutions.'
    ),
    '/contact': createSEO(
      'Contact Us - Aaitek Technology Specialists',
      'Get in touch with Aaitek. Let\'s discuss how we can help transform your digital vision into reality.'
    ),
    '/career': createSEO(
      'Careers - Join Aaitek | Aaitek Technology Specialists',
      'Join the Aaitek team. Explore career opportunities in technology, engineering, and digital transformation.'
    ),
    '/careers': createSEO(
      'Careers - Join Aaitek | Aaitek Technology Specialists',
      'Join the Aaitek team. Explore career opportunities in technology, engineering, and digital transformation.'
    ),
    '/brand-guidelines': createSEO(
      'Brand Guidelines - Aaitek Technology Specialists',
      'Brand guidelines and resources for Aaitek Technology Specialists.'
    ),
    '/BrandGuidelines': createSEO(
      'Brand Guidelines - Aaitek Technology Specialists',
      'Brand guidelines and resources for Aaitek Technology Specialists.'
    ),
    '/privacy-policy': createSEO(
      'Privacy Policy - Aaitek Technology Specialists',
      'Privacy policy and data protection information for Aaitek Technology Specialists.'
    ),
    '/terms-conditions': createSEO(
      'Terms & Conditions - Aaitek Technology Specialists',
      'Terms and conditions for using Aaitek Technology Specialists services and website.'
    ),
  }
  
  // Add academy detail routes
  Object.keys(academyData).forEach(slug => {
    const course = academyData[slug]
    let description = course.description || course.subtitle || ''
    if (!description) {
      description = `${course.title} training course by Aaitek. Premium training pathway designed for delivery readiness, not theory. Enterprise-ready outcomes.`
    }
    if (description.length > 160) {
      const truncated = description.substring(0, 157)
      const lastPeriod = truncated.lastIndexOf('.')
      description = lastPeriod > 120 ? truncated.substring(0, lastPeriod + 1) : truncated + '...'
    }
    seoMap[`/academy/${slug}`] = createSEO(
      `${course.title} - Academy Course | Aaitek`,
      description,
      logoImage
    )
  })
  
  // Add hire-talent detail routes
  Object.keys(hireTalentData).forEach(slug => {
    const item = hireTalentData[slug]
    let description = item.description || item.subtitle || ''
    if (!description) {
      description = `${item.title} by Aaitek. Premium onshore/offshore delivery with strong governance. Scale teams fast without compromising quality.`
    }
    if (description.length > 160) {
      const truncated = description.substring(0, 157)
      const lastPeriod = truncated.lastIndexOf('.')
      description = lastPeriod > 100 ? truncated.substring(0, lastPeriod + 1) : truncated + '...'
    }
    seoMap[`/hire-talent/${slug}`] = createSEO(
      `${item.title} - Hire Talent | Aaitek`,
      description,
      logoImage
    )
  })
  
  // Add partner-success detail routes
  Object.keys(partnerSuccessData).forEach(slug => {
    const item = partnerSuccessData[slug]
    let description = item.description || item.subtitle || ''
    if (!description) {
      description = `${item.title} by Aaitek. Real-world examples of enterprise delivery and measurable impact.`
    }
    if (description.length > 160) {
      const truncated = description.substring(0, 157)
      const lastPeriod = truncated.lastIndexOf('.')
      description = lastPeriod > 100 ? truncated.substring(0, lastPeriod + 1) : truncated + '...'
    }
    seoMap[`/partner-success/${slug}`] = createSEO(
      `${item.title} - Partner Success | Aaitek`,
      description
    )
  })
  
  // Add product detail routes
  Object.keys(productsData).forEach(slug => {
    const product = productsData[slug]
    seoMap[`/products/${slug}`] = createSEO(
      `${product.title} - Product | Aaitek`,
      product.description || product.subtitle || ''
    )
  })
  
  // Add industry detail routes
  Object.keys(industriesData).forEach(slug => {
    const industry = industriesData[slug]
    seoMap[`/industries/${slug}`] = createSEO(
      `${industry.title} - Industry Solutions | Aaitek`,
      industry.description || industry.subtitle || ''
    )
  })
  
  // Add service detail routes
  Object.keys(servicesData).forEach(slug => {
    const service = servicesData[slug]
    seoMap[`/services/${slug}`] = createSEO(
      `${service.title} - Service | Aaitek`,
      service.description || service.subtitle || ''
    )
  })
  
  return seoMap
}

export const SEO = generateSEOMap()
