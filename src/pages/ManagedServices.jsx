import { useState, useEffect } from 'react'
import { fetchManagedServices } from '../utils/api'

const ManagedServices = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadServices = async () => {
      try {
        setLoading(true)
        const response = await fetchManagedServices()
        if (response?.data) {
          // Map Strapi data to component format
          const mapped = response.data.map(item => ({
            id: item.id,
            title: item.attributes?.title || '',
            slug: item.attributes?.slug || '',
            description: item.attributes?.description || '',
            features: item.attributes?.features || [],
            icon: item.attributes?.icon || '🛠️',
          }))
          setServices(mapped)
        }
      } catch (error) {
        console.error('Error fetching managed services:', error)
        setServices([])
      } finally {
        setLoading(false)
      }
    }
    loadServices()
  }, [])

  return (
    <div className="pt-32">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="heading-1 mb-4">Managed Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive managed services to keep your technology infrastructure running at peak performance
          </p>
        </div>

        {loading ? (
          <div className="text-center py-16 mb-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            <p className="mt-4 text-gray-600">Loading managed services...</p>
          </div>
        ) : services.length > 0 ? (
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
        ) : (
          <div className="text-center py-16 mb-16">
            <p className="text-gray-600">No managed services available at the moment.</p>
          </div>
        )}

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

