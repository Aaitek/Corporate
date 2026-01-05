import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Resources = () => {
  const [filters, setFilters] = useState({
    contentType: 'all',
    industry: 'all',
    serviceArea: 'all',
    technology: 'all',
    audience: 'all',
    year: 'all',
  })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filterOptions = {
    contentType: ['All Types', 'Article', 'Case Study', 'Video', 'Press', 'Webinar'],
    industry: ['All Industries', 'Finance', 'Sports', 'Healthcare', 'Government', 'Retail', 'Real Estate', 'Education', 'Energy'],
    serviceArea: ['All Services', 'Engineering', 'Cloud', 'AI', 'DevOps', 'Platforms', 'Data', 'Security'],
    technology: ['All Technologies', 'Sitecore', 'Salesforce', 'AWS', 'Azure', 'AI', 'React', 'Node.js', 'ServiceNow'],
    audience: ['All Audiences', 'CTO', 'Product', 'Business', 'Engineering'],
    year: ['All Years', '2024', '2023', '2022', '2021'],
  }

  const insightsArticles = [
    {
      title: 'Designing Enterprise-Ready AI Solutions',
      status: 'Coming Soon',
      color: 'from-blue-500 to-cyan-500',
      icon: '🤖',
      type: 'Article',
    },
    {
      title: 'Lessons Learned from Large-Scale Platform Migrations',
      status: 'Coming Soon',
      color: 'from-purple-500 to-pink-500',
      icon: '📚',
      type: 'Article',
    },
    {
      title: 'When Headless Architecture Makes Sense (and When It Doesn\'t)',
      status: 'Coming Soon',
      color: 'from-green-500 to-emerald-500',
      icon: '🏗️',
      type: 'Article',
    },
    {
      title: 'Avoiding Common Pitfalls in Cloud Modernisation',
      status: 'Coming Soon',
      color: 'from-orange-500 to-red-500',
      icon: '☁️',
      type: 'Article',
    },
  ]

  const caseStudies = [
    {
      title: 'Enterprise CMS Modernisation for a Public Sector Organisation',
      status: 'Coming Soon',
      color: 'from-blue-500 to-cyan-500',
      icon: '🏛️',
      type: 'Case Study',
    },
    {
      title: 'AI-Driven Automation for Operational Efficiency',
      status: 'Coming Soon',
      color: 'from-purple-500 to-pink-500',
      icon: '⚡',
      type: 'Case Study',
    },
    {
      title: 'Cloud Migration for a High-Traffic Platform',
      status: 'Coming Soon',
      color: 'from-green-500 to-emerald-500',
      icon: '☁️',
      type: 'Case Study',
    },
  ]

  const pressReleases = [
    {
      title: 'Aaitek Announces Launch of AI Agent Portfolio',
      status: 'Coming Soon',
      color: 'from-indigo-500 to-blue-500',
      icon: '📢',
      type: 'Press Release',
    },
    {
      title: 'Strategic Partnership with Enterprise Platform Provider',
      status: 'Coming Soon',
      color: 'from-teal-500 to-cyan-500',
      icon: '🤝',
      type: 'Press Release',
    },
    {
      title: 'Expansion of Aaitek Academy Programs',
      status: 'Coming Soon',
      color: 'from-pink-500 to-rose-500',
      icon: '🎓',
      type: 'Press Release',
    },
  ]

  const webinarsEvents = [
    {
      title: 'AI in Enterprise Platforms: Practical Applications',
      status: 'Coming Soon',
      color: 'from-purple-500 to-pink-500',
      icon: '🎥',
      type: 'Webinar',
    },
    {
      title: 'Modernising Legacy Systems Without Disruption',
      status: 'Coming Soon',
      color: 'from-blue-500 to-cyan-500',
      icon: '🔄',
      type: 'Webinar',
    },
    {
      title: 'Responsible AI Adoption in Regulated Industries',
      status: 'Coming Soon',
      color: 'from-green-500 to-emerald-500',
      icon: '🛡️',
      type: 'Webinar',
    },
  ]

  const videosMedia = [
    {
      title: 'Introduction to Aaitek AI Agents',
      status: 'Coming Soon',
      color: 'from-orange-500 to-red-500',
      icon: '🎬',
      type: 'Video',
    },
    {
      title: 'Understanding Enterprise Integration Architectures',
      status: 'Coming Soon',
      color: 'from-indigo-500 to-blue-500',
      icon: '🏗️',
      type: 'Video',
    },
    {
      title: 'Platform Strategy Explained',
      status: 'Coming Soon',
      color: 'from-teal-500 to-cyan-500',
      icon: '📊',
      type: 'Video',
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
              <span className="text-2xl">📚</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider">Resources</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
            >
              Resources
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
              Insights, Knowledge, and Perspectives from the Field
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              The Resources section is where Aaitek shares practical insights, delivery experience, and industry perspectives — drawn from real projects, evolving technology trends, and enterprise delivery learnings.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed"
            >
              This is not promotional content. It is designed to educate, inform, and build trust.
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
            
            {/* Content Type Filter */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative w-full sm:w-auto min-w-[140px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl px-3 py-2.5 shadow-md border-2 border-gray-200 group-hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-lg">📄</span>
                  <select
                    value={filters.contentType}
                    onChange={(e) => handleFilterChange('contentType', e.target.value)}
                    className="flex-1 appearance-none bg-transparent border-0 text-gray-700 font-semibold text-xs md:text-sm focus:outline-none cursor-pointer pr-6"
                  >
                    {filterOptions.contentType.map((option, idx) => (
                      <option key={idx} value={idx === 0 ? 'all' : option.toLowerCase().replace(/\s+/g, '-')}>
                        {idx === 0 ? 'Content Type' : option}
                      </option>
                    ))}
                  </select>
                  <svg className="w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Industry Filter */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative w-full sm:w-auto min-w-[140px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl px-3 py-2.5 shadow-md border-2 border-gray-200 group-hover:border-purple-400 group-hover:shadow-lg transition-all duration-300 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20">
                <div className="flex items-center gap-2.5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-base shadow-md group-hover:scale-110 transition-transform duration-300">
                    🏢
                  </div>
                  <select
                    value={filters.industry}
                    onChange={(e) => handleFilterChange('industry', e.target.value)}
                    className="flex-1 appearance-none bg-transparent border-0 text-gray-700 font-semibold text-xs md:text-sm focus:outline-none cursor-pointer pr-6 group-hover:text-purple-600 transition-colors duration-300"
                  >
                    {filterOptions.industry.map((option, idx) => (
                      <option key={idx} value={idx === 0 ? 'all' : option.toLowerCase()}>
                        {idx === 0 ? 'Industry' : option}
                      </option>
                    ))}
                  </select>
                  <motion.svg 
                    className="w-4 h-4 text-gray-400 group-hover:text-purple-500 pointer-events-none transition-colors duration-300" 
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

            {/* Service Area Filter */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative w-full sm:w-auto min-w-[140px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl px-3 py-2.5 shadow-md border-2 border-gray-200 group-hover:border-green-400 group-hover:shadow-lg transition-all duration-300 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-500/20">
                <div className="flex items-center gap-2.5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-base shadow-md group-hover:scale-110 transition-transform duration-300">
                    ⚙️
                  </div>
                  <select
                    value={filters.serviceArea}
                    onChange={(e) => handleFilterChange('serviceArea', e.target.value)}
                    className="flex-1 appearance-none bg-transparent border-0 text-gray-700 font-semibold text-xs md:text-sm focus:outline-none cursor-pointer pr-6 group-hover:text-green-600 transition-colors duration-300"
                  >
                    {filterOptions.serviceArea.map((option, idx) => (
                      <option key={idx} value={idx === 0 ? 'all' : option.toLowerCase()}>
                        {idx === 0 ? 'Service Area' : option}
                      </option>
                    ))}
                  </select>
                  <motion.svg 
                    className="w-4 h-4 text-gray-400 group-hover:text-green-500 pointer-events-none transition-colors duration-300" 
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

            {/* Technology Filter */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative w-full sm:w-auto min-w-[140px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl px-3 py-2.5 shadow-md border-2 border-gray-200 group-hover:border-orange-400 group-hover:shadow-lg transition-all duration-300 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20">
                <div className="flex items-center gap-2.5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-base shadow-md group-hover:scale-110 transition-transform duration-300">
                    💻
                  </div>
                  <select
                    value={filters.technology}
                    onChange={(e) => handleFilterChange('technology', e.target.value)}
                    className="flex-1 appearance-none bg-transparent border-0 text-gray-700 font-semibold text-xs md:text-sm focus:outline-none cursor-pointer pr-6 group-hover:text-orange-600 transition-colors duration-300"
                  >
                    {filterOptions.technology.map((option, idx) => (
                      <option key={idx} value={idx === 0 ? 'all' : option.toLowerCase()}>
                        {idx === 0 ? 'Technology' : option}
                      </option>
                    ))}
                  </select>
                  <motion.svg 
                    className="w-4 h-4 text-gray-400 group-hover:text-orange-500 pointer-events-none transition-colors duration-300" 
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

            {/* Audience Filter */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative w-full sm:w-auto min-w-[140px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl px-3 py-2.5 shadow-md border-2 border-gray-200 group-hover:border-indigo-400 group-hover:shadow-lg transition-all duration-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20">
                <div className="flex items-center gap-2.5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-base shadow-md group-hover:scale-110 transition-transform duration-300">
                    👥
                  </div>
                  <select
                    value={filters.audience}
                    onChange={(e) => handleFilterChange('audience', e.target.value)}
                    className="flex-1 appearance-none bg-transparent border-0 text-gray-700 font-semibold text-xs md:text-sm focus:outline-none cursor-pointer pr-6 group-hover:text-indigo-600 transition-colors duration-300"
                  >
                    {filterOptions.audience.map((option, idx) => (
                      <option key={idx} value={idx === 0 ? 'all' : option.toLowerCase()}>
                        {idx === 0 ? 'Audience' : option}
                      </option>
                    ))}
                  </select>
                  <motion.svg 
                    className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 pointer-events-none transition-colors duration-300" 
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

            {/* Year Filter */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative w-full sm:w-auto min-w-[120px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl px-3 py-2.5 shadow-md border-2 border-gray-200 group-hover:border-teal-400 group-hover:shadow-lg transition-all duration-300 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/20">
                <div className="flex items-center gap-2.5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-base shadow-md group-hover:scale-110 transition-transform duration-300">
                    📅
                  </div>
                  <select
                    value={filters.year}
                    onChange={(e) => handleFilterChange('year', e.target.value)}
                    className="flex-1 appearance-none bg-transparent border-0 text-gray-700 font-semibold text-xs md:text-sm focus:outline-none cursor-pointer pr-6 group-hover:text-teal-600 transition-colors duration-300"
                  >
                    {filterOptions.year.map((option, idx) => (
                      <option key={idx} value={idx === 0 ? 'all' : option}>
                        {idx === 0 ? 'Year' : option}
                      </option>
                    ))}
                  </select>
                  <motion.svg 
                    className="w-4 h-4 text-gray-400 group-hover:text-teal-500 pointer-events-none transition-colors duration-300" 
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

      {/* Insights & Articles Section */}
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
                📝
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">Insights & Articles</h2>
                <p className="text-lg font-semibold text-blue-600">Expert Perspectives on Technology, Delivery, and Industry Trends</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mb-4 leading-relaxed">
              Long-form and short-form articles written by Aaitek practitioners, architects, and consultants.
            </p>
            <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-2">Content Guidelines:</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    • Practical and experience-driven • Balanced, not hype-heavy • Opinion-backed with reasoning • Written for decision-makers and senior practitioners
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    <strong>Filters:</strong> Industry • Technology • Service Area • Audience Level
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insightsArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03, rotate: 1 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 border-2 border-gray-200 hover:border-primary-400 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${article.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${article.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {article.icon}
                    </div>
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-bold shadow-md border border-amber-200">
                      {article.status}
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-lg">
                      {article.type}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-purple-50/30 to-white">
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
                📊
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">Case Studies</h2>
                <p className="text-lg font-semibold text-purple-600">Real Delivery Stories and Measurable Outcomes</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mb-4 leading-relaxed">
              In-depth accounts of how Aaitek partnered with organisations to solve complex challenges. This section may overlap with Partner Success but focuses on deeper delivery detail.
            </p>
            <div className="mt-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-2">Content Guidelines:</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    • Clear problem → approach → outcome structure • Honest about complexity and trade-offs • Focus on decisions, not just tools
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    <strong>Filters:</strong> Industry • Platform / Technology • Engagement Type • Region
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03, rotate: -1 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-200 hover:border-primary-400 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
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
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-lg">
                      {study.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                    {study.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-indigo-50/30 to-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                📢
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">Press Releases</h2>
                <p className="text-lg font-semibold text-indigo-600">Company News, Announcements, and Official Updates</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mb-4 leading-relaxed">
              Formal announcements related to Aaitek milestones, partnerships, launches, and initiatives.
            </p>
            <div className="mt-6 p-6 bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-2xl shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📰</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-2">Content Guidelines:</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    • Clear, concise, factual • No marketing language • Written for media, partners, and stakeholders
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    <strong>Filters:</strong> Announcement Type • Year • Region
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((press, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03, rotate: 1 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-200 hover:border-primary-400 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${press.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${press.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${press.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {press.icon}
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-bold shadow-md border border-amber-200">
                      {press.status}
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg">
                      {press.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                    {press.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars & Events Section */}
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
                🎥
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">Webinars & Events</h2>
                <p className="text-lg font-semibold text-green-600">Live and On-Demand Sessions with Industry Experts</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mb-4 leading-relaxed">
              Educational webinars, panel discussions, and event recordings hosted or sponsored by Aaitek.
            </p>
            <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-2">Content Guidelines:</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    • Educational, not sales-led • Focus on real-world problems and solutions • Include speakers and key takeaways
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    <strong>Filters:</strong> Live / On-Demand • Topic • Industry • Speaker
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinarsEvents.map((webinar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03, rotate: -1 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-200 hover:border-primary-400 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${webinar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${webinar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${webinar.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {webinar.icon}
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-bold shadow-md border border-amber-200">
                      {webinar.status}
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-lg">
                      {webinar.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                    {webinar.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos & Media Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-orange-50/30 to-white">
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
                🎬
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">Videos & Media</h2>
                <p className="text-lg font-semibold text-orange-600">Visual Content, Demos, and Thought Leadership</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mb-4 leading-relaxed">
              Short and long-form video content showcasing insights, product overviews, demos, and expert commentary.
            </p>
            <div className="mt-6 p-6 bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-2">Content Types:</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    • Expert explainers • Product walkthroughs • Architecture overviews • Event highlights
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    <strong>Filters:</strong> Video Type • Topic • Duration • Audience
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videosMedia.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03, rotate: 1 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-200 hover:border-primary-400 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${video.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${video.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${video.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {video.icon}
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-bold shadow-md border border-amber-200">
                      {video.status}
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-lg">
                      {video.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                    {video.title}
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
              Stay Informed with Aaitek Resources
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get practical insights and expert perspectives delivered to your inbox
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Subscribe to Updates
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

export default Resources
