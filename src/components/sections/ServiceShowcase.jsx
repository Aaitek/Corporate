import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const ServiceShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      title: 'Intelligent Booking Engine',
      description: 'Real-time availability and instant confirmations for high-volume, mission-critical use cases.',
      icon: '📱',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Centralized Itinerary Management',
      description: 'Unified itinerary tracking with automatic updates and real-time synchronization.',
      icon: '📋',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Real-Time Notifications & Alerts',
      description: 'Event-driven communication for bookings, changes, and critical updates.',
      icon: '🔔',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Location-Aware Services',
      description: 'GPS-enabled features delivering contextual and location-based experiences.',
      icon: '📍',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Secure Payments',
      description: 'Multiple payment options with enterprise-grade security and encryption.',
      icon: '💳',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Customer Feedback & Reviews',
      description: 'Integrated ratings and feedback to support informed decision-making.',
      icon: '⭐',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Curated Content & Guides',
      description: 'Personalized recommendations to enhance user engagement and experience.',
      icon: '🗺️',
      color: 'from-teal-500 to-cyan-500',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeIn' }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-200 mb-6">
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Our Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Enterprise Mobile Experience Platform
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4 sm:px-6 text-center">
            A scalable, enterprise-grade mobile platform designed to support complex booking, operations, and customer engagement workflows. Built for performance, security, and reliability, it delivers seamless experiences across iOS and Android.
          </p>
        </motion.div>

        {/* Three Column Layout: Features Left | Phones Center | Features Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            className="space-y-4 order-2 lg:order-1"
          >
            {features.slice(0, 4).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1, ease: 'easeIn' }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="group flex items-start gap-3 sm:gap-3 p-4 sm:p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-0"
              >
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform duration-0 flex-shrink-0`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-0">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center - Phone Mockups (Smaller) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.3, delay: 0.2, ease: 'easeIn' }}
            className="relative flex items-center justify-center order-1 lg:order-2 px-4 sm:px-0"
          >
            {/* Phone Mockups Container */}
            <div className="relative flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
              {/* Phone 1 - Left */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotate: -8 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: -8 } : { opacity: 0, y: 50, rotate: -8 }}
                transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                className="relative z-10"
              >
                <div className="w-28 sm:w-32 md:w-40 h-[360px] sm:h-[400px] md:h-[480px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2rem] p-2 shadow-2xl border-4 sm:border-6 border-gray-900">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                    <div className="p-3 h-full flex flex-col">
                      <div className="h-10 bg-blue-600 rounded-lg mb-3 flex items-center justify-center px-2">
                        <span className="text-white font-semibold text-xs text-center whitespace-nowrap overflow-hidden text-ellipsis">Flight Search</span>
                      </div>
                      <div className="space-y-2 flex-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-16 bg-gray-100 rounded-lg"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone 2 - Center */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                className="relative z-20"
              >
                <div className="w-32 sm:w-36 md:w-44 h-[400px] sm:h-[440px] md:h-[520px] bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-[2rem] p-2 shadow-2xl border-4 sm:border-6 border-gray-900">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                    <div className="p-3 h-full flex flex-col">
                      <div className="h-12 bg-cyan-500 rounded-lg mb-3 flex items-center justify-center px-2">
                        <span className="text-white font-semibold text-xs sm:text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis">Booking Confirmed</span>
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-cyan-50 to-white rounded-lg p-3 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3">
                          <span className="text-white text-2xl">✓</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone 3 - Right */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotate: 8 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 8 } : { opacity: 0, y: 50, rotate: 8 }}
                transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
                className="relative z-10"
              >
                <div className="w-28 sm:w-32 md:w-40 h-[360px] sm:h-[400px] md:h-[480px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-[2rem] p-2 shadow-2xl border-4 sm:border-6 border-gray-900">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                    <div className="p-3 h-full flex flex-col">
                      <div className="h-10 bg-gray-800 rounded-lg mb-3 flex items-center justify-center px-2">
                        <span className="text-white font-semibold text-xs text-center whitespace-nowrap overflow-hidden text-ellipsis">Profile</span>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="h-20 bg-gray-100 rounded-lg"></div>
                        <div className="space-y-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="h-10 bg-gray-100 rounded-lg"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            className="space-y-4 order-3"
          >
            {features.slice(4).map((feature, index) => (
              <motion.div
                key={index + 4}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1, ease: 'easeIn' }}
                whileHover={{ x: -8, scale: 1.02 }}
                className="group flex items-start gap-3 sm:gap-3 p-4 sm:p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-0"
              >
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform duration-0 flex-shrink-0`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-0">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-primary-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Explore Our Solutions
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/partner-success"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-transparent text-primary-600 font-semibold rounded-xl border-2 border-primary-300 hover:border-primary-500 hover:bg-primary-50 transition-all duration-300 text-sm sm:text-base"
            >
              View Case Studies
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceShowcase

