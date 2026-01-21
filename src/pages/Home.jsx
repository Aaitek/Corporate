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
import SEO from '../components/SEO'

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aaitek Technology Specialists",
    "url": "https://aaitek.com.au",
    "logo": "https://aaitek.com.au/Aaitek logo in Black.png",
    "description": "Transform your digital vision into reality with Aaitek. Enterprise-grade AI, cloud solutions, and digital transformation services.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sydney",
      "addressCountry": "AU"
    },
    "sameAs": [
      "https://linkedin.com/company/aaitek",
      "https://twitter.com/aaitek"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@aaitek.com.au"
    }
  }

  return (
    <>
      <SEO
        seoTitle="Aaitek | Enterprise Digital Platforms & Composable DXP"
        seoDescription="Aaitek delivers enterprise-grade digital platforms across Sitecore XM Cloud, composable DXP, cloud engineering, and performance-led modernisation."
        canonicalUrl="https://aaitek.com.au/"
        robots="index,follow"
        ogTitle="Aaitek | Enterprise Digital Platform Specialists"
        ogDescription="We design, build, and optimise enterprise digital platforms using Sitecore XM Cloud, headless architectures, and cloud-native engineering."
        ogImage="https://aaitek.com.au/Aaitek logo in Black.png"
        ogType="website"
        twitterCard="summary_large_image"
        schemaType="Organization"
        structuredData={structuredData}
        indexable={true}
      />
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
    </>
  )
}

export default Home

