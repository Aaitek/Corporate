import { motion } from 'framer-motion'

const ClientLogos = () => {
  const logos = [
    'Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5',
    'Client 6', 'Client 7', 'Client 8', 'Client 9', 'Client 10',
    'Client 11', 'Client 12', 'Client 13', 'Client 14', 'Client 15',
    'Client 16', 'Client 17', 'Client 18', 'Client 19', 'Client 20',
  ]

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos]

  return (
    <section className="py-12 bg-gray-900/50 border-y border-gray-800 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex space-x-12"
          animate={{
            x: [0, -50 * 20],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-gray-900/90 rounded-lg border border-gray-800"
            >
              <span className="text-gray-400 text-sm font-medium">{logo}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ClientLogos

