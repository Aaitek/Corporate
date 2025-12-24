import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs',
      features: ['Custom Development', 'Legacy Modernization', 'Enterprise Solutions'],
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive, and scalable web applications',
      features: ['Frontend Development', 'Backend Development', 'Full-Stack Solutions'],
    },
    {
      title: 'AI/ML Solutions',
      description: 'Intelligent automation and machine learning solutions',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['Cloud Migration', 'AWS/Azure/GCP', 'DevOps', 'Infrastructure as Code'],
    },
    {
      title: 'Data Engineering',
      description: 'Data processing and management solutions',
      features: ['Data Pipelines', 'ETL/ELT', 'Data Warehousing', 'Analytics'],
    },
  ]

  return (
    <div className="pt-32 pb-20 bg-black min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="heading-1 mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions to transform your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-primary-500"
            >
              <h2 className="heading-3 mb-4 text-gray-100">{service.title}</h2>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-primary-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-primary-400 font-semibold hover:text-primary-300 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services

