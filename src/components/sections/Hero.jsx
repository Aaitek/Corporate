import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const [showText, setShowText] = useState(false)
  const [startAnimations, setStartAnimations] = useState(false)
  const heroRef = useRef(null)
  const typeItRef = useRef(null)
  const typeItInstanceRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const yMouse = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const xPos = (clientX / innerWidth - 0.5) * 20
      const yPos = (clientY / innerHeight - 0.5) * 20
      mouseX.set(xPos)
      mouseY.set(yPos)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Start animations when hero is in view
  useEffect(() => {
    if (heroInView) {
      // Start animations after a short delay to ensure smooth rendering
      const timer = setTimeout(() => {
        setStartAnimations(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [heroInView])

  // TypeIt effect - starts when animations are triggered
  useEffect(() => {
    const initTypeIt = async () => {
      if (typeItRef.current && !typeItInstanceRef.current && startAnimations) {
        try {
          // Wait a bit for element to be ready
          await new Promise(resolve => setTimeout(resolve, 200))
          
          // Clear content completely
          if (typeItRef.current) {
            typeItRef.current.innerHTML = ''
          }
          
          const TypeIt = (await import('typeit')).default
          
          typeItInstanceRef.current = new TypeIt(typeItRef.current, {
            strings: [
              '<span class="text-white">AI-</span><span style="color: #0ea5e9">Powered</span> <span style="color: #FC923C">Digital Transformation</span> <span class="text-white">for Modern</span> <span style="color: #0ea5e9">Enterprises</span>'
            ],
            speed: 50,
            waitUntilVisible: true,
            cursor: false,
            deleteSpeed: 50,
            lifeLike: true,
            breakLines: false,
            html: true,
          }).go()
          
          setShowText(true)
        } catch (error) {
          // Fallback: just set the text directly with colored spans
          // TypeIt failed to load, use static text instead
          if (typeItRef.current) {
            typeItRef.current.innerHTML = '<span class="text-white">AI-</span><span style="color: #0ea5e9">Powered</span> <span style="color: #FC923C">Digital Transformation</span> <span class="text-white">for Modern</span> <span style="color: #0ea5e9">Enterprises</span>'
            setShowText(true)
          }
        }
      }
    }
    
    if (startAnimations) {
      initTypeIt()
    }
    
    return () => {
      if (typeItInstanceRef.current) {
        try {
          typeItInstanceRef.current.destroy()
        } catch (e) {
          // Ignore destroy errors
        }
        typeItInstanceRef.current = null
      }
    }
  }, [startAnimations])



  // Animated particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }))

  // Tech elements for background
  const techElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    icon: ['</>', '{ }', 'AI', 'API', 'DEV', 'CODE', 'JS', 'TS'][i],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 30,
    rotation: Math.random() * 360,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <section 
      ref={heroRef}
      className="relative pt-0 sm:pt-0 pb-8 sm:pb-16 md:pb-24 lg:pb-32 overflow-hidden bg-gray-900 flex items-start sm:items-center"
      style={{ 
        height: 'calc(100vh - var(--header-height, 80px))',
        minHeight: 'calc(100vh - var(--header-height, 80px))',
        paddingTop: 'calc(var(--header-height, 80px) + 0.5rem)'
      }}
    >
      {/* Gradient Background - Skyish Blue */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-sky-800 to-blue-900"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(56, 189, 248, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(125, 211, 252, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.4) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 80% 80%, rgba(56, 189, 248, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(125, 211, 252, 0.25) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(56, 189, 248, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary-400/20 z-20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            x: useTransform(x, (val) => val * (particle.id % 2 === 0 ? 1 : -1) * 0.5),
            y: useTransform(yMouse, (val) => val * (particle.id % 2 === 0 ? 1 : -1) * 0.5),
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}


      {/* Main Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="container-custom relative z-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[250px] pt-4 sm:pt-0"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10"
          >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary-500/20 border border-primary-400/30 mb-2 sm:mb-4 md:mb-5"
              >
                <motion.div
                  className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary-400"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs sm:text-[10px] md:text-xs font-medium text-primary-300 uppercase tracking-wider whitespace-nowrap">
                  AI-Powered Solutions
                </span>
              </motion.div>

              {/* Main Heading with TypeIt */}
              <motion.h1
                className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-white mb-2 sm:mb-4 md:mb-5 leading-tight px-2 sm:px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span
                  ref={typeItRef}
                  className="block text-white min-h-[1.2em] break-words hyphens-auto"
                  style={{
                    x: useTransform(x, (val) => val * 0.3),
                    y: useTransform(yMouse, (val) => val * 0.3),
                    opacity: showText ? 1 : 0,
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                  }}
                />
              </motion.h1>
              
              {/* Description */}
              <motion.p
                className="text-base sm:text-sm md:text-base lg:text-lg text-gray-300 mb-2 sm:mb-4 md:mb-6 leading-relaxed px-2 sm:px-4 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                We design, build, and scale intelligent digital platforms by combining{' '}
                <span className="font-semibold text-primary-400 bg-primary-400/10 px-1 sm:px-1.5 md:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-[10px] md:text-xs lg:text-sm xl:text-base">AI</span>,{' '}
                <span className="font-semibold text-accent-400 bg-accent-400/10 px-1 sm:px-1.5 md:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-[10px] md:text-xs lg:text-sm xl:text-base">cloud</span>, and{' '}
                <span className="font-semibold text-primary-400 bg-primary-400/10 px-1 sm:px-1.5 md:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-[10px] md:text-xs lg:text-sm xl:text-base">enterprise-grade engineering</span> enabling organizations to innovate faster, operate smarter, and grow with confidence.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center items-center px-2 mb-4 sm:mb-12 md:mb-16 lg:mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0 }}>
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 bg-primary-500 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-0 text-sm sm:text-xs md:text-sm whitespace-nowrap"
                  >
                    <span className="relative z-10">Start a Project</span>
                    <motion.div
                      className="absolute inset-0 bg-primary-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0 }}
                    />
                    <motion.svg
                      className="relative z-10 ml-1 sm:ml-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0 }}>
                  <Link
                    to="/partner-success"
                    className="inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-0 text-sm sm:text-xs md:text-sm whitespace-nowrap"
                  >
                    View Our Work
                    <svg className="ml-1 sm:ml-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-20 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          onClick={() => {
            const nextSection = document.querySelector('#services') || document.querySelector('section:not(#hero)')
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
            } else {
              window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
            }
          }}
          className="flex flex-col items-center cursor-pointer group"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-300 rounded-full flex justify-center p-1.5 sm:p-2 group-hover:border-primary-400 transition-colors">
            <motion.div
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-500 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
