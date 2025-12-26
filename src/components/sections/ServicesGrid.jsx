import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ServicesGrid = () => {
  const services = [
    {
      title: 'Contentful Development',
      description: 'Transform your digital content strategy with our expert Contentful implementation. We deliver scalable, API-first solutions that power seamless content delivery across all platforms.',
      link: '/services/contentful',
    },
    {
      title: 'Strapi Development',
      description: 'Unlock the power of flexible content management with our custom Strapi solutions. We create robust APIs, beautiful front-ends, and scalable architectures.',
      link: '/services/strapi',
    },
    {
      title: 'Kentico CMS',
      description: 'Maximize your digital potential with enterprise-grade Kentico solutions. We build comprehensive platforms that streamline content management and enhance user experiences.',
      link: '/services/kentico',
    },
    {
      title: 'Umbraco CMS',
      description: 'Flexible and powerful open-source CMS solutions built on Microsoft technology. Perfect for businesses seeking customizable content management.',
      link: '/services/umbraco',
    },
    {
      title: 'Sitecore XM Cloud',
      description: 'Enterprise-grade composable DXP solutions for large-scale digital experiences. Leverage the power of Sitecore\'s cloud-native platform.',
      link: '/services/xm-cloud',
    },
    {
      title: 'Contentstack',
      description: 'Modern headless CMS platform for agile content teams and developers. Build faster with our Contentstack expertise.',
      link: '/services/contentstack',
    },
    {
      title: 'Digital Transformation',
      description: 'We deliver world-class content management systems, headless architectures, and digital transformation solutions that scale with your business.',
      link: '/services/digital-transformation',
    },
    {
      title: 'Headless Architecture',
      description: 'Build future-ready digital experiences with our headless architecture solutions. API-first approach for maximum flexibility.',
      link: '/services/headless-architecture',
    },
    {
      title: 'CMS Consulting',
      description: 'Expert consulting services to help you choose and implement the right CMS platform for your business needs and goals.',
      link: '/services/cms-consulting',
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

  const cardVariants = {
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
            COMPREHENSIVE SOLUTIONS
          </div>
          <h2 className="heading-2 mb-4 text-white">
            Enterprise-Grade Digital Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We deliver world-class content management systems, headless architectures, and digital transformation solutions that scale with your business. Our proven methodologies ensure rapid deployment, exceptional performance, and long-term success.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0 }}
              className="group relative bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-0 border-2 border-transparent hover:border-primary-500 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-0"></div>
              
              <h3 className="heading-3 mb-3 relative z-10 text-gray-100 group-hover:text-primary-400 transition-colors duration-0">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 relative z-10">{service.description}</p>
              <Link
                to={service.link}
                className="relative z-10 text-primary-400 font-semibold hover:text-primary-300 transition-colors duration-0 inline-flex items-center group/link"
              >
                Learn More
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </Link>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-0 bg-white/30"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesGrid

