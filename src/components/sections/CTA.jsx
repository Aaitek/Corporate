import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">
            Get Customized Solutions, Recommendations, and Estimates for Your Requirements
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Fill out the form and we will contact you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-primary-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-0 shadow-lg hover:shadow-xl transform hover:scale-105">
              Book A Free Consultation
            </Link>
            <a
              href="mailto:office@aaitek.com"
              className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-0 border-2 border-white shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Or Reach Out To Us At office@aaitek.com
            </a>
          </div>
          <div className="mt-8 flex justify-center space-x-6 text-gray-300">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">100% Confidential</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">We sign NDA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

