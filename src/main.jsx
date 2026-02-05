import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'
import AOS from 'aos'
import { setMetaTags } from './utils/seo'

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
    
    // Set default meta tags on initial load (only if not already set by prerender)
    // This ensures client-side navigation updates meta tags correctly
    const currentPath = window.location.pathname
    if (currentPath === '/') {
      // Homepage already has static tags in index.html, but ensure they're correct
      setMetaTags({
        title: 'Aaitek – Empowering Businesses With AI, Data Analytics & Cloud',
        description: 'Transform your digital vision into reality with Aaitek. Enterprise-grade AI, cloud solutions, and digital transformation services.',
        image: 'https://www.aaitek.com/og-image.png',
        url: 'https://www.aaitek.com/'
      })
    }
    
    // Dispatch event for prerender plugin after React has rendered
    // This ensures meta tags are updated before prerender captures the HTML
    setTimeout(() => {
      document.dispatchEvent(new Event('prerender-ready'))
    }, 100)
  }, [])

  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <Root />
    </HelmetProvider>
  </React.StrictMode>,
)

