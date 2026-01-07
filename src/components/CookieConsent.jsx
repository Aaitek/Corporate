import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always required
    preferences: false,
    statistics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    
    // For localhost development: allow resetting via console
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      // Expose reset function to window for easy testing
      window.resetCookieConsent = () => {
        localStorage.removeItem('cookieConsent')
        setIsVisible(true)
        console.log('Cookie consent reset! Banner will show again.')
      }
    }
    
    if (!cookieConsent) {
      // Show immediately
      setIsVisible(true)
    } else {
      // Load saved preferences
      const savedPreferences = JSON.parse(cookieConsent)
      setPreferences(savedPreferences)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted))
    setIsVisible(false)
  }

  const handleAcceptSelection = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    setIsVisible(false)
  }

  const handleDeny = () => {
    const onlyNecessary = {
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false,
    }
    setPreferences(onlyNecessary)
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary))
    setIsVisible(false)
  }

  const togglePreference = (key) => {
    if (key === 'necessary') return // Cannot disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  if (!isVisible) return null

  const cookieVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 15 }
    },
    hover: { 
      scale: 1.2, 
      rotate: 15,
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[10000] p-3 sm:p-4"
        >
          <div className="max-w-4xl mx-auto relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/50 rounded-2xl shadow-2xl border-2 border-primary-200/50 overflow-hidden backdrop-blur-xl"
            >
              {/* Animated Header with Gradient Background */}
              <div className="relative bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 p-3 sm:p-4 overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <motion.div
                    animate={{
                      x: [0, 100, 0],
                      y: [0, 50, 0],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute w-64 h-64 bg-white rounded-full blur-3xl"
                  />
                  <motion.div
                    animate={{
                      x: [0, -80, 0],
                      y: [0, -30, 0],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute top-0 right-0 w-48 h-48 bg-cyan-300 rounded-full blur-3xl"
                  />
                </div>
                
                <div className="relative flex items-start gap-4">
                  {/* Animated Cookie Icon */}
                  <motion.div
                    variants={cookieVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shadow-xl border-2 border-white/30"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="text-2xl sm:text-3xl"
                    >
                      🍪
                    </motion.div>
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-lg sm:text-xl font-extrabold text-white mb-1.5 flex items-center gap-2"
                    >
                      We Value Your Privacy
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-xl"
                      >
                        🔒
                      </motion.span>
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xs sm:text-sm text-white/95 leading-relaxed"
                    >
                      We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 bg-gradient-to-b from-white to-gray-50/50">
                {!showDetails ? (
                  // Simple View
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-5"
                  >
                    <div className="flex items-start gap-2.5 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200/50">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="text-xl flex-shrink-0"
                      >
                        ℹ️
                      </motion.div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you've provided to them or that they've collected from your use of their services.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <Link 
                        to="/privacy-policy" 
                        className="group inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold transition-all duration-300 hover:gap-2"
                      >
                        <span className="underline">Privacy Policy</span>
                        <motion.svg
                          whileHover={{ x: 3 }}
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </Link>
                      <span className="text-gray-400">•</span>
                      <Link 
                        to="/terms-conditions" 
                        className="group inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold transition-all duration-300 hover:gap-2"
                      >
                        <span className="underline">Terms & Conditions</span>
                        <motion.svg
                          whileHover={{ x: 3 }}
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </Link>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAcceptAll}
                        className="group relative flex-1 px-4 py-2.5 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 text-white font-bold text-sm rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                        <span className="relative flex items-center justify-center gap-2">
                          <motion.span
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            ✓
                          </motion.span>
                          Accept All
                        </span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowDetails(true)}
                        className="flex-1 px-4 py-2.5 bg-white border-2 border-primary-600 text-primary-600 font-bold text-sm rounded-lg hover:bg-gradient-to-r hover:from-primary-50 hover:to-cyan-50 transition-all duration-300 shadow-md hover:shadow-lg group"
                      >
                        <span className="flex items-center justify-center gap-1.5">
                          <motion.svg
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                          </motion.svg>
                          Customize
                        </span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleDeny}
                        className="flex-1 px-4 py-2.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-bold text-sm rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Deny All
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  // Detailed View
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <motion.h4
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xl font-extrabold text-gray-900 flex items-center gap-2"
                      >
                        <span className="text-2xl">⚙️</span>
                        Cookie Preferences
                      </motion.h4>
                      <motion.button
                        whileHover={{ rotate: 90, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setShowDetails(false)}
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300"
                        aria-label="Hide details"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </motion.button>
                    </div>

                    {/* Cookie Categories */}
                    <div className="space-y-4">
                      {/* Necessary Cookies */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 border-2 border-gray-300 shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200/0 to-gray-300/0 group-hover:from-gray-200/20 group-hover:to-gray-300/20 rounded-2xl transition-all duration-300" />
                        <div className="relative flex items-center justify-between mb-3">
                          <div className="flex items-center gap-4">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl flex items-center justify-center shadow-lg"
                            >
                              <span className="text-2xl">🔒</span>
                            </motion.div>
                            <div>
                              <h5 className="font-bold text-gray-900 text-lg">Necessary</h5>
                              <p className="text-xs text-gray-500 font-medium">Always Active</p>
                            </div>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="px-4 py-1.5 bg-gradient-to-r from-gray-400 to-gray-600 text-white text-xs font-bold rounded-full shadow-md"
                          >
                            Required
                          </motion.div>
                        </div>
                        <p className="text-sm text-gray-600 ml-16 leading-relaxed">
                          Essential cookies required for the website to function properly. These cannot be disabled.
                        </p>
                      </motion.div>

                      {/* Preferences Cookies */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        className={`group relative rounded-2xl p-5 border-2 transition-all duration-300 shadow-md hover:shadow-xl ${
                          preferences.preferences 
                            ? 'bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 border-blue-400 shadow-blue-200/50' 
                            : 'bg-white border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-4">
                            <motion.div
                              whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                                preferences.preferences
                                  ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                                  : 'bg-gray-200'
                              }`}
                            >
                              <span className="text-2xl">⚙️</span>
                            </motion.div>
                            <div>
                              <h5 className="font-bold text-gray-900 text-lg">Preferences</h5>
                              <p className="text-xs text-gray-500 font-medium">Remember your settings</p>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => togglePreference('preferences')}
                            className={`relative w-16 h-9 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-lg ${
                              preferences.preferences ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gray-300'
                            }`}
                            aria-label="Toggle preferences cookies"
                          >
                            <motion.span
                              layout
                              className="absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-lg"
                              animate={{
                                x: preferences.preferences ? 28 : 0,
                              }}
                              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                          </motion.button>
                        </div>
                        <p className="text-sm text-gray-600 ml-16 leading-relaxed">
                          These cookies allow the website to remember choices you make and provide enhanced, personalized features.
                        </p>
                      </motion.div>

                      {/* Statistics Cookies */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                        className={`group relative rounded-2xl p-5 border-2 transition-all duration-300 shadow-md hover:shadow-xl ${
                          preferences.statistics 
                            ? 'bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 border-green-400 shadow-green-200/50' 
                            : 'bg-white border-gray-200 hover:border-green-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-4">
                            <motion.div
                              whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                                preferences.statistics
                                  ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                                  : 'bg-gray-200'
                              }`}
                            >
                              <span className="text-2xl">📊</span>
                            </motion.div>
                            <div>
                              <h5 className="font-bold text-gray-900 text-lg">Statistics</h5>
                              <p className="text-xs text-gray-500 font-medium">Help us improve</p>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => togglePreference('statistics')}
                            className={`relative w-16 h-9 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-lg ${
                              preferences.statistics ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gray-300'
                            }`}
                            aria-label="Toggle statistics cookies"
                          >
                            <motion.span
                              layout
                              className="absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-lg"
                              animate={{
                                x: preferences.statistics ? 28 : 0,
                              }}
                              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                          </motion.button>
                        </div>
                        <p className="text-sm text-gray-600 ml-16 leading-relaxed">
                          These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                        </p>
                      </motion.div>

                      {/* Marketing Cookies */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                        className={`group relative rounded-2xl p-5 border-2 transition-all duration-300 shadow-md hover:shadow-xl ${
                          preferences.marketing 
                            ? 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 border-purple-400 shadow-purple-200/50' 
                            : 'bg-white border-gray-200 hover:border-purple-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-4">
                            <motion.div
                              whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                                preferences.marketing
                                  ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                                  : 'bg-gray-200'
                              }`}
                            >
                              <span className="text-2xl">📢</span>
                            </motion.div>
                            <div>
                              <h5 className="font-bold text-gray-900 text-lg">Marketing</h5>
                              <p className="text-xs text-gray-500 font-medium">Personalized ads</p>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => togglePreference('marketing')}
                            className={`relative w-16 h-9 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-lg ${
                              preferences.marketing ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-300'
                            }`}
                            aria-label="Toggle marketing cookies"
                          >
                            <motion.span
                              layout
                              className="absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-lg"
                              animate={{
                                x: preferences.marketing ? 28 : 0,
                              }}
                              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                          </motion.button>
                        </div>
                        <p className="text-sm text-gray-600 ml-16 leading-relaxed">
                          These cookies are used to deliver advertisements that are more relevant to you and your interests.
                        </p>
                      </motion.div>
                    </div>

                    {/* Action Buttons in Detailed View */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-col sm:flex-row gap-3 pt-4 border-t-2 border-gray-200"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAcceptSelection}
                        className="group relative flex-1 px-6 py-3.5 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                        <span className="relative flex items-center justify-center gap-2">
                          <motion.span
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            💾
                          </motion.span>
                          Save Preferences
                        </span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAcceptAll}
                        className="flex-1 px-6 py-3.5 bg-white border-2 border-primary-600 text-primary-600 font-bold rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-cyan-50 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Accept All
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent
