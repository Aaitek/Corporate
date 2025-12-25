import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const menuItems = {
    services: {
      label: 'Services',
      path: '/services',
      columns: [
        {
          title: 'Design & Development',
          icon: '</>',
          items: [
            { label: 'Website Development', path: '/services/web-development' },
            { label: 'Mobile App Development', path: '/services/mobile-apps' },
            { label: 'E-commerce Development', path: '/services/e-commerce' },
            { label: 'Software Development', path: '/services/software-development' },
            { label: 'API Development', path: '/services/api-integration' },
            { label: 'Custom Software Integration', path: '/services/custom-integration' },
          ],
        },
        {
          title: 'Enterprise Services',
          icon: '🏢',
          items: [
            { label: 'CRM Solutions', path: '/services/crm' },
            { label: 'Cloud Solutions', path: '/services/cloud' },
            { label: 'Data Engineering', path: '/services/data-engineering' },
            { label: 'AI/ML Solutions', path: '/services/ai-ml' },
            { label: 'Cyber Security', path: '/services/cyber-security' },
          ],
        },
        {
          title: 'Support Services',
          icon: '🛠️',
          items: [
            { label: 'Hosting', path: '/services/hosting' },
            { label: 'Server Support', path: '/services/server-support' },
            { label: 'Development Support', path: '/services/development-support' },
            { label: 'Staff Augmentation', path: '/hire-developers' },
            { label: 'DevOps', path: '/services/devops' },
          ],
        },
      ],
    },
    products: {
      label: 'Products',
      path: '/products',
      columns: [
        {
          title: 'Our Products',
          icon: '📦',
          items: [
            { label: 'AI Analytics Platform', path: '/products/ai-analytics' },
            { label: 'Cloud Management Suite', path: '/products/cloud-management' },
            { label: 'Enterprise CRM', path: '/products/enterprise-crm' },
            { label: 'Data Integration Hub', path: '/products/data-integration' },
          ],
        },
      ],
    },
    'hire-developers': {
      label: 'Hire Developers',
      path: '/hire-developers',
      columns: [
        {
          title: 'Hiring Models',
          icon: '👥',
          items: [
            { label: 'Staff Augmentation', path: '/hire-developers#staff-augmentation' },
            { label: 'Dedicated Team', path: '/hire-developers#dedicated-team' },
            { label: 'Time-Based Support', path: '/hire-developers#time-based' },
          ],
        },
        {
          title: 'Technologies',
          icon: '💻',
          items: [
            { label: 'React Developers', path: '/hire-developers?tech=react' },
            { label: 'Node.js Developers', path: '/hire-developers?tech=nodejs' },
            { label: 'Python Developers', path: '/hire-developers?tech=python' },
            { label: 'AWS/Azure Experts', path: '/hire-developers?tech=cloud' },
            { label: 'Full-Stack Developers', path: '/hire-developers?tech=fullstack' },
          ],
        },
      ],
    },
    'partner-success': {
      label: 'Partner Success',
      path: '/partner-success',
      columns: [
        {
          title: 'Case Studies',
          icon: '📊',
          items: [
            { label: 'Cloud Migration', path: '/partner-success?category=cloud' },
            { label: 'AI/ML Projects', path: '/partner-success?category=ai' },
            { label: 'E-Commerce', path: '/partner-success?category=ecommerce' },
            { label: 'Mobile Apps', path: '/partner-success?category=mobile' },
            { label: 'Data Engineering', path: '/partner-success?category=data' },
          ],
        },
      ],
    },
    'managed-services': {
      label: 'Managed Services',
      path: '/managed-services',
      columns: [
        {
          title: 'Services',
          icon: '⚙️',
          items: [
            { label: '24/7 Monitoring & Support', path: '/managed-services#monitoring' },
            { label: 'Cloud Infrastructure', path: '/managed-services#cloud' },
            { label: 'Application Maintenance', path: '/managed-services#maintenance' },
            { label: 'Security Management', path: '/managed-services#security' },
            { label: 'Database Management', path: '/managed-services#database' },
            { label: 'DevOps & CI/CD', path: '/managed-services#devops' },
          ],
        },
      ],
    },
    resources: {
      label: 'Resources',
      path: '/resources',
      columns: [
        {
          title: 'Content',
          icon: '📚',
          items: [
            { label: 'Blogs & Insights', path: '/resources/blog' },
            { label: 'Case Studies', path: '/partner-success' },
            { label: 'Press Releases', path: '/resources/press-releases' },
            { label: 'Events', path: '/resources/events' },
            { label: 'Webinars', path: '/resources/webinars' },
            { label: 'Videos', path: '/resources/videos' },
          ],
        },
      ],
    },
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-200' 
            : 'bg-gray-900/80 backdrop-blur-md'
        }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src="/logo.avif" 
                  alt="Aaitek Logo" 
                  className="h-10 w-auto"
                />
              </Link>
            </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/'
                  ? isScrolled ? 'text-primary-600' : 'text-white'
                  : isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-primary-400'
              }`}
            >
              Home
            </Link>
            {Object.entries(menuItems).slice(0, 4).map(([key, item]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors flex items-center ${
                    location.pathname === item.path
                      ? isScrolled ? 'text-primary-600' : 'text-white'
                      : isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-primary-400'
                  }`}
                >
                  {item.label}
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform ${
                      activeDropdown === key ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {activeDropdown === key && item.columns && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="fixed left-0 right-0 top-20 bg-white text-gray-900 shadow-2xl py-8 z-50 border-t border-primary-200"
                    >
                    <div className="container-custom">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {item.columns.map((column, colIndex) => (
                        <div key={colIndex}>
                          <div className="flex items-center mb-4">
                            <span className="text-primary-600 mr-2 text-lg">{column.icon}</span>
                            <h3 className="text-lg font-semibold text-gray-900">{column.title}</h3>
                          </div>
                          <ul className="space-y-2">
                            {column.items.map((subItem, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  to={subItem.path}
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-gray-700 hover:text-primary-600 transition-colors text-sm block py-1"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-700">
                        <Link
                          to={item.path}
                          onClick={() => setActiveDropdown(null)}
                          className="text-primary-400 hover:text-primary-300 font-semibold text-sm flex items-center"
                        >
                          View All {item.label}
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/about'
                  ? isScrolled ? 'text-primary-600' : 'text-white'
                  : isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-primary-400'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/contact'
                  ? isScrolled ? 'text-primary-600' : 'text-white'
                  : isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-primary-400'
              }`}
            >
              Contact
            </Link>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="btn-primary text-sm px-6 py-2"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${!isScrolled ? 'text-white' : 'text-gray-900'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden py-4 border-t ${!isScrolled ? 'border-gray-700' : 'border-gray-200'}`}>
            {Object.entries(menuItems).map(([key, item]) => (
              <div key={key} className="mb-2">
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                className={`block py-3 text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-primary-600'
                    : 'text-gray-700'
                }`}
                >
                  {item.label}
                </Link>
                {item.columns && (
                  <div className="pl-4 space-y-1">
                    {item.columns.map((column, colIndex) => (
                      <div key={colIndex} className="mb-3">
                        <div className="text-sm font-semibold text-gray-600 mb-2">
                          {column.icon} {column.title}
                        </div>
                        <ul className="space-y-1">
                          {column.items.slice(0, 3).map((subItem, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                to={subItem.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-sm text-gray-600 hover:text-primary-600 block py-1"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary text-sm px-4 py-2 mt-4 inline-block"
            >
              Contact us
            </Link>
          </div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header

