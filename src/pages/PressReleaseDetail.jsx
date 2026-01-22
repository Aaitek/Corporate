import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'

const PressReleaseDetail = () => {
  const { slug } = useParams()
  
  // This would typically come from an API or data file
  const pressRelease = {
    title: 'Aaitek Announces Launch of AI Agent Portfolio',
    slug: 'aaitek-announces-launch-ai-agent-portfolio',
    date: '2024-01-15',
    type: 'Product Launch',
    year: '2024',
    region: 'Global',
    description: 'Aaitek today announced the launch of its comprehensive AI Agent portfolio, designed to help enterprises automate workflows and improve customer engagement.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    video: null, // Optional: YouTube/Vimeo URL or embed code
    fullContent: `
      <p class="text-lg text-gray-700 mb-6">
        <strong>Sydney, Australia - January 15, 2024</strong> - Aaitek Technology Specialists today announced the launch of its comprehensive AI Agent portfolio, a suite of intelligent automation solutions designed to help enterprises streamline operations and enhance customer engagement.
      </p>
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Highlights</h3>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Comprehensive AI Agent portfolio for enterprise automation</li>
        <li>Designed to integrate seamlessly with existing enterprise systems</li>
        <li>Focus on security, compliance, and governance</li>
        <li>Available across multiple industries and use cases</li>
      </ul>
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">About Aaitek</h3>
      <p class="text-lg text-gray-700 mb-6">
        Aaitek Technology Specialists is a leading provider of enterprise-grade digital transformation solutions, specializing in AI, cloud, and platform engineering.
      </p>
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Media Contact</h3>
      <p class="text-lg text-gray-700 mb-6">
        For media inquiries, please contact press@aaitek.com
      </p>
    `,
  } || {
    title: 'Press Release Not Found',
    description: 'The requested press release could not be found',
    date: new Date().toISOString(),
    type: 'Press Release',
    image: null,
    video: null,
    fullContent: '<p>Press release not found.</p>',
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": pressRelease.title,
    "description": pressRelease.description,
    "image": pressRelease.image || "https://aaitek.com/Aaitek%20logo%20in%20Black.png",
    "datePublished": pressRelease.date,
    "publisher": {
      "@type": "Organization",
      "name": "Aaitek Technology Specialists",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aaitek.com/Aaitek%20logo%20in%20Black.png"
      }
    },
    "url": `https://aaitek.com/press-release/${slug}`,
  }

  return (
    <>
      <SEO
        seoTitle={`${pressRelease.title} - Press Release | Aaitek`}
        seoDescription={pressRelease.description}
        canonicalUrl={`https://aaitek.com/press-release/${slug}`}
        robots="index,follow"
        ogTitle={pressRelease.title}
        ogDescription={pressRelease.description}
        ogImage={pressRelease.image || "https://aaitek.com/Aaitek%20logo%20in%20Black.png"}
        ogType="article"
        twitterCard="summary_large_image"
        schemaType="NewsArticle"
        structuredData={structuredData}
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {pressRelease.image ? (
              <>
                <img 
                  src={pressRelease.image} 
                  alt={pressRelease.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-blue-800/80 to-indigo-900/90"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600"></div>
            )}
          </div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                <span className="text-2xl">📢</span>
                <span className="text-xs font-semibold text-white uppercase tracking-wider">Press Release</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                {pressRelease.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm mb-6">
                <span>{formatDate(pressRelease.date)}</span>
                <span>•</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">{pressRelease.type}</span>
              </div>
              <p className="text-lg text-white/90 max-w-3xl">
                {pressRelease.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container-custom max-w-4xl mx-auto">
            {/* Video Section (if available) */}
            {pressRelease.video && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200"
              >
                <div className="aspect-video bg-gray-900">
                  {pressRelease.video.includes('youtube.com') || pressRelease.video.includes('youtu.be') ? (
                    <iframe
                      src={pressRelease.video.includes('youtu.be') 
                        ? `https://www.youtube.com/embed/${pressRelease.video.split('/').pop()}`
                        : `https://www.youtube.com/embed/${pressRelease.video.split('v=')[1]?.split('&')[0]}`
                      }
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={pressRelease.title}
                    />
                  ) : pressRelease.video.includes('vimeo.com') ? (
                    <iframe
                      src={`https://player.vimeo.com/video/${pressRelease.video.split('/').pop()}`}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={pressRelease.title}
                    />
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: pressRelease.video }} />
                  )}
                </div>
              </motion.div>
            )}

            {/* Full Content */}
            {pressRelease.fullContent && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-xl mb-8"
              >
                <div 
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: pressRelease.fullContent }}
                />
              </motion.div>
            )}

            {/* Back to Press Releases */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                to="/press-releases"
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Press Releases
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PressReleaseDetail

