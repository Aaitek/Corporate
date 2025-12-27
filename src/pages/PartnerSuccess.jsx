import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const PartnerSuccess = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const caseStudies = [
    {
      title: 'Enterprise DXP Platform Migration',
      client: 'Leading Financial Services',
      industry: 'Finance',
      description: 'Migrated legacy CMS to Sitecore XM Cloud, enabling composable architecture and reducing content publishing time by 65%.',
      image: '🏦',
      category: 'dxp',
      technologies: ['Sitecore XM Cloud', 'Azure', 'React', 'Headless CMS'],
      results: [
        '65% reduction in content publishing time',
        '40% improvement in page load speed',
        '300% increase in content reuse',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI-Powered Customer Service Platform',
      client: 'Global E-Commerce Retailer',
      industry: 'Retail',
      description: 'Built intelligent chatbot system using AI/ML that handles 80% of customer inquiries automatically, improving response time by 90%.',
      image: '🤖',
      category: 'ai',
      technologies: ['OpenAI', 'Python', 'AWS Lambda', 'React'],
      results: [
        '80% automated inquiry handling',
        '90% faster response time',
        '50% reduction in support costs',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Cloud Infrastructure Modernization',
      client: 'Fortune 500 Manufacturing',
      industry: 'Manufacturing',
      description: 'Migrated entire infrastructure to AWS, implementing DevOps best practices and achieving 99.9% uptime with 40% cost reduction.',
      image: '☁️',
      category: 'cloud',
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
      results: [
        '40% infrastructure cost reduction',
        '99.9% uptime achieved',
        '50% faster deployment cycles',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Headless CMS Implementation',
      client: 'Healthcare Provider Network',
      industry: 'Healthcare',
      description: 'Implemented Contentful headless CMS with React frontend, enabling multi-channel content delivery across web, mobile, and kiosks.',
      image: '🏥',
      category: 'dxp',
      technologies: ['Contentful', 'React', 'Next.js', 'GraphQL'],
      results: [
        'Unified content across 5 channels',
        '60% faster content updates',
        'Improved SEO by 45%',
      ],
      color: 'from-teal-500 to-cyan-500',
    },
    {
      title: 'Salesforce CRM Integration',
      client: 'Technology Services Company',
      industry: 'Technology',
      description: 'Integrated Salesforce CRM with custom applications and automated workflows, increasing sales productivity by 35% and improving lead conversion.',
      image: '📊',
      category: 'crm',
      technologies: ['Salesforce', 'MuleSoft', 'REST APIs', 'JavaScript'],
      results: [
        '35% increase in sales productivity',
        '25% improvement in lead conversion',
        'Automated 15+ manual processes',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Mobile App Development',
      client: 'Real Estate Platform',
      industry: 'Real Estate',
      description: 'Developed cross-platform mobile app using React Native, enabling property search, virtual tours, and seamless booking experience.',
      image: '📱',
      category: 'mobile',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      results: [
        '250% increase in mobile engagement',
        '180% growth in property bookings',
        '4.8/5 app store rating',
      ],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'E-Commerce Platform Transformation',
      client: 'Fashion Retail Chain',
      industry: 'Retail',
      description: 'Modernized e-commerce platform with Kentico CMS, implementing advanced personalization and achieving 250% increase in online sales.',
      image: '🛒',
      category: 'ecommerce',
      technologies: ['Kentico CMS', '.NET', 'Azure', 'Stripe'],
      results: [
        '250% increase in online sales',
        '45% improvement in conversion rate',
        '30% reduction in cart abandonment',
      ],
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Data Analytics & BI Platform',
      client: 'Logistics Company',
      industry: 'Logistics',
      description: 'Built comprehensive data analytics platform with real-time dashboards, enabling data-driven decision making and optimizing operations.',
      image: '📈',
      category: 'data',
      technologies: ['Power BI', 'Python', 'Azure Data Factory', 'SQL'],
      results: [
        'Real-time analytics capability',
        '30% operational cost reduction',
        'Improved decision-making speed by 60%',
      ],
      color: 'from-amber-500 to-yellow-500',
    },
    {
      title: 'Legacy System Modernization',
      client: 'Government Agency',
      industry: 'Government',
      description: 'Modernized legacy .NET applications to cloud-native architecture, improving performance by 200% and reducing maintenance costs by 50%.',
      image: '💻',
      category: 'software',
      technologies: ['.NET Core', 'Azure', 'Microservices', 'Docker'],
      results: [
        '200% performance improvement',
        '50% reduction in maintenance costs',
        'Zero downtime migration',
      ],
      color: 'from-gray-600 to-gray-800',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'dxp', label: 'DXP/CMS' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'crm', label: 'CRM' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'data', label: 'Data Analytics' },
    { id: 'software', label: 'Software' },
  ]

  const filteredCaseStudies =
    selectedCategory === 'all'
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === selectedCategory)

  return (
    <div className="pt-20 pb-24 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
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
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Our Work</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Our Work & Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital presence and achieve remarkable results through innovative technology solutions.
          </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
              <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-0 ${
                selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
              </motion.button>
          ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={ref} className="py-24">
        <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
              key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  ease: 'easeIn'
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-0 group overflow-hidden"
              >
                {/* Left Border on Hover */}
                <motion.div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${caseStudy.color} opacity-0 group-hover:opacity-100 transition-opacity duration-0`}
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0 }}
                />

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${caseStudy.color} rounded-xl flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-0`}>
                  {caseStudy.image}
                </div>

                {/* Industry Badge */}
                <div className="mb-3">
                  <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                  {caseStudy.industry}
                </span>
              </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-0">
                  {caseStudy.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {caseStudy.description}
                </p>

                {/* Client */}
                <div className="text-sm text-gray-500 mb-4">
                  <span className="font-semibold">Client:</span> {caseStudy.client}
                </div>

                {/* Results */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {caseStudy.results.slice(0, 2).map((result, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-primary-500 mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {caseStudy.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md">
                        +{caseStudy.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-0 group-hover:opacity-5 transition-opacity duration-0 rounded-2xl`}></div>
              </motion.div>
            ))}
              </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No case studies found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
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
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help transform your business
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-0"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
      </div>
      </section>
    </div>
  )
}

export default PartnerSuccess
