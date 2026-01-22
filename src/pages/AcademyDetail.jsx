import { motion, AnimatePresence } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import academyData from '../data/academyData'
import SEO from '../components/SEO'

const AcademyDetail = () => {
  const { slug } = useParams()
  const [openFaq, setOpenFaq] = useState(null)
  
  const course = academyData[slug] || {
    title: 'Course Not Found',
    subtitle: 'The requested course could not be found',
    description: 'Please check the URL or return to our academy page.',
    icon: '❓',
    color: 'from-gray-500 to-gray-700',
    keyBenefits: [],
    whatWeDeliver: [],
    faqs: [],
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const siteUrl = 'https://aaitek.com'
  const canonicalUrl = `${siteUrl}/academy/${slug}`
  const seoTitle = `${course.title} - Academy Course | Aaitek`
  // Create a comprehensive, SEO-optimized description
  let seoDescription = course.description || ''
  if (!seoDescription && course.subtitle) {
    seoDescription = `${course.subtitle}. Premium training course by Aaitek designed for delivery readiness and enterprise-ready outcomes.`
  } else if (!seoDescription) {
    seoDescription = `${course.title} training course by Aaitek. Premium training pathway designed for delivery readiness, not theory. Enterprise-ready outcomes.`
  }
  // Enhance description if it's too short
  if (seoDescription.length < 120 && course.subtitle && !course.description) {
    seoDescription = `${course.subtitle}. ${seoDescription}`
  }
  // Ensure description is optimal length (150-160 characters for best SEO)
  if (seoDescription.length > 160) {
    // Try to cut at a sentence boundary
    const truncated = seoDescription.substring(0, 157)
    const lastPeriod = truncated.lastIndexOf('.')
    if (lastPeriod > 120) {
      seoDescription = truncated.substring(0, lastPeriod + 1)
    } else {
      seoDescription = truncated + '...'
    }
  }

  // Use logo for academy courses for consistent social sharing
  const academyImage = 'https://aaitek.com/Aaitek%20logo%20in%20Black.png'

  return (
    <>
      <SEO
        seoTitle={seoTitle}
        seoDescription={seoDescription}
        canonicalUrl={canonicalUrl}
        ogTitle={course.title}
        ogDescription={seoDescription}
        ogImage={academyImage}
        ogType="website"
        twitterTitle={course.title}
        twitterDescription={seoDescription}
        twitterImage={academyImage}
        schemaType="Course"
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-90`}></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <span className="text-2xl">{course.icon}</span>
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Academy Course</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              {course.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8">
              {course.subtitle}
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              {course.description}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-300/30">
              <span className="text-xs font-semibold text-amber-100 uppercase tracking-wider">Under Development</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This Training Is in Demand */}
      {course.whyInDemand && (
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
                className="group relative bg-gradient-to-br from-white to-primary-50/50 rounded-2xl p-8 md:p-10 border-2 border-primary-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {course.whyInDemand.title}
                    </h2>
                  </div>
                  <ul className="space-y-4 mb-6">
                    {course.whyInDemand.points.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/70 hover:bg-white transition-colors duration-300"
                      >
                        <div className={`w-8 h-8 bg-gradient-to-br ${course.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-800 text-lg font-medium leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 italic font-medium">{course.whyInDemand.sources}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Key Benefits & What We Deliver */}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
              {/* Key Benefits */}
              {course.keyBenefits && course.keyBenefits.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative bg-gradient-to-br from-white via-white to-primary-50/40 rounded-3xl p-10 border-2 border-primary-200/60 hover:border-primary-400 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
                >
                  {/* Animated Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Left Border Accent */}
                  <motion.div 
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-8">
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-br ${course.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </motion.div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Key Benefits</h2>
                        <div className={`h-1 w-20 bg-gradient-to-r ${course.color} rounded-full`}></div>
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {course.keyBenefits.map((benefit, index) => (
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
                            className={`w-10 h-10 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300`}
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

              {/* What We Deliver */}
              {course.whatWeDeliver && course.whatWeDeliver.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative bg-gradient-to-br from-white via-white to-accent-50/40 rounded-3xl p-10 border-2 border-accent-200/60 hover:border-accent-400 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
                >
                  {/* Animated Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Left Border Accent */}
                  <motion.div 
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-8">
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-br ${course.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                        whileHover={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </motion.div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">What We Deliver</h2>
                        <div className={`h-1 w-24 bg-gradient-to-r ${course.color} rounded-full`}></div>
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {course.whatWeDeliver.map((item, index) => (
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
                            className={`w-10 h-10 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300`}
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
      </section>

      {/* FAQs */}
      {course.faqs && course.faqs.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-sky-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600">
                  Common questions about {course.title}
                </p>
              </motion.div>
              <div className="space-y-4">
                {course.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-primary-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-primary-50/50 transition-colors duration-300"
                    >
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors pr-8">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${course.color} flex items-center justify-center shadow-lg`}
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0">
                            <div className="pt-4 border-t border-gray-200">
                              <p className="text-gray-700 leading-relaxed text-lg">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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
              Industry-led training. Real-world skills. Enterprise-ready outcomes.
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Training programs are currently under development. Get notified when {course.title} becomes available.
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

export default AcademyDetail

