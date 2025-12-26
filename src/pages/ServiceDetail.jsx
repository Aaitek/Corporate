import { motion } from 'framer-motion'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ServiceDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const serviceSlugs = [
    'product-development',
    'software-engineering',
    'cloud-devops',
    'data-ai',
    'digital-growth',
    'managed-services',
    'enterprise-platforms',
  ]

  const currentIndex = serviceSlugs.indexOf(slug || 'product-development')
  const nextSlug = currentIndex < serviceSlugs.length - 1 ? serviceSlugs[currentIndex + 1] : serviceSlugs[0]
  const prevSlug = currentIndex > 0 ? serviceSlugs[currentIndex - 1] : serviceSlugs[serviceSlugs.length - 1]

  const serviceData = {
    'product-development': {
      title: 'Product Development',
      subtitle: 'Transform Ideas into Digital Products',
      description: 'We help businesses transform innovative ideas into powerful digital products that engage users and drive business growth. From initial concept to market launch, our comprehensive product development services ensure your vision becomes reality.',
      longDescription: 'Our product development approach combines user-centric design, cutting-edge technology, and agile methodologies to deliver products that not only meet but exceed market expectations. We work closely with you throughout the entire product lifecycle, from discovery and ideation to design, development, testing, and launch.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'End-to-end product development lifecycle',
        'User research and market analysis',
        'Agile and iterative development',
        'Cross-platform compatibility',
        'Performance optimization',
        'Quality assurance and testing',
      ],
      benefits: [
        'Faster time to market',
        'Reduced development costs',
        'Higher user satisfaction',
        'Scalable architecture',
        'Ongoing support and maintenance',
      ],
      services: [
        'Website Development',
        'Mobile App Development',
        'eCommerce Experiences',
        'UX/UI Design & Prototyping',
        'Product Design & Discovery',
        'Game & Interactive Experiences',
      ],
    },
    'software-engineering': {
      title: 'Software Engineering',
      subtitle: 'Build Scalable, High-Performance Solutions',
      description: 'Our software engineering expertise ensures you get robust, scalable solutions tailored to your unique business requirements. We build applications that perform flawlessly under any load.',
      longDescription: 'With years of experience in software engineering, we deliver enterprise-grade applications that are secure, scalable, and maintainable. Our team follows industry best practices and modern development methodologies to ensure code quality and system reliability.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80',
      icon: '</>',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Custom software architecture',
        'API design and development',
        'System integration',
        'Legacy system modernization',
        'Code quality and best practices',
        'Performance optimization',
      ],
      benefits: [
        'Tailored to your business needs',
        'Improved operational efficiency',
        'Enhanced security',
        'Future-proof technology stack',
        'Reduced technical debt',
      ],
      services: [
        'Custom Software Development',
        'API Design & Development',
        'System Integration',
        'Legacy Modernisation',
        'Bespoke Application Development',
      ],
    },
    'cloud-devops': {
      title: 'Cloud & DevOps',
      subtitle: 'Accelerate Your Digital Transformation',
      description: 'Transform your infrastructure with cloud-native solutions and streamlined DevOps practices. Scale seamlessly and deploy faster with enterprise-grade cloud infrastructure.',
      longDescription: 'Our cloud and DevOps services help you modernize your infrastructure, improve deployment speed, and reduce operational costs. We design and implement cloud architectures that scale with your business while maintaining security and compliance.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
      icon: '☁️',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Cloud architecture design',
        'Infrastructure as code',
        'CI/CD pipeline automation',
        'Container orchestration',
        'Monitoring and logging',
        'Disaster recovery planning',
      ],
      benefits: [
        'Reduced infrastructure costs',
        'Faster deployment cycles',
        'Improved scalability',
        'Enhanced security posture',
        '24/7 monitoring and support',
      ],
      services: [
        'Cloud Architecture & Migration',
        'Managed Cloud Hosting',
        'DevOps & CI/CD Automation',
        'Infrastructure & Server Support',
        'Cloud Security & Governance',
      ],
    },
    'data-ai': {
      title: 'Data & AI',
      subtitle: 'Unlock the Power of Your Data',
      description: 'Leverage data science and artificial intelligence to unlock insights, automate processes, and drive intelligent decision-making that transforms your business.',
      longDescription: 'Our data and AI solutions help you harness the power of your data to make informed decisions, automate repetitive tasks, and create intelligent systems that learn and adapt. From data engineering to machine learning, we provide end-to-end AI solutions.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
      icon: '🤖',
      color: 'from-orange-500 to-red-500',
      features: [
        'Data pipeline development',
        'Machine learning models',
        'AI-powered automation',
        'Predictive analytics',
        'Natural language processing',
        'Computer vision solutions',
      ],
      benefits: [
        'Data-driven decision making',
        'Automated business processes',
        'Improved customer experience',
        'Reduced operational costs',
        'Competitive advantage',
      ],
      services: [
        'Data Engineering',
        'AI & Machine Learning Solutions',
        'Intelligent Automation',
        'Analytics & Business Insights',
      ],
    },
    'digital-growth': {
      title: 'Digital Growth',
      subtitle: 'Amplify Your Online Presence',
      description: 'Accelerate your online presence and customer acquisition through strategic digital marketing and optimization. Reach the right audience and convert leads into customers.',
      longDescription: 'Our digital growth services combine data-driven strategies with creative execution to help you attract, engage, and convert customers. We optimize every touchpoint of your customer journey to maximize ROI.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      icon: '📈',
      color: 'from-indigo-500 to-blue-500',
      features: [
        'SEO optimization',
        'Performance marketing',
        'Social media strategy',
        'Content marketing',
        'Conversion rate optimization',
        'Analytics and reporting',
      ],
      benefits: [
        'Increased online visibility',
        'Higher conversion rates',
        'Better ROI on marketing spend',
        'Improved brand awareness',
        'Data-driven marketing decisions',
      ],
      services: [
        'Search Engine Optimization',
        'Performance Marketing',
        'Social Media Marketing',
        'Online Reputation Management',
        'Conversion & Performance Optimisation',
      ],
    },
    'managed-services': {
      title: 'Managed Services',
      subtitle: 'Focus on Your Business, We Handle the Tech',
      description: 'Ensure continuous performance and reliability with our comprehensive managed services. Focus on growing your business while we handle all technical operations.',
      longDescription: 'Our managed services provide round-the-clock support, monitoring, and optimization for your applications and infrastructure. We ensure your systems run smoothly, securely, and efficiently so you can focus on what matters most - your business.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
      icon: '🛠️',
      color: 'from-teal-500 to-cyan-500',
      features: [
        '24/7 monitoring and support',
        'Proactive issue resolution',
        'Performance optimization',
        'Security management',
        'Regular updates and patches',
        'Disaster recovery',
      ],
      benefits: [
        'Reduced downtime',
        'Lower operational costs',
        'Expert technical support',
        'Improved system reliability',
        'Peace of mind',
      ],
      services: [
        'Application Support',
        'Platform Support & Optimisation',
        'Development Support',
        'Digital Fulfilment',
        'IT Support Services',
      ],
    },
    'enterprise-platforms': {
      title: 'Enterprise Platforms',
      subtitle: 'Streamline Operations with Enterprise Solutions',
      description: 'Leverage industry-leading enterprise platforms to streamline operations, enhance customer relationships, and drive organizational efficiency.',
      longDescription: 'We specialize in implementing and customizing enterprise platforms that integrate seamlessly with your existing systems. Our expertise spans CMS, CRM, ERP, and service management platforms to help you achieve operational excellence.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
      icon: '🏢',
      color: 'from-gray-600 to-gray-800',
      features: [
        'Platform implementation',
        'Custom integrations',
        'Workflow automation',
        'User training and support',
        'Data migration',
        'Ongoing maintenance',
      ],
      benefits: [
        'Streamlined operations',
        'Improved collaboration',
        'Better data management',
        'Enhanced customer relationships',
        'Scalable solutions',
      ],
      services: [
        'CMS & DXP Platforms',
        'CRM Platforms',
        'Service Management',
        'ERP & Business Systems',
      ],
    },
  }

  const service = serviceData[slug] || serviceData['product-development']

  return (
    <div className="pt-20 pb-24 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-accent-900/90"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6`}>
              <span className="text-2xl">{service.icon}</span>
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {service.subtitle}
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={ref} className="py-24">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Long Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About This Service</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {service.longDescription}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services Included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Services Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.services.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors"
                  >
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how {service.title} can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-0 hover:scale-105"
              >
                Contact Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-0"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail

