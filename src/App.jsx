import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Products from './pages/Products'
import HireDevelopers from './pages/HireDevelopers'
import PartnerSuccess from './pages/PartnerSuccess'
import ManagedServices from './pages/ManagedServices'
import Resources from './pages/Resources'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/hire-developers" element={<HireDevelopers />} />
            <Route path="/partner-success" element={<PartnerSuccess />} />
            <Route path="/managed-services" element={<ManagedServices />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

