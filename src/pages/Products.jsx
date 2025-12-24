const Products = () => {
  const products = [
    {
      title: 'AI Analytics Platform',
      description: 'Advanced analytics platform powered by AI for data-driven decision making',
      category: 'AI/ML',
    },
    {
      title: 'Cloud Management Suite',
      description: 'Comprehensive cloud infrastructure management and monitoring solution',
      category: 'Cloud',
    },
    {
      title: 'Enterprise CRM',
      description: 'Customizable CRM solution for managing customer relationships',
      category: 'CRM',
    },
    {
      title: 'Data Integration Hub',
      description: 'Seamless data integration and transformation platform',
      category: 'Data Engineering',
    },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="heading-1 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative software products designed to solve real business challenges
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
              </div>
              <h2 className="heading-3 mb-4">{product.title}</h2>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <button className="btn-primary">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products

