import { useState } from 'react'

const PartnerSuccess = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const caseStudies = [
    {
      title: 'Enterprise Cloud Migration',
      client: 'Fortune 500 Company',
      industry: 'Finance',
      description: 'Successfully migrated legacy systems to cloud infrastructure, reducing costs by 40% and improving scalability.',
      image: '☁️',
      category: 'cloud',
    },
    {
      title: 'AI-Powered Analytics Platform',
      client: 'Tech Startup',
      industry: 'Technology',
      description: 'Developed custom AI analytics platform that increased data processing speed by 300% and improved decision-making accuracy.',
      image: '🤖',
      category: 'ai',
    },
    {
      title: 'E-Commerce Transformation',
      client: 'Retail Chain',
      industry: 'Retail',
      description: 'Modernized e-commerce platform resulting in 250% increase in online sales and improved customer experience.',
      image: '🛒',
      category: 'ecommerce',
    },
    {
      title: 'Mobile App Development',
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      description: 'Built comprehensive mobile app for patient management, improving engagement by 180% and streamlining operations.',
      image: '📱',
      category: 'mobile',
    },
    {
      title: 'Data Engineering Solution',
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      description: 'Implemented data engineering pipeline that reduced data processing time by 60% and enabled real-time analytics.',
      image: '📊',
      category: 'data',
    },
    {
      title: 'Legacy System Modernization',
      client: 'Government Agency',
      industry: 'Government',
      description: 'Modernized legacy systems with modern architecture, improving performance by 200% and reducing maintenance costs.',
      image: '💻',
      category: 'software',
    },
  ]

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'data', label: 'Data' },
    { id: 'software', label: 'Software' },
  ]

  const filteredCaseStudies =
    selectedCategory === 'all'
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === selectedCategory)

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="heading-1 mb-4">Partner Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real partnerships. Discover how we've helped businesses achieve their goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <div className="text-5xl mb-4">{caseStudy.image}</div>
              <div className="mb-2">
                <span className="text-sm text-primary-600 font-semibold">
                  {caseStudy.industry}
                </span>
              </div>
              <h2 className="heading-3 mb-3">{caseStudy.title}</h2>
              <p className="text-gray-600 mb-4">{caseStudy.description}</p>
              <div className="text-sm text-gray-500">
                Client: {caseStudy.client}
              </div>
              <button className="mt-4 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                Read Full Case Study →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartnerSuccess

