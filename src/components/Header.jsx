import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [expandedMobileItem, setExpandedMobileItem] = useState(null)
  const [servicesMenuPosition, setServicesMenuPosition] = useState({ left: 0, top: 0 })
  const [dropdownPositions, setDropdownPositions] = useState({})
  const location = useLocation()
  const servicesMenuRef = useRef(null)
  const dropdownRefs = useRef({})
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const updateDropdownPositions = () => {
      if (!activeDropdown) return
      
      const positions = {}
      const viewportWidth = window.innerWidth
      
      // Update services position (already centered)
      if (activeDropdown === 'services' && servicesMenuRef.current) {
        const rect = servicesMenuRef.current.getBoundingClientRect()
        const menuWidth = Math.min(1160, viewportWidth - 24)
        const leftPosition = (viewportWidth - menuWidth) / 2
        const topPosition = rect.bottom + 12
        positions.services = { left: leftPosition, top: topPosition }
        setServicesMenuPosition({ left: leftPosition, top: topPosition })
      }
      
      // Update all other dropdown positions to center them
      Object.keys(dropdownRefs.current).forEach(key => {
        if (activeDropdown === key && dropdownRefs.current[key]) {
          const menuItem = dropdownRefs.current[key]
          const rect = menuItem.getBoundingClientRect()
          
          // Determine menu width based on type
          let menuWidth = 900
          if (key === 'services') {
            menuWidth = Math.min(1160, viewportWidth - 24)
          } else if (key === 'hire-talent' || key === 'products' || key === 'academy' || key === 'industries' || key === 'partner-success' || key === 'resources' || key === 'company') {
            menuWidth = Math.min(900, viewportWidth - 24)
          } else {
            menuWidth = Math.min(640, viewportWidth - 24)
          }
          
          const leftPosition = Math.max(12, (viewportWidth - menuWidth) / 2)
          const topPosition = rect.bottom + 12
          positions[key] = { left: leftPosition, top: topPosition }
        }
      })
      
      if (Object.keys(positions).length > 0) {
        setDropdownPositions(prev => ({ ...prev, ...positions }))
      }
    }
    
    const handleResize = () => updateDropdownPositions()
    const handleScroll = () => updateDropdownPositions()
    
    // Small delay to ensure refs are set
    setTimeout(updateDropdownPositions, 0)
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeDropdown])

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside any dropdown and menu items
      const dropdowns = document.querySelectorAll('[data-dropdown]')
      const menuItems = document.querySelectorAll('[data-menu-item]')
      let clickedOutside = true
      
      dropdowns.forEach(dropdown => {
        if (dropdown.contains(event.target)) {
          clickedOutside = false
        }
      })
      
      menuItems.forEach(menuItem => {
        if (menuItem.contains(event.target)) {
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // Measure header height and set CSS variable on document.documentElement
  // Using useLayoutEffect to set before first paint
  useLayoutEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight
        document.documentElement.style.setProperty('--header-height', `${height}px`)
      }
    }

    // Initial measurement
    updateHeaderHeight()

    // Update on resize
    window.addEventListener('resize', updateHeaderHeight)
    
    // Update when menu opens/closes (mobile menu might change height)
    const timeoutId = setTimeout(updateHeaderHeight, 100)

    return () => {
      window.removeEventListener('resize', updateHeaderHeight)
      clearTimeout(timeoutId)
    }
  }, [isMenuOpen])

  const menuItems = {
    services: {
      label: 'Services',
      path: '/services',
      icon: '▦',
      tagline: 'Outcome-driven, capability-led, enterprise-safe',
      businessStages: [
        {
          title: 'Enterprise',
          description: 'Complex systems. Governance & scale.',
          icon: '🏢',
          path: '/services/enterprise',
        },
        {
          title: 'Growth Companies',
          description: 'Optimise, integrate, accelerate.',
          icon: '📈',
          path: '/services/growth',
        },
        {
          title: 'Startups',
          description: 'From idea to market, fast.',
          icon: '🚀',
          path: '/services/startups',
        },
      ],
      columns: [
        {
          title: 'Product & Experience',
          icon: '🚀',
          items: [
            { label: 'UX & UI Design', path: '/services/ux-ui-design' },
            { label: 'Web Platform Development', path: '/services/web-platform-development' },
            { label: 'Mobile Application Development', path: '/services/mobile-app-development' },
            { label: 'eCommerce Solutions', path: '/services/ecommerce-solutions' },
            { label: 'Product Discovery & Strategy', path: '/services/product-discovery-strategy' },
            { label: 'Interactive & Immersive Experiences', path: '/services/interactive-immersive' },
          ],
        },
        {
          title: 'Software Engineering',
          icon: '</>',
          items: [
            { label: 'Custom Software Development', path: '/services/custom-software-development' },
            { label: 'API & Integration Engineering', path: '/services/api-integration-engineering' },
            { label: 'Enterprise System Integration', path: '/services/enterprise-system-integration' },
            { label: 'Legacy Modernisation', path: '/services/legacy-modernisation' },
            { label: 'Bespoke Application Development', path: '/services/bespoke-application-development' },
          ],
        },
        {
          title: 'Cloud & DevOps',
          icon: '☁️',
          items: [
            { label: 'Cloud Architecture & Strategy', path: '/services/cloud-architecture-strategy' },
            { label: 'Cloud Migration & Modernisation', path: '/services/cloud-migration-modernisation' },
            { label: 'Managed Cloud Hosting', path: '/services/managed-cloud-hosting' },
            { label: 'DevOps & CI/CD Automation', path: '/services/devops-cicd-automation' },
            { label: 'Cloud Security & Governance', path: '/services/cloud-security-governance' },
          ],
        },
        {
          title: 'Data & AI',
          icon: '🤖',
          items: [
            { label: 'Data Engineering & Pipelines', path: '/services/data-engineering-pipelines' },
            { label: 'AI & Machine Learning Solutions', path: '/services/ai-machine-learning' },
            { label: 'Intelligent Automation', path: '/services/intelligent-automation' },
            { label: 'Advanced Analytics & Insights', path: '/services/advanced-analytics-insights' },
            { label: 'AI Governance & Responsible AI', path: '/services/ai-governance-responsible-ai' },
          ],
        },
        {
          title: 'Digital Growth',
          icon: '📈',
          items: [
            { label: 'Search & AI-Driven Optimisation', path: '/services/search-ai-optimisation' },
            { label: 'Performance & Paid Marketing', path: '/services/performance-paid-marketing' },
            { label: 'Social & Brand Growth', path: '/services/social-brand-growth' },
            { label: 'Online Reputation Management', path: '/services/online-reputation-management' },
            { label: 'Conversion Optimisation (CRO)', path: '/services/conversion-optimisation-cro' },
          ],
        },
        {
          title: 'Managed Services',
          icon: '🛠️',
          items: [
            { label: 'Application Support & Maintenance', path: '/services/application-support-maintenance' },
            { label: 'Platform Optimisation', path: '/services/platform-optimisation' },
            { label: 'Development Support Services', path: '/services/development-support-services' },
            { label: 'Digital Operations & Delivery', path: '/services/digital-operations-delivery' },
            { label: 'IT Support & Managed Services', path: '/services/it-support-managed-services' },
          ],
        },
        {
          title: 'Enterprise Platforms',
          icon: '🏢',
          items: [
            { label: 'CMS & Digital Experience Platforms', path: '/services/cms-digital-experience-platforms' },
            { label: 'CRM Platforms', path: '/services/crm-platforms' },
            { label: 'ServiceNow Solutions', path: '/services/servicenow-solutions' },
            { label: 'ERP & Enterprise Systems', path: '/services/erp-enterprise-systems' },
          ],
        },
      ],
      // All services for "View All" page
      allServices: [
        // Product & Experience
        { label: 'UX & UI Design', path: '/services/ux-ui-design', category: 'Product & Experience' },
        { label: 'Web Platform Development', path: '/services/web-platform-development', category: 'Product & Experience' },
        { label: 'Mobile Application Development', path: '/services/mobile-app-development', category: 'Product & Experience' },
        { label: 'eCommerce Solutions', path: '/services/ecommerce-solutions', category: 'Product & Experience' },
        { label: 'Product Discovery & Strategy', path: '/services/product-discovery-strategy', category: 'Product & Experience' },
        { label: 'Interactive & Immersive Experiences', path: '/services/interactive-immersive', category: 'Product & Experience' },
        // Software Engineering
        { label: 'Custom Software Development', path: '/services/custom-software-development', category: 'Software Engineering' },
        { label: 'API & Integration Engineering', path: '/services/api-integration-engineering', category: 'Software Engineering' },
        { label: 'Enterprise System Integration', path: '/services/enterprise-system-integration', category: 'Software Engineering' },
        { label: 'Legacy Modernisation', path: '/services/legacy-modernisation', category: 'Software Engineering' },
        { label: 'Bespoke Application Development', path: '/services/bespoke-application-development', category: 'Software Engineering' },
        // Cloud & DevOps
        { label: 'Cloud Architecture & Strategy', path: '/services/cloud-architecture-strategy', category: 'Cloud & DevOps' },
        { label: 'Cloud Migration & Modernisation', path: '/services/cloud-migration-modernisation', category: 'Cloud & DevOps' },
        { label: 'Managed Cloud Hosting', path: '/services/managed-cloud-hosting', category: 'Cloud & DevOps' },
        { label: 'DevOps & CI/CD Automation', path: '/services/devops-cicd-automation', category: 'Cloud & DevOps' },
        { label: 'Cloud Security & Governance', path: '/services/cloud-security-governance', category: 'Cloud & DevOps' },
        // Data & AI
        { label: 'Data Engineering & Pipelines', path: '/services/data-engineering-pipelines', category: 'Data & AI' },
        { label: 'AI & Machine Learning Solutions', path: '/services/ai-machine-learning', category: 'Data & AI' },
        { label: 'Intelligent Automation', path: '/services/intelligent-automation', category: 'Data & AI' },
        { label: 'Advanced Analytics & Insights', path: '/services/advanced-analytics-insights', category: 'Data & AI' },
        { label: 'AI Governance & Responsible AI', path: '/services/ai-governance-responsible-ai', category: 'Data & AI' },
        // Digital Growth
        { label: 'Search & AI-Driven Optimisation', path: '/services/search-ai-optimisation', category: 'Digital Growth' },
        { label: 'Performance & Paid Marketing', path: '/services/performance-paid-marketing', category: 'Digital Growth' },
        { label: 'Social & Brand Growth', path: '/services/social-brand-growth', category: 'Digital Growth' },
        { label: 'Online Reputation Management', path: '/services/online-reputation-management', category: 'Digital Growth' },
        { label: 'Conversion Optimisation (CRO)', path: '/services/conversion-optimisation-cro', category: 'Digital Growth' },
        // Managed Services
        { label: 'Application Support & Maintenance', path: '/services/application-support-maintenance', category: 'Managed Services' },
        { label: 'Platform Optimisation', path: '/services/platform-optimisation', category: 'Managed Services' },
        { label: 'Development Support Services', path: '/services/development-support-services', category: 'Managed Services' },
        { label: 'Digital Operations & Delivery', path: '/services/digital-operations-delivery', category: 'Managed Services' },
        { label: 'IT Support & Managed Services', path: '/services/it-support-managed-services', category: 'Managed Services' },
        // Enterprise Platforms
        { label: 'CMS & Digital Experience Platforms', path: '/services/cms-digital-experience-platforms', category: 'Enterprise Platforms' },
        { label: 'CRM Platforms', path: '/services/crm-platforms', category: 'Enterprise Platforms' },
        { label: 'ServiceNow Solutions', path: '/services/servicenow-solutions', category: 'Enterprise Platforms' },
        { label: 'ERP & Enterprise Systems', path: '/services/erp-enterprise-systems', category: 'Enterprise Platforms' },
      ],
    },
    products: {
      label: 'Products',
      path: '/products',
      description: 'Modular AI solutions built on Aaitek delivery standards — designed for scale, security, and measurable ROI.',
      pill: 'IP-driven',
      icon: '⊞',
      columns: [
        {
          title: 'AI Agents',
          icon: '🤖',
          items: [
            { label: 'AI Sales Agent', path: '/products/ai-sales-agent' },
            { label: 'AI Booking Agent', path: '/products/ai-booking-agent' },
            { label: 'AI Trade Strategy Agent', path: '/products/ai-trade-strategy-agent' },
            { label: 'AI Restaurant Agent', path: '/products/ai-restaurant-agent' },
            { label: 'AI Real Estate Agent', path: '/products/ai-real-estate-agent' },
            { label: 'AI Dental Assistant', path: '/products/ai-dental-assistant' },
            { label: 'AI Field Service Agent', path: '/products/ai-field-service-agent' },
          ],
        },
        {
          title: 'Platforms',
          icon: '⚙️',
          items: [
            { label: 'AI Automation Platform (Coming soon)', path: '/products' },
            { label: 'Enterprise Integration Hub (Coming soon)', path: '/products' },
            { label: 'Industry AI Accelerators (Coming soon)', path: '/products' },
          ],
        },
      ],
    },
    academy: {
      label: 'Academy',
      path: '/academy',
      description: 'Premium training pathways for engineers and enterprise teams — designed for delivery readiness, not theory.',
      pill: 'Authority',
      icon: '🏛',
      columns: [
        {
          title: 'Engineering',
          icon: '💻',
          items: [
            { label: 'Full-Stack Engineering', path: '/academy/full-stack-engineering' },
            { label: 'Cloud Engineering', path: '/academy/cloud-engineering' },
            { label: 'Data & AI Engineering', path: '/academy/data-ai-engineering' },
            { label: 'DevOps & Platform Engineering', path: '/academy/devops-platform-engineering' },
          ],
        },
        {
          title: 'Enterprise Technologies',
          icon: '🏢',
          items: [
            { label: 'Salesforce', path: '/academy/salesforce' },
            { label: 'SAP', path: '/academy/sap' },
            { label: 'ServiceNow', path: '/academy/servicenow' },
            { label: 'CMS & DXP Platforms', path: '/academy/cms-dxp-platforms' },
          ],
        },
        {
          title: 'Security & Governance',
          icon: '🔒',
          items: [
            { label: 'Cybersecurity Foundations', path: '/academy/cybersecurity-foundations' },
            { label: 'Cloud Security', path: '/academy/cloud-security' },
            { label: 'AI Governance', path: '/academy/ai-governance' },
            { label: 'Compliance & Risk Management', path: '/academy/compliance-risk-management' },
          ],
        },
        {
          title: 'Corporate Training',
          icon: '📚',
          items: [
            { label: 'Custom Enterprise Programs', path: '/academy/custom-enterprise-programs' },
          ],
        },
      ],
    },
    industries: {
      label: 'Industries',
      path: '/industries',
      description: 'Industry pages connect problems → services → proof. Built for enterprise buyers and regulated environments.',
      pill: 'Domain-led',
      icon: '📊',
      columns: null, // Only category, no subcategories
      items: [
        { label: 'Sports & Media', path: '/industries/sports-media' },
        { label: 'Financial Services & Insurance', path: '/industries/financial-services-insurance' },
        { label: 'Real Estate', path: '/industries/real-estate' },
        { label: 'Retail & eCommerce', path: '/industries/retail-ecommerce' },
        { label: 'Healthcare & Life Sciences', path: '/industries/healthcare-life-sciences' },
        { label: 'Education & EdTech', path: '/industries/education-edtech' },
        { label: 'Energy & Utilities', path: '/industries/energy-utilities' },
        { label: 'Government & Public Sector', path: '/industries/government-public-sector' },
      ],
    },
    'hire-talent': {
      label: 'Hire Talent',
      path: '/hire-developers',
      description: 'Premium onshore/offshore delivery with strong governance. Scale teams fast without compromising quality.',
      pill: 'Flexible',
      icon: '👤',
      columns: [
        {
          title: 'Engagement Models',
          icon: '👥',
          items: [
            { label: 'Staff Augmentation', path: '/hire-developers' },
            { label: 'Dedicated Teams', path: '/hire-developers' },
            { label: 'On-Demand Support', path: '/hire-developers' },
          ],
        },
        {
          title: 'Expertise',
          icon: '💻',
          items: [
            { label: 'Frontend & Full-Stack Engineering', path: '/hire-developers' },
            { label: 'Backend & API Engineering', path: '/hire-developers' },
            { label: 'Cloud & DevOps', path: '/hire-developers' },
            { label: 'Data & AI', path: '/hire-developers' },
            { label: 'Enterprise Platforms', path: '/hire-developers' },
          ],
        },
      ],
    },
    'partner-success': {
      label: 'Partner Success',
      path: '/partner-success',
      description: 'Enterprise-grade outcomes, measurable impact, delivery reliability. Built for stakeholders and audits.',
      pill: 'Proof',
      icon: '📄',
      columns: null, // Only category, no subcategories
      items: [
        { label: 'Case Studies', path: '/partner-success' },
        { label: 'Client Success Stories', path: '/partner-success' },
        { label: 'Platform Migrations', path: '/partner-success' },
        { label: 'AI & Automation Outcomes', path: '/partner-success' },
      ],
    },
    resources: {
      label: 'Resources',
      path: '/resources',
      description: 'Practical playbooks, AI trends, platform engineering insights, and real delivery learnings.',
      pill: 'Inbound',
      icon: '📄',
      columns: null, // Only category, no subcategories
      items: [
        { label: 'Insights & Articles', path: '/resources' },
        { label: 'Case Studies', path: '/resources' },
        { label: 'Press Releases', path: '/resources' },
        { label: 'Webinars & Events', path: '/resources' },
        { label: 'Videos & Media', path: '/resources' },
      ],
    },
    company: {
      label: 'Company',
      path: '/company',
      description: 'A premium technology partner focused on modern platforms, AI-first solutions, and enterprise-grade delivery.',
      pill: 'Trust',
      icon: '🏢',
      columns: null, // Only category, no subcategories
      items: [
        { label: 'About Aaitek', path: '/company' },
        { label: 'Why Aaitek', path: '/company' },
        { label: 'Careers', path: '/careers' },
        { label: 'Brand Guidelines', path: '/brand-guidelines' },
        { label: 'Contact', path: '/contact' },
      ],
    },
  }

  return (
    <motion.header
      ref={headerRef}
      initial={false}
      data-header="main"
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#13273D] backdrop-blur-md shadow-lg' 
          : 'bg-[#13273D] backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-[250px] relative w-full max-w-[1920px]">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 relative w-full">
          {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0 }}
              className="flex-shrink-0 z-10 relative -ml-2 sm:-ml-3 xl:-ml-4"
            >
              <Link to="/" className="flex items-center space-x-1 sm:space-x-2">
                <img 
                  src="/logo.png" 
                  alt="Aaitek Logo" 
                  className="h-8 sm:h-9 md:h-10 w-auto block"
                />
              </Link>
            </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 2xl:space-x-4 relative z-[100] ml-4 xl:ml-6 2xl:ml-8">
            {Object.entries(menuItems).map(([key, item]) => (
              <div
                key={key}
                ref={(el) => {
                  if (key === 'services') {
                    servicesMenuRef.current = el
                  }
                  if ((item.columns || item.items) && el) {
                    dropdownRefs.current[key] = el
                  }
                }}
                className="relative flex-shrink-0"
                data-menu-item
              >
                {(item.columns || item.items) ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      const newActiveState = activeDropdown === key ? null : key
                      setActiveDropdown(newActiveState)
                    }}
                    className={`text-[10px] lg:text-xs xl:text-sm font-medium transition-colors flex items-center whitespace-nowrap ${
                      location.pathname === item.path
                        ? 'text-primary-400'
                        : 'text-white hover:text-primary-400'
                    }`}
                    aria-expanded={activeDropdown === key}
                    aria-haspopup="true"
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
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-[10px] lg:text-xs xl:text-sm font-medium transition-colors flex items-center whitespace-nowrap ${
                      location.pathname === item.path
                        ? 'text-primary-400'
                        : 'text-white hover:text-primary-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {activeDropdown === key && (item.columns || item.items) && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      data-dropdown
                      onClick={(e) => e.stopPropagation()}
                      style={
                        dropdownPositions[key] 
                          ? { 
                              left: `${dropdownPositions[key].left}px`, 
                              top: `${dropdownPositions[key].top}px`, 
                              position: 'fixed' 
                            }
                          : key === 'services' && servicesMenuPosition.left
                          ? {
                              left: `${servicesMenuPosition.left}px`,
                              top: `${servicesMenuPosition.top}px`,
                              position: 'fixed'
                            }
                          : { position: 'absolute' }
                      }
                      className={`${
                        item.columns 
                          ? (item.columns.length === 1 
                              ? 'w-80'
                              : key === 'services'
                              ? 'w-[min(1160px,calc(100vw-24px))]'
                              : 'w-[min(900px,calc(100vw-24px))]')
                          : key === 'industries' || key === 'partner-success' || key === 'resources' || key === 'company'
                          ? 'w-[min(900px,calc(100vw-24px))]'
                          : 'w-64'
                      } bg-white text-gray-900 border-2 border-primary-300 shadow-2xl z-[100] rounded-[18px]`}
                    >
                      {key === 'services' && item.businessStages ? (
                        // Special 4-column layout for Services with dark theme
                        <div className="p-3.5">
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                            {/* First Column - Stages */}
                            <div className="p-3.5 rounded-2xl border-2 border-primary-300 bg-primary-50 shadow-sm">
                              {item.tagline && (
                                <p className="text-xs font-semibold text-primary-700 mb-3 leading-relaxed">
                                  {item.tagline}
                                </p>
                              )}
                              <div className="flex items-center justify-between gap-2.5 mb-2.5">
                                <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2.5 m-0">
                                  <svg className="w-5.5 h-5.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                    <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
                                    <path d="M9 3.5v17M15 3.5v17M3.5 9h17M3.5 15h17" />
                                  </svg>
                                  Stages
                                </h3>
                                <span className="text-xs text-primary-700 px-2.5 py-1.5 rounded-full border border-primary-300 bg-primary-100">
                                  Outcome-led
                                </span>
                              </div>
                              
                              <div className="flex flex-col gap-2.5 mt-2.5">
                                {item.businessStages.map((stage, stageIndex) => (
                                  <Link
                                    key={stageIndex}
                                    to={stage.path}
                                    onClick={() => setActiveDropdown(null)}
                                    className="flex gap-3 p-3 rounded-2xl border-2 border-primary-200 bg-white hover:bg-primary-50 hover:border-primary-400 transition-all shadow-sm hover:shadow-md"
                                  >
                                    <span className="text-xl flex-shrink-0">{stage.icon}</span>
                                    <div>
                                      <h4 className="text-sm font-semibold text-gray-900 m-0">{stage.title}</h4>
                                      <p className="text-xs text-gray-600 mt-0.75 m-0">{stage.description}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>

                              <div className="flex items-center justify-between gap-3 mt-3 pt-3 border-t border-primary-200">
                                <span className="text-xs text-gray-600 leading-relaxed">Pick a stage, then a capability.</span>
                                <Link
                                  to="/services"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-xs font-black text-primary-600 hover:text-primary-700 transition-colors"
                                >
                                  View all services →
                                </Link>
                              </div>
                            </div>

                            {/* Next 3 Columns - Service Categories */}
                            {item.columns.slice(0, 3).map((column, colIndex) => (
                              <div key={colIndex} className="p-3.5 rounded-2xl border-2 border-primary-200 bg-white shadow-sm">
                                <h4 className="text-xs font-semibold text-gray-900 mb-2.5 flex items-center gap-2.5 m-0">
                                  <span className="text-base">{column.icon}</span>
                                  {column.title}
                                </h4>
                                <div className="flex flex-col gap-2">
                                  {column.items.map((subItem, itemIndex) => (
                                    <Link
                                      key={itemIndex}
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
                                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl border border-primary-200 bg-white text-gray-700 hover:bg-primary-50 hover:border-primary-400 hover:text-primary-600 text-xs leading-tight transition-all shadow-sm hover:shadow-md"
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : item.columns ? (
                        // Dark theme layout for multi-column menus with special first column
                        <div className="p-3.5">
                          <div className={`grid gap-3 ${
                            item.columns.length === 1 
                              ? 'grid-cols-1' 
                              : (item.description || item.pill)
                              ? 'grid-cols-1 md:grid-cols-3'
                              : key === 'hire-talent'
                              ? 'grid-cols-1 md:grid-cols-2'
                              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                          }`}>
                            {/* Special first column with description and pill */}
                            {(item.description || item.pill) && (
                              <div className="p-3.5 rounded-2xl border-2 border-primary-300 bg-primary-50 shadow-sm">
                                <div className="flex items-center justify-between gap-2.5 mb-2.5">
                                  <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2.5 m-0">
                                    {item.icon && <span className="text-lg">{item.icon}</span>}
                                    {item.label}
                                  </h3>
                                  {item.pill && (
                                    <span className="text-xs text-primary-700 px-2.5 py-1.5 rounded-full border border-primary-300 bg-primary-100">
                                      {item.pill}
                                    </span>
                                  )}
                                </div>
                                {item.description && (
                                  <p className="text-xs text-gray-600 leading-relaxed mt-2.5 mb-0">
                                    {item.description}
                                  </p>
                                )}
                                <div className="flex items-center justify-between gap-3 mt-3 pt-3 border-t border-primary-200">
                                  <span className="text-xs text-gray-600 leading-relaxed">
                                    {key === 'products' ? 'Request a demo anytime.' : 
                                     key === 'academy' ? 'Custom corporate programs available.' :
                                     key === 'hire-talent' ? 'Need a team in 7–14 days.' :
                                     key === 'partner-success' ? 'Want references?' :
                                     key === 'resources' ? 'New content weekly.' :
                                     key === 'company' ? 'Join the mission.' : 'Explore all options.'}
                                  </span>
                                  <Link
                                    to={item.path}
                                    onClick={() => {
                                      setActiveDropdown(null)
                                    }}
                                    className="text-xs font-black text-primary-600 hover:text-primary-700 transition-colors"
                                  >
                                    {key === 'products' ? 'View products →' :
                                     key === 'academy' ? 'View academy →' :
                                     key === 'hire-talent' ? 'View hiring →' :
                                     key === 'partner-success' ? 'Case studies →' :
                                     key === 'resources' ? 'Browse all →' :
                                     key === 'company' ? 'Careers →' : `View all ${item.label.toLowerCase()} →`}
                                  </Link>
                                </div>
                              </div>
                            )}
                            {/* Regular columns */}
                            {item.columns.map((column, colIndex) => (
                              <div key={colIndex} className="p-3.5 rounded-2xl border-2 border-primary-200 bg-white shadow-sm">
                                <h4 className="text-xs font-semibold text-gray-900 mb-2.5 flex items-center gap-2.5 m-0">
                                  <span className="text-base">{column.icon}</span>
                                  {column.title}
                                </h4>
                                <div className="flex flex-col gap-2">
                                  {column.items.map((subItem, itemIndex) => (
                                    <Link
                                      key={itemIndex}
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
                                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl border border-primary-200 bg-white text-gray-700 hover:bg-primary-50 hover:border-primary-400 hover:text-primary-600 text-xs leading-tight transition-all shadow-sm hover:shadow-md"
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : item.items ? (
                        // Dark theme layout for simple list menus with special first column
                        <div className="p-3.5">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {/* Special first column with description and pill */}
                            {(item.description || item.pill) && (
                              <div className="p-3.5 rounded-2xl border-2 border-primary-300 bg-primary-50 shadow-sm">
                                <div className="flex items-center justify-between gap-2.5 mb-2.5">
                                  <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2.5 m-0">
                                    {item.icon && <span className="text-lg">{item.icon}</span>}
                                    {item.label}
                                  </h3>
                                  {item.pill && (
                                    <span className="text-xs text-primary-700 px-2.5 py-1.5 rounded-full border border-primary-300 bg-primary-100">
                                      {item.pill}
                                    </span>
                                  )}
                                </div>
                                {item.description && (
                                  <p className="text-xs text-gray-600 leading-relaxed mt-2.5 mb-0">
                                    {item.description}
                                  </p>
                                )}
                                <div className="flex items-center justify-between gap-3 mt-3 pt-3 border-t border-primary-200">
                                  <span className="text-xs text-gray-600 leading-relaxed">
                                    {key === 'industries' ? "Need a niche? We'll tailor." :
                                     key === 'partner-success' ? 'Want references?' :
                                     key === 'resources' ? 'New content weekly.' :
                                     key === 'company' ? 'Join the mission.' : 'Explore all options.'}
                                  </span>
                                  <Link
                                    to={item.path}
                                    onClick={() => {
                                      setActiveDropdown(null)
                                    }}
                                    className="text-xs font-black text-primary-600 hover:text-primary-700 transition-colors"
                                  >
                                    {key === 'industries' ? 'View industries →' :
                                     key === 'partner-success' ? 'Case studies →' :
                                     key === 'resources' ? 'Browse all →' :
                                     key === 'company' ? 'Careers →' : `View all ${item.label.toLowerCase()} →`}
                                  </Link>
                                </div>
                              </div>
                            )}
                            {/* Items list columns */}
                            <div className={`p-3.5 rounded-2xl border-2 border-primary-200 bg-white shadow-sm ${item.description ? 'md:col-span-2' : ''}`}>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {item.items.map((subItem, itemIndex) => (
                                  <Link
                                    key={itemIndex}
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
                                    className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl border border-primary-200 bg-white text-gray-700 hover:bg-primary-50 hover:border-primary-400 hover:text-primary-600 text-xs leading-tight transition-all shadow-sm hover:shadow-md"
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0 }}
              className="hidden lg:block flex-shrink-0 ml-4 xl:ml-6 2xl:ml-8"
            >
              <Link
                to="/contact"
                className="btn-primary text-[10px] lg:text-xs xl:text-sm px-2.5 lg:px-3 xl:px-4 2xl:px-6 py-1.5 lg:py-2 whitespace-nowrap"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white z-[10000] flex items-center justify-end ml-auto relative bg-transparent border-none cursor-pointer min-w-[40px] min-h-[40px]"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
              if (isMenuOpen) {
                setExpandedMobileItem(null)
              }
            }}
            aria-label="Toggle menu"
            type="button"
          >
            <svg
              className="w-6 h-6 text-white block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ stroke: '#ffffff', strokeWidth: 2 }}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Full-Screen Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-[10000]"
              style={{ pointerEvents: 'auto' }}
            >
              {/* Semi-transparent Backdrop */}
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm z-[10001]"
                onClick={() => {
                  setIsMenuOpen(false)
                  setExpandedMobileItem(null)
                }}
              />

              {/* Mobile Menu Drawer */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="fixed top-0 right-0 h-screen w-[min(320px,85vw)] bg-gradient-to-b from-[#0a1018] via-[#0f1621] to-[#0a1018] border-l border-white/20 shadow-[0_20px_70px_rgba(0,0,0,0.55)] flex flex-col overflow-hidden z-[10002]"
                onClick={(e) => e.stopPropagation()}
              >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-3.5 border-b border-white/20 bg-[#0f1621]">
                <Link 
                  to="/" 
                  onClick={() => {
                    setIsMenuOpen(false)
                    setExpandedMobileItem(null)
                  }}
                  className="flex items-center gap-2"
                >
                  <img 
                    src="/logo.png" 
                    alt="Aaitek Logo" 
                    className="h-8 w-auto block"
                  />
                </Link>
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    setExpandedMobileItem(null)
                  }}
                  className="p-2 rounded-xl border border-white/10 bg-white/4 hover:bg-white/8 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-4 relative z-10 flex flex-col" style={{ WebkitOverflowScrolling: 'touch' }}>
                {/* Expandable Navigation Items */}
                {Object.entries(menuItems).slice(0, 5).map(([key, item]) => (
                  <div key={key} className="mb-2 block relative z-10">
                    {(item.columns || item.items) ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setExpandedMobileItem(expandedMobileItem === key ? null : key)}
                          className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl border border-white/30 bg-[#1a2332] hover:bg-[#233040] transition-all text-white font-semibold text-sm leading-tight shadow-xl backdrop-blur-sm"
                        >
                          <div className="flex items-center gap-2.5">
                            {key === 'services' ? (
                              <svg className="w-4 h-4 text-[#2f8edc]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
                                <path d="M9 3.5v17M15 3.5v17M3.5 9h17M3.5 15h17" />
                              </svg>
                            ) : key === 'products' ? (
                              <svg className="w-4 h-4 text-[#2f8edc]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <rect x="4" y="4" width="7" height="7" rx="2" />
                                <rect x="13" y="4" width="7" height="7" rx="2" />
                                <rect x="4" y="13" width="7" height="7" rx="2" />
                                <rect x="13" y="13" width="7" height="7" rx="2" />
                              </svg>
                            ) : key === 'academy' ? (
                              <svg className="w-4 h-4 text-[#2f8edc]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path d="M4 7h7v13H4z" />
                                <path d="M13 7h7v13h-7z" />
                                <circle cx="12" cy="9.5" r="1.9" fill="#2f8edc" />
                              </svg>
                            ) : key === 'industries' ? (
                              <svg className="w-4 h-4 text-[#2f8edc]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <rect x="4" y="9" width="5" height="11" rx="2" />
                                <rect x="10" y="5" width="5" height="15" rx="2" />
                                <rect x="16" y="11" width="4" height="9" rx="2" />
                              </svg>
                            ) : key === 'hire-talent' ? (
                              <svg className="w-4 h-4 text-[#2f8edc]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <circle cx="12" cy="12" r="3.8" />
                                <circle cx="5.3" cy="6.2" r="2.2" />
                                <circle cx="18.7" cy="6.2" r="2.2" />
                                <circle cx="12" cy="12" r="1.7" fill="#2f8edc" />
                              </svg>
                            ) : (
                              <span className="text-base text-[#2f8edc]">{item.icon || '▦'}</span>
                            )}
                            <span>{item.label}</span>
                          </div>
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              expandedMobileItem === key ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {expandedMobileItem === key && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden block"
                            >
                              <div className="pt-2 pl-3 pr-3 pb-2 space-y-2 flex flex-col">
                                {item.columns ? (
                                  <>
                                    {item.columns.map((column, colIndex) => (
                                      <div key={colIndex} className="mb-3 block">
                                        <div className="text-xs font-bold text-white/90 uppercase tracking-wider mb-2 px-3 py-1.5 bg-[#151c28] border border-white/25 rounded-lg inline-block">
                                          {column.title}
                                        </div>
                                        <div className="space-y-1.5 flex flex-col">
                                          {column.items.slice(0, 3).map((subItem, itemIndex) => (
                                            <Link
                                              key={itemIndex}
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
                                              className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg border border-white/20 bg-[#151c28] text-white hover:bg-[#1e2836] hover:border-white/35 hover:text-white text-xs transition-all font-medium shadow-sm"
                                              style={{ display: 'flex' }}
                                            >
                                              <span className="text-sm flex-shrink-0">{column.icon}</span>
                                              <span className="flex-1">{subItem.label}</span>
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                    {/* View All Link */}
                                    <Link
                                      to={item.path}
                                      onClick={() => {
                                        setIsMenuOpen(false)
                                        setExpandedMobileItem(null)
                                      }}
                                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-[#2f8edc]/50 bg-[#2f8edc]/20 hover:bg-[#2f8edc]/30 text-white font-semibold text-sm transition-all mt-3"
                                    >
                                      <span>View All {item.label}</span>
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                      </svg>
                                    </Link>
                                  </>
                                ) : item.items ? (
                                  <>
                                    <div className="space-y-1.5 flex flex-col">
                                      {item.items.slice(0, 4).map((subItem, itemIndex) => (
                                        <Link
                                          key={itemIndex}
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
                                          className="flex items-center gap-2.5 py-2.5 px-3 rounded-xl border border-white/20 bg-[#151c28] text-white/90 hover:bg-[#1e2836] hover:border-white/30 hover:text-white text-sm transition-all font-medium shadow-sm"
                                          style={{ display: 'flex' }}
                                        >
                                          <span className="flex-1">{subItem.label}</span>
                                        </Link>
                                      ))}
                                    </div>
                                    {/* View All Link */}
                                    <Link
                                      to={item.path}
                                      onClick={() => {
                                        setIsMenuOpen(false)
                                        setExpandedMobileItem(null)
                                      }}
                                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-[#2f8edc]/50 bg-[#2f8edc]/20 hover:bg-[#2f8edc]/30 text-white font-semibold text-sm transition-all mt-3"
                                    >
                                      <span>View All {item.label}</span>
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                      </svg>
                                    </Link>
                                  </>
                                ) : null}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : null}
                  </div>
                ))}

                {/* Direct Navigation Links */}
                {Object.entries(menuItems).slice(5).map(([key, item]) => (
                  <Link
                    key={key}
                    to={item.path}
                    onClick={() => {
                      setIsMenuOpen(false)
                      setExpandedMobileItem(null)
                    }}
                    className="flex items-center gap-2.5 py-2.5 px-3 rounded-xl border border-white/30 bg-[#1a2332] hover:bg-[#233040] transition-all text-white font-semibold text-sm leading-tight mb-2 shadow-xl backdrop-blur-sm"
                  >
                    {key === 'partner-success' ? (
                      <svg className="w-4 h-4 text-[#2f8edc]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <rect x="5" y="4" width="14" height="16" rx="3" />
                        <path d="M8 8h8M8 12h6M8 16h7" />
                      </svg>
                    ) : key === 'resources' ? (
                      <svg className="w-4 h-4 text-[#2f8edc]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M6 6h12v14H6z" />
                        <path d="M9 9h6M9 12h6M9 15h4" />
                      </svg>
                    ) : key === 'company' ? (
                      <svg className="w-4 h-4 text-[#2f8edc]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    ) : (
                      <span className="text-base text-[#2f8edc]">{item.icon || '▦'}</span>
                    )}
                    <span>{item.label === 'Partner Success' ? 'Partner Success / Case Studies' : item.label}</span>
                  </Link>
                ))}

                {/* Get a Quote CTA */}
                <Link
                  to="/contact"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setExpandedMobileItem(null)
                  }}
                  className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl border-2 border-[#2f8edc]/70 bg-[#2f8edc]/40 hover:bg-[#2f8edc]/50 transition-all text-white font-bold text-sm leading-tight mt-4 shadow-xl backdrop-blur-sm"
                  style={{ display: 'flex' }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <span>Get a Quote</span>
                </Link>
              </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header

