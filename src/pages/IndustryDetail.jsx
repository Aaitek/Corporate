import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import industriesData from '../data/industriesData'
import SEO from '../components/SEO'

const IndustryDetail = () => {
  const { slug } = useParams()
  
  const industry = industriesData[slug] || {
    title: 'Industry Not Found',
    subtitle: 'The requested industry could not be found',
    description: 'Please check the URL or return to our industries page.',
    icon: '❓',
    color: 'from-gray-500 to-gray-700',
    whatWeDo: '',
    whatWeBuilt: {},
    useCases: [],
    industryOutlook: '',
    howAIMakesDifference: [],
  }

  const siteUrl = 'https://aaitek.com.au'
  const canonicalUrl = `${siteUrl}/industries/${slug}`
  const seoTitle = `${industry.title} - Industry Solutions | Aaitek`
  // Create a comprehensive, SEO-optimized description
  let seoDescription = ''
  if (industry.description) {
    // Use the description and enhance it if it's too short
    seoDescription = industry.description
    if (seoDescription.length < 100 && industry.whatWeDo) {
      seoDescription = `${seoDescription} ${industry.whatWeDo}`
    }
  } else if (industry.whatWeDo) {
    seoDescription = industry.whatWeDo
  } else if (industry.subtitle) {
    seoDescription = `${industry.subtitle}. Enterprise-grade digital transformation solutions tailored for ${industry.title.toLowerCase()} industry.`
  } else {
    seoDescription = `Enterprise-grade digital transformation solutions for ${industry.title}. Modern platforms, AI-first solutions, and intelligent automation tailored to your industry needs.`
  }
  // Ensure description is optimal length (150-160 characters for best SEO)
  if (seoDescription.length > 160) {
    seoDescription = seoDescription.substring(0, 157) + '...'
  } else if (seoDescription.length < 120 && industry.whatWeDo && !industry.description) {
    // If description is too short, add more context
    seoDescription = `${seoDescription} Built for scale, security, and measurable business outcomes.`
  }

  // Get industry-specific image for social sharing
  const getIndustryImage = () => {
    const industryImages = {
      'sports-media': 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80',
      'financial-services-insurance': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      'real-estate': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
      'retail-ecommerce': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
      'healthcare-life-sciences': 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&q=80',
      'education-edtech': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80',
      'energy-utilities': 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80',
      'government-public-sector': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    }
    // Use logo for all industry pages for consistent social sharing
    return `${siteUrl}/logo-black.png`
  }

  return (
    <>
      <SEO
        seoTitle={seoTitle}
        seoDescription={seoDescription}
        canonicalUrl={canonicalUrl}
        ogTitle={`${industry.title} - Industry Solutions`}
        ogDescription={seoDescription}
        ogImage={getIndustryImage()}
        ogType="website"
        twitterTitle={`${industry.title} - Industry Solutions`}
        twitterDescription={seoDescription}
        twitterImage={getIndustryImage()}
        schemaType="WebPage"
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-90`}></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <span className="text-2xl">{industry.icon}</span>
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Industry</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              {industry.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8">
              {industry.subtitle}
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              {industry.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      {industry.whatWeDo && (
        <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-400 rounded-full blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-400 rounded-full blur-3xl opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.25, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-gradient-to-br from-white via-white to-primary-50/40 rounded-3xl p-10 md:p-12 border-2 border-primary-200/60 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
              >
                {/* Animated Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Decorative Corner Elements */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${industry.color} opacity-5 rounded-bl-full`}></div>
                <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${industry.color} opacity-5 rounded-tr-full`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-4xl">{industry.icon}</span>
                    </motion.div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        What We Do
                      </h2>
                      <div className={`h-1 w-20 bg-gradient-to-r ${industry.color} rounded-full`}></div>
                    </div>
                  </div>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">{industry.whatWeDo}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* What We've Built */}
      {industry.whatWeBuilt && (
        <section className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #1e293b 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
          
          <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  What We've Built
                </h2>
                <div className={`h-1.5 w-24 bg-gradient-to-r ${industry.color} rounded-full mx-auto`}></div>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {industry.whatWeBuilt.products && (
                  <motion.div
                    initial={{ opacity: 0, x: -50, rotateY: -15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                    className="group relative bg-gradient-to-br from-white via-white to-primary-50/30 rounded-3xl p-10 border-2 border-gray-200/60 hover:border-primary-400 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  >
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Left Border Accent */}
                    <motion.div 
                      className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                    
                    <div className="relative z-10">
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </motion.div>
                      <h3 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                        Products developed
                      </h3>
                      <p className="text-xl text-gray-600 font-semibold">{industry.whatWeBuilt.products}</p>
                    </div>
                  </motion.div>
                )}
                {industry.whatWeBuilt.platforms && (
                  <motion.div
                    initial={{ opacity: 0, x: 50, rotateY: 15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.05, y: -10, rotateY: -5 }}
                    className="group relative bg-gradient-to-br from-white via-white to-accent-50/30 rounded-3xl p-10 border-2 border-gray-200/60 hover:border-accent-400 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  >
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Left Border Accent */}
                    <motion.div 
                      className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                    
                    <div className="relative z-10">
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                        whileHover={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </motion.div>
                      <h3 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-accent-600 transition-colors duration-300">
                        Platforms delivered
                      </h3>
                      <p className="text-xl text-gray-600 font-semibold">{industry.whatWeBuilt.platforms}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Use Cases & Industry Outlook & How AI Makes a Difference */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-sky-50 relative overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-400 rounded-full blur-3xl opacity-15"
            animate={{
              scale: [1, 1.15, 1],
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
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-400 rounded-full blur-3xl opacity-15"
            animate={{
              scale: [1, 1.2, 1],
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
              {/* Use Cases */}
              {industry.useCases && industry.useCases.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative bg-gradient-to-br from-white via-white to-primary-50/40 rounded-3xl p-10 border-2 border-primary-200/60 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
                >
                  {/* Animated Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Left Border Accent */}
                  <motion.div 
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-8">
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </motion.div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Use Cases</h2>
                        <div className={`h-1 w-16 bg-gradient-to-r ${industry.color} rounded-full`}></div>
                      </div>
                      <span className="ml-auto px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold shadow-lg animate-pulse">Coming Soon</span>
                    </div>
                    <ul className="space-y-4">
                      {industry.useCases.map((useCase, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.15 }}
                          whileHover={{ x: 10 }}
                          className="group/item flex items-start gap-4 p-4 rounded-2xl bg-white/70 hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          <motion.div 
                            className={`w-10 h-10 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300`}
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.4 }}
                          >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                          <span className="text-gray-800 text-lg font-semibold leading-relaxed pt-1">{useCase}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Industry Outlook & How AI Makes a Difference */}
              <div className="space-y-10">
                {/* Industry Outlook */}
                {industry.industryOutlook && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative bg-gradient-to-br from-white via-white to-accent-50/40 rounded-3xl p-10 border-2 border-accent-200/60 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
                  >
                    {/* Animated Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Left Border Accent */}
                    <motion.div 
                      className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-5 mb-6">
                        <motion.div 
                          className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </motion.div>
                        <div>
                          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Industry Outlook</h2>
                          <div className={`h-1 w-20 bg-gradient-to-r ${industry.color} rounded-full`}></div>
                        </div>
                      </div>
                      <p className="text-xl text-gray-700 leading-relaxed font-medium">{industry.industryOutlook}</p>
                    </div>
                  </motion.div>
                )}

                {/* How AI Makes a Difference */}
                {industry.howAIMakesDifference && industry.howAIMakesDifference.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative bg-gradient-to-br from-white via-white to-primary-50/40 rounded-3xl p-10 border-2 border-primary-200/60 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
                  >
                    {/* Animated Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Left Border Accent */}
                    <motion.div 
                      className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-5 mb-8">
                        <motion.div 
                          className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                          whileHover={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </motion.div>
                        <div>
                          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">How AI Makes a Difference</h2>
                          <div className={`h-1 w-24 bg-gradient-to-r ${industry.color} rounded-full`}></div>
                        </div>
                      </div>
                      <ul className="space-y-4">
                        {industry.howAIMakesDifference.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ x: 10 }}
                            className="group/item flex items-start gap-4 p-4 rounded-2xl bg-white/70 hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg"
                          >
                            <motion.div 
                              className={`w-10 h-10 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300`}
                              whileHover={{ rotate: [0, -10, 10, 0] }}
                              transition={{ duration: 0.4 }}
                            >
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </motion.div>
                            <span className="text-gray-800 text-lg font-semibold leading-relaxed pt-1">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
            </motion.div>
                )}
              </div>
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
              Industry expertise meets intelligent engineering—built for today, designed for the future.
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ready to transform your {industry.title} business with intelligent solutions?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}

export default IndustryDetail

