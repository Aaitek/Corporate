import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import FilterSidebar from '../components/FilterSidebar'
import SEO from '../components/SEO'
import HeroSection from '../components/HeroSection'

const Resources = () => {
  const [filters, setFilters] = useState({
    contentType: 'all',
    industry: 'all',
    serviceArea: 'all',
    technology: 'all',
    audience: 'all',
    year: 'all',
  })
  const [searchQuery, setSearchQuery] = useState('')
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

  const handleClearFilters = () => {
    setFilters({
      contentType: 'all',
      industry: 'all',
      serviceArea: 'all',
      technology: 'all',
      audience: 'all',
      year: 'all',
    })
    setSearchQuery('')
  }

  const siteUrl = 'https://aaitek.com.au'

  return (
    <>
      <SEO
        seoTitle="Resources - Insights, Articles & Knowledge | Aaitek"
        seoDescription="Practical insights, AI trends, platform engineering insights, and real delivery learnings. Articles, Press Releases, Webinars, Videos, and Case Studies."
        canonicalUrl={`${siteUrl}/resources`}
        ogTitle="Resources - Insights, Articles & Knowledge"
        ogDescription="Practical insights, AI trends, platform engineering insights, and real delivery learnings from Aaitek."
        ogImage="https://aaitek.com.au/Aaitek logo in Black.png"
        ogType="website"
        twitterTitle="Resources - Insights, Articles & Knowledge"
        twitterDescription="Practical insights, AI trends, and real delivery learnings from Aaitek."
        twitterImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
        schemaType="CollectionPage"
        indexable={true}
      />
    <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section */}
      {/* TODO: Connect to Strapi Global Settings or Page Settings to fetch heroImage */}
      <HeroSection
        badge="Resources"
        title="Resources"
        description="The Resources section is where Aaitek shares practical insights, delivery experience, and industry perspectives — drawn from real projects, evolving technology trends, and enterprise delivery learnings."
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
              title="Filter Resources"
            />
            
            {/* Main Content */}
            <div className="flex-1">
              {/* Insights & Articles Section */}
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
                      📝
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">Insights & Articles</h2>
                      <p className="text-lg font-semibold text-blue-600">Expert Perspectives on Technology, Delivery, and Industry Trends</p>
                    </div>
                  </div>
                  <Link
                    to="/articles"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    View All Articles
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <p className="text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
                  Long-form and short-form articles written by Aaitek practitioners, architects, and consultants.
                </p>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl shadow-md">
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

              {/* Press Releases Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-12"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                      📢
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">Press Releases</h2>
                      <p className="text-lg font-semibold text-indigo-600">Company News, Announcements, and Official Updates</p>
                    </div>
                  </div>
                  <Link
                    to="/press-releases"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    View All Press Releases
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <p className="text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
                  Formal announcements related to Aaitek milestones, partnerships, launches, and initiatives.
                </p>
                <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-2xl shadow-md">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📰</span>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-2">Content Guidelines:</p>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">
                        • Clear, concise, factual • No marketing language • Written for media, partners, and stakeholders
                      </p>
                      <p className="text-xs text-gray-600 mt-2">
                        <strong>Filters:</strong> Type • Year • Region
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Webinars & Events Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-12"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                      🎥
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">Webinars & Events</h2>
                      <p className="text-lg font-semibold text-green-600">Live and On-Demand Sessions with Industry Experts</p>
                    </div>
                  </div>
                  <Link
                    to="/webinars"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    View All Webinars
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <p className="text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
                  Educational webinars, panel discussions, and event recordings hosted or sponsored by Aaitek.
                </p>
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl shadow-md">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-2">Content Guidelines:</p>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">
                        • Educational, not sales-led • Focus on real-world problems and solutions • Include speakers and key takeaways
                      </p>
                      <p className="text-xs text-gray-600 mt-2">
                        <strong>Filters:</strong> Topic • Industry • Year • Type
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Videos & Media Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-12"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                      🎬
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">Videos & Media</h2>
                      <p className="text-lg font-semibold text-orange-600">Visual Content, Demos, and Thought Leadership</p>
                    </div>
                  </div>
                  <Link
                    to="/videos"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    View All Videos
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <p className="text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
                  Short and long-form video content showcasing insights, product overviews, demos, and expert commentary.
                </p>
                <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl shadow-md">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-2">Content Types:</p>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">
                        • Expert explainers • Product walkthroughs • Architecture overviews • Event highlights
                      </p>
                      <p className="text-xs text-gray-600 mt-2">
                        <strong>Filters:</strong> Topic • Type • Year
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
    </>
  )
}

export default Resources
