import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ServicesStacked = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayIntervalRef = useRef(null)

  const services = [
    {
      title: 'AI Chatbots',
      description: 'Provide 24/7 customer support with intelligent virtual assistants that boost engagement and improve response times.',
      link: '/services/ai-chatbots',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
    },
    {
      title: 'AI Voice Agents',
      description: 'Automate inbound and outbound calls with AI-driven voice solutions, ensuring seamless customer interactions.',
      link: '/services/ai-voice-agents',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    },
    {
      title: 'AI Automation',
      description: 'Eliminate repetitive tasks and optimize workflows with powerful AI-powered process automation.',
      link: '/services/ai-automation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
      title: 'Custom AI Implementation',
      description: 'Get tailor-made AI solutions designed to meet your unique business challenges.',
      link: '/services/custom-ai',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    },
    {
      title: 'Aaitek DXP',
      description: 'Enterprise-grade DXP solutions across Sitecore, Kentico, Umbraco, and Optimizely. Delivering scalable, on-demand expertise that integrates seamlessly into your teams.',
      link: '/services/dxp',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
    // Pause auto-play when user manually navigates
    setIsAutoPlaying(false)
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current)
    }
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
    // Pause auto-play when user manually navigates
    setIsAutoPlaying(false)
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current)
    }
  }

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayIntervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length)
      }, 2200) // Change slide every 2.2 seconds
    }

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current)
      }
    }
  }, [isAutoPlaying, services.length])

  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-white to-blue-50 py-32 overflow-hidden">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm font-semibold text-primary-400 mb-4 uppercase tracking-wider">
            Services
          </div>
          <h2 className="heading-2 mb-4 text-gray-900">
            We don't serve we work together
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover how our expert services can transform your digital presence and drive business growth.
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows - Outside */}
          <motion.button
            onClick={prevSlide}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/90 hover:bg-white text-primary-600 transition-all backdrop-blur-sm border border-primary-200 hover:border-primary-500 shadow-lg hidden lg:flex items-center justify-center"
            aria-label="Previous slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/90 hover:bg-white text-primary-600 transition-all backdrop-blur-sm border border-primary-200 hover:border-primary-500 shadow-lg hidden lg:flex items-center justify-center"
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>

          {/* Main Slider Container */}
          <div className="relative h-[600px] lg:h-[700px] overflow-hidden rounded-2xl">
            {services.map((service, index) => {
              const offset = index - currentIndex
              const isActive = index === currentIndex
              const isVisible = Math.abs(offset) <= 1

              if (!isVisible) return null

              return (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={false}
                   animate={{
                     y: offset * 100 + '%',
                     opacity: isActive ? 1 : 0.2,
                     scale: isActive ? 1 : 0.92,
                     zIndex: services.length - Math.abs(offset),
                   }}
                   transition={{ 
                     duration: 0.8, 
                     ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smoother animation
                     opacity: { duration: 0.6 },
                     scale: { duration: 0.6 }
                   }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 h-full rounded-2xl overflow-hidden shadow-2xl">
                      {/* Left Side - Content */}
                      <div className="bg-white/95 backdrop-blur-sm p-12 lg:p-16 flex flex-col justify-center border-r border-primary-100">
                        <motion.h3
                          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                          animate={{
                            opacity: isActive ? 1 : 0.5,
                            x: isActive ? 0 : -40,
                          }}
                          transition={{ duration: 0.7, ease: 'easeOut' }}
                        >
                          {service.title}
                        </motion.h3>
                        
                        <motion.p
                          className="text-lg text-gray-300 mb-8 leading-relaxed"
                          animate={{
                            opacity: isActive ? 1 : 0.4,
                            x: isActive ? 0 : -40,
                          }}
                          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                        >
                          {service.description}
                        </motion.p>

                        <motion.div
                          className="flex flex-col sm:flex-row gap-4"
                          animate={{
                            opacity: isActive ? 1 : 0,
                            y: isActive ? 0 : 30,
                          }}
                          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                        >
                          <Link
                            to={service.link}
                            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block text-center"
                          >
                            Discover More
                          </Link>
                          <Link
                            to="/contact"
                            className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 border-2 border-primary-500 hover:border-primary-600 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center justify-center"
                          >
                            Conversations With Experts
                            <svg className="ml-2 w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </motion.div>
                      </div>

                      {/* Right Side - Image */}
                      <div className="relative h-96 lg:h-full overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-primary-500/20"
                          animate={{
                            opacity: isActive ? 0.3 : 0.05,
                          }}
                          transition={{ duration: 0.7 }}
                        />
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          animate={{
                            scale: isActive ? 1 : 1.15,
                            opacity: isActive ? 1 : 0.6,
                          }}
                          transition={{ duration: 0.9, ease: 'easeOut' }}
                        />
                        {/* Overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                        {/* Shine effect on active */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              repeatDelay: 2,
                              ease: 'linear',
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
          </div>

          {/* Mobile Navigation Arrows - Inside for mobile */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/90 hover:bg-white text-primary-600 transition-all backdrop-blur-sm border border-primary-200 hover:border-primary-500 shadow-lg lg:hidden"
            aria-label="Previous slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/90 hover:bg-white text-primary-600 transition-all backdrop-blur-sm border border-primary-200 hover:border-primary-500 shadow-lg lg:hidden"
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>

          {/* Auto-play Toggle */}
          <button
            onClick={() => {
              setIsAutoPlaying(!isAutoPlaying)
            }}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-primary-600 transition-all backdrop-blur-sm border border-primary-200 hover:border-primary-500"
            aria-label={isAutoPlaying ? 'Pause auto-play' : 'Play auto-play'}
          >
            {isAutoPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Slide Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-200">
            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                    if (autoPlayIntervalRef.current) {
                      clearInterval(autoPlayIntervalRef.current)
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary-400 w-8' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="text-gray-300 text-sm ml-4 font-medium">
              {String(currentIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
            </div>
            <div className="text-gray-400 text-sm ml-2">Service</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesStacked
