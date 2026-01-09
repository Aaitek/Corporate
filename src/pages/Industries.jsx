import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import industriesData from '../data/industriesData'

const Industries = () => {
  const industries = [
    { label: 'Sports & Media', path: '/industries/sports-media', icon: '⚽', color: 'from-blue-500 to-cyan-500', slug: 'sports-media' },
    { label: 'Financial Services & Insurance', path: '/industries/financial-services-insurance', icon: '💼', color: 'from-green-500 to-emerald-500', slug: 'financial-services-insurance' },
    { label: 'Real Estate', path: '/industries/real-estate', icon: '🏠', color: 'from-purple-500 to-pink-500', slug: 'real-estate' },
    { label: 'Retail & eCommerce', path: '/industries/retail-ecommerce', icon: '🛒', color: 'from-orange-500 to-red-500', slug: 'retail-ecommerce' },
    { label: 'Healthcare & Life Sciences', path: '/industries/healthcare-life-sciences', icon: '🏥', color: 'from-red-500 to-pink-500', slug: 'healthcare-life-sciences' },
    { label: 'Education & EdTech', path: '/industries/education-edtech', icon: '📚', color: 'from-indigo-500 to-blue-500', slug: 'education-edtech' },
    { label: 'Energy & Utilities', path: '/industries/energy-utilities', icon: '⚡', color: 'from-yellow-500 to-orange-500', slug: 'energy-utilities' },
    { label: 'Government & Public Sector', path: '/industries/government-public-sector', icon: '🏛️', color: 'from-gray-600 to-gray-800', slug: 'government-public-sector' },
  ]

  const whyIndustryExpertise = [
    'Industry regulations and compliance differ significantly',
    'Customer expectations vary by sector',
    'Platforms and data maturity are uneven across industries',
    'AI adoption requires domain-specific understanding',
  ]

  const industryEvolution = [
    {
      era: 'Industry 2.0',
      title: 'Automation',
      features: ['Process automation', 'Basic system integration', 'Efficiency-driven digitisation'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      era: 'Industry 3.0',
      title: 'Digital Platforms',
      features: ['Cloud adoption', 'Enterprise platforms (CRM, ERP, DXP)', 'Data-driven decision making'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      era: 'Industry 4.0',
      title: 'Intelligent Enterprises',
      features: ['AI-driven automation', 'Predictive analytics', 'Real-time insights', 'Personalised customer experiences'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      era: 'Industry 5.0',
      title: 'Human-Centric AI (Emerging)',
      features: ['Responsible and governed AI', 'Human-AI collaboration', 'Ethical, explainable systems', 'Sustainable and resilient operations'],
      color: 'from-orange-500 to-red-500',
    },
  ]

  const howAaitekHelps = [
    'AI-powered automation for operational efficiency',
    'Intelligent decision support systems',
    'Secure, governed AI adoption',
    'Industry-specific AI agents and platforms',
    'Scalable, enterprise-ready architectures',
  ]

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
              <span className="text-xs font-semibold text-white uppercase tracking-wider">🌍 Industries</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Industry-Focused Solutions, Built for Real-World Impact
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-4">
              Aaitek partners with organisations across industries to modernise platforms, optimise operations, and unlock new growth through intelligent digital solutions.
            </p>
            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
              We combine deep engineering expertise, enterprise platforms, and AI-first thinking to address industry-specific challenges—at scale, securely, and sustainably.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each industry has unique regulatory, operational, and customer demands. Our approach is tailored—never one-size-fits-all.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-primary-300 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                {/* Left border accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {industry.icon}
                </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {industry.label}
                </h3>
                <Link
                  to={industry.path}
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors group/link"
                >
                    View Details
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-8"
          >
            <p className="text-gray-600 font-medium">Detailed industry pages available below.</p>
          </motion.div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Industry Expertise Matters
            </h2>
          </motion.div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyIndustryExpertise.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-6 border border-primary-200/50 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${['from-blue-500/0', 'from-purple-500/0', 'from-green-500/0', 'from-orange-500/0'][index % 4]} to-transparent group-hover:from-primary-500/10 transition-all duration-300`}></div>
                  <div className="relative z-10 flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${['from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-green-500 to-emerald-500', 'from-orange-500 to-red-500'][index % 4]} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-800 text-lg font-medium leading-relaxed">{point}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto">
                Aaitek brings industry context together with technology execution—bridging the gap between strategy and delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Role of AI in Industry Transformation */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Role of AI in Industry Transformation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              From Digitalisation to Intelligent Industries
            </p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Industries have evolved through distinct technology waves:
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industryEvolution.map((era, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-primary-300 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${era.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  {/* Top border accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${era.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${era.color} rounded-xl flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {index + 2}
                    </div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{era.era}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                      {era.title}
                    </h3>
                    <ul className="space-y-2">
                      {era.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-center bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border-2 border-primary-200"
            >
              <p className="text-lg text-gray-800 font-medium max-w-3xl mx-auto">
                Aaitek operates at the intersection of <span className="font-bold text-primary-600">Industry 4.0</span> and <span className="font-bold text-accent-600">Industry 5.0</span>, helping organisations adopt AI responsibly while maximising business value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Aaitek Helps Industries Win with AI */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              How Aaitek Helps Industries Win with AI
            </h2>
          </motion.div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {howAaitekHelps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-primary-400 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${['from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-green-500 to-emerald-500', 'from-orange-500 to-red-500', 'from-indigo-500 to-blue-500'][index % 5]} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-white text-lg font-medium leading-relaxed">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Trust Statement */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Industry expertise meets intelligent engineering—built for today, designed for the future.
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ready to transform your industry with intelligent solutions?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Industries

