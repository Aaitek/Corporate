import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SEO from '../components/SEO'
import api from '../utils/api'

const CaseStudyDetail = () => {
  const { slug } = useParams()
  const [caseStudy, setCaseStudy] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadCaseStudy = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await api.get(`/case-studies?filters[slug][$eq]=${slug}&populate=*`)
        
        if (response?.data?.data && response.data.data.length > 0) {
          const item = response.data.data[0]
          const mapped = {
            id: item.id,
            title: item.attributes?.title || '',
            slug: item.attributes?.slug || '',
            client: item.attributes?.client || '',
            industry: item.attributes?.industry || '',
            description: item.attributes?.description || '',
            fullContent: item.attributes?.fullContent || '',
            category: item.attributes?.category || 'cloud',
            image: item.attributes?.image?.data?.attributes?.url 
              ? `https://aaitech-production.up.railway.app${item.attributes.image.data.attributes.url}`
              : item.attributes?.image?.data?.attributes?.formats?.large?.url
              ? `https://aaitech-production.up.railway.app${item.attributes.image.data.attributes.formats.large.url}`
              : 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
            results: item.attributes?.results || {},
            technologies: item.attributes?.technologies || [],
            video: null,
          }
          setCaseStudy(mapped)
        } else {
          setError('Case study not found')
        }
      } catch (err) {
        console.error('Error fetching case study:', err)
        setError('Failed to load case study')
      } finally {
        setLoading(false)
      }
    }
    
    if (slug) {
      loadCaseStudy()
    }
  }, [slug])

  // Fallback case study
  const fallbackCaseStudy = {
    title: 'Enterprise DXP Modernisation for a Public Sector Organisation',
    client: 'Public Sector Organisation',
    industry: 'Government',
    description: 'A comprehensive case study detailing the digital transformation journey of a public sector organisation.',
    fullContent: '<p>Full content would be loaded from Strapi CMS...</p>',
    category: 'cloud',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    video: null, // Optional: YouTube/Vimeo URL or embed code
    results: {
      outcome: 'Successful migration',
      impact: 'Improved efficiency by 40%'
    },
    technologies: ['Sitecore', 'AWS', 'React', 'Node.js']
  } || {
    title: 'Case Study Not Found',
    description: 'The requested case study could not be found',
    client: 'Unknown',
    industry: 'Unknown',
    category: 'cloud',
    image: null,
    results: {},
    technologies: []
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.description,
    "image": caseStudy.image || "https://aaitek.com.au/logo.png",
    "author": {
      "@type": "Organization",
      "name": "Aaitek Technology Specialists"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Aaitek Technology Specialists",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aaitek.com.au/logo.png"
      }
    },
    "url": `https://aaitek.com.au/case-study/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://aaitek.com.au/case-study/${slug}`
    }
  }

  const categoryColors = {
    cloud: 'from-blue-500 to-cyan-500',
    ai: 'from-purple-500 to-pink-500',
    ecommerce: 'from-green-500 to-emerald-500',
    mobile: 'from-orange-500 to-red-500',
    data: 'from-indigo-500 to-blue-500',
    software: 'from-teal-500 to-cyan-500',
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mb-4"></div>
          <p className="text-gray-600">Loading case study...</p>
        </div>
      </div>
    )
  }

  if (error || !caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The requested case study could not be found.'}</p>
          <Link
            to="/case-studies"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Case Studies
          </Link>
        </div>
      </div>
    )
  }

  const color = categoryColors[caseStudy.category] || 'from-gray-500 to-gray-700'

  return (
    <>
      <SEO
        seoTitle={`${caseStudy.title} - Case Study | Aaitek`}
        seoDescription={caseStudy.description}
        canonicalUrl={`https://aaitek.com.au/case-study/${slug}`}
        robots="index,follow"
        ogTitle={caseStudy.title}
        ogDescription={caseStudy.description}
        ogImage={caseStudy.image || "https://aaitek.com.au/og/case-study.png"}
        ogType="article"
        twitterCard="summary_large_image"
        schemaType="Article"
        structuredData={structuredData}
        indexable={true}
        pageTitle={caseStudy.title}
        pageDescription={caseStudy.description}
        pageImage={caseStudy.image}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {caseStudy.image ? (
            <>
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90`}></div>
            </>
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90`}></div>
          )}
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <span className="text-2xl">📚</span>
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Case Study</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              {caseStudy.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold">
                Client: {caseStudy.client}
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold">
                Industry: {caseStudy.industry}
              </span>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              {caseStudy.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-sky-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-400 rounded-full blur-3xl opacity-10"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-400 rounded-full blur-3xl opacity-10"
            animate={{
              scale: [1, 1.15, 1],
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Results and Technologies Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-16">
              {/* Results */}
              {caseStudy.results && Object.keys(caseStudy.results).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -50, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                        📊
                      </div>
                      <h2 className="text-2xl font-extrabold text-gray-900">Results & Impact</h2>
                    </div>
                    <div className="space-y-4">
                      {Object.entries(caseStudy.results).map(([key, value], index) => (
                        <div key={index} className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                          <p className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <p className="text-lg font-bold text-gray-900">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Technologies Used */}
              {caseStudy.technologies && caseStudy.technologies.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 50, rotateY: 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                        💻
                      </div>
                      <h2 className="text-2xl font-extrabold text-gray-900">Technologies Used</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {caseStudy.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          className="px-4 py-2 bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700 font-semibold rounded-xl border border-blue-200 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Video Section (if available) */}
            {caseStudy.video && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200"
              >
                <div className="aspect-video bg-gray-900">
                  {caseStudy.video.includes('youtube.com') || caseStudy.video.includes('youtu.be') ? (
                    <iframe
                      src={caseStudy.video.includes('youtu.be') 
                        ? `https://www.youtube.com/embed/${caseStudy.video.split('/').pop()}`
                        : `https://www.youtube.com/embed/${caseStudy.video.split('v=')[1]?.split('&')[0]}`
                      }
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={caseStudy.title}
                    />
                  ) : caseStudy.video.includes('vimeo.com') ? (
                    <iframe
                      src={`https://player.vimeo.com/video/${caseStudy.video.split('/').pop()}`}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={caseStudy.title}
                    />
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: caseStudy.video }} />
                  )}
                </div>
              </motion.div>
            )}

            {/* Full Content */}
            {caseStudy.fullContent && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-xl"
              >
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Case Study Details</h2>
                <div 
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: caseStudy.fullContent }}
                />
              </motion.div>
            )}

            {/* Back to Case Studies Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-primary-600 to-accent-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default CaseStudyDetail

