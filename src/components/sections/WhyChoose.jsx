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
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm font-semibold text-primary-400 mb-4 uppercase tracking-wider">
            Why Choose Aaitek
          </div>
          <h2 className="heading-2 mb-4 text-white">
            Your Trusted IT Partner
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Aaitek is a powerhouse of digital transformation, bringing together top-tier experts with a diverse skillset to craft custom, world-class solutions for businesses of all sizes. From visionary digital product design to seamless development, we're dedicated to delivering transformative digital experiences that redefine success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/20"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-lg bg-primary-500/20 group-hover:bg-primary-500/30 flex items-center justify-center mb-4 transition-colors duration-300">
                <div className="text-3xl">{feature.icon}</div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose

