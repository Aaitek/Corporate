import { motion } from 'framer-motion'

const KeyAreas = () => {
  const areas = [
    {
      title: 'HEADLESS CMS',
      subtitle: 'Contentful Development Excellence',
      description: 'Transform your digital content strategy with our expert Contentful implementation. We deliver scalable, API-first solutions that power seamless content delivery across all platforms.',
      icon: '🚀',
      gradient: 'bg-primary-500',
    },
    {
      title: 'OPEN SOURCE CMS',
      subtitle: 'Strapi Development Mastery',
      description: 'Unlock the power of flexible content management with our custom Strapi solutions. We create robust APIs, beautiful front-ends, and scalable architectures.',
      icon: '⚡',
      gradient: 'bg-primary-500',
    },
    {
      title: 'ENTERPRISE CMS',
      subtitle: 'Kentico CMS Excellence',
      description: 'Maximize your digital potential with enterprise-grade Kentico solutions. We build comprehensive platforms that streamline content management and enhance user experiences.',
      icon: '🏢',
      gradient: 'bg-primary-500',
    },
    {
      title: 'Umbraco CMS',
      description: 'Flexible and powerful open-source CMS solutions built on Microsoft technology.',
      icon: '🌐',
      gradient: 'bg-primary-500',
    },
    {
      title: 'Sitecore XM Cloud',
      description: 'Enterprise-grade composable DXP solutions for large-scale digital experiences.',
      icon: '☁️',
      gradient: 'bg-primary-500',
    },
    {
      title: 'Contentstack',
      description: 'Modern headless CMS platform for agile content teams and developers.',
      icon: '📦',
      gradient: 'bg-primary-500',
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
          <h2 className="heading-2 mb-4 text-white">
            Our Expertise
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Transform Your Digital Vision Into Reality with cutting-edge content management solutions and 20+ years of experience in enterprise-grade platforms
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-gray-800 border-2 border-transparent hover:border-primary-500 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Animated Icon */}
              <motion.div
                className="text-5xl mb-4 relative z-10"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: 'easeInOut',
                }}
              >
                {area.icon}
              </motion.div>
              
              <h3 className="heading-3 mb-2 relative z-10 text-gray-100 group-hover:text-primary-400 transition-colors">
                {area.title}
              </h3>
              {area.subtitle && (
                <h4 className="text-lg font-semibold text-primary-400 mb-2 relative z-10">
                  {area.subtitle}
                </h4>
              )}
              <p className="text-gray-300 relative z-10">{area.description}</p>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-white/20"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default KeyAreas

