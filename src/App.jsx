import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import ServiceCategoryDetail from './pages/ServiceCategoryDetail'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Academy from './pages/Academy'
import AcademyDetail from './pages/AcademyDetail'
import Industries from './pages/Industries'
import IndustryDetail from './pages/IndustryDetail'
import HireDevelopers from './pages/HireDevelopers'
import HireTalent from './pages/HireTalent'
import PartnerSuccess from './pages/PartnerSuccess'
import CaseStudyDetail from './pages/CaseStudyDetail'
import Resources from './pages/Resources'
import About from './pages/About'
import Company from './pages/Company'
import Contact from './pages/Contact'
import Career from './pages/Career'
import BrandGuidelines from './pages/BrandGuidelines'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10001] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-lg"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow" style={{ paddingTop: 'var(--header-height, 80px)' }} role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Services Routes */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/category/:slug" element={<ServiceCategoryDetail />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            {/* Main Navigation Routes */}
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/academy/:slug" element={<AcademyDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/hire-developers" element={<HireDevelopers />} />
            <Route path="/hire-talent" element={<HireTalent />} />
            <Route path="/partner-success" element={<PartnerSuccess />} />
            <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/brand-guidelines" element={<BrandGuidelines />} />
            <Route path="/BrandGuidelines" element={<BrandGuidelines />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

