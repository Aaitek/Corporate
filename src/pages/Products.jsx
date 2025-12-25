import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const products = [
    {
      title: 'Sales Agent',
      name: 'AI Sales Agent',
      description: 'AI-Powered Calls to Convert More Leads & Book More Appointments.',
      icon: '📞',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Booking Agent',
      name: 'AI Salon Booking Agent',
      description: 'Automate Your Appointment Scheduling Across Multiple Channels',
      icon: '📅',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Trade Strategy Agent',
      name: 'AI Trade Strategy Test Agent',
      description: 'Test Your Trading Strategies in Seconds — No Coding Required!',
      icon: '📈',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'AI Restaurant Booking Agent',
      name: 'AI Restaurant Booking Agent',
      description: 'Hassle-Free Table Reservations with a Simple Call!',
      icon: '🍽️',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'AI Real Estate Appointment Agent',
      name: 'AI Real Estate Appointment Agent',
      description: 'Find Your Dream Property with a Simple Call!',
      icon: '🏠',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'AI Dentist Assist Agent',
      name: 'AI Dentist Assist Agent',
      description: 'Let Patients Book Appointments with a Simple Call!',
      icon: '🦷',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      title: 'AI Lawn Care Agent',
      name: 'AI Lawn Care Agent',
      description: 'Hassle-Free Lawn Mowing Appointments—Just a Call Away!',
      icon: '🌱',
      color: 'from-green-500 to-lime-500',
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
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Our Products</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              AI-Powered Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Intelligent AI agents designed to automate your business processes and enhance customer experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={ref} className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                {/* Left Border on Hover */}
                <motion.div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {product.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {product.title}
                </h3>
                <h4 className="text-lg font-semibold text-primary-600 mb-4">
                  {product.name}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors group/btn"
                >
                  Learn More
                  <svg 
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-50/0 group-hover:from-primary-50/50 group-hover:to-accent-50/50 transition-all duration-300 rounded-2xl"></div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get started with our AI-powered solutions today
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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

export default Products
