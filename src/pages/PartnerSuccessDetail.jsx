import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import partnerSuccessData from '../data/partnerSuccessData'
import SEO from '../components/SEO'

const PartnerSuccessDetail = () => {
  const { slug } = useParams()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const item = partnerSuccessData[slug] || {
    title: 'Not Found',
    subtitle: 'The requested page could not be found',
    description: 'Please check the URL or return to our partner success page.',
    icon: '❓',
    color: 'from-gray-500 to-gray-700',
    whatEachIncludes: [],
    keyBenefits: [],
    ctaText: 'Back to Partner Success',
    ctaLink: '/partner-success',
  }

  const siteUrl = 'https://aaitek.com.au'
  const canonicalUrl = `${siteUrl}/partner-success/${slug}`
  const seoTitle = `${item.title} - Partner Success | Aaitek`
  
  let seoDescription = item.description || item.subtitle || ''
  if (!seoDescription && item.title) {
    seoDescription = `${item.title} by Aaitek. Enterprise-grade outcomes, measurable impact, delivery reliability.`
  }
  if (!seoDescription) {
    seoDescription = 'Partner Success stories from Aaitek. Real-world examples of enterprise delivery, measurable outcomes, and trusted partnerships.'
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

  const socialImage = `${siteUrl}/footer-logo.png`

  // Get hero image based on type
  const getHeroImage = () => {
    if (slug === 'case-studies') {
      return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80'
    } else if (slug === 'client-success-stories') {
      return 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80'
    } else if (slug === 'platform-migrations') {
      return 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80'
    } else if (slug === 'ai-automation-outcomes') {
      return 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80'
    }
    return 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80'
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
        schemaType="Article"
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={getHeroImage()} 
              alt={item.title}
              className="w-full h-full object-cover opacity-10"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90`}></div>
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-4xl">{item.icon}</span>
                <span className="text-sm font-bold text-white uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                  Partner Success
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                {item.title}
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8">
                {item.subtitle}
              </p>
              
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                {item.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section ref={ref} className="py-12 sm:py-16 lg:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* What Each Includes */}
              {item.whatEachIncludes && item.whatEachIncludes.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl p-8 shadow-lg mb-12 border border-gray-200"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-3xl">💡</span>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        What Each {item.title} Includes:
                      </h2>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {item.whatEachIncludes.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-primary-600 font-bold mt-1">•</span>
                        <span className="text-gray-700 text-base">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Key Benefits */}
              {item.keyBenefits && item.keyBenefits.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Why Explore {item.title}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {item.keyBenefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-gradient-to-br from-white to-primary-50 rounded-xl p-6 border border-primary-200/50 shadow-md hover:shadow-lg transition-all"
                      >
                        <p className="text-gray-700 font-medium">{benefit}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Explore {item.title}?
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Discover real-world examples of enterprise delivery, measurable outcomes, and trusted partnerships.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to={item.ctaLink}
                    className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                  >
                    {item.ctaText}
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border-2 border-white/30"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Back to Partner Success */}
        <section className="py-8 bg-gray-100">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <Link
                to="/partner-success"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Partner Success
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PartnerSuccessDetail
