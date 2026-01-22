import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FilterSidebar from '../components/FilterSidebar'
import SEO from '../components/SEO'
import { fetchArticles, getImageUrl } from '../utils/api'

const Articles = () => {
  const [filters, setFilters] = useState({
    industry: 'all',
    serviceArea: 'all',
    technology: 'all',
    audience: 'all',
    year: 'all',
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true)
        const response = await fetchArticles()
        
        if (response?.data && Array.isArray(response.data) && response.data.length > 0) {
          // Map Strapi data to component format
          const mapped = response.data.map(item => {
            // Generate slug from title if missing
            let slug = item.attributes?.slug || ''
            if (!slug && item.attributes?.title) {
              slug = item.attributes.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')
            }
            
            return {
              id: item.id,
              title: item.attributes?.title || '',
              slug: slug || `article-${item.id}`,
              excerpt: item.attributes?.excerpt || '',
              content: item.attributes?.content || '',
              category: item.attributes?.category || '',
              author: item.attributes?.author || '',
              publishedAt: item.attributes?.publishedAt || '',
              tags: item.attributes?.tags || [],
              image: getImageUrl(item.attributes?.image, 'medium') || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
              // Map for filters
              industry: 'Finance', // Default or from tags
              serviceArea: item.attributes?.category || 'Engineering',
              technology: Array.isArray(item.attributes?.tags) 
                ? item.attributes.tags[0] || 'AI'
                : 'AI',
              audience: 'CTO',
              year: item.attributes?.publishedAt 
                ? new Date(item.attributes.publishedAt).getFullYear().toString()
                : '2024',
              status: 'Published',
              color: 'from-blue-500 to-cyan-500',
              icon: '📝',
              type: 'Article',
              description: item.attributes?.excerpt || item.attributes?.description || '',
            }
          })
          setArticles(mapped)
        } else {
          setArticles([])
        }
      } catch (error) {
        console.error('Error fetching articles:', error)
        setArticles([])
      } finally {
        setLoading(false)
      }
    }
    loadArticles()
  }, [])

  const filterOptions = {
    industry: ['All Industries', 'Finance', 'Sports', 'Healthcare', 'Government', 'Retail', 'Real Estate', 'Education', 'Energy'],
    serviceArea: ['All Services', 'Engineering', 'Cloud', 'AI', 'DevOps', 'Platforms', 'Data', 'Security'],
    technology: ['All Technologies', 'Sitecore', 'Salesforce', 'AWS', 'Azure', 'AI', 'React', 'Node.js', 'ServiceNow'],
    audience: ['All Audiences', 'CTO', 'Product', 'Business', 'Engineering'],
    year: ['All Years', '2024', '2023', '2022', '2021'],
  }

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const handleClearFilters = () => {
    setFilters({
      industry: 'all',
      serviceArea: 'all',
      technology: 'all',
      audience: 'all',
      year: 'all',
    })
    setSearchQuery('')
    setCurrentPage(1) // Reset to first page when clearing filters
  }

  // Filter and search logic
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        if (!article.title.toLowerCase().includes(query) && 
            !article.description.toLowerCase().includes(query) &&
            !article.industry.toLowerCase().includes(query) &&
            !article.serviceArea.toLowerCase().includes(query) &&
            !article.technology.toLowerCase().includes(query)) {
          return false
        }
      }

      // Filter by industry
      if (filters.industry !== 'all' && article.industry.toLowerCase() !== filters.industry) {
        return false
      }

      // Filter by service area
      if (filters.serviceArea !== 'all' && article.serviceArea.toLowerCase() !== filters.serviceArea) {
        return false
      }

      // Filter by technology
      if (filters.technology !== 'all' && article.technology.toLowerCase() !== filters.technology) {
        return false
      }

      // Filter by audience
      if (filters.audience !== 'all' && article.audience.toLowerCase() !== filters.audience) {
        return false
      }

      // Filter by year
      if (filters.year !== 'all' && article.year !== filters.year) {
        return false
      }

      return true
    })
  }, [filters, searchQuery, articles])

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [filters, searchQuery])

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex)

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
    "name": "Articles - Aaitek",
    "description": "Expert perspectives on technology, delivery, and industry trends from Aaitek practitioners.",
    "url": "https://aaitek.com/articles"
  }

  return (
    <>
      <SEO
        seoTitle="Articles - Insights & Expert Perspectives | Aaitek"
        seoDescription="Read expert articles and insights on technology, delivery, and industry trends from Aaitek practitioners, architects, and consultants."
        canonicalUrl="https://aaitek.com/articles"
        robots="index,follow"
        ogTitle="Articles - Insights & Expert Perspectives | Aaitek"
        ogDescription="Read expert articles and insights on technology, delivery, and industry trends from Aaitek practitioners, architects, and consultants."
        ogImage="https://aaitek.com/Aaitek%20logo%20in%20Black.png"
        ogType="website"
        schemaType="CollectionPage"
        structuredData={structuredData}
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
        {/* Hero Section */}
        <section className="py-10 sm:py-14 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
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
                <span className="text-xl sm:text-2xl">📝</span>
                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Articles</span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight px-4"
              >
                Insights & Expert Perspectives
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 max-w-3xl mx-auto leading-relaxed font-medium px-4"
              >
                Long-form and short-form articles written by Aaitek practitioners, architects, and consultants.
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
                title="Filter Articles"
              />
              
              {/* Main Content */}
              <div className="flex-1">
                {/* Loading State */}
                {loading ? (
                  <div className="text-center py-16">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    <p className="mt-4 text-gray-600">Loading articles...</p>
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
                    <span className="font-bold text-base sm:text-lg">{filteredArticles.length}</span>
                    <span className="text-gray-600 ml-2 text-sm sm:text-base">
                      {filteredArticles.length === 1 ? 'Article' : 'Articles'} Found
                    </span>
                  </motion.div>
                </div>

                {/* Articles Grid */}
                {filteredArticles.length > 0 ? (
                      <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                          {paginatedArticles.map((article, index) => (
                      <motion.div
                        key={article.slug}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group"
                      >
                        <Link
                          to={`/article/${article.slug}`}
                          className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-400 h-full"
                        >
                          {article.image && (
                            <div className="relative h-56 overflow-hidden">
                              <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-20`}></div>
                              <div className="absolute top-4 right-4">
                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900">
                                  {article.status}
                                </span>
                              </div>
                            </div>
                          )}
                          <div className="p-5 sm:p-6 lg:p-8">
                            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                              <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${article.color} flex items-center justify-center text-xl sm:text-2xl lg:text-3xl shadow-lg flex-shrink-0`}>
                                {article.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs lg:text-sm text-gray-600 mb-2">
                                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-100 rounded-full font-medium text-xs">{article.industry}</span>
                                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-100 rounded-full font-medium text-xs">{article.serviceArea}</span>
                                </div>
                              </div>
                            </div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                              {article.title}
                            </h3>
                            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed line-clamp-3 mb-3 sm:mb-4">
                              {article.description}
                            </p>
                            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                              Read Article
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
                                      ? 'bg-blue-600 text-white'
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
                            Showing {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} of {filteredArticles.length} articles
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">No Articles Found</h3>
                    <p className="text-gray-600 mb-6">Try adjusting your filters or search query.</p>
                    <button
                      onClick={handleClearFilters}
                      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
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

export default Articles

