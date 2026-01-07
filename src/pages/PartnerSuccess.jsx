import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const PartnerSuccess = () => {
  const [filters, setFilters] = useState({
    industry: 'all',
    service: 'all',
    technology: 'all',
    engagementType: 'all',
    year: 'all',
    region: 'all',
  })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filterOptions = {
    industry: ['All Industries', 'Finance', 'Sports', 'Healthcare', 'Government', 'Retail', 'Real Estate', 'Education', 'Energy'],
    service: ['All Services', 'Engineering', 'Cloud', 'AI', 'DevOps', 'Platforms', 'Data', 'Security'],
    technology: ['All Technologies', 'Sitecore', 'Salesforce', 'AWS', 'Azure', 'AI', 'React', 'Node.js', 'ServiceNow'],
    engagementType: ['All Types', 'Delivery', 'Migration', 'Support', 'Advisory'],
    year: ['All Years', '2024', '2023', '2022', '2021'],
    region: ['All Regions', 'Australia', 'APAC', 'Global'],
  }

  const caseStudies = [
    {
      title: 'Enterprise DXP Modernisation for a Public Sector Organisation',
      slug: 'enterprise-dxp-modernisation-public-sector',
      status: 'Coming Soon',
      color: 'from-blue-500 to-cyan-500',
      icon: '🏛️',
      industry: 'Government',
      tech: 'DXP',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    },
    {
      title: 'AI-Driven Platform for Customer Engagement in Financial Services',
      slug: 'ai-driven-platform-financial-services',
      status: 'Coming Soon',
      color: 'from-purple-500 to-pink-500',
      icon: '🤖',
      industry: 'Finance',
      tech: 'AI',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
    {
      title: 'Cloud Migration for a High-Traffic Media Platform',
      slug: 'cloud-migration-high-traffic-media',
      status: 'Coming Soon',
      color: 'from-green-500 to-emerald-500',
      icon: '☁️',
      industry: 'Media',
      tech: 'Cloud',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    },
  ]

  const successStories = [
    {
      title: 'Supporting a National Enterprise with Long-Term Platform Optimisation',
      status: 'Coming Soon',
      color: 'from-orange-500 to-red-500',
      icon: '📈',
      outcome: 'Long-term Partnership',
    },
    {
      title: 'Scaling a Digital Product with Dedicated Engineering Support',
      status: 'Coming Soon',
      color: 'from-indigo-500 to-blue-500',
      icon: '🚀',
      outcome: 'Scalable Growth',
    },
    {
      title: 'Trusted Delivery Partner for Multi-Year Transformation Program',
      status: 'Coming Soon',
      color: 'from-teal-500 to-cyan-500',
      icon: '🤝',
      outcome: 'Transformation',
    },
  ]

  const migrations = [
    {
      title: 'Migrating a Large CMS to a Headless Architecture',
      status: 'Coming Soon',
      color: 'from-blue-500 to-cyan-500',
      icon: '🔄',
      type: 'CMS Migration',
    },
    {
      title: 'From On-Prem to Cloud: Lessons from a Phased Migration',
      status: 'Coming Soon',
      color: 'from-green-500 to-emerald-500',
      icon: '☁️',
      type: 'Cloud Migration',
    },
    {
      title: 'Reducing Risk in Enterprise Platform Transitions',
      status: 'Coming Soon',
      color: 'from-purple-500 to-pink-500',
      icon: '🛡️',
      type: 'Risk Mitigation',
    },
  ]

  const aiOutcomes = [
    {
      title: 'Using AI Agents to Improve Customer Response Times',
      status: 'Coming Soon',
      color: 'from-purple-500 to-pink-500',
      icon: '⚡',
      impact: 'Faster Response',
    },
    {
      title: 'Automation in Enterprise Workflows: What Worked, What Didn\'t',
      status: 'Coming Soon',
      color: 'from-orange-500 to-red-500',
      icon: '⚙️',
      impact: 'Workflow Automation',
    },
    {
      title: 'Introducing AI Responsibly in Regulated Industries',
      status: 'Coming Soon',
      color: 'from-indigo-500 to-blue-500',
      icon: '🎯',
      impact: 'Responsible AI',
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value,
    }))
  }

  return (
    <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 mb-8 shadow-xl"
            >
              <span className="text-2xl">🎯</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider">Partner Success</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
            >
              Partner Success
            </motion.h1>
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div className="h-1 w-16 bg-gradient-to-r from-transparent to-white/50"></div>
              <span className="text-3xl">✨</span>
              <div className="h-1 w-16 bg-gradient-to-l from-transparent to-white/50"></div>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 max-w-3xl mx-auto leading-tight"
            >
              Real Outcomes. Real Partnerships. Real Impact.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Partner Success is where Aaitek demonstrates how we deliver value in the real world — across industries, platforms, and technologies.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed"
            >
              This section focuses on outcomes, decisions, and lessons learned, not just features or deliverables.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Global Filters */}
      <section className="py-4 md:py-5 bg-gradient-to-br from-white via-primary-50/30 to-white border-b-2 border-gray-200 sticky top-[80px] z-40 shadow-lg backdrop-blur-md">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-2 justify-center">
            {/* Filter Label */}
            <div className="flex items-center gap-2 mb-2 md:mb-0 md:mr-2">
              <span className="text-2xl">🔍</span>
              <span className="text-xs md:text-sm font-bold text-gray-700 uppercase tracking-wider hidden sm:inline">Filter:</span>
            </div>
            
            {/* Industry Filter */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative w-full sm:w-auto min-w-[120px] sm:min-w-[140px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl px-2.5 sm:px-3 py-2 sm:py-2.5 shadow-md border-2 border-gray-200 group-hover:border-blue-400 group-hover:shadow-lg transition-all duration-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 min-h-[44px]">
                {/* Select element - covers entire area */}
                <select
                  value={filters.industry}
                  onChange={(e) => handleFilterChange('industry', e.target.value)}
                  className="absolute inset-0 w-full h-full appearance-none bg-transparent border-0 cursor-pointer opacity-0 z-10"
                >
                  {filterOptions.industry.map((option, idx) => (
                    <option key={idx} value={idx === 0 ? 'all' : option.toLowerCase()}>
                      {idx === 0 ? 'Industry' : option}
                    </option>
                  ))}
                </select>
                
                {/* Visual content */}
                <div className="flex items-center gap-2 sm:gap-2.5 pointer-events-none relative z-0 min-h-[44px]">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm sm:text-base shadow-md group-hover:scale-110 transition-transform duration-300">
                    🏢
                  </div>
                  <span className="flex-1 text-gray-700 font-semibold text-xs sm:text-sm group-hover:text-blue-600 transition-colors duration-300 truncate min-w-0">
                    {filters.industry === 'all' ? 'Industry' : filterOptions.industry.find((opt, idx) => idx > 0 && opt.toLowerCase() === filters.industry) || 'Industry'}
                  </span>
                  <motion.svg 
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
              </div>
            </motion.div>

            {/* Service Filter */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative w-full sm:w-auto min-w-[120px] sm:min-w-[140px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl px-2.5 sm:px-3 py-2 sm:py-2.5 shadow-md border-2 border-gray-200 group-hover:border-purple-400 group-hover:shadow-lg transition-all duration-300 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20 min-h-[44px]">
                <select
                  value={filters.service}
                  onChange={(e) => handleFilterChange('service', e.target.value)}
                  className="absolute inset-0 w-full h-full appearance-none bg-transparent border-0 cursor-pointer opacity-0 z-10"
                >
                  {filterOptions.service.map((option, idx) => (
                    <option key={idx} value={idx === 0 ? 'all' : option.toLowerCase()}>
                      {idx === 0 ? 'Service' : option}
                    </option>
                  ))}
                </select>
                <div className="flex items-center gap-2 sm:gap-2.5 pointer-events-none relative z-0 min-h-[44px]">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm sm:text-base shadow-md group-hover:scale-110 transition-transform duration-300">
                    ⚙️
                  </div>
                  <span className="flex-1 text-gray-700 font-semibold text-xs sm:text-sm group-hover:text-purple-600 transition-colors duration-300 truncate min-w-0">
                    {filters.service === 'all' ? 'Service' : filterOptions.service.find((opt, idx) => idx > 0 && opt.toLowerCase() === filters.service) || 'Service'}
                  </span>
                  <motion.svg 
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-purple-500 transition-colors duration-300 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
              </div>
            </motion.div>

            {/* Technology Filter */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative w-full sm:w-auto min-w-[120px] sm:min-w-[140px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl px-2.5 sm:px-3 py-2 sm:py-2.5 shadow-md border-2 border-gray-200 group-hover:border-green-400 group-hover:shadow-lg transition-all duration-300 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-500/20 min-h-[44px]">
                <select
                  value={filters.technology}
                  onChange={(e) => handleFilterChange('technology', e.target.value)}
                  className="absolute inset-0 w-full h-full appearance-none bg-transparent border-0 cursor-pointer opacity-0 z-10"
                >
                  {filterOptions.technology.map((option, idx) => (
                    <option key={idx} value={idx === 0 ? 'all' : option.toLowerCase()}>
                      {idx === 0 ? 'Technology' : option}
                    </option>
                  ))}
                </select>
                <div className="flex items-center gap-2 sm:gap-2.5 pointer-events-none relative z-0 min-h-[44px]">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-sm sm:text-base shadow-md group-hover:scale-110 transition-transform duration-300">
                    💻
                  </div>
                  <span className="flex-1 text-gray-700 font-semibold text-xs sm:text-sm group-hover:text-green-600 transition-colors duration-300 truncate min-w-0">
                    {filters.technology === 'all' ? 'Technology' : filterOptions.technology.find((opt, idx) => idx > 0 && opt.toLowerCase() === filters.technology) || 'Technology'}
                  </span>
                  <motion.svg 
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-green-500 transition-colors duration-300 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
              </div>
            </motion.div>

            {/* Engagement Type Filter */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative w-full sm:w-auto min-w-[120px] sm:min-w-[140px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl px-2.5 sm:px-3 py-2 sm:py-2.5 shadow-md border-2 border-gray-200 group-hover:border-orange-400 group-hover:shadow-lg transition-all duration-300 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 min-h-[44px]">
                <select
                  value={filters.engagementType}
                  onChange={(e) => handleFilterChange('engagementType', e.target.value)}
                  className="absolute inset-0 w-full h-full appearance-none bg-transparent border-0 cursor-pointer opacity-0 z-10"
                >
                  {filterOptions.engagementType.map((option, idx) => (
                    <option key={idx} value={idx === 0 ? 'all' : option.toLowerCase()}>
                      {idx === 0 ? 'Engagement' : option}
                    </option>
                  ))}
                </select>
                <div className="flex items-center gap-2 sm:gap-2.5 pointer-events-none relative z-0 min-h-[44px]">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-sm sm:text-base shadow-md group-hover:scale-110 transition-transform duration-300">
                    🤝
                  </div>
                  <span className="flex-1 text-gray-700 font-semibold text-xs sm:text-sm group-hover:text-orange-600 transition-colors duration-300 truncate min-w-0">
                    {filters.engagementType === 'all' ? 'Engagement' : filterOptions.engagementType.find((opt, idx) => idx > 0 && opt.toLowerCase() === filters.engagementType) || 'Engagement'}
                  </span>
                  <motion.svg 
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-orange-500 transition-colors duration-300 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
              </div>
            </motion.div>

            {/* Year Filter */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative w-full sm:w-auto min-w-[100px] sm:min-w-[120px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl px-2.5 sm:px-3 py-2 sm:py-2.5 shadow-md border-2 border-gray-200 group-hover:border-indigo-400 group-hover:shadow-lg transition-all duration-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 min-h-[44px]">
                <select
                  value={filters.year}
                  onChange={(e) => handleFilterChange('year', e.target.value)}
                  className="absolute inset-0 w-full h-full appearance-none bg-transparent border-0 cursor-pointer opacity-0 z-10"
                >
                  {filterOptions.year.map((option, idx) => (
                    <option key={idx} value={idx === 0 ? 'all' : option}>
                      {idx === 0 ? 'Year' : option}
                    </option>
                  ))}
                </select>
                <div className="flex items-center gap-2 sm:gap-2.5 pointer-events-none relative z-0 min-h-[44px]">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm sm:text-base shadow-md group-hover:scale-110 transition-transform duration-300">
                    📅
                  </div>
                  <span className="flex-1 text-gray-700 font-semibold text-xs sm:text-sm group-hover:text-indigo-600 transition-colors duration-300 truncate min-w-0">
                    {filters.year === 'all' ? 'Year' : filters.year}
                  </span>
                  <motion.svg 
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-indigo-500 transition-colors duration-300 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
              </div>
            </motion.div>

            {/* Region Filter */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative w-full sm:w-auto min-w-[120px] sm:min-w-[140px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl px-2.5 sm:px-3 py-2 sm:py-2.5 shadow-md border-2 border-gray-200 group-hover:border-teal-400 group-hover:shadow-lg transition-all duration-300 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/20 min-h-[44px]">
                <select
                  value={filters.region}
                  onChange={(e) => handleFilterChange('region', e.target.value)}
                  className="absolute inset-0 w-full h-full appearance-none bg-transparent border-0 cursor-pointer opacity-0 z-10"
                >
                  {filterOptions.region.map((option, idx) => (
                    <option key={idx} value={idx === 0 ? 'all' : option.toLowerCase()}>
                      {idx === 0 ? 'Region' : option}
                    </option>
                  ))}
                </select>
                <div className="flex items-center gap-2 sm:gap-2.5 pointer-events-none relative z-0 min-h-[44px]">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm sm:text-base shadow-md group-hover:scale-110 transition-transform duration-300">
                    🌍
                  </div>
                  <span className="flex-1 text-gray-700 font-semibold text-xs sm:text-sm group-hover:text-teal-600 transition-colors duration-300 truncate min-w-0">
                    {filters.region === 'all' ? 'Region' : filterOptions.region.find((opt, idx) => idx > 0 && opt.toLowerCase() === filters.region) || 'Region'}
                  </span>
                  <motion.svg 
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-teal-500 transition-colors duration-300 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section ref={ref} className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-blue-50/30 to-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                📚
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">Case Studies</h2>
                <p className="text-lg font-semibold text-primary-600">End-to-End Delivery Stories</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mb-4 leading-relaxed">
              Deep dives into how Aaitek partnered with organisations to solve complex challenges — from discovery to delivery.
            </p>
            <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-2">What Each Case Study Includes:</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Client context (industry & challenge) • What was at risk / what needed to change • Aaitek's approach and solution • Technology and architecture overview • Outcomes and measurable impact • Lessons learned
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link
                key={index}
                to={`/case-study/${study.slug}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03, rotate: 1 }}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-primary-400 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {/* Image */}
                  {study.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${study.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          {study.icon}
                        </div>
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-bold shadow-md border border-amber-200">
                          {study.status}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg mb-2">
                          {study.industry}
                        </span>
                        <span className="inline-block ml-2 px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-lg">
                          {study.tech}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                        {study.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-green-50/30 to-white">
        <div className="container-custom">
                <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                ⭐
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">Client Success Stories</h2>
                <p className="text-lg font-semibold text-green-600">Short, Outcome-Focused Success Highlights</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mb-4 leading-relaxed">
              These are lighter than case studies — focused on results, trust, and partnership, often written in collaboration with clients.
            </p>
            <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-2">What Each Story Covers:</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Client goal • Aaitek's role • Key outcome achieved • Ongoing partnership value
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03, rotate: -1 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-200 hover:border-primary-400 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${story.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${story.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {story.icon}
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-bold shadow-md border border-amber-200">
                      {story.status}
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-xs font-semibold rounded-lg">
                      {story.outcome}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                    {story.title}
                </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Migrations Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-purple-50/30 to-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                🔄
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">Platform Migrations</h2>
                <p className="text-lg font-semibold text-purple-600">Modernising Legacy Systems at Scale</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mb-4 leading-relaxed">
              Focused content around complex migrations, re-platforming, and modernisation initiatives.
            </p>
            <div className="mt-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📖</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-2">Topics Covered:</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    CMS & DXP migrations (monolith → headless) • Cloud and infrastructure modernisation • Legacy application refactoring • Risk mitigation and phased delivery
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrations.map((migration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03, rotate: 1 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-200 hover:border-primary-400 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${migration.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${migration.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${migration.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {migration.icon}
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-bold shadow-md border border-amber-200">
                      {migration.status}
                      </span>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-semibold rounded-lg">
                      {migration.type}
                      </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                    {migration.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Automation Outcomes Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-orange-50/30 to-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                🤖
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">AI & Automation Outcomes</h2>
                <p className="text-lg font-semibold text-orange-600">Where AI Delivers Measurable Business Value</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mb-4 leading-relaxed">
              This page focuses on practical AI, not hype — showing where automation and intelligence genuinely improved outcomes.
            </p>
            <div className="mt-6 p-6 bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-2">Topics Covered:</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    AI agents in real workflows • Automation reducing operational cost • Data-driven decision support • Responsible AI adoption
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiOutcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03, rotate: -1 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-200 hover:border-primary-400 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${outcome.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${outcome.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${outcome.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {outcome.icon}
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-bold shadow-md border border-amber-200">
                      {outcome.status}
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-xs font-semibold rounded-lg">
                      {outcome.impact}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                    {outcome.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Talk to Us About a Similar Challenge
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help you achieve similar outcomes
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

export default PartnerSuccess
