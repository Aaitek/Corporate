import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEO = ({ 
  seoTitle,
  seoDescription,
  canonicalUrl,
  robots = 'index,follow',
  
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterCard = 'summary_large_image',
  
  schemaType = 'WebPage',
  structuredData,
  indexable = true,
  
  // Fallback: extract from page content
  pageTitle,
  pageDescription,
  pageImage,
}) => {
  const location = useLocation()
  const siteUrl = 'https://aaitek.com.au'
  const siteName = 'Aaitek'
  const defaultImage = `${siteUrl}/logo.png`
  
  // Use provided values or fallback to defaults
  const title = seoTitle || pageTitle || `${siteName} - Empowering Businesses With AI, Data Analytics & Cloud`
  const description = seoDescription || pageDescription || 'Transform your digital vision into reality with Aaitek. Enterprise-grade AI, cloud solutions, and digital transformation services.'
  const canonical = canonicalUrl || `${siteUrl}${location.pathname}`
  const ogImg = ogImage || pageImage || defaultImage
  const ogTitleText = ogTitle || title
  const ogDescText = ogDescription || description
  const twitterTitleText = twitterTitle || ogTitleText || title
  const twitterDescText = twitterDescription || ogDescText || description
  const twitterImg = twitterImage || ogImg

  useEffect(() => {
    // Update document title
    document.title = title

    // Helper function to update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      if (!content) return
      
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      
      element.setAttribute('content', content)
    }

    // Core Meta Tags
    updateMetaTag('description', description)
    updateMetaTag('robots', indexable ? `${robots},max-image-preview:large` : 'noindex,nofollow')
    updateMetaTag('theme-color', '#0B0F17')

    // Open Graph Tags
    updateMetaTag('og:type', ogType, true)
    updateMetaTag('og:site_name', siteName, true)
    updateMetaTag('og:url', canonical, true)
    updateMetaTag('og:title', ogTitleText, true)
    updateMetaTag('og:description', ogDescText, true)
    updateMetaTag('og:image', ogImg, true)
    updateMetaTag('og:image:width', '1200', true)
    updateMetaTag('og:image:height', '630', true)

    // Twitter Card Tags
    updateMetaTag('twitter:card', twitterCard)
    if (twitterTitleText) updateMetaTag('twitter:title', twitterTitleText)
    if (twitterDescText) updateMetaTag('twitter:description', twitterDescText)
    if (twitterImg) updateMetaTag('twitter:image', twitterImg)

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonical)

    // Structured Data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"][data-seo-schema]')
      if (!script) {
        script = document.createElement('script')
        script.setAttribute('type', 'application/ld+json')
        script.setAttribute('data-seo-schema', 'true')
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(structuredData)
    } else {
      // Default structured data if none provided
      const defaultStructuredData = {
        "@context": "https://schema.org",
        "@type": schemaType,
        "name": siteName,
        "url": canonical,
        ...(schemaType === 'Organization' && {
          "logo": `${siteUrl}/logo.png`,
          "sameAs": [
            "https://www.linkedin.com/company/aaitek"
          ]
        })
      }
      
      let script = document.querySelector('script[type="application/ld+json"][data-seo-schema]')
      if (!script) {
        script = document.createElement('script')
        script.setAttribute('type', 'application/ld+json')
        script.setAttribute('data-seo-schema', 'true')
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(defaultStructuredData)
    }

    // Always add Organization and WebSite structured data for better SEO
    const addAdditionalSchema = (schema, id) => {
      let script = document.querySelector(`script[type="application/ld+json"][data-seo-schema="${id}"]`)
      if (!script) {
        script = document.createElement('script')
        script.setAttribute('type', 'application/ld+json')
        script.setAttribute('data-seo-schema', id)
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(schema)
    }

    // Add Organization schema (always present)
    addAdditionalSchema({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": siteName,
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`,
      "sameAs": [
        "https://www.linkedin.com/company/aaitek"
      ]
    }, 'organization')

    // Add WebSite schema (always present)
    addAdditionalSchema({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": siteName,
      "url": siteUrl
    }, 'website')
  }, [
    title, 
    description, 
    canonical, 
    robots,
    ogTitleText,
    ogDescText,
    ogImg,
    ogType,
    twitterTitleText,
    twitterDescText,
    twitterImg,
    twitterCard,
    structuredData,
    schemaType,
    indexable,
    siteName,
    siteUrl
  ])

  return null
}

export default SEO
