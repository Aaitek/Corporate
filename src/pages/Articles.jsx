import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FilterSidebar from '../components/FilterSidebar'
import SEO from '../components/SEO'

const Articles = () => {
  const [filters, setFilters] = useState({
    industry: 'all',
    serviceArea: 'all',
    technology: 'all',
    audience: 'all',
    year: 'all',
  })
  const [searchQuery, setSearchQuery] = useState('')

  const filterOptions = {
    industry: ['All Industries', 'Finance', 'Sports', 'Healthcare', 'Government', 'Retail', 'Real Estate', 'Education', 'Energy'],
    serviceArea: ['All Services', 'Engineering', 'Cloud', 'AI', 'DevOps', 'Platforms', 'Data', 'Security'],
    technology: ['All Technologies', 'Sitecore', 'Salesforce', 'AWS', 'Azure', 'AI', 'React', 'Node.js', 'ServiceNow'],
    audience: ['All Audiences', 'CTO', 'Product', 'Business', 'Engineering'],
    year: ['All Years', '2024', '2023', '2022', '2021'],
  }

  const articles = [
    {
      title: 'Designing Enterprise-Ready AI Solutions',
      slug: 'designing-enterprise-ready-ai-solutions',
      status: 'Coming Soon',
      color: 'from-blue-500 to-cyan-500',
      icon: '🤖',
      type: 'Article',
      industry: 'Finance',
      serviceArea: 'AI',
      technology: 'AI',
      audience: 'CTO',
      year: '2024',
      description: 'Practical insights on building AI solutions that meet enterprise requirements for security, scalability, and governance.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    },
    {
      title: 'Lessons Learned from Large-Scale Platform Migrations',
      slug: 'lessons-learned-large-scale-platform-migrations',
      status: 'Coming Soon',
      color: 'from-purple-500 to-pink-500',
      icon: '📚',
      type: 'Article',
      industry: 'Government',
      serviceArea: 'Platforms',
      technology: 'Sitecore',
      audience: 'Engineering',
      year: '2024',
      description: 'Key learnings and best practices from migrating enterprise platforms to modern architectures.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    },
    {
      title: 'When Headless Architecture Makes Sense (and When It Doesn\'t)',
      slug: 'headless-architecture-makes-sense',
      status: 'Coming Soon',
      color: 'from-green-500 to-emerald-500',
      icon: '🏗️',
      type: 'Article',
      industry: 'Retail',
      serviceArea: 'Engineering',
      technology: 'React',
      audience: 'Product',
      year: '2023',
      description: 'A balanced perspective on when to adopt headless architectures and when traditional approaches are more appropriate.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
    {
      title: 'Avoiding Common Pitfalls in Cloud Modernisation',
      slug: 'avoiding-common-pitfalls-cloud-modernisation',
      status: 'Coming Soon',
      color: 'from-orange-500 to-red-500',
      icon: '☁️',
      type: 'Article',
      industry: 'Healthcare',
      serviceArea: 'Cloud',
      technology: 'AWS',
      audience: 'Business',
      year: '2023',
      description: 'Common mistakes organizations make during cloud migration and how to avoid them.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    },
  ]

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
    "url": "https://aaitek.com.au/articles"
  }

  return (
    <>
      <SEO
        seoTitle="Articles - Insights & Expert Perspectives | Aaitek"
        seoDescription="Read expert articles and insights on technology, delivery, and industry trends from Aaitek practitioners, architects, and consultants."
        canonicalUrl="https://aaitek.com.au/articles"
        robots="index,follow"
        ogTitle="Articles - Aaitek Insights"
        ogDescription="Expert perspectives on technology, delivery, and industry trends."
        ogImage="https://aaitek.com.au/og/articles.png"
        ogType="website"
        schemaType="CollectionPage"
        structuredData={structuredData}
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
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
                <span className="text-2xl">📝</span>
                <span className="text-sm font-bold text-white uppercase tracking-wider">Articles</span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
              >
                Insights & Expert Perspectives
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 max-w-3xl mx-auto leading-relaxed font-medium"
              >
                Long-form and short-form articles written by Aaitek practitioners, architects, and consultants.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
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
                {/* Results Count */}
                <div className="mb-6 flex items-center justify-between">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-gray-700"
                  >
                    <span className="font-bold text-lg">{filteredArticles.length}</span>
                    <span className="text-gray-600 ml-2">
                      {filteredArticles.length === 1 ? 'Article' : 'Articles'} Found
                    </span>
                  </motion.div>
                </div>

                {/* Articles Grid */}
                {filteredArticles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {filteredArticles.map((article, index) => (
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
                          <div className="p-6 lg:p-8">
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${article.color} flex items-center justify-center text-2xl lg:text-3xl shadow-lg`}>
                                {article.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap gap-2 text-xs lg:text-sm text-gray-600 mb-2">
                                  <span className="px-2.5 py-1 bg-gray-100 rounded-full font-medium">{article.industry}</span>
                                  <span className="px-2.5 py-1 bg-gray-100 rounded-full font-medium">{article.serviceArea}</span>
                                </div>
                              </div>
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-sm lg:text-base text-gray-600 leading-relaxed line-clamp-3 mb-4">
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Articles

