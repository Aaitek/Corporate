import Hero from '../components/sections/Hero'
import ClientLogos from '../components/sections/ClientLogos'
import ServicesStacked from '../components/sections/ServicesStacked'
import Process from '../components/sections/Process'
import Industries from '../components/sections/Industries'
import WhyChoose from '../components/sections/WhyChoose'
import Stats from '../components/sections/Stats'
import Testimonials from '../components/sections/Testimonials'
import CTA from '../components/sections/CTA'

const Home = () => {
  return (
    <div>
      {/* 1. Hero Section - Above the Fold */}
      <Hero />
      
      {/* 2. Client Logos - Social Proof */}
      <ClientLogos />
      
      {/* 3. Services Section - Stacked Cards with Scroll Animation */}
      <ServicesStacked />
      
      {/* 4. How It Works / Process */}
      <Process />
      
      {/* 5. Industries / Solutions */}
      <Industries />
      
      {/* 6. Why Choose Aaitek - Trust Section */}
      <WhyChoose />
      
      {/* 7. Stats - Proof */}
      <Stats />
      
      {/* 8. Testimonials - Social Proof */}
      <Testimonials />
      
      {/* 9. CTA Section */}
      <CTA />
    </div>
  )
}

export default Home

