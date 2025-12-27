import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to automate processes and drive intelligent decision-making.',
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security protocols and compliance standards to protect your data and applications.',
      icon: '🔒',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Scalable Architecture',
      description: 'Build solutions that grow with your business, from startup to enterprise scale.',
      icon: '📈',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring to ensure your systems run smoothly.',
      icon: '🛠️',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Cloud-Native',
      description: 'Fully cloud-native solutions built for modern infrastructure and deployment models.',
      icon: '☁️',
      color: 'from-sky-500 to-blue-500',
    },
    {
      title: 'Agile Development',
      description: 'Rapid iteration and delivery cycles with continuous integration and deployment.',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  return (
    <section id="features" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-200 mb-6">
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-3 md:mb-4">
            Why Choose Our Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Powerful features designed to accelerate your digital transformation
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-7 md:p-8 border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-0 group overflow-hidden mobile-card"
            >
              {/* Left Border on Hover */}
              <motion.div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-0`}
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon */}
              <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-0`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect - Subtle */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-0 rounded-2xl pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

