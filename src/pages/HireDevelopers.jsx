import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const HireDevelopers = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const technologies = [
    { name: 'React', category: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', category: 'Backend', color: 'from-green-500 to-emerald-500' },
    { name: 'Python', category: 'Backend', color: 'from-yellow-500 to-orange-500' },
    { name: 'Java', category: 'Backend', color: 'from-red-500 to-pink-500' },
    { name: 'AWS', category: 'Cloud', color: 'from-orange-500 to-yellow-500' },
    { name: 'Azure', category: 'Cloud', color: 'from-blue-500 to-blue-600' },
    { name: 'Docker', category: 'DevOps', color: 'from-blue-400 to-cyan-400' },
    { name: 'Kubernetes', category: 'DevOps', color: 'from-blue-600 to-indigo-600' },
    { name: 'MongoDB', category: 'Database', color: 'from-green-600 to-emerald-600' },
    { name: 'PostgreSQL', category: 'Database', color: 'from-blue-700 to-indigo-700' },
    { name: 'GraphQL', category: 'API', color: 'from-pink-500 to-rose-500' },
    { name: 'TypeScript', category: 'Language', color: 'from-blue-600 to-blue-700' },
    { name: 'Vue.js', category: 'Frontend', color: 'from-green-400 to-emerald-400' },
    { name: 'Angular', category: 'Frontend', color: 'from-red-600 to-red-700' },
    { name: 'Strapi', category: 'CMS', color: 'from-purple-500 to-indigo-500' },
    { name: 'Next.js', category: 'Framework', color: 'from-gray-800 to-gray-900' },
  ]

  const benefits = [
    {
      title: 'Skilled Developers',
      description: 'Our skilled developers bring deep platform knowledge to deliver powerful, scalable, and high-performing solutions.',
      icon: '👨‍💻',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Seamless Communication',
      description: 'Experience clear, consistent communication throughout your project with direct access to our expert development team.',
      icon: '💬',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Client-Centric Collaboration',
      description: 'We work as an extension of your team ensuring transparent workflows, open communication, and shared success at every stage.',
      icon: '🤝',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: '40 Hours of Free Consultancy',
      description: 'Get 40 hours of free expert consultancy to kickstart your project. Benefit from flexible hiring models tailored to your goals, budget, and workflow.',
      icon: '🎁',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Agile & Flexible Engagement Models',
      description: 'Choose the collaboration model that suits your project scope, budget, and timeline from dedicated teams to time-based support.',
      icon: '⚡',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Post-Deployment Support',
      description: 'We ensure long-term success with dedicated post-launch support, updates, performance monitoring, and continuous improvements.',
      icon: '🔄',
      color: 'from-teal-500 to-cyan-500',
    },
  ]

  const hiringModels = [
    {
      title: 'Staff Augmentation',
      description: 'Seamlessly integrate experienced developers into your existing team',
      features: [
        'Flexible team scaling',
        'Direct team management',
        'Quick onboarding',
        'Cost-effective solution',
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: '👥',
    },
    {
      title: 'Dedicated Team',
      description: 'Get a dedicated team of developers working exclusively on your project',
      features: [
        'Full-time commitment',
        'Project ownership',
        'Long-term partnership',
        'Scalable resources',
      ],
      color: 'from-purple-500 to-pink-500',
      icon: '🎯',
    },
    {
      title: 'Time-Based Support',
      description: 'Flexible hourly or project-based engagement for specific needs',
      features: [
        'Pay for what you use',
        'Flexible scheduling',
        'Quick turnaround',
        'Expert consultation',
      ],
      color: 'from-green-500 to-emerald-500',
      icon: '⏱️',
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="pt-20 pb-24 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6"
            >
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Hire Developers</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
            >
              Hire Expert Developers You Can Count On
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your business potential with skilled developers from an industry-leading digital partner. 
              Access top-tier tech talent through flexible hiring models.
            </motion.p>
            <motion.div
              variants={fadeInUp}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-0 shadow-lg hover:shadow-xl"
              >
                Talk to Our Experts
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={ref} className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Why Choose Aaitek</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the ideal partner for your development needs
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-0 group overflow-hidden"
              >
                {/* Left Border on Hover */}
                <motion.div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-0`}
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0 }}
                />

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-0`}>
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-0">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-0 rounded-2xl`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Flexible Engagement Models</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the collaboration model that suits your project scope, budget, and timeline
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {hiringModels.map((model, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-0 group overflow-hidden"
              >
                {/* Left Border on Hover */}
                <motion.div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${model.color} opacity-0 group-hover:opacity-100 transition-opacity duration-0`}
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0 }}
                />

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${model.color} rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-0`}>
                  {model.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-0">
                  {model.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {model.description}
                </p>
                <ul className="space-y-3">
                  {model.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <motion.svg
                        className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </motion.svg>
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-0 group-hover:opacity-5 transition-opacity duration-0 rounded-2xl`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Hire Developers For</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expert developers specialize in the latest technologies and platforms
            </p>
          </motion.div>
          
          {/* Group technologies by category */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {['Frontend', 'Backend', 'Cloud', 'DevOps', 'Database', 'CMS', 'Framework', 'API', 'Language'].map((category, catIndex) => {
              const categoryTechs = technologies.filter(tech => tech.category === category)
              if (categoryTechs.length === 0) return null
              
              return (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-0 group"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
                    <h3 className="font-bold text-gray-900 text-lg">{category}</h3>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {categoryTechs.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: catIndex * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-2 bg-gradient-to-r ${tech.color} text-white rounded-lg text-xs font-semibold shadow-md hover:shadow-lg transition-all duration-0 cursor-default`}
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6"
            >
              Let's Build Something Powerful—Together
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/90 mb-8 leading-relaxed"
            >
              Get 40 hours of free expert consultancy to kickstart your project. 
              Benefit from flexible hiring models tailored to your goals, budget, and workflow.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-0 shadow-lg hover:shadow-xl"
                >
                  Talk to Our Experts
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-0 border-2 border-white shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HireDevelopers
