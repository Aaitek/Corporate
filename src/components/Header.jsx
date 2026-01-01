import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [expandedMobileItem, setExpandedMobileItem] = useState(null)
  const [servicesMenuPosition, setServicesMenuPosition] = useState({ left: 0, top: 0 })
  const location = useLocation()
  const dropdownRef = useRef(null)
  const servicesMenuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const updateServicesPosition = () => {
      if (activeDropdown === 'services' && servicesMenuRef.current) {
        const rect = servicesMenuRef.current.getBoundingClientRect()
        const viewportWidth = window.innerWidth
        const menuWidth = viewportWidth > 1280 ? 900 : viewportWidth > 1024 ? 800 : 600
        const leftPosition = (viewportWidth - menuWidth) / 2
        const topPosition = rect.bottom + 8
        setServicesMenuPosition({ left: leftPosition, top: topPosition })
      }
    }
    
    const handleResize = () => updateServicesPosition()
    const handleScroll = () => updateServicesPosition()
    
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeDropdown])

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside any dropdown
      const dropdowns = document.querySelectorAll('[data-dropdown]')
      let clickedOutside = true
      dropdowns.forEach(dropdown => {
        if (dropdown.contains(event.target)) {
          clickedOutside = false
        }
      })
      if (clickedOutside) {
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
          title: 'Product Development',
          icon: '🚀',
          items: [
            { label: 'Website Development', path: '/services/product-development' },
            { label: 'Mobile App Development', path: '/services/product-development' },
            { label: 'eCommerce Experiences', path: '/services/product-development' },
            { label: 'UX/UI Design & Prototyping', path: '/services/product-development' },
            { label: 'Product Design & Discovery', path: '/services/product-development' },
            { label: 'Game & Interactive Experiences', path: '/services/product-development' },
          ],
        },
        {
          title: 'Software Engineering',
          icon: '</>',
          items: [
            { label: 'Custom Software Development', path: '/services/software-engineering' },
            { label: 'API Design & Development', path: '/services/software-engineering' },
            { label: 'System Integration', path: '/services/software-engineering' },
            { label: 'Legacy Modernisation', path: '/services/software-engineering' },
            { label: 'Bespoke Application Development', path: '/services/software-engineering' },
          ],
        },
        {
          title: 'Cloud & DevOps',
          icon: '☁️',
          items: [
            { label: 'Cloud Architecture & Migration', path: '/services/cloud-devops' },
            { label: 'Managed Cloud Hosting', path: '/services/cloud-devops' },
            { label: 'DevOps & CI/CD Automation', path: '/services/cloud-devops' },
            { label: 'Infrastructure & Server Support', path: '/services/cloud-devops' },
            { label: 'Cloud Security & Governance', path: '/services/cloud-devops' },
          ],
        },
        {
          title: 'Data & AI',
          icon: '🤖',
          items: [
            { label: 'Data Engineering', path: '/services/data-ai' },
            { label: 'AI & Machine Learning Solutions', path: '/services/data-ai' },
            { label: 'Intelligent Automation', path: '/services/data-ai' },
            { label: 'Analytics & Business Insights', path: '/services/data-ai' },
          ],
        },
        {
          title: 'Digital Growth',
          icon: '📈',
          items: [
            { label: 'Search Engine Optimization', path: '/services/digital-growth' },
            { label: 'Performance Marketing', path: '/services/digital-growth' },
            { label: 'Social Media Marketing', path: '/services/digital-growth' },
            { label: 'Online Reputation Management', path: '/services/digital-growth' },
            { label: 'Conversion & Performance Optimisation', path: '/services/digital-growth' },
          ],
        },
        {
          title: 'Managed Services',
          icon: '🛠️',
          items: [
            { label: 'Application Support', path: '/services/managed-services' },
            { label: 'Platform Support & Optimisation', path: '/services/managed-services' },
            { label: 'Development Support', path: '/services/managed-services' },
            { label: 'Digital Fulfilment', path: '/services/managed-services' },
            { label: 'IT Support Services', path: '/services/managed-services' },
          ],
        },
        {
          title: 'Enterprise Platforms',
          icon: '🏢',
          items: [
            { label: 'CMS & DXP (Sitecore, AEM, Umbraco)', path: '/services/enterprise-platforms' },
            { label: 'CRM (Salesforce, HubSpot, Dynamics)', path: '/services/enterprise-platforms' },
            { label: 'ServiceNow', path: '/services/enterprise-platforms' },
            { label: 'ERP & Business Systems', path: '/services/enterprise-platforms' },
          ],
        },
      ],
    },
    products: {
      label: 'Products',
      path: '/products',
      columns: [
        {
          title: 'AI Agents',
          icon: '🤖',
          items: [
            { label: 'AI Sales Agent', path: '/products' },
            { label: 'AI Salon Booking Agent', path: '/products' },
            { label: 'AI Trade Strategy Agent', path: '/products' },
            { label: 'AI Restaurant Booking Agent', path: '/products' },
            { label: 'AI Real Estate Agent', path: '/products' },
            { label: 'AI Dentist Assist Agent', path: '/products' },
            { label: 'AI Lawn Care Agent', path: '/products' },
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
            { label: 'Staff Augmentation', path: '/hire-developers' },
            { label: 'Dedicated Team', path: '/hire-developers' },
            { label: 'Time-Based Support', path: '/hire-developers' },
          ],
        },
        {
          title: 'Technologies',
          icon: '💻',
          items: [
            { label: 'React Developers', path: '/hire-developers' },
            { label: 'Node.js Developers', path: '/hire-developers' },
            { label: 'Python Developers', path: '/hire-developers' },
            { label: 'AWS/Azure Experts', path: '/hire-developers' },
            { label: 'Full-Stack Developers', path: '/hire-developers' },
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
            { label: 'Enterprise DXP Platform', path: '/partner-success' },
            { label: 'AI-Powered Solutions', path: '/partner-success' },
            { label: 'Cloud Infrastructure', path: '/partner-success' },
            { label: 'Headless CMS', path: '/partner-success' },
            { label: 'Salesforce CRM', path: '/partner-success' },
            { label: 'Mobile App Development', path: '/partner-success' },
            { label: 'E-Commerce Platform', path: '/partner-success' },
            { label: 'Data Analytics', path: '/partner-success' },
            { label: 'Legacy Modernization', path: '/partner-success' },
          ],
        },
      ],
    },
    'managed-services': {
      label: 'Managed Services',
      path: '/#services',
      columns: [
        {
          title: 'Services',
          icon: '⚙️',
          items: [
            { label: '24/7 Monitoring & Support', path: '/#services' },
            { label: 'Cloud Infrastructure', path: '/#services' },
            { label: 'Application Maintenance', path: '/#services' },
            { label: 'Security Management', path: '/#services' },
            { label: 'Database Management', path: '/#services' },
            { label: 'DevOps & CI/CD', path: '/#services' },
          ],
        },
      ],
    },
    resources: {
      label: 'Resources',
      path: '/#faq',
      columns: [
        {
          title: 'Content',
          icon: '📚',
          items: [
            { label: 'Blogs & Insights', path: '/#faq' },
            { label: 'Case Studies', path: '/#why-choose-us' },
            { label: 'Press Releases', path: '/#faq' },
            { label: 'Events', path: '/#faq' },
            { label: 'Webinars', path: '/#faq' },
            { label: 'Videos', path: '/#faq' },
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
            ? 'bg-[#13273D] backdrop-blur-md shadow-lg border-b border-primary-200' 
            : 'bg-[#13273D] backdrop-blur-md'
        }`}
    >
      <nav className="container-custom relative">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0 }}
            >
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src="/logo.png" 
                  alt="Aaitek Logo" 
                  className="h-10 w-auto"
                />
              </Link>
            </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 relative z-50">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/'
                  ? 'text-primary-400'
                  : 'text-white hover:text-primary-400'
              }`}
            >
              Home
            </Link>
            {Object.entries(menuItems).slice(0, 4).map(([key, item]) => (
              <div
                key={key}
                ref={key === 'services' ? servicesMenuRef : null}
                className="relative"
                onMouseEnter={() => {
                  setActiveDropdown(key)
                  if (key === 'services' && servicesMenuRef.current) {
                    const rect = servicesMenuRef.current.getBoundingClientRect()
                    const viewportWidth = window.innerWidth
                    const menuWidth = viewportWidth > 1280 ? 900 : viewportWidth > 1024 ? 800 : 600
                    const leftPosition = (viewportWidth - menuWidth) / 2
                    const topPosition = rect.bottom + 8 // mt-2 = 8px
                    setServicesMenuPosition({ left: leftPosition, top: topPosition })
                  }
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors flex items-center ${
                    location.pathname === item.path
                      ? 'text-primary-400'
                      : 'text-white hover:text-primary-400'
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
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      data-dropdown
                      style={key === 'services' ? { left: `${servicesMenuPosition.left}px`, top: `${servicesMenuPosition.top}px`, position: 'fixed' } : {}}
                      className={`${key === 'services' ? '' : 'absolute top-full mt-2'} ${
                        item.columns.length === 1 
                          ? (key === 'products' || key === 'partner-success' 
                              ? 'right-0 w-80' 
                              : 'left-0 w-80')
                          : key === 'hire-developers'
                          ? 'left-0 w-[400px] md:w-[500px]'
                          : key === 'services'
                          ? 'w-[90vw] max-w-[600px] lg:max-w-[800px] xl:max-w-[900px]'
                          : 'left-0 w-[600px] lg:w-[800px] xl:w-[900px]'
                      } bg-white text-gray-900 shadow-2xl py-6 z-[100] border border-primary-200 rounded-lg`}
                    >
                      <div className={`${item.columns.length === 1 ? 'px-6' : 'px-4 md:px-6 lg:px-8'}`}>
                        <div className={`grid ${
                          item.columns.length === 1 
                            ? 'grid-cols-1' 
                            : key === 'hire-developers'
                            ? 'grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'
                            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'
                        }`}>
                      {item.columns.map((column, colIndex) => (
                          <div key={colIndex} className="min-w-0">
                          <div className="flex items-center mb-4">
                              <span className="text-primary-600 mr-2 text-lg flex-shrink-0">{column.icon}</span>
                              <h3 className="text-base md:text-lg font-semibold text-gray-900 truncate">{column.title}</h3>
                          </div>
                          <ul className="space-y-2">
                            {column.items.map((subItem, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  to={subItem.path}
                                  onClick={(e) => {
                                    if (subItem.path.startsWith('/#')) {
                                      e.preventDefault()
                                      const hash = subItem.path.substring(1)
                                      if (location.pathname !== '/') {
                                        window.location.href = subItem.path
                                      } else {
                                        const element = document.querySelector(hash)
                                        if (element) {
                                          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                        }
                                      }
                                    }
                                    setActiveDropdown(null)
                                  }}
                                    className="text-gray-700 hover:text-primary-600 transition-colors duration-0 text-sm block py-1 break-words"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      </div>
                        {item.columns.length > 1 && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <Link
                          to={item.path}
                          onClick={() => {
                            setActiveDropdown(null)
                          }}
                          className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center"
                        >
                          View All {item.label}
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                        )}
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
                  ? 'text-primary-400'
                  : 'text-white hover:text-primary-400'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/contact'
                  ? 'text-primary-400'
                  : 'text-white hover:text-primary-400'
              }`}
            >
              Contact
            </Link>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0 }}
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
            className={`lg:hidden p-2 text-white`}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
              if (isMenuOpen) {
                setExpandedMobileItem(null)
              }
            }}
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
        <AnimatePresence>
        {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`lg:hidden overflow-hidden border-t bg-[#13273D] border-gray-700`}
              style={{ isolation: 'isolate', willChange: 'auto' }}
            >
              <div className="py-4" style={{ transform: 'translateZ(0)' }}>
                {/* Main Navigation Links */}
                <Link
                  to="/"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setExpandedMobileItem(null)
                  }}
                  className={`block py-3 px-4 text-base font-medium ${
                    location.pathname === '/'
                    ? 'text-primary-400'
                      : 'text-white'
                }`}
                >
                  Home
                </Link>
                {Object.entries(menuItems).slice(0, 4).map(([key, item]) => (
                  <div key={key}>
                    {item.columns ? (
                      <button
                        onClick={() => setExpandedMobileItem(expandedMobileItem === key ? null : key)}
                        className={`w-full flex items-center justify-between py-3 px-4 text-base font-medium ${
                          location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                            ? 'text-primary-400'
                            : 'text-white'
                        }`}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${
                            expandedMobileItem === key ? 'rotate-180' : ''
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
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-3 px-4 text-base font-medium ${
                          location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                            ? 'text-primary-400'
                            : 'text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                {item.columns && (
                      <AnimatePresence>
                        {expandedMobileItem === key && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className={`overflow-hidden bg-[#1a3452]`}
                          >
                            <div className="pl-6 pr-4 pb-3 space-y-1">
                    {item.columns.map((column, colIndex) => (
                                <div key={colIndex} className="mb-3 pt-2">
                                  <div className={`text-sm font-semibold mb-2 text-white`}>
                          {column.icon} {column.title}
                        </div>
                        <ul className="space-y-1">
                                    {column.items.map((subItem, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                to={subItem.path}
                                          onClick={(e) => {
                                            if (subItem.path.startsWith('/#')) {
                                              e.preventDefault()
                                              const hash = subItem.path.substring(1)
                                              if (location.pathname !== '/') {
                                                window.location.href = subItem.path
                                              } else {
                                                const element = document.querySelector(hash)
                                                if (element) {
                                                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                                }
                                              }
                                            }
                                  setIsMenuOpen(false)
                                            setExpandedMobileItem(null)
                                }}
                                          className={`text-sm block py-1.5 text-gray-300 hover:text-white`}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                              <div className="mt-4 pt-3 border-t border-gray-300">
                                <Link
                                  to={item.path}
                                  onClick={() => {
                                    setIsMenuOpen(false)
                                    setExpandedMobileItem(null)
                                  }}
                                  className={`text-sm font-semibold flex items-center text-white`}
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
                )}
              </div>
            ))}
                <Link
                  to="/about"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setExpandedMobileItem(null)
                  }}
                  className={`block py-3 px-4 text-base font-medium ${
                    location.pathname === '/about'
                      ? 'text-primary-400'
                      : 'text-white'
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setExpandedMobileItem(null)
                  }}
                  className={`block py-3 px-4 text-base font-medium ${
                    location.pathname === '/contact'
                      ? 'text-primary-400'
                      : 'text-white'
                  }`}
                >
                  Contact
                </Link>
                <div className="px-4 mt-4">
            <Link
              to="/contact"
                    onClick={() => {
                      setIsMenuOpen(false)
                      setExpandedMobileItem(null)
                    }}
                    className="btn-primary text-sm px-4 py-2 inline-block w-full text-center"
            >
                    Get a Quote
            </Link>
          </div>
              </div>
            </motion.div>
        )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header

