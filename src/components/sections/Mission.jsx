import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CountUp } from '../../hooks/useCountUp'

const Mission = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="section-padding bg-black relative overflow-hidden" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-aos="fade-right"
          >
            <div className="text-sm font-semibold text-primary-400 mb-4 uppercase tracking-wider">
              OUR MISSION
            </div>
            <h2 className="heading-2 mb-6 text-white">
              Transform Your Digital Vision Into Reality
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              With over two decades of expertise, Aaitek specializes in delivering cutting-edge composable solutions that revolutionize how businesses connect with their audiences. We combine technical excellence with creative vision to build digital experiences that drive engagement, growth, and lasting success.
            </p>
            <Link
              to="/about"
              className="btn-primary inline-block"
            >
              Learn Our Story
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
            data-aos="fade-left"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gray-900/90 backdrop-blur-sm p-8 border border-gray-800">
              <div className="absolute inset-0 bg-gray-900/90"></div>
              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-100">Technical Excellence</h3>
                    <p className="text-gray-400">
                      {isInView ? (
                        <CountUp
                          start={0}
                          end={20}
                          duration={2.5}
                          suffix="+"
                          separator=","
                          decimals={0}
                          enabled={isInView}
                        />
                      ) : (
                        '0+'
                      )}{' '}
                      years of proven expertise
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center text-2xl">
                    💡
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-100">Creative Vision</h3>
                    <p className="text-gray-400">Innovative solutions that stand out</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center text-2xl">
                    🚀
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-100">Lasting Success</h3>
                    <p className="text-gray-400">Digital experiences that drive growth</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Mission

