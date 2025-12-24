import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Stats = () => {
  const stats = [
    {
      value: 500,
      suffix: '+',
      label: 'Certified Tech Professionals',
      description: 'We\'re Proudly Australia-owned with Global Delivery Capability. Backed by 500+ certified tech professionals.',
      icon: '👥',
      gradient: 'bg-primary-500',
    },
    {
      value: 21,
      suffix: '+',
      label: 'Years of Experience',
      description: 'With more than 20 years of agility & engineering expertise, we equip your business functions with customized tech.',
      icon: '🎯',
      gradient: 'bg-primary-500',
    },
    {
      value: 500,
      suffix: '+',
      label: 'Projects Delivered',
      description: 'We have empowered businesses with thousands of successful futuristic solutions that have helped them grow and scale.',
      icon: '🚀',
      gradient: 'bg-primary-500',
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-padding bg-gradient-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden">
      <div className="container-custom" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm font-semibold text-primary-600 mb-4 uppercase tracking-wider">
            Your Trusted CMS Partner
          </div>
          <h2 className="heading-2 mb-4 text-gray-900">
            Achieve Digital Excellence with Precision Engineering and Disruptive Innovations
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Aaitek is a powerhouse of digital transformation, bringing together top-tier experts with a diverse skillset to craft custom, world-class CMS solutions for businesses of all sizes.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative p-8 rounded-2xl bg-white/90 backdrop-blur-sm border-2 border-primary-100 hover:border-primary-500 shadow-lg hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Animated Counter - Large */}
              <motion.div
                className="text-7xl md:text-8xl font-bold mb-4 relative z-10 text-primary-600"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  delay: index * 0.2 + 0.3,
                }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  {isInView ? stat.value : 0}{stat.suffix}
                </motion.span>
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-100 mb-3 relative z-10 group-hover:text-primary-400 transition-colors">
                {stat.label}
              </h3>
              <p className="text-gray-300 relative z-10 leading-relaxed">{stat.description}</p>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="text-4xl">{stat.icon}</div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 ${stat.gradient} blur-2xl opacity-20`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

