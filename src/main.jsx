import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'
import AOS from 'aos'

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
    
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

