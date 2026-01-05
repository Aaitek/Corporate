import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { getServiceSlug } from '../../utils/slugHelper'

const ServicesStacked = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const serviceCategories = [
    {
      category: 'Product & Experience',
      slug: 'product-experience',
      description: 'Transform your ideas into powerful digital products that engage users and drive business growth.',
      services: [
        'UX & UI Design',
        'Web Platform Development',
        'Mobile Application Development',
        'eCommerce Solutions',
        'Product Discovery & Strategy',
        'Interactive & Immersive Experiences',
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
    },
    {
      category: 'Software Engineering',
      slug: 'software-engineering',
      description: 'Build robust, scalable software solutions tailored to your business needs.',
      services: [
        'Custom Software Development',
        'API & Integration Engineering',
        'Enterprise System Integration',
        'Legacy Modernisation',
        'Bespoke Application Development',
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
    },
    {
      category: 'Cloud & DevOps',
      slug: 'cloud-devops',
      description: 'Accelerate your digital transformation with cloud-native solutions and automated DevOps practices.',
      services: [
        'Cloud Architecture & Strategy',
        'Cloud Migration & Modernisation',
        'Managed Cloud Hosting',
        'DevOps & CI/CD Automation',
        'Cloud Security & Governance',
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
    },
    {
      category: 'Data & AI',
      slug: 'data-ai',
      description: 'Unlock the power of your data with intelligent AI solutions.',
      services: [
        'Data Engineering & Pipelines',
        'AI & Machine Learning Solutions',
        'Intelligent Automation',
        'Advanced Analytics & Insights',
        'AI Governance & Responsible AI',
      ],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
    },
    {
      category: 'Digital Growth',
      slug: 'digital-growth',
      description: 'Amplify your online presence and drive measurable growth.',
      services: [
        'Search & AI-Driven Optimisation',
        'Performance & Paid Marketing',
        'Social & Brand Growth',
        'Online Reputation Management',
        'Conversion Optimisation (CRO)',
      ],
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-50 to-blue-50',
    },
    {
      category: 'Managed Services',
      slug: 'managed-services',
      description: 'Ensure continuous performance and reliability with our comprehensive managed services.',
      services: [
        'Application Support & Maintenance',
        'Platform Optimisation',
        'Development Support Services',
        'Digital Operations & Delivery',
        'IT Support & Managed Services',
      ],
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-50 to-cyan-50',
    },
    {
      category: 'Enterprise Platforms',
      slug: 'enterprise-platforms',
      description: 'Leverage industry-leading enterprise platforms to streamline operations.',
      services: [
        'CMS & Digital Experience Platforms',
        'CRM Platforms',
        'ServiceNow Solutions',
        'ERP & Enterprise Systems',
      ],
      color: 'from-gray-600 to-gray-800',
      bgColor: 'from-gray-50 to-gray-100',
    },
  ]

  return (
    <section id="services" ref={ref} className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
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
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            End-to-End Digital & AI Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive technology solutions across the full digital lifecycle — from product strategy and engineering to cloud platforms, AI, and enterprise systems — helping organizations transform, scale, and stay competitive.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category, categoryIndex) => (
            <Link
              key={categoryIndex}
              to={`/services/category/${category.slug}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.4, 
                  delay: categoryIndex * 0.1,
                  ease: 'easeIn'
                }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.4 } }}
                className={`relative bg-gradient-to-br ${category.bgColor || 'from-white to-gray-50'} rounded-2xl p-6 border-2 border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-[0.4s] group overflow-hidden cursor-pointer h-full`}
              >
              {/* Left Border - Colorful */}
              <motion.div
                className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${category.color || 'from-primary-500 to-accent-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-[0.4s]`}
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Top Border Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color || 'from-primary-500 to-accent-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-[0.4s] rounded-t-2xl`}></div>

              {/* Animated Background Gradient on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color || 'from-primary-500 to-accent-500'} opacity-0 group-hover:opacity-10 transition-opacity duration-[0.4s]`}
              />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[0.4s]"
              />

              {/* Category Title */}
              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-3">
                  {/* Colorful Icon Badge */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color || 'from-primary-500 to-accent-500'} flex items-center justify-center text-white text-xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-[0.4s]`}>
                    {category.category === 'Product & Experience' && '🚀'}
                    {category.category === 'Software Engineering' && '</>'}
                    {category.category === 'Cloud & DevOps' && '☁️'}
                    {category.category === 'Data & AI' && '🤖'}
                    {category.category === 'Digital Growth' && '📈'}
                    {category.category === 'Managed Services' && '🛠️'}
                    {category.category === 'Enterprise Platforms' && '🏢'}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-[0.4s] flex items-center gap-2">
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.4 }}
                      >
                        {category.category}
                      </motion.span>
                      <motion.svg
                        className="w-5 h-5 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-[0.4s]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </h3>
                  </div>
                </div>
                
                {/* Description Paragraph */}
                {category.description && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 + 0.2 }}
                    className="text-sm text-gray-600 mb-4 leading-relaxed"
                  >
                    {category.description}
                  </motion.p>
                )}
              </div>

              {/* Services List */}
              <div className="relative z-10">
                {category.services ? (
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => {
                      const serviceSlug = getServiceSlug(service)
                      return (
                        <Link
                          key={serviceIndex}
                          to={`/services/${serviceSlug}`}
                        >
                          <motion.li
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.4, delay: categoryIndex * 0.1 + serviceIndex * 0.05 }}
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-3 text-gray-700 hover:text-primary-600 transition-colors duration-0 group/item cursor-pointer"
                          >
                            <motion.div
                              className="mt-1.5"
                              whileHover={{ scale: 1.2, rotate: 90 }}
                              transition={{ duration: 0 }}
                            >
                              <svg
                                className="w-4 h-4 text-primary-500 flex-shrink-0 group-hover/item:text-primary-600 transition-colors duration-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </motion.div>
                            <span className="text-sm font-medium group-hover/item:font-semibold transition-all duration-0">{service}</span>
                          </motion.li>
                        </Link>
                      )
                    })}
                  </ul>
                ) : (
                  <div className="space-y-4">
                    {category.subcategories?.map((subcategory, subIndex) => (
                      <motion.div
                        key={subIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + subIndex * 0.1 }}
                        className="space-y-2"
                      >
                        <h4 className="text-sm font-semibold text-gray-800 group-hover:text-primary-600 transition-colors duration-0">
                          {subcategory.name}
                        </h4>
                        {subcategory.items && subcategory.items.length > 0 ? (
                          <ul className="space-y-2 pl-4">
                            {subcategory.items.map((item, itemIndex) => (
                              <motion.li
                                key={itemIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ duration: 0.4, delay: categoryIndex * 0.1 + subIndex * 0.1 + itemIndex * 0.03 }}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-2 text-gray-600 text-sm hover:text-primary-600 transition-colors duration-0 group/subitem"
                              >
                                <motion.div
                                  className="w-2 h-2 rounded-full bg-primary-400 group-hover/subitem:bg-primary-600 transition-colors duration-0"
                                  whileHover={{ scale: 1.3 }}
                                  transition={{ duration: 0 }}
                                />
                                <span className="group-hover/subitem:font-semibold transition-all duration-0">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-gray-500 pl-4">Enterprise solutions</p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesStacked
