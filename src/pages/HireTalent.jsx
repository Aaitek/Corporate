import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { getHireTalentSlug } from '../utils/slugHelper'

const HireTalent = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const whyChooseAaitek = [
    'You work with real people, not anonymous resumes',
    'Clear communication and local accountability',
    'Flexible engagement models that adapt as needs change',
    'Engineers who have worked on real enterprise projects',
    'Honest delivery through long-term partnerships',
  ]

  const howWeWork = [
    {
      step: '1',
      title: 'We understand your needs, timelines, and expectations',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      step: '2',
      title: 'We propose suitable, vetted professionals',
      color: 'from-purple-500 to-pink-500',
    },
    {
      step: '3',
      title: 'You interview and approve — no pressure',
      color: 'from-green-500 to-emerald-500',
    },
    {
      step: '4',
      title: 'We support onboarding and ongoing engagement',
      color: 'from-orange-500 to-red-500',
    },
    {
      step: '5',
      title: 'You scale up, down, or adjust as required',
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  const engagementModels = [
    {
      title: 'Staff Augmentation',
      subtitle: 'Extend Your Team Without the Hiring Overhead',
      description: 'Staff augmentation is ideal when you need additional hands or specific skills — quickly and flexibly — while keeping full control of delivery.',
      bestFor: [
        'Short- to medium-term capacity gaps',
        'Specialist skills for active projects',
        'Supporting internal teams during peak demand',
      ],
      whatYouGet: [
        'Experienced engineers embedded into your team',
        'Aligned to your tools, processes, and culture',
        'Local oversight with global delivery support',
        'Transparent rates and clear communication',
      ],
      tagline: 'You manage the work. We support the people.',
      color: 'from-blue-500 to-cyan-500',
      icon: '👥',
    },
    {
      title: 'Dedicated Teams',
      subtitle: 'A Stable Team, Focused on Your Outcomes',
      description: 'When you need consistency and long-term focus, dedicated teams provide a reliable extension of your organisation.',
      bestFor: [
        'Long-running programs or platforms',
        'Product development and transformation initiatives',
        'Organisations seeking continuity and ownership',
      ],
      whatYouGet: [
        'A committed team aligned to your roadmap',
        'Clear roles, responsibilities, and continuity',
        'Local engagement with offshore partner support',
        'Predictable delivery and long-term collaboration',
      ],
      tagline: 'Feels like your own team — without the hiring complexity.',
      color: 'from-purple-500 to-pink-500',
      icon: '🎯',
    },
    {
      title: 'On-Demand Support',
      subtitle: 'The Right Skills, Exactly When You Need Them',
      description: 'On-demand support gives you access to experienced professionals for short bursts of work, fixes, reviews, or enhancements.',
      bestFor: [
        'Urgent issues or specialist advice',
        'Maintenance and optimisation work',
        'Small enhancements or audits',
      ],
      whatYouGet: [
        'Flexible access to senior expertise',
        'No long-term commitment',
        'Fast response and clear scope',
        'Practical, outcome-focused support',
      ],
      tagline: '',
      color: 'from-green-500 to-emerald-500',
      icon: '⚡',
    },
  ]

  const expertiseAreas = [
    {
      title: 'Frontend & Full-Stack Engineering',
      subtitle: 'Building Modern, Scalable Digital Experiences',
      description: 'Our engineers work across modern frontend and full-stack technologies to build secure, high-performing applications.',
      skills: [
        'React, Next.js, Angular, modern UI frameworks',
        'API-driven architectures',
        'Performance, accessibility, and UX best practices',
        'Enterprise-scale applications',
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: '💻',
    },
    {
      title: 'Backend & API Engineering',
      subtitle: 'Reliable Systems That Power Your Platforms',
      description: 'Backend engineers focused on stability, scalability, and integration.',
      skills: [
        'API design (REST, GraphQL)',
        'Microservices and integration patterns',
        'Secure authentication and data handling',
        'Enterprise system integration',
      ],
      color: 'from-green-500 to-emerald-500',
      icon: '⚙️',
    },
    {
      title: 'Cloud & DevOps',
      subtitle: 'Scalable Infrastructure and Reliable Delivery',
      description: 'Professionals experienced in building and operating cloud-native systems.',
      skills: [
        'Cloud architecture (AWS, Azure)',
        'CI/CD pipelines and automation',
        'Infrastructure as Code',
        'Monitoring and reliability practices',
      ],
      color: 'from-orange-500 to-red-500',
      icon: '☁️',
    },
    {
      title: 'Data & AI',
      subtitle: 'Turning Data into Practical Intelligence',
      description: 'Engineers who focus on applied data and AI — not hype.',
      skills: [
        'Data pipelines and analytics',
        'AI integration and automation',
        'Responsible and governed AI practices',
        'Business-focused insights',
      ],
      color: 'from-purple-500 to-pink-500',
      icon: '🤖',
    },
    {
      title: 'Enterprise Platforms',
      subtitle: 'Experienced Across Enterprise-Grade Systems',
      description: 'Specialists with hands-on experience in leading platforms.',
      skills: [
        'CMS & DXP (Sitecore, Umbraco, Contentful)',
        'Salesforce, ServiceNow',
        'ERP and enterprise integrations',
      ],
      color: 'from-indigo-500 to-blue-500',
      icon: '🏢',
    },
  ]

  const deliveryModel = [
    'Australia-owned and locally accountable',
    'Global delivery through trusted partnerships',
    'No owned offshore offices — by design',
    'Collaboration over outsourcing',
    'Quality, continuity, and transparency first',
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

  return (
    <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6"
            >
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Hire Talent</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
            >
              Hire Talent with Aaitek
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-3xl mx-auto"
            >
              People You Can Trust. Skills You Can Rely On.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed"
            >
              Hiring the right talent shouldn't feel complicated, risky, or transactional.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed"
            >
              At Aaitek, we help organisations access experienced, delivery-ready professionals in a way that feels human, flexible, and transparent.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              We are Australia-owned, locally accountable, and supported by a trusted global partner network — allowing you to scale capability without losing control or quality.
            </motion.p>
            <motion.div
              variants={fadeInUp}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
              Talk to Our Experts
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Organisations Choose Aaitek for Talent */}
      <section ref={ref} className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Organisations Choose Aaitek for Talent
            </h2>
          </motion.div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseAaitek.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-6 border border-primary-200/50 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${['from-blue-500/0', 'from-purple-500/0', 'from-green-500/0', 'from-orange-500/0', 'from-pink-500/0'][index % 5]} to-transparent group-hover:from-primary-500/10 transition-all duration-300`}></div>
                  <div className="relative z-10 flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${['from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-green-500 to-emerald-500', 'from-orange-500 to-red-500', 'from-pink-500 to-rose-500'][index % 5]} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
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
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-center"
          >
              <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto">
                We focus on fit, trust, and outcomes — not volume hiring.
            </p>
          </motion.div>
                </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work (Simple & Transparent)
            </h2>
          </motion.div>
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {howWeWork.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-primary-300 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className="relative z-10 flex items-center gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {step.step}
                  </div>
                    <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed flex-1">
                      {step.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Engagement Models</h2>
          </motion.div>
          <div className="max-w-6xl mx-auto space-y-8">
            {engagementModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 md:p-10 border-2 border-gray-200 hover:border-primary-300 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${model.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${model.color} rounded-2xl flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0`}>
                      {model.icon}
                </div>
                    <div className="flex-1">
                      <Link to={`/hire-talent/${getHireTalentSlug(model.title)}`}>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300 cursor-pointer">
                          {model.title}
                        </h3>
                      </Link>
                      <p className="text-xl font-semibold text-primary-600 mb-4">{model.subtitle}</p>
                      <p className="text-lg text-gray-700 leading-relaxed">{model.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Best for:
                      </h4>
                      <ul className="space-y-3">
                        {model.bestFor.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`w-6 h-6 bg-gradient-to-br ${model.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md`}>
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        What You Get:
                      </h4>
                      <ul className="space-y-3">
                        {model.whatYouGet.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`w-6 h-6 bg-gradient-to-br ${model.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md`}>
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                  ))}
                      </ul>
                    </div>
                  </div>
                  {model.tagline && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-lg font-semibold text-gray-800 italic">{model.tagline}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expertise Areas</h2>
          </motion.div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-primary-300 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${area.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        {area.icon}
                </div>
                      <div>
                        <Link to={`/hire-talent/${getHireTalentSlug(area.title)}`}>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 cursor-pointer">
                            {area.title}
                          </h3>
                        </Link>
                        <p className="text-sm font-semibold text-primary-600">{area.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">{area.description}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">Skills Include:</h4>
                      <ul className="space-y-2">
                        {area.skills.map((skill, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`w-5 h-5 bg-gradient-to-br ${area.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md`}>
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Delivery Model */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Our Delivery Model (Honest & Clear)
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliveryModel.map((item, index) => (
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-lg font-medium leading-relaxed">{item}</span>
                </div>
              </motion.div>
            ))}
        </div>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-center"
          >
              <p className="text-xl text-white font-semibold">
                You always know who you're working with
            </p>
          </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6"
            >
              Ready to Find the Right Talent?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/90 mb-8 leading-relaxed"
            >
              Let's discuss how we can help you access experienced, delivery-ready professionals.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              >
                <Link
                  to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                Talk to Our Experts
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HireTalent
