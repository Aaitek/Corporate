import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Footer = () => {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.2 })
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Company', path: '/company' },
      { label: 'Our Work', path: '/partner-success' },
      { label: 'Contact Us', path: '/contact' },
    ],
    services: [
      { label: 'All Services', path: '/services' },
      { label: 'Product & Experience', path: '/services/category/product-experience' },
      { label: 'Software Engineering', path: '/services/category/software-engineering' },
      { label: 'Cloud & DevOps', path: '/services/category/cloud-devops' },
      { label: 'Data & AI', path: '/services/category/data-ai' },
      { label: 'Digital Growth', path: '/services/category/digital-growth' },
      { label: 'Managed Services', path: '/services/category/managed-services' },
      { label: 'Enterprise Platforms', path: '/services/category/enterprise-platforms' },
    ],
    products: [
      { label: 'All Products', path: '/products' },
      { label: 'AI Sales Agent', path: '/products/ai-sales-agent' },
      { label: 'AI Booking Agent', path: '/products/ai-booking-agent' },
      { label: 'AI Trade Strategy Agent', path: '/products/ai-trade-strategy-agent' },
    ],
    resources: [
      { label: 'Resources', path: '/resources' },
      { label: 'Academy', path: '/academy' },
      { label: 'Industries', path: '/industries' },
      { label: 'Hire Talent', path: '/hire-talent' },
      { label: 'Partner Success', path: '/partner-success' },
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Terms & Conditions', path: '/terms-conditions' },
    ],
  }

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 border-t border-gray-700 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-[250px] max-w-[1920px] section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="mb-6">
              <motion.img 
                src="/footer-logo.png" 
                alt="Aaitek Logo" 
                className="h-10 w-auto mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <p className="text-sm mb-6 text-gray-400 leading-relaxed">
              Aaitek is all about digital experiences and digital transformation. Through the power of headless CMS solutions, we deliver smart and unique experiences to clients, people, and the community.
            </p>
            <div className="flex space-x-3">
              {[
                { href: 'https://web.facebook.com/aaitek', label: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', color: 'from-blue-600 to-blue-500' },
                { href: 'https://x.com/aaitek', label: 'Twitter/X', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', color: 'from-gray-800 to-gray-700' },
                { href: 'https://www.linkedin.com/company/aaitek/', label: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', color: 'from-blue-700 to-blue-600' },
                { href: 'https://www.instagram.com/aaitek', label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', color: 'from-pink-600 via-red-500 to-orange-500' },
                { href: 'https://www.youtube.com/@aaitek', label: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', color: 'from-red-600 to-red-500' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.color} p-2 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-xs text-gray-400 whitespace-nowrap bg-gray-800 px-2 py-1 rounded">{social.label}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links - Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {/* Company Links */}
            <div>
              <motion.h4
                className="text-white font-bold mb-4 text-sm uppercase tracking-wider flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <span className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
                Our Company
              </motion.h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white group flex items-center gap-2 transition-all duration-300"
                    >
                      <span className="w-0 group-hover:w-1.5 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <motion.h4
                className="text-white font-bold mb-4 text-sm uppercase tracking-wider flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                <span className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                Services
              </motion.h4>
              <ul className="space-y-2.5">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.45 + index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white group flex items-center gap-2 transition-all duration-300"
                    >
                      <span className="w-0 group-hover:w-1.5 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Products Links */}
            <div>
              <motion.h4
                className="text-white font-bold mb-4 text-sm uppercase tracking-wider flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <span className="w-1 h-4 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></span>
                Products
              </motion.h4>
              <ul className="space-y-2.5">
                {footerLinks.products.map((link, index) => (
                  <motion.li
                    key={`${link.path}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white group flex items-center gap-2 transition-all duration-300"
                    >
                      <span className="w-0 group-hover:w-1.5 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <motion.h4
                className="text-white font-bold mb-4 text-sm uppercase tracking-wider flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.45 }}
              >
                <span className="w-1 h-4 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></span>
                Resources
              </motion.h4>
              <ul className="space-y-2.5">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.55 + index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white group flex items-center gap-2 transition-all duration-300"
                    >
                      <span className="w-0 group-hover:w-1.5 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="border-t border-gray-700 pt-8 mb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-black backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="text-blue-400">📧</span>
                Contact
              </h4>
              <div className="space-y-2">
                <motion.p
                  whileHover={{ x: 5 }}
                  className="text-sm text-gray-400"
                >
                  <a href="mailto:info@aaitek.com" className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    info@aaitek.com
                  </a>
                </motion.p>
                <motion.p
                  whileHover={{ x: 5 }}
                  className="text-sm text-gray-400"
                >
                  <a href="tel:+61435987212" className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    +61 435 987 212
                  </a>
                </motion.p>
                <p className="text-sm text-gray-500 flex items-center gap-2 mt-3">
                  <span className="text-xs">📍</span>
                  Sydney, Australia
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-black backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="text-purple-400">🏆</span>
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Contentful Partner', 'Umbraco Partner', 'Sitecore Partner'].map((cert, index) => (
                  <motion.span
                    key={cert}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs px-3 py-1.5 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg text-gray-300 border border-gray-600 hover:border-purple-500/50 transition-all duration-300"
                  >
                    {cert}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-black backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
            >
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="text-cyan-400">🌐</span>
                Connect With Us
              </h4>
              <p className="text-xs text-gray-500 mb-3">Follow us on social media</p>
              <div className="flex space-x-2">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((platform, index) => (
                  <motion.div
                    key={platform}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-lg bg-gray-700 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 flex items-center justify-center cursor-pointer transition-all duration-300"
                  >
                    <span className="text-xs text-gray-400 hover:text-white">•</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} <span className="text-white font-semibold">Aaitek Technology Specialists</span>. All rights reserved. | Designed and Developed by <span className="text-blue-400">Aaitek Pty Ltd</span>
            </p>
            <div className="flex space-x-6">
              <Link 
                to="/terms-conditions"
                className="text-sm text-gray-500 hover:text-white transition-colors duration-300 relative group"
              >
                Terms
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                to="/privacy-policy"
                className="text-sm text-gray-500 hover:text-white transition-colors duration-300 relative group"
              >
                Privacy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

