import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SEO from '../components/SEO'
import api, { getImageUrl } from '../utils/api'
import caseStudiesData from '../data/caseStudiesData'

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
        // Use Vercel API proxy to avoid Railway Edge CORS issues
        const response = await api.get('/api/case-studies', {
          params: {
            'filters[slug][$eq]': slug,
            populate: '*',
            publicationState: 'live',
          },
        })
        
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
            image: getImageUrl(item.attributes?.image, 'large') || 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
            results: item.attributes?.results || {},
            technologies: item.attributes?.technologies || [],
            video: null,
          }
          setCaseStudy(mapped)
        } else {
          // Check local data as fallback
          const localCaseStudy = caseStudiesData[slug]
          if (localCaseStudy) {
            setCaseStudy(localCaseStudy)
          } else {
            setError('Case study not found')
          }
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.description,
    "image": caseStudy.image || "https://aaitek.com/Aaitek%20logo%20in%20Black.png",
    "author": {
      "@type": "Organization",
      "name": "Aaitek Technology Specialists"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Aaitek Technology Specialists",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aaitek.com/Aaitek%20logo%20in%20Black.png"
      }
    },
    "url": `https://aaitek.com/case-study/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://aaitek.com/case-study/${slug}`
    }
  }

  return (
    <>
      <SEO
        seoTitle={`${caseStudy.title} - Case Study | Aaitek`}
        seoDescription={caseStudy.description}
        canonicalUrl={`https://aaitek.com/case-study/${slug}`}
        robots="index,follow"
        ogTitle={caseStudy.title}
        ogDescription={caseStudy.description}
        ogImage={caseStudy.image || "https://aaitek.com/Aaitek%20logo%20in%20Black.png"}
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
        
        <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-[250px] max-w-[1920px]">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12">
            {/* Main Content Area - Left Side */}
            <div className="flex-1 lg:max-w-4xl xl:max-w-5xl">
              {/* Video Section (if available) */}
              {caseStudy.video && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200"
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
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-xl"
              >
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Case Study Details</h2>
                {caseStudy.fullContent ? (
                  <div 
                    className="prose prose-lg max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: caseStudy.fullContent }}
                  />
                ) : caseStudy.description ? (
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="text-lg leading-relaxed">{caseStudy.description}</p>
                  </div>
                ) : (
                  <p className="text-gray-600 text-lg">Content coming soon...</p>
                )}
              </motion.div>

              {/* Back to Case Studies Link */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 text-center"
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

            {/* Right Sidebar - Results and Technologies */}
            <div className="lg:w-80 xl:w-96 flex-shrink-0">
              <div className="space-y-6 sticky top-24">
                {/* Results */}
                {caseStudy.results && Object.keys(caseStudy.results).length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                        📊
                      </div>
                      <h2 className="text-xl font-extrabold text-gray-900">Results & Impact</h2>
                    </div>
                    <div className="space-y-3">
                      {Object.entries(caseStudy.results).map(([key, value], index) => (
                        <div key={index} className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                          <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <p className="text-base font-bold text-gray-900">{value}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Technologies Used */}
                {caseStudy.technologies && caseStudy.technologies.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                        💻
                      </div>
                      <h2 className="text-xl font-extrabold text-gray-900">Technologies Used</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="px-3 py-1.5 bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700 font-semibold rounded-lg border border-blue-200 text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default CaseStudyDetail

