import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      title: 'Product Development',
      description: 'Transform your ideas into powerful digital products that engage users and drive business growth. From concept to launch, we deliver innovative solutions.',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500',
      slug: 'product-development',
      services: [
        'Website Development',
        'Mobile App Development',
        'eCommerce Experiences',
        'UX/UI Design & Prototyping',
        'Product Design & Discovery',
        'Game & Interactive Experiences',
      ],
    },
    {
      title: 'Software Engineering',
      description: 'Build robust, scalable software solutions tailored to your business needs. Our engineering expertise ensures reliable, high-performance applications.',
      icon: '</>',
      color: 'from-purple-500 to-pink-500',
      slug: 'software-engineering',
      services: [
        'Custom Software Development',
        'API Design & Development',
        'System Integration',
        'Legacy Modernisation',
        'Bespoke Application Development',
      ],
    },
    {
      title: 'Cloud & DevOps',
      description: 'Accelerate your digital transformation with cloud-native solutions and automated DevOps practices. Scale seamlessly with enterprise-grade infrastructure.',
      icon: '☁️',
      color: 'from-green-500 to-emerald-500',
      slug: 'cloud-devops',
      services: [
        'Cloud Architecture & Migration',
        'Managed Cloud Hosting',
        'DevOps & CI/CD Automation',
        'Infrastructure & Server Support',
        'Cloud Security & Governance',
      ],
    },
    {
      title: 'Data & AI',
      description: 'Unlock the power of your data with intelligent AI solutions. Drive insights, automate processes, and make data-driven decisions that transform your business.',
      icon: '🤖',
      color: 'from-orange-500 to-red-500',
      slug: 'data-ai',
      services: [
        'Data Engineering',
        'AI & Machine Learning Solutions',
        'Intelligent Automation',
        'Analytics & Business Insights',
      ],
    },
    {
      title: 'Digital Growth',
      description: 'Amplify your online presence and drive measurable growth. Our digital marketing strategies help you reach the right audience and convert leads into customers.',
      icon: '📈',
      color: 'from-indigo-500 to-blue-500',
      slug: 'digital-growth',
      services: [
        'Search Engine Optimization',
        'Performance Marketing',
        'Social Media Marketing',
        'Online Reputation Management',
        'Conversion & Performance Optimisation',
      ],
    },
    {
      title: 'Managed Services',
      description: 'Ensure continuous performance and reliability with our comprehensive managed services. Focus on your business while we handle the technical operations.',
      icon: '🛠️',
      color: 'from-teal-500 to-cyan-500',
      slug: 'managed-services',
      services: [
        'Application Support',
        'Platform Support & Optimisation',
        'Development Support',
        'Digital Fulfilment',
        'IT Support Services',
      ],
    },
    {
      title: 'Enterprise Platforms',
      description: 'Leverage industry-leading enterprise platforms to streamline operations, enhance customer relationships, and drive organizational efficiency.',
      icon: '🏢',
      color: 'from-gray-600 to-gray-800',
      slug: 'enterprise-platforms',
      services: [
        'CMS & DXP Platforms',
        'CRM Platforms',
        'Service Management',
        'ERP & Business Systems',
      ],
    },
  ]

  return (
    <div className="pt-20 pb-24 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              End-to-end services designed to transform your business and drive innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  ease: 'easeIn'
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0 }}
                className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-0 group overflow-hidden"
              >
                {/* Left Border on Hover */}
                <motion.div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-0`}
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0 }}
                />

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-0`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-0">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Services List Preview */}
                <ul className="space-y-2 mb-6">
                  {service.services.slice(0, 3).map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                  {service.services.length > 3 && (
                    <li className="text-sm text-primary-600 font-medium">
                      +{service.services.length - 3} more services
                    </li>
                  )}
                </ul>

                {/* CTA Button */}
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors duration-0 group/btn"
                >
                  Learn More
                  <svg 
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-50/0 group-hover:from-primary-50/50 group-hover:to-accent-50/50 transition-all duration-0 rounded-2xl"></div>
              </motion.div>
            ))}
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
              Let's discuss how we can help transform your business
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-0 hover:scale-105"
            >
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
