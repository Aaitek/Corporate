import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FilterSidebar from '../components/FilterSidebar'
import SEO from '../components/SEO'

const Webinars = () => {
  const [filters, setFilters] = useState({
    topic: 'all',
    industry: 'all',
    year: 'all',
    type: 'all',
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const filterOptions = {
    topic: ['All Topics', 'AI & Automation', 'Cloud Migration', 'Platform Strategy', 'Digital Transformation', 'Architecture'],
    industry: ['All Industries', 'Finance', 'Healthcare', 'Government', 'Retail', 'Education'],
    year: ['All Years', '2024', '2023', '2022', '2021'],
    type: ['All Types', 'Live', 'On-Demand', 'Recorded'],
  }

  const webinars = [
    {
      title: 'AI in Enterprise Platforms: Practical Applications',
      slug: 'ai-enterprise-platforms-practical-applications',
      status: 'Coming Soon',
      color: 'from-purple-500 to-pink-500',
      icon: '🎥',
      type: 'Webinar',
      topic: 'AI & Automation',
      industry: 'Finance',
      year: '2024',
      webinarType: 'On-Demand',
      description: 'Explore practical applications of AI in enterprise platforms with real-world examples and implementation strategies.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    },
    {
      title: 'Modernising Legacy Systems Without Disruption',
      slug: 'modernising-legacy-systems-without-disruption',
      status: 'Coming Soon',
      color: 'from-blue-500 to-cyan-500',
      icon: '🔄',
      type: 'Webinar',
      topic: 'Cloud Migration',
      industry: 'Government',
      year: '2024',
      webinarType: 'Live',
      description: 'Learn strategies for modernizing legacy systems while maintaining business continuity and minimizing risk.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    },
    {
      title: 'Responsible AI Adoption in Regulated Industries',
      slug: 'responsible-ai-adoption-regulated-industries',
      status: 'Coming Soon',
      color: 'from-green-500 to-emerald-500',
      icon: '🛡️',
      type: 'Webinar',
      topic: 'AI & Automation',
      industry: 'Healthcare',
      year: '2023',
      webinarType: 'Recorded',
      description: 'Best practices for implementing AI solutions in highly regulated industries while ensuring compliance and governance.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
  ]

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const handleClearFilters = () => {
    setFilters({
      topic: 'all',
      industry: 'all',
      year: 'all',
      type: 'all',
    })
    setSearchQuery('')
    setCurrentPage(1)
  }

  // Filter and search logic
  const filteredWebinars = useMemo(() => {
    return webinars.filter(webinar => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        if (!webinar.title.toLowerCase().includes(query) && 
            !webinar.description.toLowerCase().includes(query) &&
            !webinar.topic.toLowerCase().includes(query)) {
          return false
        }
      }

      // Filter by topic
      if (filters.topic !== 'all' && webinar.topic.toLowerCase().replace(/\s+/g, '-') !== filters.topic) {
        return false
      }

      // Filter by industry
      if (filters.industry !== 'all' && webinar.industry.toLowerCase() !== filters.industry) {
        return false
      }

      // Filter by year
      if (filters.year !== 'all' && webinar.year !== filters.year) {
        return false
      }

      // Filter by type
      if (filters.type !== 'all' && webinar.webinarType.toLowerCase().replace(/\s+/g, '-') !== filters.type) {
        return false
      }

      return true
    })
  }, [filters, searchQuery, webinars])

  // Pagination logic
  const totalPages = Math.ceil(filteredWebinars.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedWebinars = filteredWebinars.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [filters, searchQuery])

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Webinars & Events - Aaitek",
    "description": "Educational webinars, panel discussions, and event recordings hosted or sponsored by Aaitek.",
    "url": "https://aaitek.com/webinars"
  }

  return (
    <>
      <SEO
        seoTitle="Webinars & Events - Aaitek"
        seoDescription="Join live and on-demand webinars, panel discussions, and events hosted by Aaitek. Learn from industry experts about AI, cloud, and digital transformation."
        canonicalUrl="https://aaitek.com/webinars"
        robots="index,follow"
        ogTitle="Webinars & Events - Aaitek"
        ogDescription="Educational webinars and events with industry experts."
        ogImage="https://aaitek.com/footer-logo.png"
        ogType="website"
        schemaType="CollectionPage"
        structuredData={structuredData}
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
        {/* Hero Section */}
        <section className="py-10 sm:py-14 md:py-20 lg:py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
          </div>
          <div className="container-custom relative z-10 px-4 sm:px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 mb-6 sm:mb-8 shadow-xl"
              >
                <span className="text-xl sm:text-2xl">🎥</span>
                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Webinars & Events</span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight px-4"
              >
                Live and On-Demand Sessions
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 max-w-3xl mx-auto leading-relaxed font-medium px-4"
              >
                Educational webinars, panel discussions, and event recordings hosted or sponsored by Aaitek.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="container-custom px-4 sm:px-6 2xl:ml-[250px] 2xl:mr-[250px]">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
              {/* Filter Sidebar - appears first on mobile, last on desktop */}
              <FilterSidebar
                filters={filters}
                filterOptions={filterOptions}
                onFilterChange={handleFilterChange}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onClearFilters={handleClearFilters}
                title="Filter Webinars"
              />
              
              {/* Main Content */}
              <div className="flex-1">
                {/* Results Count */}
                <div className="mb-4 sm:mb-6 flex items-center justify-between">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-gray-700"
                  >
                    <span className="font-bold text-base sm:text-lg">{filteredWebinars.length}</span>
                    <span className="text-gray-600 ml-2 text-sm sm:text-base">
                      {filteredWebinars.length === 1 ? 'Webinar' : 'Webinars'} Found
                    </span>
                  </motion.div>
                </div>

                {/* Webinars Grid */}
                {filteredWebinars.length > 0 ? (
                  <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                      {paginatedWebinars.map((webinar, index) => (
                      <motion.div
                        key={webinar.slug}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group"
                      >
                        <Link
                          to={`/webinar/${webinar.slug}`}
                          className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-green-400 h-full"
                        >
                          {webinar.image && (
                            <div className="relative h-56 overflow-hidden">
                              <img
                                src={webinar.image}
                                alt={webinar.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className={`absolute inset-0 bg-gradient-to-br ${webinar.color} opacity-20`}></div>
                              <div className="absolute top-4 right-4">
                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900">
                                  {webinar.status}
                                </span>
                              </div>
                              <div className="absolute bottom-4 left-4">
                                <span className="px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-xs font-bold text-white">
                                  {webinar.webinarType}
                                </span>
                              </div>
                            </div>
                          )}
                          <div className="p-5 sm:p-6 lg:p-8">
                            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                              <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${webinar.color} flex items-center justify-center text-xl sm:text-2xl lg:text-3xl shadow-lg flex-shrink-0`}>
                                {webinar.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs lg:text-sm text-gray-600 mb-2">
                                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-100 rounded-full font-medium text-xs">{webinar.topic}</span>
                                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-100 rounded-full font-medium text-xs">{webinar.industry}</span>
                                </div>
                              </div>
                            </div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-green-600 transition-colors leading-tight">
                              {webinar.title}
                            </h3>
                            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed line-clamp-3 mb-3 sm:mb-4">
                              {webinar.description}
                            </p>
                            <div className="flex items-center gap-2 text-green-600 font-semibold text-sm group-hover:gap-3 transition-all">
                              Watch Webinar
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                      <div className="mt-8 flex items-center justify-center gap-2">
                        <button
                          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                          disabled={currentPage === 1}
                          className="px-4 py-2 bg-white border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          Previous
                        </button>
                        
                        <div className="flex gap-2">
                          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                              key={page}
                              onClick={() => setCurrentPage(page)}
                              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                                currentPage === page
                                  ? 'bg-green-600 text-white'
                                  : 'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
                              }`}
                            >
                              {page}
                            </button>
                          ))}
                        </div>

                        <button
                          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                          disabled={currentPage === totalPages}
                          className="px-4 py-2 bg-white border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          Next
                        </button>
                      </div>
                    )}

                    {/* Page Info */}
                    {totalPages > 1 && (
                      <div className="mt-4 text-center text-sm text-gray-600">
                        Showing {startIndex + 1}-{Math.min(endIndex, filteredWebinars.length)} of {filteredWebinars.length} webinars
                      </div>
                    )}
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16 bg-white rounded-2xl border-2 border-gray-200"
                  >
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">No Webinars Found</h3>
                    <p className="text-gray-600 mb-6">Try adjusting your filters or search query.</p>
                    <button
                      onClick={handleClearFilters}
                      className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
                    >
                      Clear All Filters
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Webinars

