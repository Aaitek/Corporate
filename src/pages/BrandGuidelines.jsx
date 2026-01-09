import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const BrandGuidelines = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 mb-8 shadow-xl"
            >
              <span className="text-2xl">🎨</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider">Brand Guidelines</span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              Aaitek Brand Guidelines 2025
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-4">
              ✨ "Transform Your Digital Vision Into Reality"
            </p>
            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
              A premium digital experience starts with consistency. Follow these brand standards to deliver high-impact, unified experiences across all platforms.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-12 sm:py-16 lg:py-20">
        {/* Brand Identity */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">🏷 Brand Identity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brand Name</h3>
              <p className="text-lg text-gray-700">Aaitek</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tagline</h3>
              <p className="text-lg text-primary-600 font-semibold">✨ "Transform Your Digital Vision Into Reality"</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Core Essence</h3>
              <p className="text-gray-700">Empowering innovation through composable, scalable, and intelligent digital solutions.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brand Personality</h3>
              <p className="text-gray-700">Visionary · Modern · Trustworthy · Innovative</p>
            </div>
          </div>
        </motion.section>

        {/* Color Palette */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">🎨 Color Palette</h2>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Primary Colors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#1C1C1C] rounded-2xl p-6 text-white border-2 border-gray-800 shadow-lg">
              <div className="text-2xl font-bold mb-2">#1C1C1C</div>
              <div className="text-lg font-semibold mb-1">Deep Charcoal</div>
              <div className="text-sm opacity-90">Primary Background</div>
              <div className="text-xs opacity-75 mt-2">RGB: 28, 28, 28</div>
            </div>
            <div className="bg-[#FBD506] rounded-2xl p-6 text-[#1C1C1C] border-2 border-yellow-300 shadow-lg">
              <div className="text-2xl font-bold mb-2">#FBD506</div>
              <div className="text-lg font-semibold mb-1">Aaitek Yellow</div>
              <div className="text-sm opacity-90">Primary Accent</div>
              <div className="text-xs opacity-75 mt-2">RGB: 251, 213, 6</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-[#1C1C1C] border-2 border-gray-200 shadow-lg">
              <div className="text-2xl font-bold mb-2">#FFFFFF</div>
              <div className="text-lg font-semibold mb-1">White</div>
              <div className="text-sm opacity-90">Primary Text</div>
              <div className="text-xs opacity-75 mt-2">RGB: 255, 255, 255</div>
            </div>
            <div className="bg-[#2E2E2E] rounded-2xl p-6 text-white border-2 border-gray-700 shadow-lg">
              <div className="text-2xl font-bold mb-2">#2E2E2E</div>
              <div className="text-lg font-semibold mb-1">Jet Gray</div>
              <div className="text-sm opacity-90">Secondary Background</div>
              <div className="text-xs opacity-75 mt-2">RGB: 46, 46, 46</div>
            </div>
            <div className="bg-[#F4F4F4] rounded-2xl p-6 text-[#1C1C1C] border-2 border-gray-300 shadow-lg">
              <div className="text-2xl font-bold mb-2">#F4F4F4</div>
              <div className="text-lg font-semibold mb-1">Soft Gray</div>
              <div className="text-sm opacity-90">Secondary Text</div>
              <div className="text-xs opacity-75 mt-2">RGB: 244, 244, 244</div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Extended Palette</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#FFF480] rounded-2xl p-6 text-[#1C1C1C] border-2 border-yellow-200 shadow-lg">
              <div className="text-2xl font-bold mb-2">#FFF480</div>
              <div className="text-lg font-semibold">Highlight Glow</div>
            </div>
            <div className="bg-gradient-to-r from-[#FBD506] to-[#FFF480] rounded-2xl p-6 text-[#1C1C1C] border-2 border-yellow-300 shadow-lg">
              <div className="text-2xl font-bold mb-2">Gradient</div>
              <div className="text-sm font-mono">linear-gradient(90deg, #FBD506 0%, #FFF480 100%)</div>
            </div>
          </div>
        </motion.section>

        {/* Typography */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">🖋 Typography System</h2>
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Type</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Font</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Use Case</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold text-gray-700">Primary</td>
                  <td className="py-3 px-4 text-gray-700">Inter</td>
                  <td className="py-3 px-4 text-gray-700">Headings, body</td>
                  <td className="py-3 px-4 text-gray-700">400–700</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold text-gray-700">Secondary</td>
                  <td className="py-3 px-4 text-gray-700 font-mono">Roboto Mono</td>
                  <td className="py-3 px-4 text-gray-700">Code snippets, developer text</td>
                  <td className="py-3 px-4 text-gray-700">400–500</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-gray-700">Optional Accent</td>
                  <td className="py-3 px-4 text-gray-700">Space Grotesk</td>
                  <td className="py-3 px-4 text-gray-700">Hero banners, ads</td>
                  <td className="py-3 px-4 text-gray-700">500–700</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Typography Guidelines:</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Headings:</strong> Sentence case, 0.5px letter spacing</li>
              <li><strong>Body text:</strong> Line-height 1.6 for readability</li>
              <li><strong>Font color hierarchy:</strong> White → Yellow → Soft Gray</li>
            </ul>
          </div>
        </motion.section>

        {/* Logo Guidelines */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">🧩 Logo Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Usage Rules</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Primary Use:</strong> Full Aaitek logo (white & yellow) on dark background (#1C1C1C)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Alternate Use:</strong> White-only logo for dark surfaces or watermark use
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Padding:</strong> Keep 1× logo height clear space around it
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Minimum Size:</strong> 160px (digital), 20mm (print)
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Do Not:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <div>Modify colors</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <div>Add shadows or gradients</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <div>Place on bright or yellow backgrounds</div>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Visual Design Language */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">🧠 Visual Design Language</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Layout & Spacing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Use wide margins and consistent grid (8px or 16px rhythm)</li>
                <li>• Maintain clean symmetry with visual breathing space</li>
              </ul>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">UI Style</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Cards:</strong> Rounded corners (16px), shadow: 0 8px 24px rgba(0,0,0,0.2)
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Buttons</h3>
              <div className="space-y-4 mb-6">
                <button className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105">
                  Primary
                </button>
                <button className="w-full px-6 py-3 bg-transparent border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all hover:scale-105">
                  Secondary
                </button>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Motion</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Soft fade-ins, slide-up transitions, and glowing hover states</li>
                <li>• Use easing: cubic-bezier(0.25, 0.8, 0.25, 1)</li>
                <li>• Hover: Light gradient or scale animation (1.05x)</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Tone of Voice */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">💬 Tone of Voice</h2>
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Style:</strong> Confident, clear, and empowering.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Speak as a guide helping clients build the future through technology.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Examples:</h3>
            <div className="space-y-4">
              <blockquote className="pl-4 border-l-4 border-primary-500 text-gray-700 italic">
                "Transform your digital ecosystem with composable architecture."
              </blockquote>
              <blockquote className="pl-4 border-l-4 border-primary-500 text-gray-700 italic">
                "Aaitek — where design, technology, and performance converge."
              </blockquote>
              <blockquote className="pl-4 border-l-4 border-primary-500 text-gray-700 italic">
                "We turn your digital vision into reality."
              </blockquote>
            </div>
          </div>
        </motion.section>

        {/* Brand Application */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">🌐 Brand Application</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Dark-themed websites and dashboards with glowing Aaitek Yellow accents</li>
                <li>• Motion-led hero sections</li>
                <li>• Interactive cards and components</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Social & Marketing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Dark background, bold white typography</li>
                <li>• Aaitek Yellow accent lines</li>
                <li>• Consistent corner rounding and shadow depth</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Print</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Maintain strong contrast (Yellow on Black or White)</li>
                <li>• Prefer matte finish with spot gloss on logo</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Brand Purpose */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">🚀 Brand Purpose</h2>
          <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 rounded-2xl p-8 text-white border-2 border-primary-500 shadow-xl">
            <p className="text-lg md:text-xl mb-4">
              Aaitek exists to empower creators, brands, and enterprises with composable, full-stack digital ecosystems that evolve with technology — not against it.
            </p>
            <h3 className="text-xl font-bold text-accent-300 mb-3 mt-6">Tagline Integration (for marketing):</h3>
            <p className="text-lg">
              "At Aaitek, we help you Transform Your Digital Vision Into Reality."
            </p>
          </div>
        </motion.section>

        {/* Sample Implementation */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">📋 Sample Implementation</h2>
          <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 rounded-2xl p-8 md:p-12 border-2 border-primary-500 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Sample Hero Section</h3>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Transform Your Digital Vision Into Reality
            </h1>
            <p className="text-lg text-white/90 mb-6">
              Empowering innovation through composable, scalable, and intelligent digital solutions. Experience the future of technology with Aaitek.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105">
                Get Started
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default BrandGuidelines

