import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Technologies = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const meanCapabilities = {
    angular: {
      title: 'Angular Capabilities',
      icon: 'A',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      capabilities: [
        'Developed role-based admin dashboards with advanced data visualization',
        'Built enterprise-grade healthcare applications with HIPAA compliance',
        'Migrated large-scale legacy Angular.js apps to the latest Angular versions',
        'Optimized Angular apps reducing bundle size by 50%',
      ],
    },
    nodejs: {
      title: 'Node.js Capabilities',
      icon: 'JS',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      capabilities: [
        'Designed serverless microservices architectures on Azure Functions, AWS Lambda, Google Cloud Functions',
        'Built real-time chat applications handling 500K+ concurrent users using Socket.io',
        'Implemented multi-region REST & GraphQL APIs for global web apps',
        'Optimized Node.js applications reducing server response time by 40%',
      ],
    },
  }

  const domainStacks = [
    {
      domain: 'SaaS & Enterprise Solutions',
      icon: '☁️',
      useCase: 'Created data-based CRMs for customer-driven lead nurturing and customer engagement',
      techStack: ['Angular', 'TypeScript', 'GraphQL', 'Prisma', 'AWS Amplify'],
      experts: '10+',
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      domain: 'Fintech & Banking',
      icon: '🏦',
      useCase: 'Implemented secure digital wallet with real-time transaction processing and fraud detection',
      techStack: ['React', 'Node.js', 'MongoDB', 'Kafka', 'AWS Kubernetes'],
      experts: '8+',
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
    },
    {
      domain: 'E-Commerce & Retail',
      icon: '🛒',
      useCase: 'Developed scalable multi-vendor marketplace with inventory management and AI-based product recommendations',
      techStack: ['Next.js', 'Express', 'PostgreSQL', 'Redis'],
      experts: '15+',
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    {
      domain: 'Travel & Hospitality',
      icon: '✈️',
      useCase: 'Built high-performance travel booking platforms with dynamic pricing & real-time availability',
      techStack: ['Vue.js', 'Nest.js', 'MySQL', 'RabbitMQ', 'Azure Functions'],
      experts: '7+',
      color: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
    },
    {
      domain: 'Real Estate Platforms',
      icon: '🏠',
      useCase: 'Developed dynamic real estate listing platforms with property search filters & virtual tours',
      techStack: ['Angular', 'Django', 'MongoDB', 'AWS S3', 'ElasticSearch'],
      experts: '9+',
      color: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50',
    },
    {
      domain: 'Recruitment Portals',
      icon: '👥',
      useCase: 'Built smart recruitment platforms with automated resume parsing & candidate matching',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS Textract', 'Machine Learning'],
      experts: '6+',
      color: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-50 to-cyan-50',
    },
  ]

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

  return (
    <section id="technologies" ref={ref} className="py-24 bg-gradient-to-br from-gray-50 via-white to-sky-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-200 mb-6"
          >
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Technologies</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4"
          >
            Our Capabilities in MEAN Stack Development
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            End-to-End Solutions for Web, Mobile, and Cloud
          </motion.p>
        </motion.div>

        {/* MEAN Stack Capabilities - Side by Side Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 max-w-6xl mx-auto"
        >
          {Object.entries(meanCapabilities).map(([key, capability], index) => (
            <motion.div
              key={key}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className={`relative bg-gradient-to-br ${capability.bgColor} rounded-3xl p-8 border-2 ${capability.borderColor} hover:border-primary-400 transition-all duration-0 overflow-hidden`}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${capability.color} rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${capability.color} rounded-2xl text-white font-bold text-3xl mb-6 shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-transform duration-0`}
                  >
                    {capability.icon}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                    className="text-2xl font-bold text-gray-900 mb-8 group-hover:text-primary-700 transition-colors duration-0"
                  >
                    {capability.title}
                  </motion.h3>

                  {/* Capabilities List with Stagger */}
                  <ul className="space-y-4">
                    {capability.capabilities.map((cap, capIndex) => (
                      <motion.li
                        key={capIndex}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 + capIndex * 0.1 }}
                        whileHover={{ x: 8 }}
                        className="flex items-start gap-4 group/item"
                      >
                        <motion.div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${capability.color} mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-0`}
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-sm text-gray-700 leading-relaxed group-hover/item:text-gray-900 group-hover/item:font-semibold transition-all duration-0">
                          {cap}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tailored Tech Stacks Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4"
          >
            Tailored Tech Stacks for Every Domain
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Industry-specific solutions with proven expertise and cutting-edge technology
          </motion.p>
        </motion.div>

        {/* Domain Stacks Grid - Unique Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {domainStacks.map((stack, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.03 }}
              className="relative group"
            >
              <div className={`relative bg-gradient-to-br ${stack.bgGradient} rounded-3xl p-6 border-2 border-transparent hover:border-primary-300 transition-all duration-0 overflow-hidden h-full`}>
                {/* Animated Corner Accent */}
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stack.color} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-0`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />

                {/* Icon with Floating Animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 200 }}
                  className={`relative z-10 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stack.color} rounded-2xl text-3xl mb-5 shadow-lg group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-0`}
                >
                  {stack.icon}
                </motion.div>

                {/* Domain Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                  className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-0 relative z-10"
                >
                  {stack.domain}
                </motion.h3>

                {/* Use Case with Fade */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className="mb-5 relative z-10"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-1 h-6 bg-gradient-to-b ${stack.color} rounded-full`}></div>
                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-widest">Use Case</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed pl-3">
                    {stack.useCase}
                  </p>
                </motion.div>

                {/* Tech Stack with Stagger */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="mb-5 relative z-10"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-1 h-6 bg-gradient-to-b ${stack.color} rounded-full`}></div>
                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-widest">Tech Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-3">
                    {stack.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + 0.4 + techIndex * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ scale: 1.15, y: -2 }}
                        className={`px-3 py-1.5 bg-white/80 backdrop-blur-sm text-primary-700 rounded-lg text-xs font-semibold border border-primary-200 hover:border-primary-400 hover:bg-white transition-all duration-0 shadow-sm`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Experts Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  className="relative z-10 pt-4 border-t-2 border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Experts</span>
                    <motion.span
                      className={`text-2xl font-extrabold bg-gradient-to-r ${stack.color} bg-clip-text text-transparent`}
                      whileHover={{ scale: 1.2 }}
                    >
                      {stack.experts}
                    </motion.span>
                  </div>
                </motion.div>

                {/* Shine Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies
