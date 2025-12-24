import { Link } from 'react-router-dom'

const HireDevelopers = () => {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'Java', category: 'Backend' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'GraphQL', category: 'API' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'Strapi', category: 'CMS' },
    { name: 'Next.js', category: 'Framework' },
  ]

  const benefits = [
    {
      title: 'Skilled Developers',
      description: 'Our skilled developers bring deep platform knowledge to deliver powerful, scalable, and high-performing solutions.',
      icon: '👨‍💻',
    },
    {
      title: 'Seamless Communication',
      description: 'Experience clear, consistent communication throughout your project with direct access to our expert development team.',
      icon: '💬',
    },
    {
      title: 'Client-Centric Collaboration',
      description: 'We work as an extension of your team ensuring transparent workflows, open communication, and shared success at every stage.',
      icon: '🤝',
    },
    {
      title: '40 Hours of Free Consultancy',
      description: 'Get 40 hours of free expert consultancy to kickstart your project. Benefit from flexible hiring models tailored to your goals, budget, and workflow.',
      icon: '🎁',
    },
    {
      title: 'Agile & Flexible Engagement Models',
      description: 'Choose the collaboration model that suits your project scope, budget, and timeline from dedicated teams to time-based support.',
      icon: '⚡',
    },
    {
      title: 'Post-Deployment Support',
      description: 'We ensure long-term success with dedicated post-launch support, updates, performance monitoring, and continuous improvements.',
      icon: '🔄',
    },
  ]

  const hiringModels = [
    {
      title: 'Staff Augmentation',
      description: 'Seamlessly integrate experienced developers into your existing team',
      features: [
        'Flexible team scaling',
        'Direct team management',
        'Quick onboarding',
        'Cost-effective solution',
      ],
    },
    {
      title: 'Dedicated Team',
      description: 'Get a dedicated team of developers working exclusively on your project',
      features: [
        'Full-time commitment',
        'Project ownership',
        'Long-term partnership',
        'Scalable resources',
      ],
    },
    {
      title: 'Time-Based Support',
      description: 'Flexible hourly or project-based engagement for specific needs',
      features: [
        'Pay for what you use',
        'Flexible scheduling',
        'Quick turnaround',
        'Expert consultation',
      ],
    },
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-black pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-gray-900 mb-6">
              Hire Expert Developers You Can Count On
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your business potential with skilled developers from an industry-leading digital partner. 
              Access top-tier tech talent through flexible hiring models.
            </p>
            <Link to="/contact" className="btn-primary">
              Talk to Our Experts
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Why Choose Aaitek</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="heading-3 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Flexible Engagement Models</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the collaboration model that suits your project scope, budget, and timeline
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hiringModels.map((model, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <h3 className="heading-3 mb-4">{model.title}</h3>
                <p className="text-gray-600 mb-6">{model.description}</p>
                <ul className="space-y-3">
                  {model.features.map((feature, idx) => (
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
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Hire Developers For</h2>
            <p className="text-lg text-gray-600">
              Our expert developers specialize in the latest technologies and platforms
            </p>
          </div>
          
          {/* Group technologies by category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Frontend', 'Backend', 'Cloud', 'DevOps', 'Database', 'CMS', 'Framework', 'API', 'Language'].map((category) => {
              const categoryTechs = technologies.filter(tech => tech.category === category)
              if (categoryTechs.length === 0) return null
              
              return (
                <div key={category} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {categoryTechs.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white rounded-lg text-sm text-gray-700 font-medium shadow-sm"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-white mb-6">
              Let's build something powerful—together.
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get 40 hours of free expert consultancy to kickstart your project. 
              Benefit from flexible hiring models tailored to your goals, budget, and workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Talk to Our Experts
              </Link>
              <Link to="/contact" className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors duration-200 border-2 border-white">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HireDevelopers

