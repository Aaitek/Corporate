import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEO from '../components/SEO'

const Career = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const whyWorkAtAaitek = [
    'Work on real enterprise and platform projects',
    'Learn from experienced engineers and architects',
    'Exposure to modern technologies and AI-driven systems',
    'Flexible, respectful, and collaborative culture',
    'Opportunity to grow with the company',
  ]

  const whoWeLookFor = [
    'Engineers who care about quality and clarity',
    'Problem-solvers, not just implementers',
    'People who value teamwork and ownership',
    'Professionals eager to grow with responsibility',
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers at Aaitek",
    "description": "Join the Aaitek team and build the future of digital transformation with us. Explore career opportunities in AI, cloud, and enterprise engineering.",
    "url": "https://aaitek.com.au/career",
    "publisher": {
      "@type": "Organization",
      "name": "Aaitek Technology Specialists",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aaitek.com.au/Aaitek logo in Black.png"
      }
    }
  }

  return (
    <>
      <SEO
        seoTitle="Careers - Join the Aaitek Team"
        seoDescription="Explore career opportunities at Aaitek. Build the future of digital transformation with us, working on enterprise-grade AI, cloud, and engineering projects."
        canonicalUrl="https://aaitek.com.au/career"
        robots="index,follow"
        ogTitle="Careers - Join the Aaitek Team"
        ogDescription="Join the Aaitek team and build the future of digital transformation with us. Explore career opportunities in AI, cloud, and enterprise engineering."
        ogImage="https://aaitek.com.au/Aaitek logo in Black.png"
        ogType="website"
        twitterCard="summary_large_image"
        schemaType="WebPage"
        structuredData={structuredData}
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 mb-8 shadow-xl"
            >
              <span className="text-2xl">💼</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider">Careers</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
            >
              Join the Aaitek Team
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Build the future of digital transformation with us
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Careers Section */}
      <section ref={ref} className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-green-50/30 to-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                🚀
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
                  Careers
                </h2>
                <p className="text-lg font-semibold text-green-600">Build Meaningful Work. Grow with Purpose.</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At Aaitek, careers are built on learning, responsibility, and real-world impact.
            </p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
              We work on complex, enterprise-grade challenges across industries — and we value people who are curious, accountable, and passionate about building quality solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-200 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">✨</span>
                Why Work at Aaitek
              </h3>
              <ul className="space-y-4">
                {whyWorkAtAaitek.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 mt-6 italic">
                We collaborate globally through trusted partners, offering diverse exposure while maintaining strong local leadership.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-200 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">👥</span>
                Who We Look For
              </h3>
              <ul className="space-y-4">
                {whoWeLookFor.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Open Opportunities
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="text-sm text-gray-500 mt-4">(Roles and openings coming soon)</p>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Career
