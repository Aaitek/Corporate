import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const ServicesStacked = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const serviceCategories = [
    {
      category: 'Product Development',
      description: 'Transform your ideas into powerful digital products that engage users and drive business growth. From concept to launch, we deliver innovative solutions.',
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
      category: 'Software Engineering',
      description: 'Build robust, scalable software solutions tailored to your business needs. Our engineering expertise ensures reliable, high-performance applications.',
      services: [
        'Custom Software Development',
        'API Design & Development',
        'System Integration',
        'Legacy Modernisation',
        'Bespoke Application Development',
      ],
    },
    {
      category: 'Cloud & DevOps',
      description: 'Accelerate your digital transformation with cloud-native solutions and automated DevOps practices. Scale seamlessly with enterprise-grade infrastructure.',
      services: [
        'Cloud Architecture & Migration',
        'Managed Cloud Hosting',
        'DevOps & CI/CD Automation',
        'Infrastructure & Server Support',
        'Cloud Security & Governance',
      ],
    },
    {
      category: 'Data & AI',
      description: 'Unlock the power of your data with intelligent AI solutions. Drive insights, automate processes, and make data-driven decisions that transform your business.',
      services: [
        'Data Engineering',
        'AI & Machine Learning Solutions',
        'Intelligent Automation',
        'Analytics & Business Insights',
      ],
    },
    {
      category: 'Digital Growth',
      description: 'Amplify your online presence and drive measurable growth. Our digital marketing strategies help you reach the right audience and convert leads into customers.',
      services: [
        'Search Engine Optimization',
        'Performance Marketing',
        'Social Media Marketing',
        'Online Reputation Management',
        'Conversion & Performance Optimisation',
      ],
    },
    {
      category: 'Managed Services',
      description: 'Ensure continuous performance and reliability with our comprehensive managed services. Focus on your business while we handle the technical operations.',
      services: [
        'Application Support',
        'Platform Support & Optimisation',
        'Development Support',
        'Digital Fulfilment',
        'IT Support Services',
      ],
    },
    {
      category: 'Enterprise Platforms',
      description: 'Leverage industry-leading enterprise platforms to streamline operations, enhance customer relationships, and drive organizational efficiency.',
      subcategories: [
        {
          name: 'CMS & DXP Platforms',
          items: ['Sitecore', 'AEM', 'Umbraco', 'WordPress'],
        },
        {
          name: 'CRM Platforms',
          items: ['Salesforce', 'HubSpot', 'Microsoft Dynamics', 'Zoho'],
        },
        {
          name: 'Service Management',
          items: ['ServiceNow'],
        },
        {
          name: 'ERP & Business Systems',
          items: [],
        },
      ],
    },
  ]

  return (
    <section id="services" ref={ref} className="py-24 bg-white relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            SERVICES
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to transform your business. From product development to enterprise platforms, we deliver end-to-end services that drive innovation and growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category, categoryIndex) => (
            <Link
              key={categoryIndex}
              to={`/services/${category.slug}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.6, 
                  delay: categoryIndex * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-300 group overflow-hidden cursor-pointer h-full"
              >
              {/* Left Border on Hover */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Animated Background Gradient on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-50/0 group-hover:from-primary-50/50 group-hover:to-accent-50/50 transition-all duration-300"
              />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />

              {/* Category Title */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {category.category}
                  </motion.span>
                  <motion.svg
                    className="w-5 h-5 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </h3>
                
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
                    {category.services.map((service, serviceIndex) => (
                      <motion.li
                        key={serviceIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + serviceIndex * 0.05 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-3 text-gray-700 hover:text-primary-600 transition-colors group/item"
                      >
                        <motion.div
                          className="mt-1.5"
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg
                            className="w-4 h-4 text-primary-500 flex-shrink-0 group-hover/item:text-primary-600 transition-colors"
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
                        <span className="text-sm font-medium group-hover/item:font-semibold transition-all">{service}</span>
                      </motion.li>
                    ))}
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
                        <h4 className="text-sm font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
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
                                className="flex items-center gap-2 text-gray-600 text-sm hover:text-primary-600 transition-colors group/subitem"
                              >
                                <motion.div
                                  className="w-2 h-2 rounded-full bg-primary-400 group-hover/subitem:bg-primary-600 transition-colors"
                                  whileHover={{ scale: 1.3 }}
                                />
                                <span className="group-hover/subitem:font-semibold transition-all">{item}</span>
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesStacked
