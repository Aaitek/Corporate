import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const HireRequirement = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const hiringModels = [
    {
      title: 'Bucket Hours',
      icon: '⏰',
      description: 'Purchase a set number of hours upfront and use them flexibly over time.',
      features: [
        'Hours remain valid for 6 months from purchase date',
        'Use hours as needed - perfect for ongoing support and maintenance',
        'Developers work on multiple projects, ensuring cost efficiency',
        'Ideal for businesses with variable workload requirements',
      ],
      summary: "Flexible, cost-effective solution that adapts to your changing needs without long-term commitments.",
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      title: 'Dedicated Team',
      icon: '👥',
      description: 'Reserve developers exclusively for your project with full-time commitment.',
      features: [
        '100% dedicated focus on your project only',
        'Flexible duration - hire for weeks, months, or longer',
        'Seamless integration with your existing team',
        'Guaranteed availability and faster delivery timelines',
      ],
      summary: 'Perfect for critical projects requiring undivided attention and accelerated development cycles.',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
    },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="hire-requirement" ref={ref} className="relative overflow-hidden">
      {/* Dark Header Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-6"
            >
              <span className="inline-block px-6 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-sm font-bold text-orange-400 uppercase tracking-wider">
                HIRE AS PER YOUR REQUIREMENT
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight px-2"
            >
              Get Our Assistance for Your Business Needs
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4"
            >
              At Aaitek, we provide flexible options for accessing our developers' time, allowing you to choose the duration and frequency of their availability based on your specific requirements.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto"
          >
            {hiringModels.map((model, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group mobile-card"
              >
                <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden h-full flex flex-col">
                  {/* Image Section */}
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                    className="relative h-72 overflow-hidden"
                  >
                    <img
                      src={model.imageUrl}
                      alt={model.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent`}></div>
                    {/* Icon Badge on Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.2, type: "spring" }}
                      className={`absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br ${model.color} rounded-2xl flex items-center justify-center text-3xl shadow-2xl`}
                    >
                      {model.icon}
                    </motion.div>
                  </motion.div>

                  {/* Content Section */}
                  <div className={`flex-1 p-8 bg-gradient-to-br ${model.bgGradient}`}>
                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.1 }}
                      className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-0"
                    >
                      {model.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
                      className="text-gray-700 mb-6 leading-relaxed text-base"
                    >
                      {model.description}
                    </motion.p>

                    {/* Key Features */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.3 }}
                      className="mb-6"
                    >
                      <ul className="space-y-3">
                        {model.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, delay: index * 0.3 + 0.4 + featureIndex * 0.1 }}
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-3 text-gray-700 group/item"
                          >
                            <motion.div
                              className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${model.color} mt-2 flex-shrink-0`}
                              whileHover={{ scale: 1.5, rotate: 180 }}
                              transition={{ duration: 0.3 }}
                            />
                            <span className="text-sm leading-relaxed group-hover/item:text-gray-900 group-hover/item:font-medium transition-all duration-0">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Summary Box */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.6 }}
                      className={`mb-6 p-5 bg-white/80 backdrop-blur-sm rounded-xl border-l-4 shadow-sm ${
                        model.color.includes('blue') ? 'border-blue-500' : 'border-green-500'
                      }`}
                    >
                      <p className="text-sm text-gray-700 leading-relaxed font-medium">
                        {model.summary}
                      </p>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.3 + 0.7 }}
                    >
                      <Link
                        to="/hire-developers"
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${model.color} text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-0 group/link`}
                      >
                        Explore More
                        <motion.svg
                          className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </motion.svg>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-0 group-hover:opacity-10 transition-opacity duration-0 pointer-events-none rounded-3xl`}></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HireRequirement
