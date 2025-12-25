import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Technologies = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const techStacks = [
    {
      name: 'MEAN',
      fullName: 'MongoDB, Express.js, Angular, Node.js',
      description: 'Full-stack JavaScript solution for building dynamic web applications',
      technologies: ['MongoDB', 'Express.js', 'Angular', 'Node.js'],
      color: 'from-red-500 to-red-600',
      icon: 'MEAN',
      capabilities: [
        'End-to-end JavaScript development',
        'Real-time applications',
        'RESTful API development',
        'Single-page applications',
      ],
    },
    {
      name: 'MERN',
      fullName: 'MongoDB, Express.js, React, Node.js',
      description: 'Modern full-stack framework for building scalable web applications',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      color: 'from-blue-500 to-cyan-500',
      icon: 'MERN',
      capabilities: [
        'Component-based architecture',
        'Server-side rendering',
        'Progressive web apps',
        'Microservices development',
      ],
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 via-white to-sky-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
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
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Technologies</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Full Stack Development
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Modern technology stacks for building scalable, high-performance applications
          </p>
        </motion.div>

        {/* Tech Stacks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {techStacks.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              {/* Left Border on Hover */}
              <motion.div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${stack.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-50/0 group-hover:from-primary-50/50 group-hover:to-accent-50/50 transition-all duration-300"
              />

              {/* Stack Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stack.color} rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                    {stack.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {stack.name}
                    </h3>
                    <p className="text-sm text-gray-600">{stack.fullName}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {stack.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="relative z-10 mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium border border-primary-200 hover:bg-primary-100 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Capabilities */}
              <div className="relative z-10">
                <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Capabilities</h4>
                <ul className="space-y-2">
                  {stack.capabilities.map((capability, capIndex) => (
                    <motion.li
                      key={capIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + capIndex * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 text-gray-700 group/item"
                    >
                      <motion.svg
                        className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>
                      <span className="text-sm group-hover/item:text-primary-600 group-hover/item:font-semibold transition-all">
                        {capability}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies

