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
    if (!cookieConsent) {
      // Show after a small delay for better UX
      setTimeout(() => setIsVisible(true), 1000)
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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[10000] p-4 sm:p-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      We Value Your Privacy
                    </h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                      We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                {!showDetails ? (
                  // Simple View
                  <div className="space-y-4">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you've provided to them or that they've collected from your use of their services.
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                      <Link 
                        to="/privacy-policy" 
                        className="text-primary-600 hover:text-primary-700 font-semibold underline"
                      >
                        Privacy Policy
                      </Link>
                      <span>•</span>
                      <Link 
                        to="/terms-conditions" 
                        className="text-primary-600 hover:text-primary-700 font-semibold underline"
                      >
                        Terms & Conditions
                      </Link>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleAcceptAll}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Accept All
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowDetails(true)}
                        className="flex-1 px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-300"
                      >
                        Customize Preferences
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleDeny}
                        className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300"
                      >
                        Deny All
                      </motion.button>
                    </div>
                  </div>
                ) : (
                  // Detailed View
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-gray-900">Cookie Preferences</h4>
                      <button
                        onClick={() => setShowDetails(false)}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Hide details"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Cookie Categories */}
                    <div className="space-y-4">
                      {/* Necessary Cookies */}
                      <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-900">Necessary</h5>
                              <p className="text-xs text-gray-500">Always Active</p>
                            </div>
                          </div>
                          <div className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full">
                            Required
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 ml-13">
                          Essential cookies required for the website to function properly. These cannot be disabled.
                        </p>
                      </div>

                      {/* Preferences Cookies */}
                      <div className={`rounded-xl p-4 border-2 transition-all duration-300 ${
                        preferences.preferences 
                          ? 'bg-blue-50 border-blue-300' 
                          : 'bg-white border-gray-200'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                              preferences.preferences
                                ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                                : 'bg-gray-200'
                            }`}>
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-900">Preferences</h5>
                              <p className="text-xs text-gray-500">Remember your settings</p>
                            </div>
                          </div>
                          <button
                            onClick={() => togglePreference('preferences')}
                            className={`relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                              preferences.preferences ? 'bg-primary-600' : 'bg-gray-300'
                            }`}
                            aria-label="Toggle preferences cookies"
                          >
                            <span
                              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                                preferences.preferences ? 'translate-x-6' : 'translate-x-0'
                              }`}
                            />
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 ml-13">
                          These cookies allow the website to remember choices you make and provide enhanced, personalized features.
                        </p>
                      </div>

                      {/* Statistics Cookies */}
                      <div className={`rounded-xl p-4 border-2 transition-all duration-300 ${
                        preferences.statistics 
                          ? 'bg-green-50 border-green-300' 
                          : 'bg-white border-gray-200'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                              preferences.statistics
                                ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                                : 'bg-gray-200'
                            }`}>
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-900">Statistics</h5>
                              <p className="text-xs text-gray-500">Help us improve</p>
                            </div>
                          </div>
                          <button
                            onClick={() => togglePreference('statistics')}
                            className={`relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                              preferences.statistics ? 'bg-primary-600' : 'bg-gray-300'
                            }`}
                            aria-label="Toggle statistics cookies"
                          >
                            <span
                              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                                preferences.statistics ? 'translate-x-6' : 'translate-x-0'
                              }`}
                            />
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 ml-13">
                          These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                        </p>
                      </div>

                      {/* Marketing Cookies */}
                      <div className={`rounded-xl p-4 border-2 transition-all duration-300 ${
                        preferences.marketing 
                          ? 'bg-purple-50 border-purple-300' 
                          : 'bg-white border-gray-200'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                              preferences.marketing
                                ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                                : 'bg-gray-200'
                            }`}>
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-900">Marketing</h5>
                              <p className="text-xs text-gray-500">Personalized ads</p>
                            </div>
                          </div>
                          <button
                            onClick={() => togglePreference('marketing')}
                            className={`relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                              preferences.marketing ? 'bg-primary-600' : 'bg-gray-300'
                            }`}
                            aria-label="Toggle marketing cookies"
                          >
                            <span
                              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                                preferences.marketing ? 'translate-x-6' : 'translate-x-0'
                              }`}
                            />
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 ml-13">
                          These cookies are used to deliver advertisements that are more relevant to you and your interests.
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons in Detailed View */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleAcceptSelection}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Save Preferences
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleAcceptAll}
                        className="flex-1 px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-300"
                      >
                        Accept All
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent

