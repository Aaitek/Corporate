import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

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
  // Get the current origin (works for both Vercel deployment and production domain)
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://aaitek.com'
  const siteUrl = 'https://aaitek.com'
  const siteName = 'Aaitek'
  // Use footer logo for social sharing previews - use absolute URL
  // Use the main domain (not currentOrigin) to ensure consistency for social crawlers
  const defaultImage = `https://aaitek.com/footer-logo.png`
  
  // Helper function to ensure image URL is absolute and valid
  const ensureAbsoluteImageUrl = (imageUrl) => {
    if (!imageUrl) return defaultImage
    
    // If already absolute (including proxy URLs), return as is
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      return imageUrl
    }
    
    // If relative, make it absolute using main domain (not currentOrigin) for consistency
    // This ensures social media crawlers always get the same URL
    if (imageUrl.startsWith('/')) {
      // Remove leading slash and use siteUrl
      return `${siteUrl}${imageUrl}`
    }
    
    // If no leading slash, add it
    return `${siteUrl}/${imageUrl}`
  }
  
  // Helper to detect image type from URL
  const getImageType = (imageUrl) => {
    if (!imageUrl) return 'image/png'
    const url = imageUrl.toLowerCase()
    if (url.includes('.jpg') || url.includes('.jpeg')) return 'image/jpeg'
    if (url.includes('.png')) return 'image/png'
    if (url.includes('.webp')) return 'image/webp'
    if (url.includes('.gif')) return 'image/gif'
    return 'image/png' // default
  }
  
  // Use provided values or fallback to defaults
  const title = seoTitle || pageTitle || `${siteName} - Empowering Businesses With AI, Data Analytics & Cloud`
  const description = seoDescription || pageDescription || 'Transform your digital vision into reality with Aaitek. Enterprise-grade AI, cloud solutions, and digital transformation services.'
  const canonical = canonicalUrl || `${siteUrl}${location.pathname}`
  // Prioritize ogImage prop (article images), then pageImage, then default
  const ogImg = ensureAbsoluteImageUrl(ogImage || pageImage || defaultImage)
  
  // Debug: Log what image is being used
  console.log('SEO - Image Selection:', {
    ogImageProp: ogImage,
    pageImage: pageImage,
    defaultImage: defaultImage,
    finalImage: ogImg,
    isArticleImage: !!ogImage && ogImage !== defaultImage
  })
  const ogTitleText = ogTitle || title
  const ogDescText = ogDescription || description
  const twitterTitleText = twitterTitle || ogTitleText || title
  const twitterDescText = twitterDescription || ogDescText || description
  const twitterImg = ensureAbsoluteImageUrl(twitterImage || ogImg)

  // Default structured data if none provided
  const defaultStructuredData = structuredData || {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": siteName,
    "url": canonical,
    ...(schemaType === 'Organization' && {
      "logo": `${siteUrl}/footer-logo.png`,
      "sameAs": [
        "https://www.linkedin.com/company/aaitek"
      ]
    })
  }

  // Manually update meta tags to ensure they're replaced (fallback for react-helmet-async)
  useEffect(() => {
    // Update document title
    document.title = title

    // Update description meta tag
    let descMeta = document.querySelector('meta[name="description"]')
    if (!descMeta) {
      descMeta = document.createElement('meta')
      descMeta.setAttribute('name', 'description')
      document.head.appendChild(descMeta)
    }
    descMeta.setAttribute('content', description)

    // Update og:description
    let ogDescMeta = document.querySelector('meta[property="og:description"]')
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta')
      ogDescMeta.setAttribute('property', 'og:description')
      document.head.appendChild(ogDescMeta)
    }
    ogDescMeta.setAttribute('content', ogDescText)

    // Update og:title
    let ogTitleMeta = document.querySelector('meta[property="og:title"]')
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta')
      ogTitleMeta.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitleMeta)
    }
    ogTitleMeta.setAttribute('content', ogTitleText)

    // Update og:url
    let ogUrlMeta = document.querySelector('meta[property="og:url"]')
    if (!ogUrlMeta) {
      ogUrlMeta = document.createElement('meta')
      ogUrlMeta.setAttribute('property', 'og:url')
      document.head.appendChild(ogUrlMeta)
    }
    ogUrlMeta.setAttribute('content', canonical)

    // Update twitter:description
    let twitterDescMeta = document.querySelector('meta[name="twitter:description"]')
    if (!twitterDescMeta) {
      twitterDescMeta = document.createElement('meta')
      twitterDescMeta.setAttribute('name', 'twitter:description')
      document.head.appendChild(twitterDescMeta)
    }
    twitterDescMeta.setAttribute('content', twitterDescText)

    // Update twitter:title
    let twitterTitleMeta = document.querySelector('meta[name="twitter:title"]')
    if (!twitterTitleMeta) {
      twitterTitleMeta = document.createElement('meta')
      twitterTitleMeta.setAttribute('name', 'twitter:title')
      document.head.appendChild(twitterTitleMeta)
    }
    twitterTitleMeta.setAttribute('content', twitterTitleText)

    // Update og:image - ensure it's set correctly
    let ogImageMeta = document.querySelector('meta[property="og:image"]')
    if (!ogImageMeta) {
      ogImageMeta = document.createElement('meta')
      ogImageMeta.setAttribute('property', 'og:image')
      document.head.appendChild(ogImageMeta)
    }
    ogImageMeta.setAttribute('content', ogImg)
    
    // Also update og:image:secure_url
    let ogImageSecureMeta = document.querySelector('meta[property="og:image:secure_url"]')
    if (!ogImageSecureMeta) {
      ogImageSecureMeta = document.createElement('meta')
      ogImageSecureMeta.setAttribute('property', 'og:image:secure_url')
      document.head.appendChild(ogImageSecureMeta)
    }
    ogImageSecureMeta.setAttribute('content', ogImg)
    
    // Debug log for image URL
    console.log('SEO Component - Image URL:', {
      ogImageProp: ogImage,
      processedOgImg: ogImg,
      defaultImage: defaultImage,
      imageType: getImageType(ogImg)
    })
    
    // Verify image is accessible (in development)
    if (process.env.NODE_ENV === 'development' && ogImg) {
      const img = new Image()
      img.onload = () => console.log('✅ Image is accessible:', ogImg)
      img.onerror = () => console.error('❌ Image failed to load:', ogImg)
      img.src = ogImg
    }

    // Update og:image:width
    let ogImageWidthMeta = document.querySelector('meta[property="og:image:width"]')
    if (!ogImageWidthMeta) {
      ogImageWidthMeta = document.createElement('meta')
      ogImageWidthMeta.setAttribute('property', 'og:image:width')
      document.head.appendChild(ogImageWidthMeta)
    }
    ogImageWidthMeta.setAttribute('content', '1200')

    // Update og:image:height
    let ogImageHeightMeta = document.querySelector('meta[property="og:image:height"]')
    if (!ogImageHeightMeta) {
      ogImageHeightMeta = document.createElement('meta')
      ogImageHeightMeta.setAttribute('property', 'og:image:height')
      document.head.appendChild(ogImageHeightMeta)
    }
    ogImageHeightMeta.setAttribute('content', '630')

    // Update twitter:image
    let twitterImageMeta = document.querySelector('meta[name="twitter:image"]')
    if (!twitterImageMeta) {
      twitterImageMeta = document.createElement('meta')
      twitterImageMeta.setAttribute('name', 'twitter:image')
      document.head.appendChild(twitterImageMeta)
    }
    twitterImageMeta.setAttribute('content', twitterImg)

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonical)
  }, [title, description, ogDescText, ogTitleText, canonical, twitterDescText, twitterTitleText, ogImg, twitterImg, location.pathname])

  return (
    <Helmet 
      key={`seo-${location.pathname}`}
      prioritizeSeoTags={true}
    >
      {/* Document Title */}
      <title>{title}</title>
      
      {/* Core Meta Tags - react-helmet-async will replace existing tags with same name */}
      <meta name="description" content={description} />
      <meta name="robots" content={indexable ? `${robots},max-image-preview:large` : 'noindex,nofollow'} />
      <meta name="theme-color" content="#0B0F17" />
      
      {/* Open Graph Tags - For Facebook, LinkedIn, WhatsApp, and other platforms */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={ogTitleText} />
      <meta property="og:description" content={ogDescText} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:secure_url" content={ogImg} />
      <meta property="og:image:type" content={getImageType(ogImg)} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogTitleText} />
      
      {/* Twitter Card Tags - For Twitter/X */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@aaitek" />
      {twitterTitleText && <meta name="twitter:title" content={twitterTitleText} />}
      {twitterDescText && <meta name="twitter:description" content={twitterDescText} />}
      {twitterImg && <meta name="twitter:image" content={twitterImg} />}
      {twitterImg && <meta name="twitter:image:alt" content={twitterTitleText || ogTitleText} />}
      
      {/* LinkedIn specific - uses Open Graph but ensures compatibility */}
      <meta property="linkedin:owner" content="aaitek" />
      
      {/* Canonical URL - react-helmet-async will replace existing canonical link */}
      <link rel="canonical" href={canonical} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultStructuredData)}
      </script>
      
      {/* Additional Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteName,
          "url": siteUrl,
          "logo": `${siteUrl}/footer-logo.png`,
          "sameAs": [
            "https://www.linkedin.com/company/aaitek"
          ]
        })}
      </script>
      
      {/* WebSite Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteName,
          "url": siteUrl
        })}
      </script>
    </Helmet>
  )
}

export default SEO
