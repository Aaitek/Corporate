import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CountUp } from '../../hooks/useCountUp'

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Placeholder for partner logos - replace with actual images
  const partners = [
    { name: 'Partner 1', logo: '/images/partners/partner1.png' },
    { name: 'Partner 2', logo: '/images/partners/partner2.png' },
    { name: 'Partner 3', logo: '/images/partners/partner3.png' },
    { name: 'Partner 4', logo: '/images/partners/partner4.png' },
    { name: 'Partner 5', logo: '/images/partners/partner5.png' },
  ]

  const achievements = [
    { 
      value: 10, 
      suffix: '+',
      label: 'Projects Delivered',
      icon: '📊',
      hasCountUp: true
    },
    { 
      value: 18, 
      suffix: '+',
      label: 'Years of Industry Experience',
      icon: '⭐',
      hasCountUp: true
    },
    { 
      value: 'Certified', 
      label: 'Platform Partners',
      icon: '🏆',
      hasCountUp: false
    },
    { 
      value: 'Global', 
      label: 'Delivery & Recognition',
      icon: '🌍',
      hasCountUp: false
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeIn' }}
        >
          <div className="text-sm font-semibold text-primary-600 mb-4 uppercase tracking-wider">
            Trusted Partners
          </div>
          <h2 className="heading-2 mb-6 text-gray-900">
            Recognised by Leading Technology Platforms
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Aaitek partners with globally recognised technology providers and platforms to deliver secure, 
            scalable, and future-ready digital solutions. Our partnerships reflect our commitment to 
            engineering excellence, platform expertise, and long-term client success.
          </p>
        </motion.div>

        {/* Technology Partners & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeIn' }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Technology Partners & Platforms
          </h3>
          
          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-full max-w-[160px] h-32 bg-gradient-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center border-2 border-gray-200 hover:border-primary-400 transition-all duration-300 hover:shadow-xl shadow-md group"
              >
                <span className="text-xs text-gray-400 font-medium group-hover:text-primary-600 transition-colors">Upcoming Image</span>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <p className="text-sm text-gray-500 text-center mt-8 italic">
            (Logos displayed for visual trust and recognition)
          </p>
        </motion.div>

        {/* Proven at Scale Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeIn' }}
          className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-gray-200"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10 sm:mb-12">
            Proven at Scale
          </h3>
          
          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-white rounded-2xl border-2 border-blue-100 hover:border-primary-400 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {achievement.hasCountUp ? (
                    isInView ? (
                      <CountUp
                        start={0}
                        end={achievement.value}
                        duration={2.5}
                        suffix={achievement.suffix}
                        separator=","
                        decimals={0}
                        enabled={isInView}
                      />
                    ) : (
                      `0${achievement.suffix}`
                    )
                  ) : (
                    achievement.value
                  )}
                </div>
                <div className="text-sm sm:text-base text-gray-700 font-semibold">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats

