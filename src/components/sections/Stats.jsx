import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const partners = [
    { name: 'Microsoft', initial: 'MS', color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50' },
    { name: 'Adobe', initial: 'AD', color: 'from-red-500 to-pink-500', bg: 'bg-red-50' },
    { name: 'Google Partner', initial: 'GP', color: 'from-red-500 to-orange-500', bg: 'bg-orange-50' },
    { name: 'Commerce', initial: 'CM', color: 'from-blue-500 to-cyan-500', bg: 'bg-cyan-50' },
    { name: 'KEYFACTOR', initial: 'KF', color: 'from-purple-500 to-purple-600', bg: 'bg-purple-50' },
    { name: 'Shopify', initial: 'SP', color: 'from-green-500 to-emerald-500', bg: 'bg-green-50' },
    { name: 'Clutch', initial: 'CL', color: 'from-indigo-500 to-indigo-600', bg: 'bg-indigo-50' },
    { name: 'HubSpot', initial: 'HS', color: 'from-orange-500 to-red-500', bg: 'bg-orange-50' },
    { name: 'CRA', initial: 'CRA', color: 'from-blue-600 to-blue-700', bg: 'bg-blue-50' },
    { name: 'Pantheon', initial: 'PN', color: 'from-gray-600 to-gray-700', bg: 'bg-gray-50' },
    { name: 'Forbes', initial: 'FB', color: 'from-yellow-500 to-yellow-600', bg: 'bg-yellow-50' },
    { name: 'Sitecore', initial: 'SC', color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50' },
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeIn' }}
        >
          <div className="text-sm font-semibold text-primary-600 mb-4 uppercase tracking-wider">
            Trusted Partnerships
          </div>
          <h2 className="heading-2 mb-4 text-gray-900">
            Leading Technology Partners and Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're proud to partner with industry leaders and be recognized by top platforms for our excellence in digital transformation.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05, 
                ease: 'easeIn' 
              }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative"
            >
              <div className={`${partner.bg} rounded-2xl p-6 border-2 border-gray-200 hover:border-primary-300 shadow-sm hover:shadow-xl transition-all duration-0 h-full flex flex-col items-center justify-center aspect-square`}>
                {/* Logo Circle */}
                <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${partner.color} rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg group-hover:scale-110 transition-transform duration-0 mb-4 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  <span className="relative z-10">{partner.initial}</span>
                </div>
                
                {/* Partner Name */}
                <h3 className="text-sm md:text-base font-semibold text-gray-800 text-center group-hover:text-primary-600 transition-colors duration-0">
                  {partner.name}
                </h3>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-5 transition-opacity duration-0 rounded-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4, ease: 'easeIn' }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {[
            { label: '500+ Projects', icon: '🚀' },
            { label: '21+ Years Experience', icon: '⭐' },
            { label: 'Certified Partners', icon: '🏆' },
            { label: 'Global Recognition', icon: '🌍' },
          ].map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1, ease: 'easeIn' }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-50 to-accent-50 rounded-full border-2 border-primary-200 hover:border-primary-400 shadow-md hover:shadow-lg transition-all duration-0"
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="font-semibold text-gray-800">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats

