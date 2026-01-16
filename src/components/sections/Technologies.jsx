import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Technologies = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const meanCapabilities = {
    nextjs: {
      title: 'Next.js Capabilities (Frontend & Experience Layer)',
      icon: 'N',
      color: 'from-gray-800 to-gray-900',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      description: 'Modern, high-performance frontend engineering focused on speed, SEO, and scalable user experiences.',
      capabilities: [
        'Enterprise-grade web applications using Next.js with SSR, SSG, and ISR',
        'High-performance, SEO-optimized websites and digital platforms',
        'Headless architecture integrations with CMS, DXP, and API-driven backends',
        'Performance optimisation for Core Web Vitals, accessibility, and load times',
      ],
    },
    nodejs: {
      title: 'Node.js Capabilities (Backend & Platform Layer)',
      icon: 'JS',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      description: 'Scalable, cloud-native backend systems designed for high concurrency and global reach.',
      capabilities: [
        'Cloud-native microservices and serverless architectures across AWS, Azure, and Google Cloud',
        'Secure, scalable REST and GraphQL APIs for distributed, multi-region platforms',
        'Real-time applications and event-driven systems built for reliability at scale',
        'Backend performance optimisation to improve response times and operational efficiency',
      ],
    },
  }

  const domainStacks = [
    {
      domain: 'SaaS & Enterprise Platforms',
      icon: '☁️',
      useCase: 'Designed and delivered data-driven CRM platforms to support customer engagement, lead nurturing, and enterprise workflows',
      techStack: ['Angular', 'TypeScript', 'GraphQL', 'Prisma', 'AWS Amplify'],
      experts: '10+ specialists',
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      domain: 'Fintech & Banking',
      icon: '🏦',
      useCase: 'Implemented secure digital wallet platforms with real-time transaction processing, compliance controls, and fraud detection',
      techStack: ['React', 'Node.js', 'MongoDB', 'Kafka', 'AWS Kubernetes'],
      experts: '8+ specialists',
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
    },
    {
      domain: 'E-Commerce & Retail',
      icon: '🛒',
      useCase: 'Built scalable multi-vendor marketplaces with inventory management and AI-driven product recommendations',
      techStack: ['Next.js', 'Express', 'PostgreSQL', 'Redis'],
      experts: '15+ specialists',
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    {
      domain: 'Travel & Hospitality',
      icon: '✈️',
      useCase: 'Delivered high-performance booking platforms with dynamic pricing, real-time availability, and global scalability',
      techStack: ['Vue.js', 'NestJS', 'MySQL', 'RabbitMQ', 'Azure Functions'],
      experts: '7+ specialists',
      color: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
    },
    {
      domain: 'Real Estate Platforms',
      icon: '🏠',
      useCase: 'Developed property platforms with advanced search, intelligent filtering, and immersive virtual tour experiences',
      techStack: ['Angular', 'Django', 'MongoDB', 'AWS S3', 'ElasticSearch'],
      experts: '9+ specialists',
      color: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50',
    },
    {
      domain: 'Recruitment & HR Platforms',
      icon: '👥',
      useCase: 'Built intelligent recruitment systems with automated resume parsing and AI-powered candidate matching.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS Textract', 'Machine Learning'],
      experts: '6+ specialists',
      color: 'from-blue-500 to-purple-500',
      bgGradient: 'from-blue-50 to-purple-50',
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
    <section id="technologies" ref={ref} className="section-padding bg-gradient-to-br from-gray-50 via-white to-sky-50 relative overflow-hidden">
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
          className="text-center mb-10 sm:mb-16 lg:mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-200 mb-6"
          >
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Technologies</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4"
          >
            Our Capabilities in Modern Full-Stack Development
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            End-to-end solutions for web, mobile, and cloud built for performance, scalability, and enterprise reliability.
          </motion.p>
        </motion.div>

        {/* MEAN Stack Capabilities - Side by Side Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-24 max-w-6xl mx-auto"
        >
          {Object.entries(meanCapabilities).map(([key, capability], index) => (
            <motion.div
              key={key}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative group h-full"
            >
              <div className={`relative bg-gradient-to-br ${capability.bgColor} rounded-3xl p-8 border-2 ${capability.borderColor} hover:border-primary-400 transition-all duration-0 overflow-hidden h-full flex flex-col`}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${capability.color} rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
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
                    className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-0"
                  >
                    {capability.title}
                  </motion.h3>

                  {/* Description */}
                  {capability.description && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.15 }}
                      className="text-sm text-gray-600 mb-6 leading-relaxed"
                    >
                      {capability.description}
                    </motion.p>
                  )}

                  {/* Capabilities List with Stagger */}
                  <ul className="space-y-4 flex-1">
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4"
          >
            Industries & Solutions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            <span className="font-bold">Tailored Technology Stacks for Every Industry</span>
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-2"
          >
            Industry-specific digital solutions delivered using proven architectures, modern platforms, and deep domain expertise.
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
