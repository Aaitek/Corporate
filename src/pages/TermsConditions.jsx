import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const TermsConditions = () => {
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
              Terms & Conditions
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h2>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Introduction</h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Welcome to Aaitek Technology Specialists. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website and using our services, we assume you accept these terms and conditions. Do not continue to use our website if you do not agree to take all of the terms and conditions stated on this page.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Definitions</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The following terminology applies to these terms and conditions:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4">
                  <li><span className="font-semibold">"Company"</span> (or "we" or "us" or "our") refers to Aaitek Technology Specialists.</li>
                  <li><span className="font-semibold">"You"</span> refers to the user or viewer of our website.</li>
                  <li><span className="font-semibold">"Service"</span> refers to the technology solutions and consulting services provided by our company.</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Use License</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials on Aaitek Technology Specialists' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Service Terms</h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Our technology consulting and development services are provided under separate service agreements. All project deliverables, timelines, and payment terms will be outlined in individual contracts. We reserve the right to modify our service offerings and pricing with appropriate notice to clients.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy Policy</h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our services. By using our website and services, you agree to the collection and use of information in accordance with our Privacy Policy.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  In no event shall Aaitek Technology Specialists or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Accuracy of Materials</h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Modifications</h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Aaitek Technology Specialists may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us through our contact page or reach out to our support team directly.
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

export default TermsConditions

