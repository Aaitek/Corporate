import { motion } from 'framer-motion'

/**
 * Reusable Hero Section Component
 * 
 * Props:
 * - title: Main heading text
 * - description: Paragraph text below heading
 * - badge: Optional badge text (e.g., "Resources", "Services")
 * - image: Optional background image URL (from Strapi uploads)
 * - gradient: Optional gradient classes (default: from-primary-600 via-primary-700 to-accent-600)
 * - overlay: Optional overlay opacity (default: 0.9 for images, 0 for gradients)
 * 
 * Future: Connect to Strapi Global Settings or Page Settings to manage hero images
 */
const HeroSection = ({
  title,
  description,
  badge,
  image = null,
  gradient = 'from-primary-600 via-primary-700 to-accent-600',
  overlay = null,
  className = 'py-8 sm:py-12',
  children
}) => {
  // Determine overlay opacity: use provided value, or default based on image presence
  const overlayOpacity = overlay !== null 
    ? overlay 
    : image 
      ? 0.9 
      : 0

  return (
    <section className={`${className} bg-gradient-to-br ${gradient} relative overflow-hidden`}>
      {/* Background Image (if provided) */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
            style={{ opacity: overlayOpacity }}
          ></div>
        </div>
      )}
      
      {/* Decorative Background Elements (only if no image) */}
      {!image && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
      )}

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">{badge}</span>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              {description}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
