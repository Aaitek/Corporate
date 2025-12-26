import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CountUp } from '../../hooks/useCountUp'

const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { value: 500, suffix: '+', label: 'Certified Professionals', icon: '👥' },
    { value: 21, suffix: '+', label: 'Years Experience', icon: '⭐' },
    { value: 16, suffix: '+', label: 'Countries Served', icon: '🌍' },
    { value: 300, suffix: '+', label: 'Active Clients', icon: '🤝' },
  ]

  const capabilities = [
    'DXP Solutions',
    'SAP Integration',
    'Salesforce CRM',
    'ServiceNow',
    'AWS Cloud',
    'AI & Automation',
  ]

  return (
    <section id="about-us" ref={ref} className="py-24 bg-gradient-to-br from-gray-50 via-white to-sky-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Title & Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8 flex flex-col"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-sky-100 border border-sky-200 mb-6 w-fit"
              >
                <span className="text-sm font-semibold text-sky-600 uppercase tracking-wider whitespace-nowrap">ABOUT AAITEK</span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="text-gray-900">ABOUT</span>{' '}
                <span className="text-cyan-500">US</span>
              </h2>
              
              <p className="text-2xl md:text-3xl text-gray-700 font-bold leading-relaxed">
                We're Proudly{' '}
                <span className="text-primary-600">Australia-owned</span> with{' '}
                <span className="text-accent-600">Global Delivery</span> Capability
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-primary-600">
                      {isInView ? (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2.5}
                          suffix={stat.suffix}
                          separator=","
                          decimals={0}
                          enabled={isInView}
                        />
                      ) : (
                        `0${stat.suffix}`
                      )}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Description & Capabilities */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="space-y-8 flex flex-col justify-between lg:pt-20"
            >
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  <span className="font-bold text-gray-900 text-xl">Aaitek</span> - delivers enterprise-grade solutions across{' '}
                  <span className="font-semibold text-primary-600">DXP (Sitecore, Kentico, Umbraco, Optimizely)</span>,{' '}
                  <span className="font-semibold text-primary-600">SAP, Salesforce, ServiceNow, AWS, AI, and Automation</span> — backed by{' '}
                  <span className="font-bold text-primary-600">500+ certified tech professionals</span>.
                </p>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Our{' '}
                  <span className="font-bold text-primary-600">AaitekTOD (Talent on demand)</span>™ model provides scalable, on-demand expertise that integrates seamlessly into your teams for faster, smarter delivery.
                </p>
              </div>

              {/* Capabilities Tags */}
              <div className="pt-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Our Core Capabilities</h3>
                <div className="flex flex-wrap gap-3">
                  {capabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-full text-sm font-semibold text-primary-700 hover:from-primary-100 hover:to-accent-100 transition-all duration-0"
                    >
                      {capability}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button - Aligned with left column bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-4"
              >
                <motion.a
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-0 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0 }}
                >
                  Learn More About Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

