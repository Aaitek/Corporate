import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CountUp } from '../../hooks/useCountUp'

const WhyChoose = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      title: 'Years of Delivery Experience',
      titlePrefix: '18+',
      description: 'Over two decades of successfully delivering complex digital transformation initiatives across industries and geographies.',
      icon: '🎯',
      hasCountUp: true,
      countValue: 18,
    },
    {
      title: 'Agile, Outcome-Driven Delivery',
      description: 'Flexible and iterative delivery approaches focused on speed, quality, and measurable business outcomes.',
      icon: '⚡',
    },
    {
      title: 'AI-First by Design',
      description: 'Artificial intelligence embedded across strategy, engineering, automation, and analytics to drive smarter, more efficient solutions.',
      icon: '🤖',
    },
    {
      title: 'Reliable, Fast Execution',
      description: 'Accelerated delivery cycles without compromising security, scalability, or enterprise standards.',
      icon: '🚀',
    },
    {
      title: 'Long-Term Partnership & Support',
      description: 'Ongoing support, optimisation, and evolution to ensure platforms remain stable, secure, and future-ready.',
      icon: '🛠️',
    },
    {
      title: 'Proven Track Record',
      titlePrefix: '200+',
      description: 'Trusted delivery partner with successful projects and long-standing client relationships worldwide.',
      icon: '⭐',
      hasCountUp: true,
      countValue: 200,
    },
  ]

  return (
    <section id="why-choose-us" className="section-padding bg-white relative overflow-hidden" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm font-semibold text-primary-600 mb-4 uppercase tracking-wider">
            Why Choose Aaitek
          </div>
          <h2 className="heading-2 mb-4 text-gray-900">
            Your Trusted IT Partner
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Aaitek partners with organizations to design, build, and scale enterprise-grade digital platforms. By combining deep engineering expertise, AI-first thinking, and proven delivery models, we help businesses modernize systems, improve efficiency, and achieve sustainable growth.
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
              className="group relative bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 transition-all duration-0 shadow-sm hover:shadow-xl hover:shadow-primary-500/10"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-lg bg-primary-500/20 group-hover:bg-primary-500/30 flex items-center justify-center mb-4 transition-colors duration-0">
                <div className="text-3xl">{feature.icon}</div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                {feature.hasCountUp && feature.titlePrefix ? (
                  <>
                    {isInView ? (
                      <CountUp
                        start={0}
                        end={feature.countValue}
                        duration={2.5}
                        suffix="+"
                        separator=","
                        decimals={0}
                        enabled={isInView}
                      />
                    ) : (
                      `0+`
                    )}{' '}
                    {feature.title}
                  </>
                ) : (
                  feature.title
                )}
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

