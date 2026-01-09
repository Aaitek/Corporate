import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
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
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Legal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/90">
              Last updated: November 24, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200"
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  We collect information you provide directly to us, such as when you contact us, subscribe to our newsletter, or use our services. This may include your name, email address, phone number, and any other information you choose to provide.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you newsletters and marketing communications (with your consent)</li>
                  <li>Respond to your inquiries and provide customer support</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy or as required by law.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Email:</span>{' '}
                    <a href="mailto:info@aaitek.com" className="text-primary-600 hover:text-primary-700 transition-colors duration-0">
                      info@aaitek.com
                    </a>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Phone:</span>{' '}
                    <a href="tel:+61435987212" className="text-primary-600 hover:text-primary-700 transition-colors duration-0">
                      +61 435 987 212
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Address:</span> Sydney, Australia
                  </p>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-0"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy

