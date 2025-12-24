import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Work', path: '/partner-success' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'Careers', path: '/careers' },
    ],
    services: [
      { label: 'AI Chatbots', path: '/services/ai-chatbots' },
      { label: 'AI Voice Agents', path: '/services/ai-voice-agents' },
      { label: 'AI Automation', path: '/services/ai-automation' },
      { label: 'Custom AI', path: '/services/custom-ai' },
      { label: 'Aaitek DXP', path: '/services/dxp' },
      { label: 'Hire Onshore/Offshore Resource', path: '/hire-developers' },
    ],
    resources: [
      { label: 'Blogs & Insights', path: '/resources/blog' },
      { label: 'Case Studies', path: '/partner-success' },
      { label: 'Press Releases', path: '/resources/press-releases' },
      { label: 'Events', path: '/resources/events' },
      { label: 'Webinars', path: '/resources/webinars' },
      { label: 'Videos', path: '/resources/videos' },
    ],
  }

  return (
    <footer className="bg-gradient-to-br from-sky-100 to-blue-100 text-gray-800">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo.avif" 
                alt="Aaitek Logo" 
                className="h-8 w-auto mb-4"
              />
            </div>
            <p className="text-sm mb-4 text-gray-400">
              We're Proudly Australia-owned with Global Delivery Capability. Aaitek delivers enterprise-grade solutions across DXP (Sitecore, Kentico, Umbraco, Optimizely), SAP, Salesforce, ServiceNow, AWS, AI, and Automation — backed by 500+ certified tech professionals. Our AaitekTOD (Talent on demand)™ model provides scalable, on-demand expertise that integrates seamlessly into your teams for faster, smarter delivery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Our Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-primary-200 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <p className="text-sm text-gray-600 mb-2">
                <a href="mailto:info@aaitek.com" className="hover:text-primary-400 transition-colors">
                  info@aaitek.com
                </a>
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <a href="tel:+61435987212" className="hover:text-primary-400 transition-colors">
                  +61 435 987 212
                </a>
              </p>
              <p className="text-sm text-gray-400">
                Sydney, Australia
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-gray-800 rounded text-gray-300">Contentful Partner</span>
                <span className="text-xs px-3 py-1 bg-gray-800 rounded text-gray-300">Umbraco Partner</span>
                <span className="text-xs px-3 py-1 bg-gray-800 rounded text-gray-300">Sitecore Partner</span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/aaitek" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://youtube.com/@aaitek" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Aaitek Technology Specialists. All rights reserved. | Designed and Developed by Aaitek Pty Ltd
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms-conditions" className="text-sm hover:text-primary-400 transition-colors">
                Terms
              </Link>
              <Link to="/privacy-policy" className="text-sm hover:text-primary-400 transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

