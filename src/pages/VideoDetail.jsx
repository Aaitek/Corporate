import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'

const VideoDetail = () => {
  const { slug } = useParams()
  
  // This would typically come from an API or data file
  const video = {
    title: 'Introduction to Aaitek AI Agents',
    slug: 'introduction-aaitek-ai-agents',
    date: '2024-01-10',
    type: 'Video',
    videoType: 'Explainer',
    topic: 'AI & Automation',
    year: '2024',
    description: 'An overview of Aaitek\'s AI agent portfolio and how they can transform enterprise workflows.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // YouTube/Vimeo URL or embed code
    duration: '12 minutes',
    fullContent: `
      <p class="text-lg text-gray-700 mb-6">
        This video provides an introduction to Aaitek's AI agent portfolio, showcasing how intelligent automation can transform enterprise workflows.
      </p>
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">What You'll Learn</h3>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Overview of Aaitek's AI agent capabilities</li>
        <li>Real-world use cases and applications</li>
        <li>How to get started with AI agents</li>
        <li>Integration with existing enterprise systems</li>
      </ul>
    `,
  } || {
    title: 'Video Not Found',
    description: 'The requested video could not be found',
    date: new Date().toISOString(),
    type: 'Video',
    image: null,
    video: null,
    fullContent: '<p>Video not found.</p>',
    duration: 'N/A',
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description,
    "thumbnailUrl": video.image || "https://aaitek.com.au/logo.png",
    "uploadDate": video.date,
    "duration": video.duration,
    "url": `https://aaitek.com.au/video/${slug}`,
  }

  return (
    <>
      <SEO
        seoTitle={`${video.title} - Video | Aaitek`}
        seoDescription={video.description}
        canonicalUrl={`https://aaitek.com.au/video/${slug}`}
        robots="index,follow"
        ogTitle={video.title}
        ogDescription={video.description}
        ogImage={video.image || "https://aaitek.com.au/logo.png"}
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
            {video.image ? (
              <>
                <img 
                  src={video.image} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-red-800/80 to-orange-900/90"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700"></div>
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
                <span className="text-2xl">🎬</span>
                <span className="text-xs font-semibold text-white uppercase tracking-wider">Video</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                {video.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm mb-6">
                <span>{formatDate(video.date)}</span>
                <span>•</span>
                <span>{video.duration}</span>
                <span>•</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">{video.videoType}</span>
              </div>
              <p className="text-lg text-white/90 max-w-3xl">
                {video.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container-custom max-w-4xl mx-auto">
            {/* Video Section */}
            {video.video && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200"
              >
                <div className="aspect-video bg-gray-900">
                  {video.video.includes('youtube.com') || video.video.includes('youtu.be') ? (
                    <iframe
                      src={video.video.includes('youtu.be') 
                        ? `https://www.youtube.com/embed/${video.video.split('/').pop()}`
                        : `https://www.youtube.com/embed/${video.video.split('v=')[1]?.split('&')[0]}`
                      }
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    />
                  ) : video.video.includes('vimeo.com') ? (
                    <iframe
                      src={`https://player.vimeo.com/video/${video.video.split('/').pop()}`}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    />
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: video.video }} />
                  )}
                </div>
              </motion.div>
            )}

            {/* Full Content */}
            {video.fullContent && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-xl mb-8"
              >
                <div 
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: video.fullContent }}
                />
              </motion.div>
            )}

            {/* Back to Videos */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                to="/videos"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Videos
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default VideoDetail

