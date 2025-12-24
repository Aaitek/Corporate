import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: 'Contentful Excellence',
      description: 'Transform your digital content strategy with our expert Contentful implementation. We deliver scalable, API-first solutions that power seamless content delivery across all platforms.',
      link: '/partner-success?category=contentful',
      image: '🚀',
    },
    {
      title: 'Strapi Mastery',
      description: 'Unlock the power of flexible content management with our custom Strapi solutions. We create robust APIs, beautiful front-ends, and scalable architectures.',
      link: '/partner-success?category=strapi',
      image: '⚡',
    },
    {
      title: 'Kentico Innovation',
      description: 'Maximize your digital potential with enterprise-grade Kentico solutions. We build comprehensive platforms that streamline content management and enhance user experiences.',
      link: '/partner-success?category=kentico',
      image: '🏢',
    },
    {
      title: 'Digital Transformation',
      description: 'Revolutionize how businesses connect with their audiences through cutting-edge composable solutions and 20+ years of expertise.',
      link: '/services',
      image: '🌐',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl opacity-15"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-primary-400 rounded-full filter blur-3xl opacity-15"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom w-full">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                <div className="text-8xl mb-6">{slides[currentSlide].image}</div>
                <h1 className="heading-1 mb-6 text-white">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                  {slides[currentSlide].description}
                </p>
                <Link
                  to={slides[currentSlide].link}
                  className="btn-primary inline-block"
                >
                  View Case Study
                  <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-800/50 hover:bg-gray-800 text-white transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-800/50 hover:bg-gray-800 text-white transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-4">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-primary-400 w-8' : 'bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="text-gray-400 text-sm ml-4">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
        <div className="text-gray-400 text-sm ml-2">Case Study</div>
      </div>
    </section>
  )
}

export default HeroCarousel

