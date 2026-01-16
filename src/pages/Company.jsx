import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SEO from '../components/SEO'

const Company = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const location = useLocation()
  const careersRef = useRef(null)

  // Scroll to careers section if hash is present
  useEffect(() => {
    if (location.hash === '#careers' && careersRef.current) {
      setTimeout(() => {
        careersRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [location.hash])

  const whatDefinesAaitek = [
    {
      title: 'Australia-based leadership and accountability',
      icon: '🇦🇺',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Global delivery through trusted partnerships',
      icon: '🌍',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Enterprise-grade engineering and platforms',
      icon: '🏢',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'AI-enabled, but human-centred solutions',
      icon: '🤖',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Focus on long-term value, not short-term delivery',
      icon: '⭐',
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  const whatSetsUsApart = [
    {
      title: 'Enterprise Mindset',
      description: 'We design solutions that are secure, scalable, and built to last — not quick fixes.',
      icon: '🏗️',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Human-Centric Delivery',
      description: 'We value communication, clarity, and collaboration as much as technical excellence.',
      icon: '🤝',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Flexible, Honest Engagement',
      description: 'We adapt to your needs with transparency — no rigid models, no hidden complexity.',
      icon: '💬',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'AI-Ready, Responsibly Designed',
      description: 'We help organisations adopt AI thoughtfully, with governance, ethics, and sustainability in mind.',
      icon: '🛡️',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Long-Term Partnership Focus',
      description: 'Many of our engagements grow into ongoing relationships built on trust and results.',
      icon: '📈',
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  const whyWorkAtAaitek = [
    'Work on real enterprise and platform projects',
    'Learn from experienced engineers and architects',
    'Exposure to modern technologies and AI-driven systems',
    'Flexible, respectful, and collaborative culture',
    'Opportunity to grow with the company',
  ]

  const whoWeLookFor = [
    'Engineers who care about quality and clarity',
    'Problem-solvers, not just implementers',
    'People who value teamwork and ownership',
    'Professionals eager to grow with responsibility',
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const siteUrl = 'https://aaitek.com.au'

  return (
    <>
      <SEO
        seoTitle="Company - About Aaitek | Aaitek"
        seoDescription="A premium technology partner focused on modern platforms, AI-first solutions, and enterprise-grade delivery. Learn about our mission, values, and team."
        canonicalUrl={`${siteUrl}/company`}
        ogTitle="Company - About Aaitek"
        ogDescription="A premium technology partner focused on modern platforms, AI-first solutions, and enterprise-grade delivery."
        ogImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
        ogType="website"
        twitterTitle="Company - About Aaitek"
        twitterDescription="A premium technology partner focused on modern platforms and AI-first solutions."
        twitterImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
        schemaType="AboutPage"
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 mb-8 shadow-xl"
            >
              <span className="text-2xl">🏢</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider">About Aaitek</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
            >
              About Aaitek
            </motion.h1>
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div className="h-1 w-16 bg-gradient-to-r from-transparent to-white/50"></div>
              <span className="text-3xl">✨</span>
              <div className="h-1 w-16 bg-gradient-to-l from-transparent to-white/50"></div>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 max-w-3xl mx-auto leading-tight"
            >
              Building Intelligent Digital Platforms for a Changing World
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Aaitek is an Australia-owned technology and digital transformation company helping organisations design, build, and scale modern digital platforms.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed"
            >
              We operate at the intersection of engineering excellence, enterprise platforms, and AI-first thinking — supporting businesses as they modernise systems, improve experiences, and prepare for the future.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mt-4"
            >
              Our strength lies not just in technology, but in how we work: collaboratively, transparently, and with a long-term partnership mindset.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What Defines Aaitek Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              What Defines Aaitek
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {whatDefinesAaitek.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05, rotate: 1 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 border-2 border-gray-200 hover:border-primary-400 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {item.icon}
                </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                    {item.title}
                </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-primary-50/30 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-200 hover:border-primary-400 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                🎯
              </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                To help organisations succeed in a digital-first world through intelligent, secure, and scalable technology solutions.
              </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-200 hover:border-primary-400 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                🌟
              </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                To be a trusted global partner for enterprises navigating digital and AI-driven transformation.
              </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Learn More About Our Story
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Aaitek Section */}
      <section ref={ref} className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                💡
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
                  Why Aaitek
            </h2>
                <p className="text-lg font-semibold text-primary-600">A Different Kind of Technology Partner</p>
              </div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Choosing a technology partner is about trust, alignment, and outcomes — not just skills.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Aaitek works as an extension of your team, combining strategic thinking with hands-on delivery to solve real business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {whatSetsUsApart.map((item, index) => (
            <motion.div
                key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 border-2 border-gray-200 hover:border-primary-400 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
            </motion.div>
            ))}
          </div>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start a Conversation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            </motion.div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" ref={careersRef} className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-green-50/30 to-white">
        <div className="container-custom">
            <motion.div
            initial="hidden"
            whileInView="visible"
              viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                🚀
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
                  Careers
                </h2>
                <p className="text-lg font-semibold text-green-600">Build Meaningful Work. Grow with Purpose.</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At Aaitek, careers are built on learning, responsibility, and real-world impact.
            </p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
              We work on complex, enterprise-grade challenges across industries — and we value people who are curious, accountable, and passionate about building quality solutions.
            </p>
            </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-200 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">✨</span>
                Why Work at Aaitek
              </h3>
              <ul className="space-y-4">
                {whyWorkAtAaitek.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 mt-6 italic">
                We collaborate globally through trusted partners, offering diverse exposure while maintaining strong local leadership.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-200 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">👥</span>
                Who We Look For
              </h3>
              <ul className="space-y-4">
                {whoWeLookFor.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Open Opportunities
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="text-sm text-gray-500 mt-4">(Roles and openings coming soon)</p>
          </motion.div>
        </div>
      </section>

      {/* Brand Guidelines Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                🎨
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
                  Brand Guidelines
                </h2>
                <p className="text-lg font-semibold text-purple-600">Protecting the Integrity of the Aaitek Brand</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Aaitek brand reflects who we are — thoughtful, professional, modern, and trustworthy.
            </p>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              Our brand guidelines ensure consistency across all communications, platforms, and partnerships.
            </p>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📋</span>
                What This Covers
              </h3>
              <ul className="space-y-3">
                {[
                  'Logo usage and spacing',
                  'Brand colours and typography',
                  'Tone of voice and messaging principles',
                  'Digital and print applications',
                  'Accessibility and design standards',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              These guidelines help partners, teams, and collaborators represent Aaitek clearly and consistently.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/brand-guidelines"
                className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Brand Guidelines
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-primary-50/30 to-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                📧
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
                  Contact
                </h2>
                <p className="text-lg font-semibold text-primary-600">Let's Start a Conversation</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Whether you're exploring a new initiative, need support, or simply want to understand how we work — we're always open to a conversation.
            </p>
            <p className="text-base text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              We believe the best partnerships start with clarity, not pressure.
            </p>
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
                <span className="text-3xl">📍</span>
                How to Reach Us
              </h3>
              <div className="space-y-4 text-left max-w-md mx-auto">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-md">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Location</p>
                    <p className="text-gray-600">Australia (with global delivery support)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-md">
                    ✉️
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:info@aaitek.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                      info@aaitek.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-md">
                    🤝
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Engagement</p>
                    <p className="text-gray-600">Remote, hybrid, or onsite (as needed)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Company
