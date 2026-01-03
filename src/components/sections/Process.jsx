import { motion } from 'framer-motion'
import { useState } from 'react'

const Process = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: '1',
      title: 'Planning & Consultation',
      description: 'We work closely with stakeholders to understand objectives, assess requirements, and define a clear roadmap with measurable outcomes.',
      icon: '📋',
      color: 'from-blue-500 to-blue-600',
      phaseTitle: 'Strategic Alignment & Roadmap Definition',
      phaseDescription: 'We begin by gaining a deep understanding of your business objectives, technical landscape, and success criteria. This phase ensures strategic alignment and establishes a clear, executable roadmap before delivery begins.',
      details: [
        {
          title: 'Business Vision & Objectives',
          description: 'We collaborate with key stakeholders to clarify goals, define success metrics, and align the initiative with your broader business and customer strategy.',
        },
        {
          title: 'Delivery Roadmap & Milestones',
          description: 'A structured roadmap outlining scope, timelines, milestones, and dependencies — providing transparency and predictability throughout the engagement.',
        },
        {
          title: 'Scope & Requirements Definition',
          description: 'Clear definition of functional scope, technical requirements, and success criteria to ensure alignment, manage expectations, and prevent scope drift.',
        },
        {
          title: 'Resourcing & Capability Planning',
          description: 'Identification and allocation of the right expertise, tools, and technologies to ensure efficient execution and high-quality outcomes.',
        },
      ],
    },
    {
      number: '2',
      title: 'Experience & Design',
      description: 'User-centric design and prototyping to validate ideas early, align stakeholders, and ensure intuitive, scalable experiences.',
      icon: '🎨',
      color: 'from-purple-500 to-pink-500',
      phaseTitle: 'User-Centred Experience Design & Validation',
      phaseDescription: 'This phase transforms strategic intent into intuitive, scalable experiences. We design with users in mind while ensuring alignment with business objectives, technical feasibility, and long-term scalability.',
      details: [
        {
          title: 'User Research & Experience Analysis',
          description: 'We conduct structured user research and stakeholder analysis to understand user behaviours, needs, and pain points — ensuring design decisions are grounded in real-world insights.',
        },
        {
          title: 'Wireframing & Prototyping',
          description: 'Interactive wireframes and prototypes are created to visualise user journeys, validate concepts early, and align stakeholders before engineering begins.',
        },
        {
          title: 'UI/UX Design',
          description: 'We design clean, intuitive, and accessible interfaces that balance aesthetics with usability — delivering consistent experiences across devices and platforms.',
        },
        {
          title: 'Design Systems & Standards',
          description: 'Reusable design systems, components, and guidelines are established to ensure visual consistency, faster delivery, and long-term maintainability.',
        },
      ],
      outcome: 'Validated designs, aligned stakeholders, and a clear blueprint ready for development.',
    },
    {
      number: '3',
      title: 'Engineering & Development',
      description: 'Robust, secure, and scalable solutions built using modern architectures, best practices, and enterprise-grade technologies.',
      icon: '⚙️',
      color: 'from-green-500 to-emerald-500',
      phaseTitle: 'Engineering Robust, Scalable Solutions',
      phaseDescription: 'In this phase, approved designs are built into secure, high-quality solutions using modern technologies and proven engineering practices.',
      details: [
        {
          title: 'Architecture Planning',
          description: 'We design scalable and maintainable system architectures that support current requirements while allowing for future growth and evolution.',
        },
        {
          title: 'Agile Development',
          description: 'Development is delivered through structured agile sprints with regular collaboration, continuous integration, and incremental releases.',
        },
        {
          title: 'Code Quality & Standards',
          description: 'High code quality is ensured through peer reviews, automated testing, and adherence to established industry standards.',
        },
        {
          title: 'Integration & APIs',
          description: 'We integrate seamlessly with existing systems and third-party services using secure, well-designed APIs.',
        },
      ],
      outcome: 'A stable, scalable, and production-ready solution built to enterprise standards.',
    },
    {
      number: '4',
      title: 'Quality Assurance & Testing',
      description: 'Comprehensive testing across functionality, performance, and security to ensure reliability and readiness for production.',
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
      title: 'Deployment & Release',
      description: 'Controlled, seamless deployment with minimal disruption, supported by automation and proven release practices.',
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
      title: 'Optimisation & Ongoing Support',
      description: 'Continuous monitoring, support, and optimisation to help platforms evolve, scale, and deliver long-term value.',
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
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[200px]">
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
            A Proven, Agile Delivery Framework
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A structured, outcome-driven approach designed to deliver high-quality solutions on time, within budget, and aligned with your business objectives.
          </p>
        </motion.div>

        {/* Process Steps Timeline - 1 Row, 6 Steps */}
        <div className="relative mb-20">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-12 sm:top-14 left-0 right-0 h-0.5 bg-gray-200 z-0">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4 xl:gap-5 relative">
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
                  <div className="hidden lg:block absolute top-12 sm:top-14 left-full w-full h-0.5 z-0">
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
                  {/* Step Number Circle - Medium Size */}
                  <div className="relative mb-3 flex justify-center">
                    <motion.div
                      className={`relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-2xl shadow-lg ${
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
                    
                    {/* Icon Badge - Medium Size */}
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-white rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl shadow-md border-2 border-gray-100 transition-transform duration-0 group-hover:scale-110">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Content Card - Wider, Reduced Height */}
                  <div className={`relative bg-white rounded-xl p-3 sm:p-4 lg:p-5 border-2 shadow-md transition-all duration-0 min-h-[140px] sm:min-h-[150px] lg:min-h-[160px] flex flex-col ${
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

                    <h3 className={`text-xs sm:text-sm lg:text-base font-bold mb-2 text-center transition-colors duration-0 flex-shrink-0 ${
                      activeStep === index ? 'text-primary-600' : 'text-gray-800 group-hover:text-primary-600'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600 text-center leading-relaxed flex-grow">
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
            {steps[activeStep].phaseTitle && (
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                {steps[activeStep].phaseTitle}
              </h4>
            )}
            <p className="text-gray-600 text-lg mb-4">
              {steps[activeStep].phaseDescription || steps[activeStep].description}
            </p>
            {steps[activeStep].outcome && (
              <div className="mt-4 p-4 bg-primary-50 border-l-4 border-primary-500 rounded">
                <p className="text-gray-700 font-semibold">
                  <span className="text-primary-600">Outcome: </span>
                  {steps[activeStep].outcome}
                </p>
              </div>
            )}
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

