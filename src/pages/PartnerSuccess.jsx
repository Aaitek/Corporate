import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import FilterSidebar from '../components/FilterSidebar'
import SEO from '../components/SEO'
import HeroSection from '../components/HeroSection'

const PartnerSuccess = () => {
  const [filters, setFilters] = useState({
    industry: 'all',
    service: 'all',
    technology: 'all',
    engagementType: 'all',
    year: 'all',
    region: 'all',
  })
  const [searchQuery, setSearchQuery] = useState('')
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

  const handleClearFilters = () => {
    setFilters({
      industry: 'all',
      service: 'all',
      technology: 'all',
      engagementType: 'all',
      year: 'all',
      region: 'all',
    })
    setSearchQuery('')
  }

  // Filter case studies based on filters and search
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(study => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        if (!study.title.toLowerCase().includes(query) && 
            !study.industry.toLowerCase().includes(query) &&
            !study.tech.toLowerCase().includes(query)) {
          return false
        }
      }

      // Filter by industry
      if (filters.industry !== 'all' && study.industry.toLowerCase() !== filters.industry) {
        return false
      }

      // Filter by technology
      if (filters.technology !== 'all' && study.tech.toLowerCase() !== filters.technology) {
        return false
      }

      return true
    })
  }, [filters, searchQuery, caseStudies])

  const siteUrl = 'https://aaitek.com.au'

  return (
    <>
      <SEO
        seoTitle="Partner Success - Case Studies & Client Stories | Aaitek"
        seoDescription="Enterprise-grade outcomes, measurable impact, delivery reliability. Case studies, client success stories, platform migrations, and AI & automation outcomes."
        canonicalUrl={`${siteUrl}/partner-success`}
        ogTitle="Partner Success - Case Studies & Client Stories"
        ogDescription="Enterprise-grade outcomes, measurable impact, delivery reliability. Built for stakeholders and audits."
        ogImage="https://aaitek.com.au/logo.png"
        ogType="website"
        twitterTitle="Partner Success - Case Studies & Client Stories"
        twitterDescription="Enterprise-grade outcomes, measurable impact, delivery reliability."
        twitterImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
        schemaType="CollectionPage"
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section */}
      {/* TODO: Connect to Strapi Global Settings or Page Settings to fetch heroImage */}
      <HeroSection
        badge="Partner Success"
        title="Partner Success"
        description="Partner Success is where Aaitek demonstrates how we deliver value in the real world — across industries, platforms, and technologies. This section focuses on outcomes, decisions, and lessons learned."
        image={null}
        gradient="from-primary-600 via-primary-700 to-accent-600"
        className="py-8 sm:py-12"
      />

      {/* Main Content with Sidebar */}
      <section ref={ref} className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-white via-blue-50/30 to-white">
        <div className="container-custom 2xl:ml-[250px] 2xl:mr-[250px]">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Filter Sidebar - appears first on mobile, last on desktop */}
            <FilterSidebar
              filters={filters}
              filterOptions={filterOptions}
              onFilterChange={handleFilterChange}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onClearFilters={handleClearFilters}
              title="Filter Content"
            />
            
            {/* Main Content */}
            <div className="flex-1">
              {/* Case Studies Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-12"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                      📚
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">Case Studies</h2>
                      <p className="text-lg font-semibold text-primary-600">End-to-End Delivery Stories</p>
                    </div>
                  </div>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    View All Case Studies
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <p className="text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
                  Deep dives into how Aaitek partnered with organisations to solve complex challenges — from discovery to delivery.
                </p>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl shadow-md mb-8">
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

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {caseStudies.slice(0, 4).map((study, index) => (
                    <motion.div
                      key={study.slug}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group"
                    >
                      <Link
                        to={`/case-study/${study.slug}`}
                        className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-primary-400 h-full"
                      >
                        {study.image && (
                          <div className="relative h-56 overflow-hidden">
                            <img
                              src={study.image}
                              alt={study.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-20`}></div>
                            <div className="absolute top-4 right-4">
                              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900">
                                {study.status}
                              </span>
                            </div>
                          </div>
                        )}
                        <div className="p-6 lg:p-8">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center text-2xl lg:text-3xl shadow-lg`}>
                              {study.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap gap-2 text-xs lg:text-sm text-gray-600 mb-2">
                                <span className="px-2.5 py-1 bg-gray-100 rounded-full font-medium">{study.industry}</span>
                                <span className="px-2.5 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">{study.tech}</span>
                              </div>
                            </div>
                          </div>
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                            {study.title}
                          </h3>
                          <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                            Read Case Study
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 lg:p-8 border-2 border-gray-200 hover:border-primary-400 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${story.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${story.color} rounded-2xl flex items-center justify-center text-3xl lg:text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {story.icon}
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-bold shadow-md border border-amber-200">
                      {story.status}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-xs lg:text-sm font-semibold rounded-lg">
                      {story.outcome}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {migrations.map((migration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 lg:p-8 border-2 border-gray-200 hover:border-primary-400 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${migration.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${migration.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${migration.color} rounded-2xl flex items-center justify-center text-3xl lg:text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {migration.icon}
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-bold shadow-md border border-amber-200">
                      {migration.status}
                      </span>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs lg:text-sm font-semibold rounded-lg">
                      {migration.type}
                      </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {aiOutcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 lg:p-8 border-2 border-gray-200 hover:border-primary-400 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${outcome.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${outcome.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${outcome.color} rounded-2xl flex items-center justify-center text-3xl lg:text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {outcome.icon}
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-bold shadow-md border border-amber-200">
                      {outcome.status}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-xs lg:text-sm font-semibold rounded-lg">
                      {outcome.impact}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
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
    </>
  )
}

export default PartnerSuccess
