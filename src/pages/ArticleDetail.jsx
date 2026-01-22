import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SEO from '../components/SEO'
import api, { getImageUrl } from '../utils/api'

const ArticleDetail = () => {
  const { slug } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true)
        setError(null)
        // Use Vercel API proxy to avoid Railway Edge CORS issues
        const response = await api.get('/api/articles', {
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
            excerpt: item.attributes?.excerpt || '',
            content: item.attributes?.content || '',
            category: item.attributes?.category || '',
            author: item.attributes?.author || 'Aaitek Team',
            publishedAt: item.attributes?.publishedAt || new Date().toISOString(),
            tags: item.attributes?.tags || [],
            image: getImageUrl(item.attributes?.image, 'large'),
            fullContent: item.attributes?.content || '',
            description: item.attributes?.excerpt || item.attributes?.description || '',
          }
          setArticle(mapped)
        } else {
          setError('Article not found')
        }
      } catch (err) {
        console.error('Error fetching article:', err)
        setError('Failed to load article')
      } finally {
        setLoading(false)
      }
    }
    
    if (slug) {
      loadArticle()
    }
  }, [slug])

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The requested article could not be found.'}</p>
          <Link
            to="/articles"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Articles
          </Link>
        </div>
      </div>
    )
  }

  // Ensure article image is absolute URL for SEO previews
  // For social media crawlers, proxy Railway images through main domain
  // Use article slug for cache busting (stable but unique per article)
  const getPreviewImage = (imageUrl) => {
    const cacheBuster = slug || 'default'
    
    if (!imageUrl) {
      // Use default logo
      return "https://aaitek.com/Aaitek%20logo%20in%20Black.png"
    }
    
    // If already from main domain, use as is
    if (imageUrl.includes('aaitek.com')) {
      return imageUrl
    }
    
    // If from Railway, proxy through main domain for social media crawlers
    // This ensures social media crawlers can access the image
    if (imageUrl.includes('railway.app') || imageUrl.includes('aaitech-production')) {
      const encodedUrl = encodeURIComponent(imageUrl)
      return `https://aaitek.com/api/image-proxy?url=${encodedUrl}`
    }
    
    // If already absolute URL, use as is
    if (imageUrl.startsWith('http')) {
      return imageUrl
    }
    
    // If relative, make absolute
    return `https://aaitek.com${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`
  }
  
  const articleImage = getPreviewImage(article?.image)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description || article.excerpt,
    "image": articleImage,
    "author": {
      "@type": "Organization",
      "name": article.author || "Aaitek Technology Specialists"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Aaitek Technology Specialists",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aaitek.com/Aaitek%20logo%20in%20Black.png"
      }
    },
    "datePublished": article.publishedAt || new Date().toISOString(),
    "url": `https://aaitek.com/article/${slug}`,
  }

  return (
    <>
      <SEO
        seoTitle={`${article.title} - Article | Aaitek`}
        seoDescription={article.description}
        canonicalUrl={`https://aaitek.com/article/${slug}`}
        robots="index,follow"
        ogTitle={article.title}
        ogDescription={article.description}
        ogImage={articleImage}
        ogType="article"
        twitterCard="summary_large_image"
        schemaType="Article"
        structuredData={structuredData}
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {article.image ? (
              <>
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-cyan-800/80 to-blue-900/90"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700"></div>
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
                <span className="text-2xl">📝</span>
                <span className="text-xs font-semibold text-white uppercase tracking-wider">Article</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm mb-6">
                <span>By {article.author}</span>
                {article.publishedAt && (
                  <>
                <span>•</span>
                    <span>{formatDate(article.publishedAt)}</span>
                  </>
                )}
              </div>
              <p className="text-lg text-white/90 max-w-3xl">
                {article.description || article.excerpt}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container-custom max-w-4xl mx-auto">
            {/* Video Section (if available) */}
            {article.video && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200"
              >
                <div className="aspect-video bg-gray-900">
                  {article.video.includes('youtube.com') || article.video.includes('youtu.be') ? (
                    <iframe
                      src={article.video.includes('youtu.be') 
                        ? `https://www.youtube.com/embed/${article.video.split('/').pop()}`
                        : `https://www.youtube.com/embed/${article.video.split('v=')[1]?.split('&')[0]}`
                      }
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={article.title}
                    />
                  ) : article.video.includes('vimeo.com') ? (
                    <iframe
                      src={`https://player.vimeo.com/video/${article.video.split('/').pop()}`}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={article.title}
                    />
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: article.video }} />
                  )}
                </div>
              </motion.div>
            )}

            {/* Full Content */}
            {(article.fullContent || article.content) ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-xl mb-8"
              >
                <div 
                  className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-blue-600 prose-strong:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: article.fullContent || article.content || '<p>No content available.</p>' }}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-xl mb-8"
              >
                <p className="text-gray-600 text-lg">Content coming soon...</p>
              </motion.div>
            )}

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-lg text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Back to Articles */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                to="/articles"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Articles
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ArticleDetail

