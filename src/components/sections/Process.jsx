import { motion } from 'framer-motion'

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover & Plan',
      description: 'We analyze your business needs, goals, and technical requirements to create a comprehensive roadmap.',
      icon: '🔍',
    },
    {
      number: '02',
      title: 'Design & Prototype',
      description: 'Our team creates user-centric designs and prototypes to visualize your solution before development.',
      icon: '🎨',
    },
    {
      number: '03',
      title: 'Develop & Integrate',
      description: 'We build robust solutions using modern technologies and seamlessly integrate with your existing systems.',
      icon: '⚙️',
    },
    {
      number: '04',
      title: 'Test & Launch',
      description: 'Rigorous testing ensures quality, followed by a smooth launch with minimal disruption to your operations.',
      icon: '🚀',
    },
    {
      number: '05',
      title: 'Support & Scale',
      description: 'Ongoing support and optimization help you scale and adapt as your business grows.',
      icon: '📈',
    },
  ]

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
          <div className="text-sm font-semibold text-primary-400 mb-4 uppercase tracking-wider">
            Our Process
          </div>
          <h2 className="heading-2 mb-4 text-white">
            How We Deliver Excellence
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A proven methodology that ensures your project is delivered on time, within budget, and exceeds expectations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gray-800"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="group relative bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-primary-500 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6">
                    <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-black font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4 mt-4">{step.icon}</div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process

