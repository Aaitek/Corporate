import { motion } from 'framer-motion'

const WhyChoose = () => {
  const features = [
    {
      title: '20+ Years Experience',
      description: 'Two decades of delivering successful digital transformation projects across industries.',
      icon: '🎯',
    },
    {
      title: 'Agile Development',
      description: 'Flexible, iterative approach that adapts to your needs and delivers value quickly.',
      icon: '⚡',
    },
    {
      title: 'AI-First Approach',
      description: 'Leveraging cutting-edge AI and automation to build smarter, more efficient solutions.',
      icon: '🤖',
    },
    {
      title: 'Fast Delivery',
      description: 'Rapid development cycles without compromising on quality or security.',
      icon: '🚀',
    },
    {
      title: 'Ongoing Support',
      description: 'Dedicated support team ensures your systems run smoothly and evolve with your business.',
      icon: '🛠️',
    },
    {
      title: 'Proven Track Record',
      description: '200+ successful projects and 150+ satisfied clients worldwide.',
      icon: '⭐',
    },
  ]

  return (
    <section id="why-choose-us" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm font-semibold text-primary-600 mb-4 uppercase tracking-wider">
            Why Choose Aaitek
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-900 leading-tight">
            Your Trusted IT Partner
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Aaitek is a powerhouse of digital transformation, bringing together top-tier experts with a diverse skillset to craft custom, world-class solutions for businesses of all sizes. From visionary digital product design to seamless development, we're dedicated to delivering transformative digital experiences that redefine success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200 hover:border-primary-300 transition-all duration-0 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 mobile-card"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary-500/20 group-hover:bg-primary-500/30 flex items-center justify-center mb-3 sm:mb-4 transition-colors duration-0">
                <div className="text-2xl sm:text-3xl">{feature.icon}</div>
              </div>
              
              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-5 transition-opacity duration-0 rounded-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose

