import { motion } from 'framer-motion'
import { useState } from 'react'

const Process = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: '1',
      title: 'Planning & Consultation',
      description: 'Understanding objectives, creating a roadmap, and defining outcomes.',
      icon: '📋',
      color: 'from-blue-500 to-blue-600',
      details: [
        {
          title: 'Planning & Consultation',
          description: 'We analyze your business needs, goals, and technical requirements to create a comprehensive roadmap that aligns with your strategic objectives.',
        },
        {
          title: 'Vision and Goals Definition',
          description: 'We work closely with you to define clear objectives, identify your target audience, and establish measurable outcomes for success.',
        },
        {
          title: 'Project Roadmap Creation',
          description: 'Together, we create a detailed project plan with milestones, timelines, and resource allocation to ensure smooth execution.',
        },
        {
          title: 'Scope Definition',
          description: 'We clearly define project boundaries, deliverables, and success criteria to prevent scope creep and ensure alignment.',
        },
        {
          title: 'Resource Allocation',
          description: 'We identify and allocate the right talent, tools, and technologies needed to deliver exceptional results.',
        },
      ],
    },
    {
      number: '2',
      title: 'Design',
      description: 'Creating user-centric designs and prototypes to visualize solutions.',
      icon: '🎨',
      color: 'from-purple-500 to-pink-500',
      details: [
        {
          title: 'User Research & Analysis',
          description: 'We conduct in-depth user research to understand behaviors, needs, and pain points that inform our design decisions.',
        },
        {
          title: 'Wireframing & Prototyping',
          description: 'We create low and high-fidelity prototypes to visualize user flows and validate concepts before development.',
        },
        {
          title: 'UI/UX Design',
          description: 'Our designers craft beautiful, intuitive interfaces that provide exceptional user experiences across all devices.',
        },
        {
          title: 'Design System Creation',
          description: 'We establish consistent design patterns, components, and guidelines to ensure cohesive experiences.',
        },
      ],
    },
    {
      number: '3',
      title: 'Development',
      description: 'Building robust solutions using modern technologies and best practices.',
      icon: '⚙️',
      color: 'from-green-500 to-emerald-500',
      details: [
        {
          title: 'Architecture Planning',
          description: 'We design scalable, maintainable architectures that support current needs and future growth.',
        },
        {
          title: 'Agile Development',
          description: 'We follow agile methodologies with sprints, daily standups, and continuous integration for rapid delivery.',
        },
        {
          title: 'Code Quality & Standards',
          description: 'We maintain high code quality through code reviews, testing, and adherence to industry best practices.',
        },
        {
          title: 'Integration & APIs',
          description: 'We seamlessly integrate with existing systems and third-party services through well-designed APIs.',
        },
      ],
    },
    {
      number: '4',
      title: 'Testing',
      description: 'Rigorous testing ensures quality and reliability before launch.',
      icon: '🧪',
      color: 'from-orange-500 to-red-500',
      details: [
        {
          title: 'Unit & Integration Testing',
          description: 'We write comprehensive tests to ensure individual components and integrations work correctly.',
        },
        {
          title: 'Quality Assurance',
          description: 'Our QA team performs thorough testing across devices, browsers, and scenarios to catch issues early.',
        },
        {
          title: 'Performance Testing',
          description: 'We optimize for speed, scalability, and performance to deliver fast, responsive experiences.',
        },
        {
          title: 'Security Testing',
          description: 'We conduct security audits and penetration testing to protect against vulnerabilities.',
        },
      ],
    },
    {
      number: '5',
      title: 'Deployment',
      description: 'Smooth launch with minimal disruption to your operations.',
      icon: '🚀',
      color: 'from-cyan-500 to-blue-500',
      details: [
        {
          title: 'Deployment Strategy',
          description: 'We plan and execute phased rollouts to minimize risk and ensure smooth transitions.',
        },
        {
          title: 'Infrastructure Setup',
          description: 'We configure cloud infrastructure, CI/CD pipelines, and monitoring systems for reliable operations.',
        },
        {
          title: 'Go-Live Support',
          description: 'Our team provides on-site support during launch to handle any issues and ensure success.',
        },
        {
          title: 'Post-Launch Monitoring',
          description: 'We monitor performance, errors, and user feedback to quickly address any post-launch issues.',
        },
      ],
    },
    {
      number: '6',
      title: 'Maintenance',
      description: 'Ongoing support and optimization to help you scale and adapt.',
      icon: '🔧',
      color: 'from-indigo-500 to-purple-500',
      details: [
        {
          title: 'Continuous Support',
          description: 'We provide 24/7 technical support to ensure your systems run smoothly and issues are resolved quickly.',
        },
        {
          title: 'Regular Updates',
          description: 'We keep your systems updated with the latest features, security patches, and performance improvements.',
        },
        {
          title: 'Performance Optimization',
          description: 'We continuously monitor and optimize performance to ensure your systems remain fast and efficient.',
        },
        {
          title: 'Scalability Planning',
          description: 'We help you plan for growth and scale your infrastructure as your business expands.',
        },
      ],
    },
  ]

  return (
    <section id="process" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeIn' }}
        >
          <div className="text-sm font-semibold text-primary-600 mb-4 uppercase tracking-wider">
            Our Methodology
          </div>
          <h2 className="heading-2 mb-4 text-gray-900">
            Our Agile Development Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures your project is delivered on time, within budget, and exceeds expectations.
          </p>
        </motion.div>

        {/* Process Steps Timeline - 1 Row, 6 Steps */}
        <div className="relative mb-20">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 origin-left"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Steps Grid - 6 columns, 1 row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-3 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1, ease: 'easeIn' }}
                className="relative"
              >
                {/* Connector Arrow - Between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 z-0">
                    <div className="h-full bg-gray-200 relative">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: activeStep > index ? 1 : 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 origin-left"
                      />
                      {/* Arrow */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary-500 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                  </div>
                )}

                {/* Step Card */}
                <motion.button
                  onClick={() => setActiveStep(index)}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ duration: 0 }}
                  className={`relative w-full group ${
                    activeStep === index ? 'z-20' : 'z-10'
                  }`}
                >
                  {/* Step Number Circle - Smaller */}
                  <div className="relative mb-4 flex justify-center">
                    <motion.div
                      className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                        activeStep === index ? 'ring-2 ring-primary-300 ring-offset-2' : ''
                      } transition-all duration-0`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0 }}
                    >
                      <span className="relative z-10">{step.number}</span>
                      {/* Pulse Effect for Active Step */}
                      {activeStep === index && (
                        <motion.div
                          className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color}`}
                          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                    
                    {/* Icon Badge - Smaller */}
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-white rounded-full flex items-center justify-center text-lg shadow-md border-2 border-gray-100 transition-transform duration-0 group-hover:scale-110">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Content Card - Smaller, Fixed Height */}
                  <div className={`relative bg-white rounded-xl p-4 border-2 shadow-md transition-all duration-0 h-[140px] flex flex-col ${
                    activeStep === index
                      ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-white shadow-lg shadow-primary-500/20'
                      : 'border-gray-200 hover:border-primary-300 hover:shadow-lg'
                  }`}>
                    {/* Active Indicator Bar */}
                    {activeStep === index && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} rounded-t-xl`}
                      />
                    )}

                    <h3 className={`text-sm font-bold mb-2 text-center transition-colors duration-0 flex-shrink-0 ${
                      activeStep === index ? 'text-primary-600' : 'text-gray-800 group-hover:text-primary-600'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-600 text-center leading-relaxed flex-grow flex items-center justify-center">
                      {step.description}
                    </p>

                    {/* Hover Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-0 rounded-xl pointer-events-none`}></div>
                    
                    {/* Corner Accent */}
                    <div className={`absolute top-1.5 right-1.5 w-2 h-2 bg-gradient-to-br ${step.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-0`}></div>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Content */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeIn' }}
          className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-xl"
        >
          {/* Section Header */}
          <div className="mb-8">
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${steps[activeStep].color} text-white mb-4`}>
              <span className="text-2xl">{steps[activeStep].icon}</span>
              <h3 className="text-xl font-bold">Phase {steps[activeStep].number}: {steps[activeStep].title}</h3>
            </div>
            <p className="text-gray-600 text-lg">
              {steps[activeStep].description}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps[activeStep].details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1, ease: 'easeIn' }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0 }}
                className="relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-0 group h-full flex flex-col"
              >
                {/* Left Border Accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${steps[activeStep].color} rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-0`}></div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-0 flex-shrink-0">
                  {detail.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {detail.description}
                </p>
                
                {/* Bottom Accent Line */}
                <div className={`mt-4 w-16 h-1 bg-gradient-to-r ${steps[activeStep].color} rounded-full flex-shrink-0`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process

