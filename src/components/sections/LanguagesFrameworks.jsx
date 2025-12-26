import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const LanguagesFrameworks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const languages = [
    { name: 'JavaScript', category: 'Language', color: 'from-yellow-400 to-yellow-600' },
    { name: 'TypeScript', category: 'Language', color: 'from-blue-500 to-blue-700' },
    { name: 'Python', category: 'Language', color: 'from-blue-400 to-cyan-500' },
    { name: 'Java', category: 'Language', color: 'from-orange-500 to-red-600' },
    { name: 'C#', category: 'Language', color: 'from-purple-500 to-purple-700' },
    { name: 'PHP', category: 'Language', color: 'from-indigo-500 to-indigo-700' },
  ]

  const frameworks = [
    { name: 'React', category: 'Framework', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Angular', category: 'Framework', color: 'from-red-500 to-red-700' },
    { name: 'Vue.js', category: 'Framework', color: 'from-green-500 to-green-700' },
    { name: 'Next.js', category: 'Framework', color: 'from-gray-800 to-gray-900' },
    { name: 'Node.js', category: 'Framework', color: 'from-green-600 to-green-800' },
    { name: 'Express.js', category: 'Framework', color: 'from-gray-600 to-gray-800' },
    { name: 'Django', category: 'Framework', color: 'from-green-700 to-green-900' },
    { name: 'Spring Boot', category: 'Framework', color: 'from-green-500 to-green-700' },
  ]

  const allItems = [...languages, ...frameworks]

  return (
    <section id="languages-frameworks" ref={ref} className="py-24 bg-gradient-to-br from-gray-50 via-white to-sky-50 relative overflow-hidden">
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
            Languages & Frameworks
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise across modern programming languages and frameworks
          </p>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`px-6 py-3 bg-gradient-to-r ${lang.color} rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-0 cursor-default`}
              >
                {lang.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Frameworks Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frameworks & Libraries</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {frameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`px-6 py-3 bg-gradient-to-r ${framework.color} rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-0 cursor-default`}
              >
                {framework.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LanguagesFrameworks

