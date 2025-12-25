import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ClientLogos = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const logos = [
    { name: 'Microsoft', initial: 'MS', color: 'from-blue-500 to-blue-600' },
    { name: 'Google', initial: 'GO', color: 'from-red-500 to-orange-500' },
    { name: 'Amazon', initial: 'AZ', color: 'from-orange-500 to-yellow-500' },
    { name: 'IBM', initial: 'IBM', color: 'from-blue-600 to-blue-700' },
    { name: 'Oracle', initial: 'OR', color: 'from-red-600 to-red-700' },
    { name: 'Salesforce', initial: 'SF', color: 'from-blue-400 to-blue-500' },
    { name: 'SAP', initial: 'SAP', color: 'from-blue-500 to-blue-600' },
    { name: 'Adobe', initial: 'AD', color: 'from-red-500 to-pink-500' },
    { name: 'Intel', initial: 'IN', color: 'from-blue-500 to-cyan-500' },
    { name: 'Cisco', initial: 'CS', color: 'from-blue-600 to-blue-700' },
    { name: 'Dell', initial: 'DL', color: 'from-blue-500 to-blue-600' },
    { name: 'HP', initial: 'HP', color: 'from-blue-500 to-blue-600' },
    { name: 'Accenture', initial: 'AC', color: 'from-purple-500 to-purple-600' },
    { name: 'Deloitte', initial: 'DT', color: 'from-green-500 to-green-600' },
    { name: 'PwC', initial: 'PwC', color: 'from-red-500 to-red-600' },
    { name: 'EY', initial: 'EY', color: 'from-yellow-500 to-yellow-600' },
    { name: 'KPMG', initial: 'KG', color: 'from-blue-500 to-blue-600' },
    { name: 'Meta', initial: 'MT', color: 'from-blue-500 to-blue-600' },
    { name: 'Apple', initial: 'AP', color: 'from-gray-600 to-gray-700' },
    { name: 'Tesla', initial: 'TS', color: 'from-red-500 to-red-600' },
  ]

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 text-lg">
            We partner with leading organizations worldwide
          </p>
        </motion.div>

        {/* Logos Carousel */}
        <div className="relative">
          {/* Container with reduced margins, rounded corners, border, padding, and overflow hidden */}
          <div className="mx-4 md:mx-8 lg:mx-12 rounded-3xl overflow-hidden border-2 border-primary-200 p-8">
            <motion.div
              className="flex items-center space-x-12"
              animate={{
                x: [0, -50 * 20],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 40,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center gap-4 group"
                  whileHover={{ scale: 1.15, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-24 h-24 bg-gradient-to-br ${logo.color} rounded-2xl flex items-center justify-center text-white font-bold text-base shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    <span className="relative z-10">{logo.initial}</span>
                  </div>
                  <span className="text-gray-700 text-sm font-semibold tracking-wide whitespace-nowrap group-hover:text-primary-600 transition-colors duration-300">
                    {logo.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos

