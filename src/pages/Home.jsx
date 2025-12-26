import Hero from '../components/sections/Hero'
import ServicesStacked from '../components/sections/ServicesStacked'
import ContactMarketing from '../components/sections/ContactMarketing'
import Features from '../components/sections/Features'
import ServiceShowcase from '../components/sections/ServiceShowcase'
import LanguagesFrameworks from '../components/sections/LanguagesFrameworks'
import Technologies from '../components/sections/Technologies'
import WhyChoose from '../components/sections/WhyChoose'
import HireRequirement from '../components/sections/HireRequirement'
import Process from '../components/sections/Process'
import AboutUs from '../components/sections/AboutUs'
import Stats from '../components/sections/Stats'
import FAQ from '../components/sections/FAQ'

const Home = () => {
  return (
    <div>
      {/* Section 1 – Hero Image */}
      <Hero />
      
      {/* Section 2 – Services – boxes */}
      <ServicesStacked />
      
      {/* Section 3 – Contact us marketing box with custom image */}
      <ContactMarketing />
      
      {/* Section 4 – Feature section */}
      <Features />
      
      {/* Section 4.5 – Service Showcase */}
      <ServiceShowcase />
      
      {/* Section 5 – Language and framework */}
      <LanguagesFrameworks />
      
      {/* Section 6 – Technology */}
      <Technologies />
      
      {/* Section 7 – Why Choose us */}
      <WhyChoose />
      
      {/* Section 8 – Hire as per requirement */}
      <HireRequirement />
      
      {/* Section 9 – Our process */}
      <Process />
      
      {/* Section 10 – Who We are */}
      <AboutUs />
      
      {/* Section 11 – Achievements */}
      <Stats />
      
      {/* Section 12 – FAQ */}
      <FAQ />
    </div>
  )
}

export default Home

