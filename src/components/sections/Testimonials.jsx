import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp',
      project: 'Project',
      projectDescription: 'Aaitek redesigned our content management system with a comprehensive Contentful solution. The project included creating a scalable headless CMS, API integration, and seamless content delivery across all platforms.',
      review: 'Their distinct flexibility and their strong communication were the project\'s main assets.',
      rating: 5,
      company: 'TechCorp',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO, InnovateLabs',
      project: 'Project',
      projectDescription: 'A healthcare technology company hired Aaitek for custom Strapi development. They created a flexible CMS platform that allows content teams to manage digital experiences efficiently.',
      review: 'Their software has proven essential in streamlining our content operations.',
      rating: 5,
      company: 'InnovateLabs',
    },
    {
      name: 'Michael Chen',
      role: 'Director, DataFlow Inc',
      project: 'Project',
      projectDescription: 'Aaitek created and implemented a custom Kentico CMS solution for a financial services platform. This included developing enterprise features and integrating real-time analytics functionalities.',
      review: 'They ensured our collaboration went well by providing timely updates and responding quickly to our requests.',
      rating: 5,
      company: 'DataFlow Inc',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm font-semibold text-primary-400 mb-4 uppercase tracking-wider">
            Client Testimonials
          </div>
          <h2 className="heading-2 mb-4 text-white">
            Celebrating our client's achievements: A journey of growth and success
          </h2>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-800"
              >
                <div className="text-sm font-semibold text-primary-400 mb-4 uppercase">
                  {testimonials[currentIndex].project}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {testimonials[currentIndex].projectDescription}
                </p>
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-700">
                  <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center text-2xl font-bold text-gray-900">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-100 text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-400">{testimonials[currentIndex].role}</div>
                    <div className="text-sm text-gray-500">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-primary-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Review */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-800"
              >
                <div className="text-sm font-semibold text-primary-400 mb-4 uppercase">
                  Review
                </div>
                <p className="text-2xl text-gray-200 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].review}"
                </p>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <span>Verified on</span>
                  <div className="px-3 py-1 bg-gray-700 rounded text-gray-300 font-semibold">
                    Clutch
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full hover:bg-gray-700 transition-colors text-gray-300 hover:text-white border border-gray-700"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary-500 w-8' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full hover:bg-gray-700 transition-colors text-gray-300 hover:text-white border border-gray-700"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

