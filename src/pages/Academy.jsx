import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import academyData from '../data/academyData'
import SEO from '../components/SEO'

const Academy = () => {
  const categories = [
    {
      title: 'Engineering',
      icon: '💻',
      color: 'from-blue-500 to-cyan-500',
      items: [
        { label: 'Full-Stack Engineering Training', path: '/academy/full-stack-engineering', slug: 'full-stack-engineering' },
        { label: 'Cloud Engineering Training', path: '/academy/cloud-engineering', slug: 'cloud-engineering' },
        { label: 'Data & AI Engineering Training', path: '/academy/data-ai-engineering', slug: 'data-ai-engineering' },
        { label: 'DevOps & Platform Engineering Training', path: '/academy/devops-platform-engineering', slug: 'devops-platform-engineering' },
      ],
    },
    {
      title: 'Enterprise Technologies',
      icon: '🏢',
      color: 'from-purple-500 to-pink-500',
      items: [
        { label: 'Salesforce Training', path: '/academy/salesforce', slug: 'salesforce' },
        { label: 'SAP Training', path: '/academy/sap', slug: 'sap' },
        { label: 'ServiceNow Training', path: '/academy/servicenow', slug: 'servicenow' },
        { label: 'CMS & DXP Platforms Training', path: '/academy/cms-dxp-platforms', slug: 'cms-dxp-platforms' },
      ],
    },
    {
      title: 'Security & Governance',
      icon: '🔒',
      color: 'from-green-500 to-emerald-500',
      items: [
        { label: 'Cybersecurity Foundations Training', path: '/academy/cybersecurity-foundations', slug: 'cybersecurity-foundations' },
        { label: 'Cloud Security Training', path: '/academy/cloud-security', slug: 'cloud-security' },
        { label: 'AI Governance Training', path: '/academy/ai-governance', slug: 'ai-governance' },
      ],
    },
    {
      title: 'Corporate Training',
      icon: '📚',
      color: 'from-orange-500 to-red-500',
      items: [
        { label: 'Corporate & Custom Enterprise Programs', path: '/academy/custom-enterprise-programs', slug: 'custom-enterprise-programs' },
      ],
    },
  ]

  const trainingPackages = [
    {
      title: 'Foundation',
      description: 'Students, graduates, career starters',
      icon: '🌱',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Professional',
      description: 'Working engineers and consultants',
      icon: '💼',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Advanced / Architect',
      description: 'Senior engineers, leads',
      icon: '🏆',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Enterprise',
      description: 'Custom programs for teams',
      icon: '🏢',
      color: 'from-orange-500 to-red-500',
    },
  ]

  const whyAaitekAcademy = [
    'Built by industry practitioners, not trainers',
    'Focused on in-demand, real-world skills',
    'Hands-on learning with modern tools & architectures',
    'Aligned with enterprise delivery and consulting practices',
    'Suitable for individuals, teams, and organisations',
  ]

  const siteUrl = 'https://aaitek.com'

  return (
    <>
      <SEO
        seoTitle="Academy - Premium Training Programs | Aaitek"
        seoDescription="Premium training pathways for engineers and enterprise teams. Full-Stack Engineering, Cloud Engineering, Data & AI Engineering, DevOps, and Enterprise Technologies training."
        canonicalUrl={`${siteUrl}/academy`}
        ogTitle="Academy - Premium Training Programs"
        ogDescription="Premium training pathways for engineers and enterprise teams—designed for delivery readiness, not theory."
        ogImage="https://aaitek.com/Aaitek logo in Black.png"
        ogType="website"
        twitterTitle="Academy - Premium Training Programs"
        twitterDescription="Premium training pathways for engineers and enterprise teams."
        twitterImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80"
        schemaType="EducationalOrganization"
        indexable={true}
      />
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
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Aaitek Academy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Industry-Led Training for Modern Engineering & Enterprise Platforms
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-4">
              Aaitek Academy delivers practical, enterprise-aligned training designed by professionals who actively build and operate real-world digital platforms.
            </p>
            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
              Our programs focus on hands-on skills, real architectures, and industry practices—not academic theory—helping individuals and teams stay relevant in fast-evolving technology landscapes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Status Message */}
      <section className="py-8 bg-amber-50 border-b border-amber-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-300 mb-4">
              <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider">Status</span>
            </div>
            <p className="text-lg text-amber-900 font-medium">
              Training programs are currently under development and will be launched in phased releases.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Aaitek Academy */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Aaitek Academy
            </h2>
          </motion.div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyAaitekAcademy.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-6 border border-primary-200/50 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
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
          </div>
        </div>
      </section>

      {/* Training Packages */}
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
              Training Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Available across all programs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 text-center overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                {/* Left border accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${pkg.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">{pkg.title}</h3>
                  <p className="text-gray-600 font-medium">{pkg.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Training Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive training offerings
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-primary-300 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                {/* Left border accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10 flex items-start gap-6">
                  {/* Icon Section */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {category.icon}
                </div>
                  </div>
                  {/* Content Section */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">{category.title}</h3>
                    <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                        >
                      <Link
                        to={item.path}
                            className="group/link flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-primary-50 border border-gray-100 hover:border-primary-200 transition-all duration-300"
                      >
                            <svg className="w-4 h-4 text-primary-500 group-hover/link:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                            <span className="text-gray-700 group-hover/link:text-primary-600 font-medium text-sm transition-colors truncate">{item.label}</span>
                      </Link>
                        </motion.li>
                  ))}
                </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews & Feedback - Coming Soon */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-300 mb-6">
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Coming Soon</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reviews & Feedback
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Learner testimonials and success stories will be added after program launch.
            </p>
            <div className="bg-white rounded-2xl p-12 border-2 border-dashed border-gray-300">
              <p className="text-gray-500 italic">Placeholder carousel – Coming Soon</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Trust Line */}
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
              Industry-led training. Real-world skills. Enterprise-ready outcomes.
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ready to transform your team's capabilities? Let's discuss your training needs.
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
    </>
  )
}

export default Academy

