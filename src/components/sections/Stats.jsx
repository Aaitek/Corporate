import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const partners = [
    { name: 'Microsoft', logo: '/microsoft-partner.png' },
    { name: 'Cisco', logo: '/Cisco-Nov-17-2023-06-32-51-2041-AM.webp' },
    { name: 'Cloudflare', logo: '/cf-blog-logo-crop.png' },
    { name: 'YouTube', logo: '/hd-official-youtube-yt-logo-png-701751694786680qxacfiwgqw.png' },
    { name: 'Instagram', logo: '/instagram-vector-logo-icon-social-media-logotype_901408-392.avif' },
  ]

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners]

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

        {/* Continuous Rotating Logo Carousel */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient Fade on Sides */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>
          
            <motion.div
            className="flex items-center gap-12 md:gap-16"
            animate={{
              x: [0, -(partners.length * 200)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
            >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 md:h-20 w-auto object-contain transition-all duration-300 opacity-80 hover:opacity-100"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
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

