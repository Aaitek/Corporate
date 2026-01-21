import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchProducts, getImageUrl } from '../utils/api'
import SEO from '../components/SEO'
import productsData from '../data/productsData'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        const response = await fetchProducts()
        let strapiProducts = []
        
        if (response?.data && response.data.length > 0) {
          // Map Strapi data to component format
          strapiProducts = response.data.map(item => ({
            id: item.id,
            title: item.attributes?.title || '',
            slug: item.attributes?.slug || '',
            description: item.attributes?.description || '',
            category: item.attributes?.category || '',
            features: item.attributes?.features || [],
            pricing: item.attributes?.pricing || {},
            image: getImageUrl(item.attributes?.image, 'medium') || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
            // Default values for UI
            subtitle: item.attributes?.category || 'AI Agent',
            color: 'from-blue-500 to-cyan-500',
            icon: '🤖',
            comingSoon: false,
          }))
        }

        // Convert productsData to array format
        const fallbackProducts = Object.entries(productsData).map(([slug, product]) => ({
          id: slug,
          title: product.title,
          slug: slug,
          description: product.description,
          category: product.subtitle,
          features: product.keyFeatures || [],
          pricing: {},
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
          subtitle: product.subtitle,
          color: product.color,
          icon: product.icon,
          comingSoon: product.comingSoon || false,
        }))
        
        // Combine Strapi data with fallback data (show both)
        // Filter out fallback items that might already exist in Strapi by slug
        const existingSlugs = new Set(strapiProducts.map(p => p.slug))
        const uniqueFallbacks = fallbackProducts.filter(fb => !existingSlugs.has(fb.slug))
        
        // Merge: Strapi data first, then fallback data
        const allProducts = [...strapiProducts, ...uniqueFallbacks]
        
        setProducts(allProducts)
      } catch (error) {
        console.error('Error fetching products:', error)
        // On error, use fallback data
        const fallbackProducts = Object.entries(productsData).map(([slug, product]) => ({
          id: slug,
          title: product.title,
          slug: slug,
          description: product.description,
          category: product.subtitle,
          features: product.keyFeatures || [],
          pricing: {},
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
          subtitle: product.subtitle,
          color: product.color,
          icon: product.icon,
          comingSoon: product.comingSoon || false,
  }))
        setProducts(fallbackProducts)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  const siteUrl = 'https://aaitek.com.au'

  return (
    <>
      <SEO
        seoTitle="Products - AI Agents & Platforms | Aaitek"
        seoDescription="Intelligent AI agents that automate business processes, enhance customer experience, and drive operational efficiency across industries."
        canonicalUrl={`${siteUrl}/products`}
        ogTitle="Products - AI Agents & Platforms"
        ogDescription="Intelligent AI agents that automate business processes, enhance customer experience, and drive operational efficiency across industries."
        ogImage="https://aaitek.com.au/logo-black.png"
        ogType="website"
        twitterTitle="Products - AI Agents & Platforms"
        twitterDescription="Intelligent AI agents that automate business processes, enhance customer experience, and drive operational efficiency across industries."
        twitterImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
        schemaType="CollectionPage"
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Our Products</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              AI-Powered Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Intelligent AI agents that automate business processes, enhance customer experience, and drive operational efficiency across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              All Products
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
              Enterprise-grade AI solutions designed for scale, security, and measurable impact
            </p>
          </motion.div>

          {/* Products Grid */}
          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              <p className="mt-4 text-gray-600">Loading products...</p>
            </div>
          ) : products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  ease: 'easeIn'
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                {/* Left Border on Hover */}
                <motion.div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {product.icon}
                </div>

                {/* Coming Soon Badge */}
                {product.comingSoon && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold mb-4">
                    Coming Soon
                  </span>
                )}

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-lg font-semibold text-primary-600 mb-4">
                  {product.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* CTA Button */}
                {!product.comingSoon && (
                <Link
                    to={`/products/${product.slug}`}
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors duration-300 group/btn"
                >
                    View Details
                  <svg 
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                )}
              </motion.div>
            ))}
          </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600">No products available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Enterprise Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Designed for enterprises. Built for scale. Ready for the future.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business with AI-powered solutions that scale with your needs and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-primary-700 transition-all duration-300 hover:scale-105"
            >
                Talk to an Expert
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Request a Product Overview
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Products
