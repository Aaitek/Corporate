import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import hireTalentData from '../data/hireTalentData'
import SEO from '../components/SEO'

const HireTalentDetail = () => {
  const { slug } = useParams()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const item = hireTalentData[slug] || {
    title: 'Not Found',
    subtitle: 'The requested page could not be found',
    description: 'Please check the URL or return to our hire talent page.',
    icon: '❓',
    color: 'from-gray-500 to-gray-700',
    type: 'engagement-model',
    bestFor: [],
    whatYouGet: [],
    keyBenefits: [],
    skills: [],
    technologies: [],
    howItWorks: [],
  }

  const siteUrl = 'https://aaitek.com'
  const canonicalUrl = `${siteUrl}/hire-talent/${slug}`
  const seoTitle = `${item.title} - Hire Talent | Aaitek`
  
  let seoDescription = item.description || item.subtitle || ''
  if (!seoDescription && item.title) {
    seoDescription = `${item.title} by Aaitek. Premium onshore/offshore delivery with strong governance. Scale teams fast without compromising quality.`
  }
  if (!seoDescription) {
    seoDescription = 'Premium talent solutions by Aaitek. Access experienced, delivery-ready professionals with flexible engagement models.'
  }
  
  if (seoDescription.length > 160) {
    const truncated = seoDescription.substring(0, 157)
    const lastPeriod = truncated.lastIndexOf('.')
    if (lastPeriod > 100) {
      seoDescription = truncated.substring(0, lastPeriod + 1)
    } else {
      seoDescription = truncated + '...'
    }
  }

  const socialImage = `${siteUrl}/Aaitek%20logo%20in%20Black.png`

  // Get hero image based on type
  const getHeroImage = () => {
    if (item.type === 'engagement-model') {
      return 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80'
    }
    return 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80'
  }

  return (
    <>
      <SEO
        seoTitle={seoTitle}
        seoDescription={seoDescription}
        canonicalUrl={canonicalUrl}
        ogTitle={item.title}
        ogDescription={seoDescription}
        ogImage={socialImage}
        ogType="website"
        twitterTitle={item.title}
        twitterDescription={seoDescription}
        twitterImage={socialImage}
        schemaType="Service"
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={getHeroImage()} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-90`}></div>
          </div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  {item.type === 'engagement-model' ? 'Engagement Model' : 'Expertise Area'}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                {item.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8">
                {item.subtitle}
              </p>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                {item.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits */}
        {item.keyBenefits && item.keyBenefits.length > 0 && (
          <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Key Benefits
                  </h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {item.keyBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-primary-300 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-800 text-lg font-medium leading-relaxed pt-2">{benefit}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Best For & What You Get (for engagement models) */}
        {item.type === 'engagement-model' && item.bestFor && item.whatYouGet && (
          <section ref={ref} className="py-12 sm:py-16 lg:py-24">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Best For
                    </h3>
                    <ul className="space-y-4">
                      {item.bestFor.map((point, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md`}>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-lg leading-relaxed">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      What You Get
                    </h3>
                    <ul className="space-y-4">
                      {item.whatYouGet.map((point, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md`}>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-lg leading-relaxed">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Skills & Technologies (for expertise areas) */}
        {item.type === 'expertise' && item.skills && (
          <section ref={ref} className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Skills & Expertise
                  </h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {item.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-primary-300 shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {item.technologies && item.technologies.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {item.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className={`px-4 py-2 bg-gradient-to-br ${item.color} text-white rounded-lg font-semibold text-sm shadow-md hover:scale-105 transition-transform`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* How It Works (for engagement models) */}
        {item.howItWorks && item.howItWorks.length > 0 && (
          <section className="py-12 sm:py-16 lg:py-24">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    How It Works
                  </h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {item.howItWorks.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-primary-300 shadow-lg hover:shadow-xl transition-all h-full">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                          <span className="text-white font-bold text-xl">{step.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                      {index < item.howItWorks.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary-300 to-transparent transform -translate-y-1/2">
                          <svg className="w-6 h-6 text-primary-400 absolute -right-1 -top-2.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tagline */}
        {item.tagline && (
          <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto"
              >
                <p className="text-2xl md:text-3xl font-bold text-white italic">
                  "{item.tagline}"
                </p>
              </motion.div>
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
                Let's discuss how {item.title} can help you access the right talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  to="/hire-talent"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  View All Options
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default HireTalentDetail
