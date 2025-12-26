import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
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
      setMousePosition({ x: xPos, y: yPos })
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
              "We're a <span style='color: #fb923c;'>Full Stack</span> <span style='color: #06b6d4;'>AI Hub</span>"
            ],
            speed: 100,
            waitUntilVisible: true,
            cursor: false,
            deleteSpeed: 50,
            lifeLike: true,
            breakLines: false,
            html: true,
          }).go()
          
          setShowText(true)
        } catch (error) {
          console.error('TypeIt error:', error)
          // Fallback: just set the text directly with colored spans
          if (typeItRef.current) {
            typeItRef.current.innerHTML = "We're a <span style='color: #fb923c;'>Full Stack</span> <span style='color: #06b6d4;'>AI Hub</span>"
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
      className="relative pt-20 pb-32 overflow-hidden bg-gray-900 min-h-screen flex items-center"
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
        className="container-custom relative z-20"
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
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/20 border border-primary-400/30 mb-6"
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-primary-400"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-medium text-primary-300 uppercase tracking-wider">
                  AI-Powered Solutions
                </span>
              </motion.div>

              {/* Main Heading with TypeIt */}
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span
                  ref={typeItRef}
                  className="block text-white min-h-[1.2em]"
                  style={{
                    x: useTransform(x, (val) => val * 0.3),
                    y: useTransform(yMouse, (val) => val * 0.3),
                    opacity: showText ? 1 : 0,
                  }}
                />
              </motion.h1>
              
              {/* Description */}
              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                When you combine that{' '}
                <span className="font-semibold text-primary-400 bg-primary-400/10 px-2 py-1 rounded">AI firepower</span> with{' '}
                <span className="font-semibold text-accent-400 bg-accent-400/10 px-2 py-1 rounded">industry-specific expertise</span>, 
                you get a fully integrated engine for transformation across the entire AI value chain.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0 }}>
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-0"
                  >
                    <span className="relative z-10">Start a Project</span>
                    <motion.div
                      className="absolute inset-0 bg-primary-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0 }}
                    />
                    <motion.svg
                      className="relative z-10 ml-2 w-5 h-5"
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
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-0"
                  >
                    View Our Work
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
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
          className="flex flex-col items-center gap-2 cursor-pointer group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider group-hover:text-primary-400 transition-colors">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-2 group-hover:border-primary-400 transition-colors">
            <motion.div
              className="w-1.5 h-1.5 bg-primary-500 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
