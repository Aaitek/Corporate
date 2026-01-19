import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getServiceSlug } from '../utils/slugHelper'
import SEO from '../components/SEO'
import HeroSection from '../components/HeroSection'

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Technology Services",
    "provider": {
      "@type": "Organization",
      "name": "Aaitek Technology Specialists"
    },
    "areaServed": "Worldwide",
    "description": "Comprehensive technology solutions including AI, cloud services, software engineering, and digital transformation."
  }

  // All services grouped by category - matching Header structure
  const services = [
    {
      title: 'Product & Experience',
      description: 'Transform your ideas into powerful digital products that engage users and drive business growth.',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500',
      services: [
        'UX & UI Design',
        'Web Platform Development',
        'Mobile Application Development',
        'eCommerce Solutions',
        'Product Discovery & Strategy',
        'Interactive & Immersive Experiences',
      ],
    },
    {
      title: 'Software Engineering',
      description: 'Build robust, scalable software solutions tailored to your business needs.',
      icon: '</>',
      color: 'from-purple-500 to-pink-500',
      services: [
        'Custom Software Development',
        'API & Integration Engineering',
        'Enterprise System Integration',
        'Legacy Modernisation',
        'Bespoke Application Development',
      ],
    },
    {
      title: 'Cloud & DevOps',
      description: 'Accelerate your digital transformation with cloud-native solutions and automated DevOps practices.',
      icon: '☁️',
      color: 'from-green-500 to-emerald-500',
      services: [
        'Cloud Architecture & Strategy',
        'Cloud Migration & Modernisation',
        'Managed Cloud Hosting',
        'DevOps & CI/CD Automation',
        'Cloud Security & Governance',
      ],
    },
    {
      title: 'Data & AI',
      description: 'Unlock the power of your data with intelligent AI solutions.',
      icon: '🤖',
      color: 'from-orange-500 to-red-500',
      services: [
        'Data Engineering & Pipelines',
        'AI & Machine Learning Solutions',
        'Intelligent Automation',
        'Advanced Analytics & Insights',
        'AI Governance & Responsible AI',
      ],
    },
    {
      title: 'Digital Growth',
      description: 'Amplify your online presence and drive measurable growth.',
      icon: '📈',
      color: 'from-indigo-500 to-blue-500',
      services: [
        'Search & AI-Driven Optimisation',
        'Performance & Paid Marketing',
        'Social & Brand Growth',
        'Online Reputation Management',
        'Conversion Optimisation (CRO)',
      ],
    },
    {
      title: 'Managed Services',
      description: 'Ensure continuous performance and reliability with our comprehensive managed services.',
      icon: '🛠️',
      color: 'from-teal-500 to-cyan-500',
      services: [
        'Application Support & Maintenance',
        'Platform Optimisation',
        'Development Support Services',
        'Digital Operations & Delivery',
        'IT Support & Managed Services',
      ],
    },
    {
      title: 'Enterprise Platforms',
      description: 'Leverage industry-leading enterprise platforms to streamline operations.',
      icon: '🏢',
      color: 'from-gray-600 to-gray-800',
      services: [
        'CMS & Digital Experience Platforms',
        'CRM Platforms',
        'ServiceNow Solutions',
        'ERP & Enterprise Systems',
      ],
    },
  ]

  return (
    <>
      <SEO
        seoTitle="Services - Aaitek Technology Specialists"
        seoDescription="Comprehensive technology services including AI solutions, cloud services, software engineering, digital transformation, and enterprise platforms."
        canonicalUrl="https://aaitek.com.au/services"
        robots="index,follow"
        ogTitle="Services - Aaitek Technology Specialists"
        ogDescription="Explore Aaitek's comprehensive technology services: Product & Experience, Software Engineering, Cloud & DevOps, Data & AI, Digital Growth, Managed Services, and Enterprise Platforms."
        ogImage="https://aaitek.com.au/og/services.png"
        ogType="website"
        twitterCard="summary_large_image"
        schemaType="Service"
        structuredData={structuredData}
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section */}
      {/* TODO: Connect to Strapi Global Settings or Page Settings to fetch heroImage */}
      <HeroSection
        badge="Our Services"
        title="End-to-End Digital & AI Services"
        description="We deliver comprehensive technology solutions across the full digital lifecycle from product strategy and engineering to cloud platforms, AI, and enterprise systems helping organizations transform, scale, and stay competitive."
        image={null} // Future: Fetch from Strapi (e.g., globalSettings.heroImage or pageSettings.servicesHeroImage)
        gradient="from-primary-600 via-primary-700 to-accent-600"
        className="py-12 sm:py-16"
      />

      {/* All Services List */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              All Services
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
              Outcome-driven and enterprise-safe solutions for your business
            </p>
          </motion.div>

          {/* Services by Category */}
          <div className="space-y-16">
            {services.map((category, categoryIndex) => {
              // Generate category slug - matching ServiceCategoryDetail slugs
              const categorySlugMap = {
                'Product & Experience': 'product-experience',
                'Software Engineering': 'software-engineering',
                'Cloud & DevOps': 'cloud-devops',
                'Data & AI': 'data-ai',
                'Digital Growth': 'digital-growth',
                'Managed Services': 'managed-services',
                'Enterprise Platforms': 'enterprise-platforms',
              }
              const categorySlug = categorySlugMap[category.title] || category.title.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/&/g, '')
                .replace(/[()]/g, '')
                .replace(/-+/g, '-') // Remove double dashes
                .replace(/^-|-$/g, '') // Remove leading/trailing dashes
              
              return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Link
                    to={`/services/category/${categorySlug}`}
                    className="block"
              >
                    <div className="flex items-center gap-4 mb-6 cursor-pointer group">
                      <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{category.title}</h3>
                    <p className="text-gray-600 mt-1">{category.description}</p>
                  </div>
                      <svg className="w-6 h-6 text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                </div>
                  </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service, serviceIndex) => {
                      const serviceSlug = getServiceSlug(service)
                    return (
                <Link
                        key={serviceIndex}
                          to={`/services/${serviceSlug}`}
                          className="group flex items-center gap-3 p-4 rounded-lg border border-gray-200 bg-gray-50 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
                >
                          <svg className="w-5 h-5 text-primary-600 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                          <span className="text-gray-700 font-medium group-hover:text-primary-600 transition-colors">{service}</span>
                </Link>
                    )
                  })}
                </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      to={`/services/category/${categorySlug}`}
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                    >
                      View {category.title} Services
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Aaitek Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-200 mb-6">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Why Choose Aaitek</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                The Advantage of Partnering with Aaitek
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We don't just deliver technology, we partner with organizations to solve complex business challenges through intelligent platforms, strong engineering, and reliable delivery. Here's what sets Aaitek apart:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Enterprise Value, Transparent Pricing',
                  description: 'We offer clear, competitive pricing models designed for long-term value. Our focus is on delivering measurable outcomes without unnecessary overhead or hidden costs.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: 'from-green-500 to-emerald-500',
                },
                {
                  title: 'Engineering Excellence & Quality Focus',
                  description: 'Quality is built into every stage of our delivery. From architecture and design to development and testing, we follow proven engineering standards and rigorous quality controls to ensure reliable, production-ready solutions.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  title: 'Global Expertise, Unified Delivery',
                  description: 'Our teams operate across global locations while working as one integrated unit. This ensures seamless collaboration, consistent quality, and full control throughout the engagement.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: 'from-purple-500 to-pink-500',
                },
                {
                  title: 'Security, Compliance & IP Protection',
                  description: 'We treat security and confidentiality as non-negotiable. Your data, intellectual property, and source code remain fully protected and owned by you, with enterprise-grade security practices applied throughout the lifecycle.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  color: 'from-red-500 to-orange-500',
                },
                {
                  title: 'Predictable, On-Time Delivery',
                  description: 'Using agile delivery models, modern project management tools, and continuous communication, we ensure transparency and predictable delivery timelines without compromising quality.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: 'from-indigo-500 to-blue-500',
                },
                {
                  title: 'Flexible Engagement Models',
                  description: 'From short-term support to long-term partnerships, our flexible engagement options adapt as your needs evolve. We make it easy to scale teams, switch models, and grow together over time.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  color: 'from-teal-500 to-cyan-500',
                },
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {advantage.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Work With Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-200 mb-6">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Technologies</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                Technologies We Work With
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A Broad, Proven Technology Ecosystem
              </p>
              <p className="text-base text-gray-600 max-w-3xl mx-auto mt-4">
                We work across a wide range of modern technologies and platforms to solve complex engineering challenges, integrate seamlessly with existing systems, and support long-term scalability. Our approach is always architecture-first, platform-agnostic, and aligned with your business goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Frontend',
                  description: 'Modern, high-performance user interfaces built for usability, accessibility, and scale.',
                  icon: '💻',
                  color: 'from-blue-500 to-cyan-500',
                  technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript'],
                },
                {
                  title: 'Backend',
                  description: 'Secure, scalable backend systems designed to support complex business logic and integrations.',
                  icon: '⚙️',
                  color: 'from-purple-500 to-pink-500',
                  technologies: ['Node.js', 'Python', 'Java', '.NET', 'Spring Boot'],
                },
                {
                  title: 'Mobile',
                  description: 'Cross-platform and native mobile solutions delivering consistent experiences across devices.',
                  icon: '📱',
                  color: 'from-green-500 to-emerald-500',
                  technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Swift'],
                },
                {
                  title: 'Databases',
                  description: 'Relational and NoSQL databases optimised for performance, reliability, and data integrity.',
                  icon: '🗄️',
                  color: 'from-orange-500 to-red-500',
                  technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'DynamoDB'],
                },
                {
                  title: 'Cloud',
                  description: 'Cloud-native and hybrid architectures across leading providers to support scalability and resilience.',
                  icon: '☁️',
                  color: 'from-indigo-500 to-blue-500',
                  technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'],
                },
                {
                  title: 'DevOps',
                  description: 'Automation, CI/CD, and infrastructure practices that enable faster, more reliable delivery.',
                  icon: '🚀',
                  color: 'from-teal-500 to-cyan-500',
                  technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus'],
                },
                {
                  title: 'E-Commerce',
                  description: 'Scalable commerce platforms supporting high traffic, complex catalogues, and secure transactions.',
                  icon: '🛒',
                  color: 'from-pink-500 to-rose-500',
                  technologies: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Stripe'],
                },
                {
                  title: 'CRM',
                  description: 'Customer relationship platforms integrated to support sales, marketing, and service operations.',
                  icon: '👥',
                  color: 'from-yellow-500 to-orange-500',
                  technologies: ['Salesforce', 'HubSpot', 'Microsoft Dynamics', 'Zoho', 'Pipedrive'],
                },
                {
                  title: 'CMS & DXP',
                  description: 'Content and experience platforms enabling personalised, multi-channel digital experiences.',
                  icon: '📝',
                  color: 'from-gray-600 to-gray-800',
                  technologies: ['Sitecore', 'Contentful', 'Kentico', 'Umbraco', 'Optimizely'],
                },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {tech.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {tech.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200">
                    {tech.technologies.map((t, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 bg-gradient-to-br ${tech.color} text-white rounded-lg text-xs font-semibold shadow-sm`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help transform your business
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-0 hover:scale-105"
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

export default Services
