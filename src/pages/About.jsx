import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { CountUp } from '../hooks/useCountUp'
import SEO from '../components/SEO'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const stats = [
    { value: 500, suffix: '+', label: 'Certified Professionals', icon: '👥', color: 'from-blue-500 to-cyan-500' },
    { value: 21, suffix: '+', label: 'Years Experience', icon: '⭐', color: 'from-purple-500 to-pink-500' },
    { value: 16, suffix: '+', label: 'Countries Served', icon: '🌍', color: 'from-green-500 to-emerald-500' },
    { value: 300, suffix: '+', label: 'Active Clients', icon: '🤝', color: 'from-orange-500 to-red-500' },
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
      icon: '💡',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships.',
      icon: '🤝',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Global Excellence',
      description: 'Australia-owned with world-class delivery capabilities worldwide.',
      icon: '🌏',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Agile Delivery',
      description: 'Fast, flexible, and scalable solutions tailored to your needs.',
      icon: '⚡',
      color: 'from-orange-500 to-red-500',
    },
  ]

  const capabilities = [
    'DXP Solutions (Sitecore, Kentico, Umbraco)',
    'SAP Integration',
    'Salesforce CRM',
    'ServiceNow',
    'AWS Cloud Services',
    'AI & Automation',
    'Headless CMS',
    'Enterprise Platforms',
  ]

  const siteUrl = 'https://aaitek.com.au'

  return (
    <>
      <SEO
        seoTitle="About Us - Who We Are | Aaitek"
        seoDescription="Learn about Aaitek, a premium technology partner focused on modern platforms, AI-first solutions, and enterprise-grade delivery. Australia-based, globally delivered."
        canonicalUrl={`${siteUrl}/about`}
        ogTitle="About Us - Who We Are"
        ogDescription="Learn about Aaitek, a premium technology partner focused on modern platforms, AI-first solutions, and enterprise-grade delivery."
        ogImage="https://aaitek.com.au/footer-logo.png"
        ogType="website"
        twitterTitle="About Us - Who We Are"
        twitterDescription="Learn about Aaitek, a premium technology partner."
        twitterImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
        schemaType="AboutPage"
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">About Aaitek</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              About Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Australia-owned with global delivery capability. Transforming businesses through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                <span className="font-bold text-gray-900">Aaitek</span> delivers enterprise-grade solutions across{' '}
                <span className="font-semibold text-primary-600">DXP (Sitecore, Kentico, Umbraco, Optimizely)</span>,{' '}
                <span className="font-semibold text-primary-600">SAP, Salesforce, ServiceNow, AWS, AI, and Automation</span> backed by{' '}
                <span className="font-bold text-primary-600">500+ certified tech professionals</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-200"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our{' '}
                <span className="font-bold text-primary-600">AaitekTOD (Talent on demand)</span>™ model provides scalable, on-demand expertise that integrates seamlessly into your teams for faster, smarter delivery.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're proudly <span className="font-bold text-primary-600">Australia-owned</span> with{' '}
                <span className="font-bold text-accent-600">Global Delivery</span> capability, ensuring you get the best of both worlds: local understanding with international expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-sky-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  ease: 'easeIn'
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-0 group overflow-hidden"
              >
                {/* Left Border on Hover */}
                <motion.div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-0`}
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0 }}
                />

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-0`}>
                  {value.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-0">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-0 rounded-2xl`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={ref} className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  ease: 'easeIn'
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-0 group overflow-hidden"
              >
                {/* Left Border on Hover */}
                <motion.div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-0`}
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0 }}
                />

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-0`}>
                  {stat.icon}
                </div>

                {/* Content */}
                <div className="text-4xl font-bold text-primary-600 mb-2">
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
                <p className="text-gray-600 font-medium">{stat.label}</p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-0 rounded-2xl`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Our Core Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions across multiple platforms and industries
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: 'easeIn' }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-full text-sm font-semibold text-primary-700 hover:from-primary-100 hover:to-accent-100 transition-all duration-0 cursor-default"
              >
                {capability}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help transform your business
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-0 hover:scale-105"
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

export default About

