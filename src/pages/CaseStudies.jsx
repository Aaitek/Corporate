import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FilterSidebar from '../components/FilterSidebar'
import SEO from '../components/SEO'
import { fetchCaseStudies, getImageUrl } from '../utils/api'
import caseStudiesData from '../data/caseStudiesData'

const CaseStudies = () => {
  const [filters, setFilters] = useState({
    industry: 'all',
    service: 'all',
    technology: 'all',
    engagementType: 'all',
    year: 'all',
    region: 'all',
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [caseStudies, setCaseStudies] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Fallback case studies data - convert object to array
  const fallbackCaseStudies = Object.values(caseStudiesData)

  useEffect(() => {
    const loadCaseStudies = async () => {
      try {
        setLoading(true)
        const response = await fetchCaseStudies()
        let strapiCaseStudies = []
        
        if (response?.data && response.data.length > 0) {
          // Map Strapi data to component format
          strapiCaseStudies = response.data.map(item => ({
            id: item.id,
            title: item.attributes?.title || '',
            slug: item.attributes?.slug || '',
            client: item.attributes?.client || '',
            industry: item.attributes?.industry || '',
            category: item.attributes?.category || '',
            description: item.attributes?.description || '',
            fullContent: item.attributes?.fullContent || '',
            image: getImageUrl(item.attributes?.image, 'medium') || 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
            results: item.attributes?.results || {},
            technologies: item.attributes?.technologies || [],
            // Map for filters (using category as service, technologies for tech)
            service: item.attributes?.category || 'Engineering',
            tech: Array.isArray(item.attributes?.technologies) 
              ? item.attributes.technologies[0] || 'React'
              : 'React',
            engagementType: 'Delivery',
            year: item.attributes?.publishedAt 
              ? new Date(item.attributes.publishedAt).getFullYear().toString()
              : '2024',
            region: 'Australia',
            status: 'Published',
            color: 'from-blue-500 to-cyan-500',
            icon: '📚',
          }))
        }
        
        // Combine Strapi data with fallback data (show both)
        // Filter out fallback items that might already exist in Strapi by slug
        const existingSlugs = new Set(strapiCaseStudies.map(cs => cs.slug))
        const uniqueFallbacks = fallbackCaseStudies.filter(fb => !existingSlugs.has(fb.slug))
        
        // Merge: Strapi data first, then fallback data
        const allCaseStudies = [...strapiCaseStudies, ...uniqueFallbacks]
        
        setCaseStudies(allCaseStudies)
      } catch (error) {
        console.error('Error fetching case studies:', error)
        // On error, use fallback data
        setCaseStudies(fallbackCaseStudies)
      } finally {
        setLoading(false)
      }
    }
    loadCaseStudies()
  }, [])

  const filterOptions = {
    industry: ['All Industries', 'Finance', 'Sports', 'Healthcare', 'Government', 'Retail', 'Real Estate', 'Education', 'Energy'],
    service: ['All Services', 'Engineering', 'Cloud', 'AI', 'DevOps', 'Platforms', 'Data', 'Security'],
    technology: ['All Technologies', 'Sitecore', 'Salesforce', 'AWS', 'Azure', 'AI', 'React', 'Node.js', 'ServiceNow'],
    engagementType: ['All Types', 'Delivery', 'Migration', 'Support', 'Advisory'],
    year: ['All Years', '2024', '2023', '2022', '2021'],
    region: ['All Regions', 'Australia', 'APAC', 'Global'],
  }

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
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
    setCurrentPage(1) // Reset to first page when clearing filters
  }

  // Filter and search logic
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(study => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        if (!study.title.toLowerCase().includes(query) && 
            !study.description.toLowerCase().includes(query) &&
            !study.industry.toLowerCase().includes(query) &&
            !study.service.toLowerCase().includes(query) &&
            !study.tech.toLowerCase().includes(query)) {
          return false
        }
      }

      // Filter by industry
      if (filters.industry !== 'all' && study.industry.toLowerCase() !== filters.industry) {
        return false
      }

      // Filter by service
      if (filters.service !== 'all' && study.service.toLowerCase() !== filters.service) {
        return false
      }

      // Filter by technology
      if (filters.technology !== 'all' && study.tech.toLowerCase() !== filters.technology) {
        return false
      }

      // Filter by engagement type
      if (filters.engagementType !== 'all' && study.engagementType.toLowerCase() !== filters.engagementType) {
        return false
      }

      // Filter by year
      if (filters.year !== 'all' && study.year !== filters.year) {
        return false
      }

      // Filter by region
      if (filters.region !== 'all' && study.region.toLowerCase() !== filters.region) {
        return false
      }

      return true
    })
  }, [filters, searchQuery, caseStudies])

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [filters, searchQuery])

  // Pagination logic - use useMemo to ensure it's always defined
  const paginatedCaseStudies = useMemo(() => {
    if (!filteredCaseStudies || filteredCaseStudies.length === 0) {
      return []
    }
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredCaseStudies.slice(startIndex, endIndex)
  }, [filteredCaseStudies, currentPage, itemsPerPage])

  const totalPages = Math.ceil((filteredCaseStudies?.length || 0) / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

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
    "name": "Case Studies - Aaitek",
    "description": "Explore real-world case studies showcasing Aaitek's successful digital transformation projects across industries.",
    "url": "https://aaitek.com.au/case-studies"
  }

  return (
    <>
      <SEO
        seoTitle="Case Studies - Aaitek Technology Specialists"
        seoDescription="Explore real-world case studies showcasing Aaitek's successful digital transformation projects across industries including finance, healthcare, government, and more."
        canonicalUrl="https://aaitek.com.au/case-studies"
        robots="index,follow"
        ogTitle="Case Studies - Aaitek"
        ogDescription="Real-world case studies demonstrating successful digital transformation projects."
        ogImage="https://aaitek.com.au/footer-logo.png"
        ogType="website"
        schemaType="CollectionPage"
        structuredData={structuredData}
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
        {/* Hero Section */}
        <section className="py-10 sm:py-14 md:py-20 lg:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
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
                <span className="text-xl sm:text-2xl">📚</span>
                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Case Studies</span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight px-4"
              >
                Real-World Success Stories
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 max-w-3xl mx-auto leading-relaxed font-medium px-4"
              >
                Explore how we've helped organizations transform their digital capabilities and achieve measurable outcomes.
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
                title="Filter Case Studies"
              />
              
              {/* Main Content */}
              <div className="flex-1">
                {/* Loading State */}
                {loading ? (
                  <div className="text-center py-16">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                    <p className="mt-4 text-gray-600">Loading case studies...</p>
                  </div>
                ) : (
                  <>
                {/* Results Count */}
                <div className="mb-4 sm:mb-6 flex items-center justify-between">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-gray-700"
                  >
                    <span className="font-bold text-base sm:text-lg">{filteredCaseStudies.length}</span>
                    <span className="text-gray-600 ml-2 text-sm sm:text-base">
                      {filteredCaseStudies.length === 1 ? 'Case Study' : 'Case Studies'} Found
                    </span>
                  </motion.div>
                </div>

                {/* Case Studies Grid */}
                {filteredCaseStudies.length > 0 ? (
                      <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                          {paginatedCaseStudies.map((study, index) => (
                      <motion.div
                        key={study.slug}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
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
                          <div className="p-5 sm:p-6 lg:p-8">
                            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                              <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center text-xl sm:text-2xl lg:text-3xl shadow-lg flex-shrink-0`}>
                                {study.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors leading-tight">
                                  {study.title}
                                </h3>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs lg:text-sm text-gray-600">
                                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-100 rounded-full font-medium text-xs">{study.industry}</span>
                                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-100 rounded-full font-medium text-xs">{study.service}</span>
                                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-100 rounded-full font-medium text-xs">{study.tech}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed line-clamp-3">
                              {study.description}
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
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
                                      ? 'bg-primary-600 text-white'
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
                            Showing {startIndex + 1}-{Math.min(endIndex, filteredCaseStudies.length)} of {filteredCaseStudies.length} case studies
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">No Case Studies Found</h3>
                    <p className="text-gray-600 mb-6">Try adjusting your filters or search query.</p>
                    <button
                      onClick={handleClearFilters}
                      className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
                    >
                      Clear All Filters
                    </button>
                  </motion.div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CaseStudies

