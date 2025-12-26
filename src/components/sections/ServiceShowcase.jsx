import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ServiceShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      title: 'Mobile Booking Engine',
      description: 'Seamless booking experience with real-time availability and instant confirmations.',
      icon: '📱',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Itinerary Management',
      description: 'Comprehensive itinerary tracking with automatic updates and synchronization.',
      icon: '📋',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Real-Time Notifications',
      description: 'Instant alerts for bookings, changes, and important travel updates.',
      icon: '🔔',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'GPS-Enabled Services',
      description: 'Location-based services for finding nearby attractions and services.',
      icon: '📍',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Secure Payments',
      description: 'Multiple payment options with bank-level security and encryption.',
      icon: '💳',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'User Reviews',
      description: 'Community-driven reviews and ratings to help make informed decisions.',
      icon: '⭐',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Travel Guides',
      description: 'Curated travel guides and recommendations from local experts.',
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-200 mb-6">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Our Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Enterprise Mobile Application
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                A comprehensive mobile solution that provides real-time updates on booking and management services, delivering seamless experiences across iOS and Android platforms.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1, ease: 'easeIn' }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group flex items-start gap-4 p-5 bg-white rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-0"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-0 flex-shrink-0`}>
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-0">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-0">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Visual Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.3, delay: 0.2, ease: 'easeIn' }}
            className="relative"
          >
            {/* Phone Mockups Container */}
            <div className="relative flex items-center justify-center gap-4 md:gap-6">
              {/* Phone 1 - Left */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotate: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: -10 } : { opacity: 0, y: 50, rotate: -10 }}
                transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                className="relative z-10"
              >
                <div className="w-48 md:w-56 h-[500px] md:h-[600px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-3 shadow-2xl border-8 border-gray-900">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Phone Screen Content */}
                    <div className="p-4 h-full flex flex-col">
                      <div className="h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">Flight Search</span>
                      </div>
                      <div className="space-y-3 flex-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-20 bg-gray-100 rounded-lg"></div>
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
                <div className="w-52 md:w-64 h-[550px] md:h-[650px] bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-[2.5rem] p-3 shadow-2xl border-8 border-gray-900">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Phone Screen Content */}
                    <div className="p-4 h-full flex flex-col">
                      <div className="h-16 bg-cyan-500 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-white font-semibold">Booking Confirmed</span>
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-cyan-50 to-white rounded-lg p-4 flex flex-col items-center justify-center">
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4">
                          <span className="text-white text-3xl">✓</span>
                        </div>
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone 3 - Right */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotate: 10 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 10 } : { opacity: 0, y: 50, rotate: 10 }}
                transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
                className="relative z-10"
              >
                <div className="w-48 md:w-56 h-[500px] md:h-[600px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-8 border-gray-900">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Phone Screen Content */}
                    <div className="p-4 h-full flex flex-col">
                      <div className="h-12 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">Profile</span>
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="h-24 bg-gray-100 rounded-lg"></div>
                        <div className="space-y-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="h-12 bg-gray-100 rounded-lg"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-200 rounded-full blur-3xl opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServiceShowcase

