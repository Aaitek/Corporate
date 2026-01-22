import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { getServiceSlug } from '../utils/slugHelper'
import SEO from '../components/SEO'

const ServiceCategoryDetail = () => {
  const { slug } = useParams()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Category data with comprehensive content
  const categories = {
    'product-experience': {
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
      longDescription: 'Our Product & Experience services focus on creating exceptional digital experiences that users love. We combine user-centered design thinking with cutting-edge technology to build products that not only look beautiful but also deliver measurable business results. From initial concept to launch and beyond, we work with you to create products that stand out in the market.',
      useCases: [
        'Launching a new digital product or service',
        'Redesigning existing platforms for better user engagement',
        'Building mobile-first experiences for modern consumers',
        'Creating eCommerce platforms that convert',
        'Developing immersive experiences with AR/VR',
      ],
      approach: [
        {
          title: 'Discovery & Strategy',
          description: 'We start by understanding your business goals, target audience, and market opportunities through comprehensive research and analysis.',
        },
        {
          title: 'Design & Prototyping',
          description: 'Our design team creates intuitive user interfaces and experiences, validated through rapid prototyping and user testing.',
        },
        {
          title: 'Development & Engineering',
          description: 'We build scalable, performant products using modern technologies and best practices, ensuring quality at every step.',
        },
        {
          title: 'Launch & Optimization',
          description: 'We help you launch successfully and continuously optimize based on user feedback and analytics data.',
        },
      ],
      technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'React Native', 'Flutter', 'Figma', 'Adobe XD', 'Shopify', 'WooCommerce'],
    },
    'software-engineering': {
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
      longDescription: 'Our Software Engineering services deliver enterprise-grade solutions that are scalable, maintainable, and built to last. We follow agile methodologies and industry best practices to ensure your software meets both current needs and future growth. Whether you need custom applications, system integrations, or legacy modernization, we have the expertise to deliver.',
      useCases: [
        'Building custom applications for unique business processes',
        'Integrating disparate systems for unified operations',
        'Modernizing legacy systems for improved performance',
        'Developing APIs for third-party integrations',
        'Creating bespoke solutions for specific industry needs',
      ],
      approach: [
        {
          title: 'Requirements Analysis',
          description: 'We conduct thorough analysis to understand your business needs, technical constraints, and success criteria.',
        },
        {
          title: 'Architecture Design',
          description: 'Our architects design scalable, secure, and maintainable system architectures that align with your goals.',
        },
        {
          title: 'Agile Development',
          description: 'We follow agile methodologies with continuous integration, testing, and deployment for faster delivery.',
        },
        {
          title: 'Quality Assurance',
          description: 'Comprehensive testing and code reviews ensure high quality and reliability of your software solutions.',
        },
      ],
      technologies: ['Node.js', 'Python', 'Java', '.NET', 'Spring Boot', 'Django', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes'],
    },
    'cloud-devops': {
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
      longDescription: 'Our Cloud & DevOps services help organizations leverage the power of cloud computing and modern DevOps practices. We design scalable cloud architectures, migrate existing systems, and implement automated CI/CD pipelines that accelerate development cycles while maintaining high quality and security standards.',
      useCases: [
        'Migrating on-premise infrastructure to the cloud',
        'Implementing DevOps practices for faster delivery',
        'Building scalable cloud-native applications',
        'Optimizing cloud costs and performance',
        'Ensuring cloud security and compliance',
      ],
      approach: [
        {
          title: 'Cloud Strategy',
          description: 'We assess your current infrastructure and develop a comprehensive cloud strategy aligned with your business objectives.',
        },
        {
          title: 'Architecture Design',
          description: 'Our cloud architects design scalable, cost-effective architectures using best practices and modern patterns.',
        },
        {
          title: 'Migration & Implementation',
          description: 'We execute smooth migrations with minimal downtime, ensuring data integrity and system availability.',
        },
        {
          title: 'DevOps Automation',
          description: 'We set up CI/CD pipelines, infrastructure as code, and monitoring solutions for continuous delivery.',
        },
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Ansible', 'Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Prometheus'],
    },
    'data-ai': {
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
      longDescription: 'Our Data & AI services help organizations transform data into actionable insights and leverage artificial intelligence to automate processes, make predictions, and create intelligent applications. We build robust data pipelines, develop machine learning models, and implement AI solutions that drive business value while ensuring ethical and responsible AI practices.',
      useCases: [
        'Building data pipelines for analytics and reporting',
        'Developing AI models for predictions and automation',
        'Implementing intelligent automation for business processes',
        'Creating data-driven insights for decision making',
        'Ensuring AI governance and responsible AI practices',
      ],
      approach: [
        {
          title: 'Data Strategy',
          description: 'We analyze your data landscape and develop strategies to unlock value from your data assets.',
        },
        {
          title: 'Data Engineering',
          description: 'We build robust data pipelines and warehouses that collect, process, and store data efficiently.',
        },
        {
          title: 'AI Development',
          description: 'Our data scientists develop and deploy machine learning models that solve real business problems.',
        },
        {
          title: 'AI Governance',
          description: 'We implement frameworks for ethical AI, ensuring transparency, fairness, and compliance.',
        },
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Apache Spark', 'Snowflake', 'Databricks', 'MLflow', 'Kubeflow', 'Tableau', 'Power BI'],
    },
    'digital-growth': {
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
      longDescription: 'Our Digital Growth services help businesses increase their online visibility, attract qualified leads, and convert visitors into customers. We combine data-driven strategies with AI-powered optimization to deliver measurable results. From SEO and paid advertising to social media and conversion optimization, we help you grow your digital presence and revenue.',
      useCases: [
        'Improving search engine rankings and organic traffic',
        'Running high-performing paid advertising campaigns',
        'Building brand presence on social media',
        'Managing online reputation and reviews',
        'Optimizing websites and campaigns for better conversions',
      ],
      approach: [
        {
          title: 'Strategy & Planning',
          description: 'We analyze your market, competitors, and audience to develop comprehensive growth strategies.',
        },
        {
          title: 'Implementation',
          description: 'We execute campaigns across multiple channels, ensuring consistent messaging and brand presence.',
        },
        {
          title: 'Optimization',
          description: 'We continuously test, measure, and optimize campaigns based on data and performance metrics.',
        },
        {
          title: 'Reporting & Insights',
          description: 'We provide detailed reports and actionable insights to help you make data-driven decisions.',
        },
      ],
      technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'SEMrush', 'Ahrefs', 'HubSpot', 'Mailchimp', 'Hotjar', 'Optimizely'],
    },
    'managed-services': {
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
      longDescription: 'Our Managed Services ensure your digital systems run smoothly, securely, and efficiently. We provide 24/7 monitoring, proactive maintenance, and expert support so you can focus on your core business. From application support to infrastructure management, we handle the technical complexity so you don\'t have to.',
      useCases: [
        'Ensuring 24/7 availability of critical applications',
        'Maintaining and updating existing systems',
        'Optimizing platform performance',
        'Handling IT support and infrastructure management',
        'Providing ongoing development support',
      ],
      approach: [
        {
          title: 'Assessment & Planning',
          description: 'We assess your current systems and develop a comprehensive support and maintenance plan.',
        },
        {
          title: 'Proactive Monitoring',
          description: 'We monitor your systems 24/7, identifying and resolving issues before they impact your business.',
        },
        {
          title: 'Maintenance & Updates',
          description: 'We handle regular maintenance, updates, and patches to keep your systems secure and up-to-date.',
        },
        {
          title: 'Continuous Improvement',
          description: 'We continuously optimize performance, reduce costs, and improve reliability.',
        },
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab', 'Prometheus', 'Grafana', 'New Relic', 'Datadog'],
    },
    'enterprise-platforms': {
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
      longDescription: 'Our Enterprise Platforms services help organizations implement and optimize industry-leading platforms like Sitecore, Salesforce, ServiceNow, and SAP. We provide end-to-end services from platform selection and implementation to customization, integration, and ongoing support. Our expertise ensures you get maximum value from your enterprise platform investments.',
      useCases: [
        'Implementing CMS and DXP platforms for content management',
        'Setting up CRM systems for customer relationship management',
        'Deploying ServiceNow for IT and business service management',
        'Integrating ERP systems for unified business operations',
        'Customizing and extending enterprise platforms',
      ],
      approach: [
        {
          title: 'Platform Selection',
          description: 'We help you choose the right platform based on your business needs, budget, and technical requirements.',
        },
        {
          title: 'Implementation',
          description: 'We handle end-to-end implementation, including configuration, customization, and data migration.',
        },
        {
          title: 'Integration',
          description: 'We integrate your enterprise platforms with existing systems for seamless data flow and operations.',
        },
        {
          title: 'Training & Support',
          description: 'We provide comprehensive training and ongoing support to ensure successful adoption and utilization.',
        },
      ],
      technologies: ['Sitecore', 'Salesforce', 'ServiceNow', 'SAP', 'Microsoft Dynamics', 'HubSpot', 'Kentico', 'Umbraco', 'Optimizely', 'Contentful'],
    },
    'growth-companies': {
      title: 'Growth Companies',
      description: 'Optimise, integrate, accelerate. Scale your operations with solutions designed for growing businesses.',
      icon: '📈',
      color: 'from-indigo-500 to-purple-500',
      services: [
        'API & Integration Engineering',
        'Cloud Migration & Modernisation',
        'Platform Optimisation',
        'Search & AI-Driven Optimisation',
        'Application Support & Maintenance',
        'Performance & Paid Marketing',
      ],
      longDescription: 'Our Growth Companies services are designed for businesses that are scaling rapidly and need to optimize, integrate, and accelerate their operations. We help you streamline processes, integrate systems, and leverage cloud technologies to support your growth trajectory. From API integrations to cloud migrations, we provide solutions that scale with your business.',
      useCases: [
        'Integrating multiple systems to streamline operations',
        'Migrating to cloud for better scalability and cost efficiency',
        'Optimizing existing platforms for better performance',
        'Scaling digital marketing efforts to drive growth',
        'Implementing automation to reduce manual work',
      ],
      approach: [
        {
          title: 'Assessment & Strategy',
          description: 'We analyze your current systems and processes to identify optimization opportunities and integration needs.',
        },
        {
          title: 'Integration & Optimization',
          description: 'We integrate your systems and optimize platforms to improve efficiency and reduce bottlenecks.',
        },
        {
          title: 'Cloud Migration',
          description: 'We help you migrate to cloud platforms for better scalability, cost management, and performance.',
        },
        {
          title: 'Growth Acceleration',
          description: 'We implement digital growth strategies and automation to accelerate your business growth.',
        },
      ],
      technologies: ['AWS', 'Azure', 'Node.js', 'Python', 'React', 'Next.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes'],
    },
    'startups': {
      title: 'Startups',
      description: 'From idea to market, fast. Rapid product development and launch services for startups.',
      icon: '🚀',
      color: 'from-orange-500 to-red-500',
      services: [
        'Product Discovery & Strategy',
        'Web Platform Development',
        'Mobile Application Development',
        'MVP Development',
        'UX & UI Design',
        'eCommerce Solutions',
      ],
      longDescription: 'Our Startups services are tailored for fast-moving startups that need to get to market quickly. We focus on rapid product development, MVP creation, and scalable architecture that grows with your business. From initial concept to launch, we help you build products that users love while maintaining the speed and agility startups need.',
      useCases: [
        'Building an MVP to validate your business idea',
        'Developing a web or mobile app for launch',
        'Creating a product strategy and roadmap',
        'Designing user experiences that convert',
        'Building eCommerce platforms for online sales',
      ],
      approach: [
        {
          title: 'Rapid Discovery',
          description: 'We quickly understand your vision and market opportunity through focused discovery sessions.',
        },
        {
          title: 'MVP Development',
          description: 'We build minimum viable products that validate your idea while keeping costs and timelines lean.',
        },
        {
          title: 'Agile Development',
          description: 'We use agile methodologies to deliver features quickly and iterate based on user feedback.',
        },
        {
          title: 'Launch & Scale',
          description: 'We help you launch successfully and prepare your product architecture for rapid scaling.',
        },
      ],
      technologies: ['React', 'Next.js', 'React Native', 'Flutter', 'Node.js', 'TypeScript', 'Firebase', 'Vercel', 'Stripe', 'Shopify'],
    },
  }

  const category = categories[slug] || {
    title: 'Category Not Found',
    description: 'The requested category could not be found.',
    icon: '❓',
    color: 'from-gray-500 to-gray-700',
    services: [],
    longDescription: '',
    useCases: [],
    approach: [],
    technologies: [],
  }

  // Get image for display (can use category images)
  const getImage = () => {
    const categoryImages = {
      'product-experience': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
      'software-engineering': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80',
      'cloud-devops': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
      'data-ai': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
      'digital-growth': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'managed-services': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
      'enterprise-platforms': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
      'growth-companies': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'startups': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
    }
    return categoryImages[slug] || 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80'
  }

  // Use logo for social sharing (consistent across all pages)
  const socialImage = `${siteUrl}/logo-black.png`

  const siteUrl = 'https://aaitek.com.au'
  const canonicalUrl = `${siteUrl}/services/category/${slug}`
  const seoTitle = category ? `${category.title} - Service Category | Aaitek` : 'Service Category - Aaitek'
  // Create a comprehensive description
  let seoDescription = category?.longDescription || category?.description || ''
  if (!seoDescription && category?.title) {
    seoDescription = `${category.title} services by Aaitek. ${category.description || 'Enterprise-grade digital transformation solutions designed for scale, security, and measurable business outcomes.'}`
  }
  if (!seoDescription) {
    seoDescription = 'Enterprise-grade digital transformation services by Aaitek. Built for scale, security, and measurable business outcomes.'
  }
  // Ensure description is optimal length
  if (seoDescription.length > 160) {
    seoDescription = seoDescription.substring(0, 157) + '...'
  }

  return (
    <>
      <SEO
        seoTitle={seoTitle}
        seoDescription={seoDescription}
        canonicalUrl={canonicalUrl}
        ogTitle={category?.title || 'Service Category'}
        ogDescription={seoDescription}
        ogImage={socialImage}
        ogType="website"
        twitterTitle={category?.title || 'Service Category'}
        twitterDescription={seoDescription}
        schemaType="Service"
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={getImage()} 
            alt={category.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-accent-900/90"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6`}>
              <span className="text-2xl">{category.icon}</span>
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Service Category</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              {category.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      {category.longDescription && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About {category.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {category.longDescription}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Services List Section */}
      <section ref={ref} className="py-12 sm:py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Our {category.title} Services
              </h2>
              <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
                Comprehensive solutions to help you achieve your business goals
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {category.services.map((service, index) => {
                const serviceSlug = getServiceSlug(service)
                return (
                  <Link
                    key={index}
                    to={`/services/${serviceSlug}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-primary-300 hover:shadow-lg transition-all duration-200 cursor-pointer h-full"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {service}
                      </h3>
                      <p className="text-sm text-gray-500 group-hover:text-primary-500 transition-colors mt-2">
                        Learn more →
                      </p>
                    </motion.div>
                  </Link>
                )
              })}
            </div>

            {/* Use Cases Section */}
            {category.useCases && category.useCases.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                  When to Use Our {category.title} Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.useCases.map((useCase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-gray-700 font-medium">{useCase}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Our Approach Section */}
            {category.approach && category.approach.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                  Our Approach
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.approach.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all h-full">
                        <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 shadow-md`}>
                          <span className="text-white font-bold text-xl">{index + 1}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                      {index < category.approach.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary-300 to-transparent transform -translate-y-1/2">
                          <svg className="w-6 h-6 text-primary-400 absolute -right-1 -top-2.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Technologies Section */}
            {category.technologies && category.technologies.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                  Technologies We Use
                </h2>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`px-4 py-2 bg-gradient-to-br ${category.color} text-white rounded-lg font-semibold text-sm shadow-md hover:scale-105 transition-transform`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Why Choose Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-200 mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Why Choose Our {category.title} Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600">Experienced professionals with deep expertise in their domains</p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                  <p className="text-gray-600">Track record of successful projects and satisfied clients</p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Value-Driven</h3>
                  <p className="text-gray-600">Solutions that deliver measurable business value</p>
                </div>
              </div>
            </motion.div>
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
              Let's discuss how our {category.title} services can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Contact Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}

export default ServiceCategoryDetail

