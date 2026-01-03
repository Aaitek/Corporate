import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CountUp } from '../../hooks/useCountUp'

const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { value: 10, suffix: '+', label: 'Certified Technology Professionals (Network)', icon: '👥' },
    { value: 18, suffix: '+', label: 'Years of Industry Experience', icon: '⭐' },
    { value: 4, suffix: '+', label: 'Countries Served Globally', icon: '🌍' },
    { label: 'Growing Enterprise & Growth Clients', icon: '🤝', noValue: true },
  ]

  const capabilities = [
    'DXP Solutions',
    'SAP Integration',
    'Salesforce CRM',
    'ServiceNow',
    'AWS Cloud',
    'AI & Automation',
  ]

  return (
    <section id="about-us" ref={ref} className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[200px] relative z-10">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 2xl:gap-32 items-start">
            {/* Left Column - Title & Stats - Sticky */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-8 flex flex-col"
              >
                {/* Enhanced Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30 mb-6 w-fit"
                >
                <span className="text-sm font-bold text-white uppercase tracking-wider whitespace-nowrap">ABOUT AAITEK</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent"
              >
                Australia-Based. Globally Delivered. Enterprise Focused.
              </motion.h2>

              {/* Two Paragraphs */}
              <div className="space-y-6 pt-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-700 leading-relaxed bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-sm"
                >
                  <span className="font-bold text-gray-900 text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Aaitek</span> is an Australia-owned digital transformation partner delivering enterprise-grade platforms, intelligent solutions, and scalable technology ecosystems for organizations worldwide.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg md:text-xl text-gray-700 leading-relaxed bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-sm"
                >
                  We combine deep engineering expertise, modern platforms, and AI-first thinking to help businesses modernise systems, enhance customer experiences, and achieve sustainable growth.
                </motion.p>
              </div>

              {/* Enhanced Stats Grid - At a Glance */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="pt-8"
              >
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
                >
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full origin-top"
                  ></motion.span>
                  At a Glance
                </motion.h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group relative p-6 bg-white rounded-2xl border-2 border-gray-100 shadow-md hover:shadow-2xl hover:border-blue-300 transition-all duration-300 overflow-hidden"
                    >
                      {/* Gradient Background on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                        {stat.noValue ? (
                          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">Growing</div>
                        ) : (
                          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {isInView ? (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2.5}
                          suffix={stat.suffix}
                          separator=","
                          decimals={0}
                          enabled={isInView}
                        />
                      ) : (
                        `0${stat.suffix}`
                      )}
                    </div>
                        )}
                        <div className="text-sm text-gray-600 font-semibold mt-2">{stat.label}</div>
                      </div>
                  </motion.div>
                ))}
                </div>
              </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Description & Capabilities */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="space-y-10 flex flex-col"
            >
              {/* Enhanced What We Do Section */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.01 }}
                className="pt-6 bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"
                >
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full origin-top"
                  ></motion.span>
                  What We Do
                </motion.h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  Aaitek delivers complex, enterprise-ready solutions across leading platforms and technologies, including:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    { title: 'DXP & CMS Platforms', desc: '(Sitecore, Kentico, Umbraco, Optimizely)' },
                    { title: 'Enterprise Systems', desc: '(SAP, Salesforce, ServiceNow)' },
                    { title: 'Cloud & Infrastructure', desc: '(AWS, Azure, Hybrid)' },
                    { title: 'AI & Intelligent Automation', desc: '' }
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      className="flex items-start gap-3 text-base md:text-lg text-gray-700 group"
                    >
                      <span className="text-blue-500 mt-1.5 text-xl font-bold group-hover:text-cyan-500 transition-colors">•</span>
                      <span>
                        <span className="font-bold text-gray-900">{item.title}</span>
                        {item.desc && <span className="text-gray-600"> {item.desc}</span>}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                  Our solutions are designed for performance, security, scalability, and long-term evolution.
                </p>
              </motion.div>

              {/* Enhanced AaitekTOD Section */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
                whileHover={{ scale: 1.01 }}
                className="pt-6 bg-gradient-to-br from-blue-50/80 to-cyan-50/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-blue-200 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"
                >
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full origin-top"
                  ></motion.span>
                  AaitekTOD™ – Talent on Demand
                </motion.h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Our <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">AaitekTOD™</span> (Talent on Demand) model provides flexible, on-demand access to experienced engineers, architects, and specialists who integrate seamlessly with your teams. This enables faster delivery, reduced risk, and the ability to scale expertise precisely when and where it's needed — without long-term overhead.
                </p>
              </motion.div>

              {/* Enhanced Capabilities Tags */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
                whileHover={{ scale: 1.01 }}
                className="pt-4 bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3"
                >
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full origin-top"
                  ></motion.span>
                  Our Core Capabilities
                </motion.h3>
                <div className="flex flex-wrap gap-3">
                  {capabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 cursor-default"
                    >
                      {capability}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="pt-6"
              >
                <motion.a
                  href="/about"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Learn More About Aaitek</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

