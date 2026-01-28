import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import SEO from '../components/SEO'
import api from '../utils/api'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' })

  const contactMethods = [
    {
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours',
      value: 'info@aaitek.com',
      icon: '📧',
      color: 'from-blue-500 to-cyan-500',
      link: 'mailto:info@aaitek.com',
    },
    {
      title: 'Call Us',
      description: 'Speak directly with our team',
      value: '+61 435 987 212',
      icon: '📞',
      color: 'from-purple-500 to-pink-500',
      link: 'tel:+61435987212',
    },
    {
      title: 'Location',
      description: 'Our headquarters',
      value: 'Sydney, Australia',
      icon: '📍',
      color: 'from-green-500 to-emerald-500',
      link: '#',
    },
  ]

  const services = [
    'Product Development',
    'Software Engineering',
    'Cloud & DevOps',
    'Data & AI',
    'Digital Growth',
    'Managed Services',
    'Enterprise Platforms',
    'Hire Developers',
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    // Client-side validation - trim and check required fields
    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedMessage = formData.message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, and Message)'
      })
      setIsSubmitting(false)
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      })
      setIsSubmitting(false)
      return
    }

    try {
      // Prepare the data to send
      const submissionData = {
        name: trimmedName,
        email: trimmedEmail,
        company: formData.company.trim() || null,
        phone: formData.phone.trim() || null,
        service: formData.service.trim() || null,
        message: trimmedMessage,
      }
      
      console.log('Submitting contact form with data:', submissionData)
      
      // Use Vercel API proxy to avoid Railway Edge CORS issues
      const response = await api.post('/api/contact-submissions', submissionData)

      if (response.data) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We\'ll get back to you soon.'
        })
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
          service: '',
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      console.error('Error response:', error.response?.data)
      
      // Extract detailed error message
      let errorMessage = 'Failed to send message. Please try again or email us directly.'
      
      if (error.response?.data) {
        if (error.response.data.error?.message) {
          errorMessage = error.response.data.error.message
        } else if (error.response.data.error) {
          errorMessage = typeof error.response.data.error === 'string' 
            ? error.response.data.error 
            : JSON.stringify(error.response.data.error)
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message
        } else if (error.response.data.details) {
          errorMessage = `Error: ${JSON.stringify(error.response.data.details)}`
        }
      } else if (error.message) {
        errorMessage = error.message
      }
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const siteUrl = 'https://aaitek.com'

  return (
    <>
      <SEO
        seoTitle="Contact Us - Get in Touch | Aaitek"
        seoDescription="Get in touch with Aaitek. Contact us via email, phone, or fill out our contact form. We're here to help transform your digital vision into reality."
        canonicalUrl={`${siteUrl}/contact`}
        ogTitle="Contact Us - Get in Touch"
        ogDescription="Get in touch with Aaitek. We're here to help transform your digital vision into reality."
        ogImage="https://aaitek.com/Aaitek%20logo%20in%20Black.png"
        ogType="website"
        twitterTitle="Contact Us - Get in Touch"
        twitterDescription="Get in touch with Aaitek to transform your digital vision."
        twitterImage="https://aaitek.com/Aaitek%20logo%20in%20Black.png"
        schemaType="ContactPage"
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
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
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Get In Touch</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  ease: 'easeIn'
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-0 group overflow-hidden block"
              >
                {/* Left Border on Hover */}
                <motion.div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-0`}
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0 }}
                />

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-0`}>
                  {method.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-0">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {method.description}
                </p>
                <p className="text-primary-600 font-semibold">
                  {method.value}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-0 rounded-2xl`}></div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={ref} className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-0 outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-0 outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-0 outline-none"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-0 outline-none"
                      placeholder="+61 400 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <div className="relative group">
                    {/* Animated background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Dropdown container */}
                    <div className="relative bg-white rounded-xl border-2 border-gray-200 group-hover:border-primary-400 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500/20 transition-all duration-300 shadow-sm group-hover:shadow-md min-h-[44px]">
                      {/* Select element - covers entire area */}
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={(e) => {
                          setFormData({ ...formData, service: e.target.value })
                        }}
                        className="absolute inset-0 w-full h-full appearance-none bg-transparent border-0 cursor-pointer opacity-0 z-10"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      
                      {/* Visual content */}
                      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 pointer-events-none relative z-0 min-h-[44px]">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
                          ⚙️
                        </div>
                        
                        {/* Display text */}
                        <span className="flex-1 text-gray-700 font-medium text-xs sm:text-sm group-hover:text-primary-600 transition-colors duration-300 truncate min-w-0">
                          {formData.service || 'Select a service...'}
                        </span>
                        
                        {/* Custom dropdown arrow */}
                        <svg 
                          className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-primary-500 transition-colors duration-300 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      
                      {/* Bottom accent line on focus */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 rounded-b-xl"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-0 outline-none resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {submitStatus.message && (
                  <div
                    className={`p-4 rounded-xl ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 border border-green-200 text-green-800'
                        : 'bg-red-50 border border-red-200 text-red-800'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  transition={{ duration: 0 }}
                  className={`w-full px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-0 shadow-lg hover:shadow-xl ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Prefer to Schedule a Call?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Book a free consultation with our experts to discuss your project requirements
            </p>
            <motion.a
              href="mailto:info@aaitek.com?subject=Schedule a Consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-0 shadow-lg hover:shadow-xl"
            >
              Schedule a Free Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Contact

