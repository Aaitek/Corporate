import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Industries = () => {
  const industries = [
    {
      title: 'Startups',
      description: 'Rapid MVP development and scalable solutions to help startups launch and grow quickly.',
      icon: '🚀',
      link: '/services?industry=startups',
    },
    {
      title: 'Enterprises',
      description: 'Enterprise-grade solutions with robust architecture, security, and scalability for large organizations.',
      icon: '🏢',
      link: '/services?industry=enterprises',
    },
    {
      title: 'E-commerce',
      description: 'Custom e-commerce platforms and integrations to drive sales and enhance customer experience.',
      icon: '🛒',
      link: '/services?industry=ecommerce',
    },
    {
      title: 'Healthcare',
      description: 'HIPAA-compliant solutions for healthcare providers, improving patient care and operations.',
      icon: '🏥',
      link: '/services?industry=healthcare',
    },
    {
      title: 'Construction / Inspections',
      description: 'Specialized software for construction management, inspections, and field operations.',
      icon: '🏗️',
      link: '/services?industry=construction',
    },
    {
      title: 'SaaS',
      description: 'Cloud-native SaaS platforms with subscription management and multi-tenant architecture.',
      icon: '☁️',
      link: '/services?industry=saas',
    },
  ]

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm font-semibold text-primary-400 mb-4 uppercase tracking-wider">
            Industries We Serve
          </div>
          <h2 className="heading-2 mb-4 text-white">
            Solutions Tailored to Your Industry
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We understand the unique challenges of different industries and deliver solutions that drive real business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Link
                to={industry.link}
                className="group relative bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/20 block h-full"
              >
                {/* Icon */}
                <div className="text-5xl mb-4">{industry.icon}</div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {industry.description}
                </p>
                
                {/* Arrow */}
                <div className="text-primary-400 text-sm font-semibold inline-flex items-center group-hover:text-primary-300 transition-colors">
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries

