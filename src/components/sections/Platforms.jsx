import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Platforms = () => {
  const platforms = [
    {
      name: 'Contentful',
      description: 'Leverage Contentful\'s ecosystem to empower your digital transformation journey.',
      link: '/services/contentful',
      icon: '🚀',
    },
    {
      name: 'Strapi',
      description: 'Build, deploy, and manage applications effortlessly with powerful Strapi solutions.',
      link: '/services/strapi',
      icon: '⚡',
    },
    {
      name: 'Kentico',
      description: 'Streamline business operations with enterprise-grade Kentico CMS platforms.',
      link: '/services/kentico',
      icon: '🏢',
    },
    {
      name: 'Umbraco',
      description: 'Enhance performance and scalability with custom Umbraco deployments.',
      link: '/services/umbraco',
      icon: '🌐',
    },
    {
      name: 'Sitecore',
      description: 'Drive innovation and flexibility with enterprise-grade Sitecore XM Cloud services.',
      link: '/services/sitecore',
      icon: '☁️',
    },
    {
      name: 'Contentstack',
      description: 'Deliver smarter customer experiences through tailored Contentstack cloud solutions.',
      link: '/services/contentstack',
      icon: '📦',
    },
  ]

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
            Platforms
          </div>
          <h2 className="heading-2 mb-4 text-white">
            Unlock Innovation with Expertise Across Top Cloud-Native Platforms
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Accelerate growth and transformation with trusted CMS services tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gray-800 p-8 rounded-2xl border-2 border-transparent hover:border-primary-500 transition-all duration-0 shadow-lg hover:shadow-2xl"
            >
              <div className="text-5xl mb-4">{platform.icon}</div>
              <h3 className="heading-3 mb-4 text-gray-100 group-hover:text-primary-400 transition-colors">
                {platform.name}
              </h3>
              <p className="text-gray-300 mb-6">{platform.description}</p>
              <Link
                to={platform.link}
                className="text-primary-400 font-semibold hover:text-primary-300 transition-colors inline-flex items-center"
              >
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Platforms

