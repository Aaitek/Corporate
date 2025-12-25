import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What services does Aaitek provide?',
      answer: 'Aaitek delivers enterprise-grade solutions across DXP (Sitecore, Kentico, Umbraco, Optimizely), SAP, Salesforce, ServiceNow, AWS, AI, and Automation. We offer full-stack development, cloud solutions, data engineering, and managed services.',
    },
    {
      question: 'How does the AaitekTOD (Talent on Demand) model work?',
      answer: 'Our AaitekTOD model provides scalable, on-demand expertise that integrates seamlessly into your teams. You can hire developers, designers, or entire teams on a flexible basis - whether for staff augmentation, dedicated teams, or time-based support.',
    },
    {
      question: 'What technologies and frameworks do you specialize in?',
      answer: 'We specialize in MEAN and MERN stacks, along with modern languages like JavaScript, TypeScript, Python, Java, and frameworks including React, Angular, Vue.js, Next.js, Node.js, Django, and Spring Boot. We also work with enterprise platforms like Sitecore, Salesforce, and ServiceNow.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. We follow agile development methodologies to deliver value quickly. Small projects may take 2-4 weeks, while enterprise solutions typically range from 3-6 months. We provide detailed timelines during the discovery phase.',
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive managed services including application support, platform optimization, development support, and 24/7 IT support services. Our support team ensures your systems run smoothly and evolve with your business needs.',
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team models. Pricing depends on project scope, team size, and engagement duration. Contact us for a customized quote based on your specific requirements.',
    },
    {
      question: 'Are your developers certified?',
      answer: 'Yes, we have 500+ certified tech professionals with certifications in various technologies including AWS, Azure, Salesforce, ServiceNow, SAP, and more. Our team continuously updates their skills to stay current with the latest technologies.',
    },
    {
      question: 'How do you ensure data security and compliance?',
      answer: 'We implement enterprise-grade security protocols and maintain compliance with industry standards including HIPAA, GDPR, and SOC 2. All our solutions include security best practices, regular audits, and data protection measures.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 via-white to-sky-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-200 mb-6">
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services and solutions
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</span>
                <motion.svg
                  className="w-6 h-6 text-primary-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

