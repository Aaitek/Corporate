import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Capabilities = () => {
  const capabilities = [
    {
      title: 'Contentful',
      subtitle: 'Headless CMS Excellence',
      description: 'Transform your digital content strategy with our expert Contentful implementation. We deliver scalable, API-first solutions that power seamless content delivery across all platforms.',
      link: '/services/contentful',
      icon: '🚀',
      color: 'primary-500',
    },
    {
      title: 'Strapi',
      subtitle: 'Open Source CMS Mastery',
      description: 'Unlock the power of flexible content management with our custom Strapi solutions. We create robust APIs, beautiful front-ends, and scalable architectures.',
      link: '/services/strapi',
      icon: '⚡',
      color: 'primary-500',
    },
    {
      title: 'Kentico',
      subtitle: 'Enterprise CMS Solutions',
      description: 'Maximize your digital potential with enterprise-grade Kentico solutions. We build comprehensive platforms that streamline content management and enhance user experiences.',
      link: '/services/kentico',
      icon: '🏢',
      color: 'primary-500',
    },
    {
      title: 'Umbraco',
      subtitle: 'Microsoft-Powered CMS',
      description: 'Flexible and powerful open-source CMS solutions built on Microsoft technology. Perfect for businesses seeking customizable content management.',
      link: '/services/umbraco',
      icon: '🌐',
      color: 'primary-500',
    },
    {
      title: 'Sitecore XM Cloud',
      subtitle: 'Composable DXP Platform',
      description: 'Enterprise-grade composable DXP solutions for large-scale digital experiences. Leverage the power of Sitecore\'s cloud-native platform.',
      link: '/services/xm-cloud',
      icon: '☁️',
      color: 'primary-500',
    },
    {
      title: 'Contentstack',
      subtitle: 'Modern Headless CMS',
      description: 'Modern headless CMS platform for agile content teams and developers. Build faster with our Contentstack expertise.',
      link: '/services/contentstack',
      icon: '📦',
      color: 'primary-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm font-semibold text-primary-400 mb-4 uppercase tracking-wider">
            Capabilities
          </div>
          <h2 className="heading-2 mb-4 text-white">
            Bringing Transformation Across Industries with Unmatched Innovation
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Driving transformation across industries with breakthrough technology, we fuel growth and unlock potential. Our tailored CMS solutions empower businesses to thrive in a digital-first world.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-primary-500 transition-all duration-0 shadow-lg hover:shadow-xl hover:shadow-primary-500/20 overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-0"></div>
              
              {/* Icon Container with Background */}
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-lg bg-primary-500 opacity-20 group-hover:opacity-30 flex items-center justify-center mb-4 transition-opacity duration-0">
                  <div className="text-3xl relative z-10">{capability.icon}</div>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-1 text-white group-hover:text-primary-400 transition-colors relative z-10">
                {capability.title}
              </h3>
              {capability.subtitle && (
                <p className="text-sm text-primary-400 mb-3 relative z-10 font-semibold">
                  {capability.subtitle}
                </p>
              )}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed relative z-10 line-clamp-3">
                {capability.description}
              </p>
              
              {/* Link */}
              <Link
                to={capability.link}
                className="relative z-10 text-primary-400 text-sm font-semibold hover:text-primary-300 transition-colors inline-flex items-center group/link"
              >
                Learn More
                <motion.svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </Link>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-5 transition-opacity duration-0 pointer-events-none"></div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500 opacity-0 group-hover:opacity-10 transition-opacity duration-0 rounded-bl-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Capabilities

