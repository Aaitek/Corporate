import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const HireRequirement = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const hiringModels = [
    {
      title: 'Staff Augmentation',
      description: 'Seamlessly integrate experienced developers into your existing team',
      icon: '👥',
      features: [
        'Flexible team scaling',
        'Direct team management',
        'Quick onboarding',
        'Cost-effective solution',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Dedicated Team',
      description: 'Get a dedicated team of developers working exclusively on your project',
      icon: '🎯',
      features: [
        'Full-time commitment',
        'Project ownership',
        'Long-term partnership',
        'Scalable resources',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Time-Based Support',
      description: 'Flexible hourly or project-based engagement for specific needs',
      icon: '⏱️',
      features: [
        'Pay for what you use',
        'Flexible scheduling',
        'Quick turnaround',
        'Expert consultation',
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-200 mb-6">
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Hiring Models</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Hire as Per Requirement
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible hiring models tailored to your project needs, budget, and workflow
          </p>
        </motion.div>

        {/* Hiring Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {hiringModels.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              {/* Left Border on Hover */}
              <motion.div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${model.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${model.color} rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {model.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {model.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {model.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {model.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + featureIndex * 0.1 }}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-50/0 group-hover:from-primary-50/50 group-hover:to-accent-50/50 transition-all duration-300 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HireRequirement

