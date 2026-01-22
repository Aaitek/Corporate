import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'

const WebinarDetail = () => {
  const { slug } = useParams()
  
  // This would typically come from an API or data file
  const webinar = {
    title: 'AI in Enterprise Platforms: Practical Applications',
    slug: 'ai-enterprise-platforms-practical-applications',
    date: '2024-02-20',
    type: 'Webinar',
    webinarType: 'On-Demand',
    topic: 'AI & Automation',
    industry: 'Finance',
    year: '2024',
    description: 'Explore practical applications of AI in enterprise platforms with real-world examples and implementation strategies.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // YouTube/Vimeo URL or embed code
    speakers: ['John Doe', 'Jane Smith'],
    duration: '45 minutes',
    fullContent: `
      <p class="text-lg text-gray-700 mb-6">
        This webinar explores practical applications of AI in enterprise platforms, featuring real-world examples and actionable implementation strategies.
      </p>
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Topics Covered</h3>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>AI integration patterns for enterprise platforms</li>
        <li>Real-world use cases and success stories</li>
        <li>Implementation best practices</li>
        <li>Common challenges and solutions</li>
      </ul>
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Who Should Attend</h3>
      <p class="text-lg text-gray-700 mb-6">
        This webinar is ideal for CTOs, technical leaders, and engineering teams looking to understand how AI can be effectively integrated into enterprise platforms.
      </p>
    `,
  } || {
    title: 'Webinar Not Found',
    description: 'The requested webinar could not be found',
    date: new Date().toISOString(),
    type: 'Webinar',
    image: null,
    video: null,
    fullContent: '<p>Webinar not found.</p>',
    speakers: [],
    duration: 'N/A',
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": webinar.title,
    "description": webinar.description,
    "thumbnailUrl": webinar.image || "https://aaitek.com/Aaitek%20logo%20in%20Black.png",
    "uploadDate": webinar.date,
    "duration": webinar.duration,
    "url": `https://aaitek.com/webinar/${slug}`,
  }

  return (
    <>
      <SEO
        seoTitle={`${webinar.title} - Webinar | Aaitek`}
        seoDescription={webinar.description}
        canonicalUrl={`https://aaitek.com/webinar/${slug}`}
        robots="index,follow"
        ogTitle={webinar.title}
        ogDescription={webinar.description}
        ogImage={webinar.image || "https://aaitek.com/Aaitek%20logo%20in%20Black.png"}
        ogType="video.other"
        twitterCard="summary_large_image"
        schemaType="VideoObject"
        structuredData={structuredData}
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {webinar.image ? (
              <>
                <img 
                  src={webinar.image} 
                  alt={webinar.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-emerald-800/80 to-green-900/90"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700"></div>
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
                <span className="text-2xl">🎥</span>
                <span className="text-xs font-semibold text-white uppercase tracking-wider">Webinar</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                {webinar.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm mb-6">
                <span>{formatDate(webinar.date)}</span>
                <span>•</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">{webinar.webinarType}</span>
                <span>•</span>
                <span>{webinar.duration}</span>
              </div>
              {webinar.speakers && webinar.speakers.length > 0 && (
                <div className="text-white/90 text-sm mb-6">
                  <span className="font-semibold">Speakers: </span>
                  <span>{webinar.speakers.join(', ')}</span>
                </div>
              )}
              <p className="text-lg text-white/90 max-w-3xl">
                {webinar.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container-custom max-w-4xl mx-auto">
            {/* Video Section */}
            {webinar.video && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200"
              >
                <div className="aspect-video bg-gray-900">
                  {webinar.video.includes('youtube.com') || webinar.video.includes('youtu.be') ? (
                    <iframe
                      src={webinar.video.includes('youtu.be') 
                        ? `https://www.youtube.com/embed/${webinar.video.split('/').pop()}`
                        : `https://www.youtube.com/embed/${webinar.video.split('v=')[1]?.split('&')[0]}`
                      }
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={webinar.title}
                    />
                  ) : webinar.video.includes('vimeo.com') ? (
                    <iframe
                      src={`https://player.vimeo.com/video/${webinar.video.split('/').pop()}`}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={webinar.title}
                    />
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: webinar.video }} />
                  )}
                </div>
              </motion.div>
            )}

            {/* Full Content */}
            {webinar.fullContent && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-xl mb-8"
              >
                <div 
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: webinar.fullContent }}
                />
              </motion.div>
            )}

            {/* Back to Webinars */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                to="/webinars"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Webinars
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default WebinarDetail

