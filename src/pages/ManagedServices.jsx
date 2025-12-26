const ManagedServices = () => {
  const services = [
    {
      title: '24/7 Monitoring & Support',
      description: 'Round-the-clock monitoring and support to ensure your systems run smoothly',
      features: [
        '24/7 system monitoring',
        'Proactive issue detection',
        'Rapid response times',
        'Incident management',
      ],
    },
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete management of your cloud infrastructure and resources',
      features: [
        'Infrastructure optimization',
        'Cost management',
        'Security updates',
        'Performance tuning',
      ],
    },
    {
      title: 'Application Maintenance',
      description: 'Ongoing maintenance and updates for your applications',
      features: [
        'Regular updates',
        'Bug fixes',
        'Feature enhancements',
        'Version upgrades',
      ],
    },
    {
      title: 'Security Management',
      description: 'Comprehensive security management and threat protection',
      features: [
        'Security monitoring',
        'Vulnerability assessments',
        'Patch management',
        'Compliance management',
      ],
    },
    {
      title: 'Database Management',
      description: 'Expert database administration and optimization',
      features: [
        'Performance optimization',
        'Backup & recovery',
        'Data migration',
        'Query optimization',
      ],
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Continuous integration and deployment pipeline management',
      features: [
        'Pipeline setup & maintenance',
        'Automated testing',
        'Deployment automation',
        'Infrastructure as Code',
      ],
    },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="heading-1 mb-4">Managed Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive managed services to keep your technology infrastructure running at peak performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-0 border border-gray-200"
            >
              <h2 className="heading-3 mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Why Choose Our Managed Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
                <div className="text-gray-700">Uptime SLA</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-700">Support Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">30min</div>
                <div className="text-gray-700">Average Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManagedServices

