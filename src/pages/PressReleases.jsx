import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FilterSidebar from '../components/FilterSidebar'
import SEO from '../components/SEO'

const PressReleases = () => {
  const [filters, setFilters] = useState({
    type: 'all',
    year: 'all',
    region: 'all',
  })
  const [searchQuery, setSearchQuery] = useState('')

  const filterOptions = {
    type: ['All Types', 'Product Launch', 'Partnership', 'Company News', 'Award', 'Milestone'],
    year: ['All Years', '2024', '2023', '2022', '2021'],
    region: ['All Regions', 'Australia', 'APAC', 'Global'],
  }

  const pressReleases = [
    {
      title: 'Aaitek Announces Launch of AI Agent Portfolio',
      slug: 'aaitek-announces-launch-ai-agent-portfolio',
      date: '2024-01-15',
      type: 'Product Launch',
      year: '2024',
      region: 'Global',
      description: 'Aaitek today announced the launch of its comprehensive AI Agent portfolio, designed to help enterprises automate workflows and improve customer engagement.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    },
    {
      title: 'Aaitek Partners with Leading Cloud Provider for Enhanced Services',
      slug: 'aaitek-partners-cloud-provider',
      date: '2024-02-20',
      type: 'Partnership',
      year: '2024',
      region: 'APAC',
      description: 'Strategic partnership announced to deliver enhanced cloud migration and modernisation services across the Asia-Pacific region.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    },
    {
      title: 'Aaitek Recognized as Top Digital Transformation Partner',
      slug: 'aaitek-recognized-top-digital-transformation',
      date: '2023-12-10',
      type: 'Award',
      year: '2023',
      region: 'Australia',
      description: 'Aaitek has been recognized as a leading digital transformation partner in the annual industry awards.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    },
    {
      title: 'Aaitek Expands Operations to New Markets',
      slug: 'aaitek-expands-operations-new-markets',
      date: '2023-11-05',
      type: 'Company News',
      year: '2023',
      region: 'APAC',
      description: 'Company announces expansion of operations to serve growing demand in new markets across the region.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c76d?w=800&q=80',
    },
    {
      title: 'Aaitek Reaches 100 Successful Project Milestone',
      slug: 'aaitek-reaches-100-projects-milestone',
      date: '2023-09-18',
      type: 'Milestone',
      year: '2023',
      region: 'Global',
      description: 'Aaitek celebrates reaching the milestone of 100 successfully delivered enterprise projects.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    },
    {
      title: 'New Enterprise Platform Solutions Launched',
      slug: 'new-enterprise-platform-solutions-launched',
      date: '2023-08-22',
      type: 'Product Launch',
      year: '2023',
      region: 'Global',
      description: 'Aaitek launches new suite of enterprise platform solutions designed for large-scale digital transformations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
  ]

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const handleClearFilters = () => {
    setFilters({
      type: 'all',
      year: 'all',
      region: 'all',
    })
    setSearchQuery('')
  }

  // Filter and search logic
  const filteredPressReleases = useMemo(() => {
    return pressReleases.filter(release => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        if (!release.title.toLowerCase().includes(query) && 
            !release.description.toLowerCase().includes(query) &&
            !release.type.toLowerCase().includes(query)) {
          return false
        }
      }

      // Filter by type
      if (filters.type !== 'all' && release.type.toLowerCase().replace(/\s+/g, '-') !== filters.type) {
        return false
      }

      // Filter by year
      if (filters.year !== 'all' && release.year !== filters.year) {
        return false
      }

      // Filter by region
      if (filters.region !== 'all' && release.region.toLowerCase() !== filters.region) {
        return false
      }

      return true
    })
  }, [filters, searchQuery, pressReleases])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

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
    "name": "Press Releases - Aaitek",
    "description": "Latest press releases, company news, and announcements from Aaitek Technology Specialists.",
    "url": "https://aaitek.com.au/press-releases"
  }

  return (
    <>
      <SEO
        seoTitle="Press Releases - Aaitek Technology Specialists"
        seoDescription="Stay updated with the latest press releases, company news, partnerships, and announcements from Aaitek Technology Specialists."
        canonicalUrl="https://aaitek.com.au/press-releases"
        robots="index,follow"
        ogTitle="Press Releases - Aaitek"
        ogDescription="Latest press releases, company news, and announcements."
        ogImage="https://aaitek.com.au/og/press-releases.png"
        ogType="website"
        schemaType="CollectionPage"
        structuredData={structuredData}
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
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
                <span className="text-2xl">📢</span>
                <span className="text-sm font-bold text-white uppercase tracking-wider">Press Releases</span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
              >
                Company News & Announcements
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 max-w-3xl mx-auto leading-relaxed font-medium"
              >
                Stay updated with the latest news, partnerships, product launches, and company milestones from Aaitek.
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
                title="Filter Press Releases"
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
                    <span className="font-bold text-lg">{filteredPressReleases.length}</span>
                    <span className="text-gray-600 ml-2">
                      {filteredPressReleases.length === 1 ? 'Press Release' : 'Press Releases'} Found
                    </span>
                  </motion.div>
                </div>

                {/* Press Releases List */}
                {filteredPressReleases.length > 0 ? (
                  <div className="space-y-6">
                    {filteredPressReleases.map((release, index) => (
                      <motion.div
                        key={release.slug}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -4 }}
                        className="group"
                      >
                        <Link
                          to={`/press-release/${release.slug}`}
                          className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-indigo-400"
                        >
                          <div className="flex flex-col md:flex-row">
                            {release.image && (
                              <div className="md:w-64 flex-shrink-0 h-48 md:h-auto relative overflow-hidden">
                                <img
                                  src={release.image}
                                  alt={release.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20"></div>
                              </div>
                            )}
                            <div className="flex-1 p-6">
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full">
                                      {release.type}
                                    </span>
                                    <span className="text-xs text-gray-500">{formatDate(release.date)}</span>
                                  </div>
                                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                    {release.title}
                                  </h3>
                                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                                    {release.description}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm group-hover:gap-3 transition-all">
                                Read More
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">No Press Releases Found</h3>
                    <p className="text-gray-600 mb-6">Try adjusting your filters or search query.</p>
                    <button
                      onClick={handleClearFilters}
                      className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
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

export default PressReleases

