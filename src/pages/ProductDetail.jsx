import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import productsData from '../data/productsData'
import SEO from '../components/SEO'

const ProductDetail = () => {
  const { slug } = useParams()
  
  const product = productsData[slug] || {
    title: 'Product Not Found',
    subtitle: 'The requested product could not be found',
    description: 'Please check the URL or return to our products page.',
    longDescription: 'The product you are looking for does not exist. Please visit our products page to see all available products.',
    icon: '❓',
    color: 'from-gray-500 to-gray-700',
    technology: [],
    keyFeatures: [],
  }

  const siteUrl = 'https://aaitek.com'
  const canonicalUrl = `${siteUrl}/products/${slug}`
  const seoTitle = `${product.title} - Product | Aaitek`
  // Create a comprehensive, SEO-optimized description
  // Combine description and longDescription for a complete description
  let seoDescription = ''
  if (product.description && product.longDescription) {
    seoDescription = `${product.description} ${product.longDescription}`
  } else {
    seoDescription = product.description || product.longDescription || ''
  }
  
  // If still no description, create one from available data
  if (!seoDescription) {
    seoDescription = `${product.subtitle || product.title} by Aaitek. ${product.title} is a modular AI solution built on enterprise-grade delivery standards, designed for scale, security, and measurable ROI.`
  }
  
  // Ensure description is optimal length (150-160 characters for best SEO)
  // But keep it meaningful - don't cut off mid-sentence
  if (seoDescription.length > 160) {
    // Try to cut at a sentence boundary
    const truncated = seoDescription.substring(0, 157)
    const lastPeriod = truncated.lastIndexOf('.')
    const lastSpace = truncated.lastIndexOf(' ')
    if (lastPeriod > 120) {
      seoDescription = truncated.substring(0, lastPeriod + 1)
    } else if (lastSpace > 120) {
      seoDescription = truncated.substring(0, lastSpace) + '...'
    } else {
      seoDescription = truncated + '...'
    }
  }

  // Get product-specific image for social sharing
  const getProductImage = () => {
    const productImages = {
      'ai-sales-agent': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      'ai-booking-agent': 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80',
      'ai-trade-strategy-agent': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
      'ai-restaurant-agent': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
      'ai-real-estate-agent': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
      'ai-dental-assistant': 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&q=80',
      'ai-field-service-agent': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80',
      'ai-automation-platform': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
      'enterprise-integration-hub': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
      'industry-ai-accelerators': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    }
    // Use logo for all product pages for consistent social sharing
    return `${siteUrl}/Aaitek logo in Black.png`
  }

  return (
    <>
      <SEO
        seoTitle={seoTitle}
        seoDescription={seoDescription}
        canonicalUrl={canonicalUrl}
        ogTitle={product.title}
        ogDescription={seoDescription}
        ogImage={getProductImage()}
        ogType="website"
        twitterTitle={product.title}
        twitterDescription={seoDescription}
        twitterImage={getProductImage()}
        schemaType="Product"
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-90`}></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <span className="text-2xl">{product.icon}</span>
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Product</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              {product.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8">
              {product.subtitle}
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-4">
              {product.description}
            </p>
            {product.longDescription && (
              <p className="text-base text-white/70 max-w-3xl mx-auto">
                {product.longDescription}
              </p>
            )}
            {product.comingSoon && (
              <div className="mt-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-300/30 text-amber-100 text-sm font-semibold">
                  Coming Soon
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-sky-50 relative overflow-hidden">
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
            {/* Technology and Key Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-16">
              {/* Technology Used */}
              {product.technology && product.technology.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -50, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.02, y: -10, rotateY: 5 }}
                  className="group relative bg-gradient-to-br from-white via-white to-primary-50/40 rounded-3xl p-10 border-2 border-gray-200/60 hover:border-primary-400 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
                >
                  {/* Animated Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Left Border Accent */}
                  <motion.div 
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-8">
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-br ${product.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </motion.div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                          Technology Used
                        </h2>
                        <div className={`h-1 w-24 bg-gradient-to-r ${product.color} rounded-full`}></div>
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {product.technology.map((tech, index) => (
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
                            className={`w-10 h-10 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300`}
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.4 }}
                          >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </motion.div>
                          <span className="text-gray-800 text-lg font-semibold leading-relaxed pt-1">{tech}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Key Features */}
              {product.keyFeatures && product.keyFeatures.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 50, rotateY: 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.02, y: -10, rotateY: -5 }}
                  className="group relative bg-gradient-to-br from-white via-white to-accent-50/40 rounded-3xl p-10 border-2 border-gray-200/60 hover:border-accent-400 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
                >
                  {/* Animated Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Left Border Accent */}
                  <motion.div 
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-8">
            <motion.div
                        className={`w-20 h-20 bg-gradient-to-br ${product.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                        whileHover={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </motion.div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 group-hover:text-accent-600 transition-colors duration-300">
                          Key Features
                        </h2>
                        <div className={`h-1 w-20 bg-gradient-to-r ${product.color} rounded-full`}></div>
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {product.keyFeatures.map((feature, index) => (
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
                            className={`w-10 h-10 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300`}
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.4 }}
                          >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </motion.div>
                          <span className="text-gray-800 text-lg font-semibold leading-relaxed pt-1">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
            </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

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
              {product.comingSoon ? 'Interested in This Product?' : 'Ready to Get Started?'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {product.comingSoon 
                ? `Get notified when ${product.title} becomes available`
                : `Request a demo to see ${product.title} in action`
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
                {product.comingSoon ? 'Get Notified' : 'Talk to an Expert'}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
              {!product.comingSoon && (
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Request Product Overview
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}

export default ProductDetail

