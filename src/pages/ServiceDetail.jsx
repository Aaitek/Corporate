import { motion, AnimatePresence } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { servicesData } from '../data/servicesData'
import { fetchServiceBySlug } from '../utils/api'
import SEO from '../components/SEO'

const ServiceDetail = () => {
  const { slug } = useParams()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  // Initialize with static data immediately so SEO has data from the start
  const [service, setService] = useState(() => {
    const staticService = servicesData[slug]
    if (staticService) {
      return {
        ...staticService,
        category: staticService.category || 'Service',
      }
    }
    return null
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [openFAQIndex, setOpenFAQIndex] = useState(null)

  // Map category to color gradient
  const getCategoryColor = (category) => {
    const categoryColors = {
      'Product & Experience': 'from-blue-500 to-cyan-500',
      'Software Engineering': 'from-purple-500 to-pink-500',
      'Cloud & DevOps': 'from-green-500 to-emerald-500',
      'Data & AI': 'from-orange-500 to-red-500',
      'Digital Growth': 'from-indigo-500 to-blue-500',
      'Managed Services': 'from-teal-500 to-cyan-500',
      'Enterprise Platforms': 'from-gray-600 to-gray-800',
      'Experience & Product': 'from-blue-500 to-cyan-500',
      'Cloud, Data & AI': 'from-green-500 to-emerald-500',
    }
    return categoryColors[category] || 'from-gray-500 to-gray-700'
  }

  // Get image based on category or from API
  const getImage = () => {
    // Try to get image from API response
    if (service?.image) {
      let imageUrl = null
      
      // Handle different Strapi response formats
      if (service.image.url) {
        imageUrl = service.image.url
      } else if (service.image.data?.attributes?.url) {
        imageUrl = service.image.data.attributes.url
      } else if (service.image.attributes?.url) {
        imageUrl = service.image.attributes.url
      }
      
      if (imageUrl) {
        // If URL is absolute, return as is; otherwise prepend base URL
        if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
          return imageUrl
        }
        const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:1337'
        return `${baseUrl}${imageUrl}`
      }
    }
    
    // Fallback to category-based images
    const categoryImages = {
      'Product & Experience': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
      'Experience & Product': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
      'Software Engineering': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80',
      'Cloud & DevOps': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
      'Cloud, Data & AI': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
      'Data & AI': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
      'Digital Growth': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'Managed Services': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
      'Enterprise Platforms': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    }
    return categoryImages[service?.category] || 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80'
  }

  useEffect(() => {
    const loadService = async () => {
      setLoading(true)
      setError(null)
      
      try {
        // Try to fetch from API
        const response = await fetchServiceBySlug(slug)
        
        if (response?.data && response.data.length > 0) {
          const serviceData = response.data[0]
          const attributes = serviceData.attributes || serviceData
          
          // Parse features if it's a JSON string
          let features = []
          if (attributes.features) {
            try {
              features = typeof attributes.features === 'string' 
                ? JSON.parse(attributes.features) 
                : attributes.features
              if (!Array.isArray(features)) {
                features = []
              }
            } catch (e) {
              features = []
            }
          }
          
          // Parse FAQs if available
          let faqs = []
          if (attributes.faqs) {
            try {
              faqs = typeof attributes.faqs === 'string' 
                ? JSON.parse(attributes.faqs) 
                : attributes.faqs
              if (!Array.isArray(faqs)) {
                faqs = []
              }
            } catch (e) {
              faqs = []
            }
          }
          
          // Extract image data
          let imageData = null
          if (attributes.image) {
            if (attributes.image.data) {
              // Strapi v4 format with data wrapper
              imageData = attributes.image.data.attributes || attributes.image.data
            } else {
              // Direct image object
              imageData = attributes.image.attributes || attributes.image
            }
          }
          
          // Map API data to component format
          setService({
            title: attributes.title || 'Service',
            subtitle: attributes.shortDescription || attributes.description || '',
            description: attributes.description || '',
            longDescription: attributes.description || '',
            icon: attributes.icon || '🚀',
            color: getCategoryColor(attributes.category),
            category: attributes.category || 'Service',
            features: features,
            benefits: [], // Benefits not in backend schema, can be added later
            image: imageData,
            faqs: faqs,
          })
        } else {
          // Fallback to static data
          throw new Error('Service not found in API')
        }
      } catch (err) {
        console.warn('Failed to fetch service from API, using fallback data:', err)
        // Fallback to static data
        const fallbackService = servicesData[slug] || {
          title: 'Service Not Found',
          subtitle: 'The requested service could not be found',
          description: 'Please check the URL or return to our services page.',
          longDescription: 'The service you are looking for does not exist. Please visit our services page to see all available services.',
          icon: '❓',
          color: 'from-gray-500 to-gray-700',
          category: 'Unknown',
          features: [],
          benefits: [],
          faqs: [],
        }
        setService(fallbackService)
        if (!servicesData[slug]) {
          setError('Service not found')
        }
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      loadService()
    }
  }, [slug])

  // Error state (only if service is truly not found)
  if (error && !service) {
    return (
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">{error}</p>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    )
  }

  // If no service data at all, show loading
  if (!service) {
    return (
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mb-4"></div>
          <p className="text-gray-600">Loading service...</p>
        </div>
      </div>
    )
  }

  const siteUrl = 'https://aaitek.com.au'
  const canonicalUrl = `${siteUrl}/services/${slug}`
  const seoTitle = service ? `${service.title} - Service | Aaitek` : 'Service - Aaitek'
  
  // Create a comprehensive, SEO-optimized description
  // Priority: description > longDescription > subtitle > generated
  let seoDescription = service?.description || service?.longDescription || service?.subtitle || ''
  
  // If we have a subtitle but no description, combine them
  if (!seoDescription && service?.subtitle && service?.title) {
    seoDescription = `${service.subtitle}. Enterprise-grade ${service.category || 'digital transformation'} solutions by Aaitek.`
  }
  
  // If still no description, create one from available data
  if (!seoDescription && service?.title) {
    seoDescription = `${service.title} by Aaitek. Enterprise-grade ${service.category || 'digital transformation'} solutions designed for scale, security, and measurable business outcomes.`
  }
  
  // Final fallback
  if (!seoDescription) {
    seoDescription = 'Enterprise-grade digital transformation services by Aaitek. Built for scale, security, and measurable business outcomes.'
  }
  
  // Ensure description is optimal length (120-160 characters for best SEO)
  if (seoDescription.length > 160) {
    // Try to cut at a sentence boundary
    const truncated = seoDescription.substring(0, 157)
    const lastPeriod = truncated.lastIndexOf('.')
    const lastSpace = truncated.lastIndexOf(' ')
    if (lastPeriod > 100) {
      seoDescription = truncated.substring(0, lastPeriod + 1)
    } else if (lastSpace > 100) {
      seoDescription = truncated.substring(0, lastSpace) + '...'
    } else {
      seoDescription = truncated + '...'
    }
  } else if (seoDescription.length < 120 && service?.subtitle && !service?.description) {
    // If description is too short, enhance it
    seoDescription = `${seoDescription} Enterprise-grade solutions designed for scale, security, and measurable business outcomes.`
    // Trim again if too long
    if (seoDescription.length > 160) {
      seoDescription = seoDescription.substring(0, 157) + '...'
    }
  }

  // Get image URL for display (can use category images)
  const imageUrl = getImage()
  const absoluteImageUrl = imageUrl.startsWith('http://') || imageUrl.startsWith('https://') 
    ? imageUrl 
    : `${siteUrl}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`
  
  // Use service image for social sharing, or fallback to relevant image
  const socialImage = absoluteImageUrl || getImage() || `${siteUrl}/logo-black.png`

  return (
    <>
      <SEO
        key={`service-${slug}-${service?.title || 'default'}`}
        seoTitle={seoTitle}
        seoDescription={seoDescription}
        canonicalUrl={canonicalUrl}
        ogTitle={service?.title || 'Service'}
        ogDescription={seoDescription}
        ogImage={socialImage}
        ogType="website"
        twitterTitle={service?.title || 'Service'}
        twitterDescription={seoDescription}
        twitterImage={absoluteImageUrl}
        schemaType="Service"
        indexable={true}
      />
    <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={getImage()} 
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-accent-900/90"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6`}>
              <span className="text-2xl">{service.icon}</span>
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Service</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8">
              {service.subtitle}
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={ref} className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-sky-50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-400 rounded-full blur-3xl opacity-10"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-400 rounded-full blur-3xl opacity-10"
            animate={{
              scale: [1, 1.15, 1],
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Long Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 group relative bg-gradient-to-br from-white via-white to-primary-50/30 rounded-3xl p-10 border-2 border-primary-200/60 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-6">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-3xl">{service.icon}</span>
                  </motion.div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">About This Service</h2>
                    <div className={`h-1 w-24 bg-gradient-to-r ${service.color} rounded-full`}></div>
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                {service.longDescription || service.description}
              </p>
              </div>
            </motion.div>

            <div className={`grid grid-cols-1 ${service.benefits && service.benefits.length > 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-10 lg:gap-12 mb-16`}>
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-gradient-to-br from-white via-white to-primary-50/40 rounded-3xl p-10 border-2 border-gray-200/60 hover:border-primary-400 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <motion.div 
                  className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-8">
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Key Features</h3>
                      <div className={`h-1 w-20 bg-gradient-to-r ${service.color} rounded-full`}></div>
                    </div>
                  </div>
                  {service.features && service.features.length > 0 ? (
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                          initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ x: 10 }}
                          className="group/item flex items-start gap-4 p-4 rounded-2xl bg-white/70 hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                          <motion.div 
                            className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300`}
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.4 }}
                          >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                          </motion.div>
                          <span className="text-gray-800 text-lg font-semibold leading-relaxed pt-1">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                  ) : (
                    <p className="text-gray-600">No features listed.</p>
                  )}
                </div>
              </motion.div>

              {/* Benefits - Only show if benefits exist */}
              {service.benefits && service.benefits.length > 0 && (
              <motion.div
                  initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative bg-gradient-to-br from-white via-white to-accent-50/40 rounded-3xl p-10 border-2 border-gray-200/60 hover:border-accent-400 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <motion.div 
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-8">
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                        whileHover={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v13m0-13V6a2 2 0 112 2v2m0 0v13m0-13h2a2 2 0 012 2v2m-4 0h-2a2 2 0 00-2 2v2m0 0v13m0-13h2a2 2 0 012 2v2m-4 0h-2a2 2 0 00-2 2v2m0 0v13" />
                        </svg>
                      </motion.div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Benefits</h3>
                        <div className={`h-1 w-20 bg-gradient-to-r ${service.color} rounded-full`}></div>
                      </div>
                    </div>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                          initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ x: -10 }}
                          className="group/item flex items-start gap-4 p-4 rounded-2xl bg-white/70 hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                          <motion.div 
                            className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300`}
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.4 }}
                          >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                          </motion.div>
                          <span className="text-gray-800 text-lg font-semibold leading-relaxed pt-1">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
                  </div>
              </motion.div>
              )}
            </div>

            {/* Category Badge */}
            {service.category && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm">
                  {service.category}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-sky-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
          </div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-200 mb-6">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Common questions about {service.title}
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {service.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  className={`group relative bg-white rounded-2xl border-2 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                    openFAQIndex === index 
                      ? `border-primary-400 shadow-xl shadow-primary-500/20` 
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  {/* Gradient Accent Bar */}
                  {openFAQIndex === index && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}
                    />
                  )}
                  
                  {/* Question Button */}
                  <button
                    onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
                    className={`w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between transition-all duration-300 ${
                      openFAQIndex === index
                        ? 'bg-gradient-to-r from-primary-50/50 to-accent-50/50'
                        : 'hover:bg-gradient-to-r hover:from-primary-50/30 hover:to-accent-50/30'
                    }`}
                  >
                    <div className="flex items-start gap-4 flex-1">
                      {/* Question Number Badge */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        openFAQIndex === index
                          ? `bg-gradient-to-br ${service.color} text-white shadow-lg`
                          : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 group-hover:from-primary-100 group-hover:to-accent-100 group-hover:text-primary-600'
                      }`}>
                        {index + 1}
                      </div>
                      <span className={`text-base sm:text-lg font-bold pr-4 transition-colors duration-300 ${
                        openFAQIndex === index ? 'text-gray-900' : 'text-gray-800 group-hover:text-primary-600'
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openFAQIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openFAQIndex === index
                          ? `bg-gradient-to-br ${service.color} text-white shadow-lg`
                          : 'bg-gray-100 text-gray-600 group-hover:bg-primary-100 group-hover:text-primary-600'
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>
                  
                  {/* Answer Content */}
                  <AnimatePresence>
                    {openFAQIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 py-6 text-base sm:text-lg text-gray-700 leading-relaxed bg-gradient-to-br from-gray-50/50 to-white border-t-2 border-gray-100">
                          <div className="flex items-start gap-4">
                            <div className={`flex-shrink-0 w-1.5 h-full bg-gradient-to-b ${service.color} rounded-full mt-1`}></div>
                            <p className="flex-1">{faq.answer}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how {service.title} can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-0 hover:scale-105"
              >
                Contact Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-0"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}

export default ServiceDetail

