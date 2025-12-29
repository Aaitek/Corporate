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
    <div className="pt-20 bg-gradient-to-br from-gray-50 via-white to-sky-50">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
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
      <section ref={ref} className="py-16 md:py-20 bg-white">
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
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
      <section className="py-16 md:py-20 bg-white">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {(() => {
              // Get unique categories that actually have technologies
              const categories = [...new Set(technologies.map(tech => tech.category))]
              return categories.map((category, catIndex) => {
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
            })})()}
          </motion.div>
        </div>
      </section>

      {/* Developer Specializations */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Developer Specializations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find the perfect developer for your project needs
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Frontend Developers',
                description: 'Expert React, Vue, Angular developers for building modern, responsive user interfaces',
                skills: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js'],
                color: 'from-blue-500 to-cyan-500',
                icon: '🎨',
              },
              {
                title: 'Backend Developers',
                description: 'Node.js, Python, Java experts for robust server-side applications and APIs',
                skills: ['Node.js', 'Python', 'Java', 'Express', 'Django'],
                color: 'from-green-500 to-emerald-500',
                icon: '⚙️',
              },
              {
                title: 'Full-Stack Developers',
                description: 'End-to-end developers skilled in both frontend and backend technologies',
                skills: ['MERN Stack', 'MEAN Stack', 'Next.js', 'Full-Stack'],
                color: 'from-purple-500 to-pink-500',
                icon: '🚀',
              },
              {
                title: 'Cloud & DevOps Engineers',
                description: 'AWS, Azure, Docker, Kubernetes specialists for scalable infrastructure',
                skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
                color: 'from-orange-500 to-yellow-500',
                icon: '☁️',
              },
              {
                title: 'Mobile App Developers',
                description: 'iOS and Android experts for native and cross-platform mobile applications',
                skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Swift'],
                color: 'from-indigo-500 to-blue-500',
                icon: '📱',
              },
              {
                title: 'AI/ML Engineers',
                description: 'Machine learning and AI specialists for intelligent solutions',
                skills: ['Python', 'TensorFlow', 'PyTorch', 'ML', 'AI'],
                color: 'from-pink-500 to-rose-500',
                icon: '🤖',
              },
            ].map((specialization, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-0 group overflow-hidden"
              >
                <motion.div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${specialization.color} opacity-0 group-hover:opacity-100 transition-opacity duration-0`}
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0 }}
                />
                <div className={`w-16 h-16 bg-gradient-to-br ${specialization.color} rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-0`}>
                  {specialization.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-0">
                  {specialization.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {specialization.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {specialization.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${specialization.color} opacity-0 group-hover:opacity-5 transition-opacity duration-0 rounded-2xl`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Hiring Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A streamlined process to connect you with the right developers quickly
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                step: '01',
                title: 'Requirements Analysis',
                description: 'We understand your project needs, technical requirements, and team structure',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                step: '02',
                title: 'Developer Matching',
                description: 'Our team matches you with developers who fit your exact requirements and culture',
                color: 'from-purple-500 to-pink-500',
              },
              {
                step: '03',
                title: 'Interview & Selection',
                description: 'Conduct interviews with pre-screened candidates and select the best fit',
                color: 'from-green-500 to-emerald-500',
              },
              {
                step: '04',
                title: 'Onboarding & Start',
                description: 'Smooth onboarding process to get your developers productive from day one',
                color: 'from-orange-500 to-red-500',
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="relative text-center"
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${process.color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '500+', label: 'Expert Developers', color: 'from-blue-400 to-cyan-400' },
              { number: '98%', label: 'Client Satisfaction', color: 'from-green-400 to-emerald-400' },
              { number: '24/7', label: 'Support Available', color: 'from-purple-400 to-pink-400' },
              { number: '50+', label: 'Technologies', color: 'from-orange-400 to-yellow-400' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about hiring developers with Aaitek
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {[
              {
                question: 'How quickly can I hire developers?',
                answer: 'Typically, we can match you with qualified developers within 1-2 weeks, depending on your specific requirements and the availability of candidates.',
              },
              {
                question: 'What is the minimum commitment period?',
                answer: 'We offer flexible engagement models. The minimum commitment varies by model, but we can accommodate short-term projects starting from 1 month.',
              },
              {
                question: 'Can I interview developers before hiring?',
                answer: 'Absolutely! We encourage you to interview all candidates to ensure they meet your technical and cultural requirements.',
              },
              {
                question: 'What if I need to scale my team?',
                answer: 'Our flexible models allow you to scale up or down based on your project needs. We can quickly add or remove developers as required.',
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes, we provide continuous support throughout the engagement, including regular check-ins, performance monitoring, and team management assistance.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-0"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
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
