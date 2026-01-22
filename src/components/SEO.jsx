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
    // If no image URL provided, use default
    if (!imageUrl || imageUrl === null || imageUrl === undefined || imageUrl === '') {
      console.warn('SEO - No image URL provided, using default:', defaultImage)
      return defaultImage
    }
    
    // Convert to string and trim
    const url = String(imageUrl).trim()
    
    // If empty after trimming, use default
    if (!url || url === '') {
      console.warn('SEO - Empty image URL, using default:', defaultImage)
      return defaultImage
    }
    
    // If already absolute (including proxy URLs and Railway URLs), return as is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      console.log('SEO - Image URL is already absolute:', url)
      return url
    }
    
    // If relative, make it absolute using main domain (not currentOrigin) for consistency
    // This ensures social media crawlers always get the same URL
    if (url.startsWith('/')) {
      const absoluteUrl = `${siteUrl}${url}`
      console.log('SEO - Converted relative to absolute:', absoluteUrl)
      return absoluteUrl
    }
    
    // If no leading slash, add it
    const absoluteUrl = `${siteUrl}/${url}`
    console.log('SEO - Added leading slash:', absoluteUrl)
    return absoluteUrl
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
  
  // CRITICAL: ogImage prop MUST take highest priority - this is the article image
  // Only fallback to default if ogImage is truly not provided
  let finalOgImage
  if (ogImage && ogImage !== null && ogImage !== undefined && ogImage !== '' && ogImage !== 'null' && ogImage !== 'undefined') {
    // ogImage is provided and valid - use it (this is the article image)
    finalOgImage = ogImage
    console.log('✅ SEO - Using ogImage prop (article image):', ogImage)
  } else if (pageImage && pageImage !== null && pageImage !== undefined && pageImage !== '') {
    // Fallback to pageImage if ogImage not provided
    finalOgImage = pageImage
    console.log('⚠️ SEO - Using pageImage fallback:', pageImage)
  } else {
    // Last resort: use default image
    finalOgImage = defaultImage
    console.log('⚠️ SEO - Using default image (footer-logo.png):', defaultImage)
  }
  
  // If ogImage is provided (article image), use it directly without ensureAbsoluteImageUrl
  // This prevents any fallback to default image
  let ogImg
  if (ogImage && ogImage !== null && ogImage !== undefined && ogImage !== '' && ogImage !== 'null' && ogImage !== 'undefined') {
    // Article image is provided - use it directly (it's already absolute from getPreviewImage)
    ogImg = String(ogImage).trim()
    console.log('✅ SEO - Using ogImage directly (article image):', ogImg)
  } else {
    // No article image - process the fallback image
    ogImg = ensureAbsoluteImageUrl(finalOgImage)
    console.log('⚠️ SEO - Using processed fallback image:', ogImg)
  }
  
  // Debug: Log what image is being used
  console.log('SEO - Final Image Selection:', {
    ogImageProp: ogImage,
    pageImage: pageImage,
    defaultImage: defaultImage,
    finalOgImage: finalOgImage,
    finalImage: ogImg,
    isArticleImage: !!ogImage && ogImage !== null && ogImage !== undefined && ogImage !== '',
    willUseArticleImage: !!ogImage && ogImage !== null && ogImage !== undefined && ogImage !== ''
  })
  // CRITICAL: ogTitle and ogDescription MUST be used when provided
  // Only fallback to title/description if ogTitle/ogDescription are not provided
  // This ensures page-specific content shows in social media previews
  const ogTitleText = (ogTitle && ogTitle !== null && ogTitle !== undefined && ogTitle !== '') 
    ? ogTitle 
    : title
  const ogDescText = (ogDescription && ogDescription !== null && ogDescription !== undefined && ogDescription !== '') 
    ? ogDescription 
    : description
  
  // Debug: Log what title/description is being used
  console.log('SEO - Title/Description Selection:', {
    ogTitleProp: ogTitle,
    ogDescriptionProp: ogDescription,
    seoTitle: seoTitle,
    seoDescription: seoDescription,
    finalOgTitle: ogTitleText,
    finalOgDescription: ogDescText,
    willUseOgTitle: !!(ogTitle && ogTitle !== null && ogTitle !== undefined && ogTitle !== ''),
    willUseOgDescription: !!(ogDescription && ogDescription !== null && ogDescription !== undefined && ogDescription !== '')
  })
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

    // Update og:image - remove all existing and add new one
    // This ensures the article image replaces the default image
    const existingOgImages = document.querySelectorAll('meta[property="og:image"]')
    existingOgImages.forEach(meta => {
      console.log('Removing old og:image:', meta.getAttribute('content'))
      meta.remove()
    })
    
    // Create new og:image meta tag with article image
    const ogImageMeta = document.createElement('meta')
    ogImageMeta.setAttribute('property', 'og:image')
    ogImageMeta.setAttribute('content', ogImg)
    document.head.appendChild(ogImageMeta)
    console.log('✅ Added new og:image:', ogImg)
    
    // Also update og:image:secure_url - remove all existing first
    const existingSecureUrls = document.querySelectorAll('meta[property="og:image:secure_url"]')
    existingSecureUrls.forEach(meta => meta.remove())
    
    const ogImageSecureMeta = document.createElement('meta')
    ogImageSecureMeta.setAttribute('property', 'og:image:secure_url')
    ogImageSecureMeta.setAttribute('content', ogImg)
    document.head.appendChild(ogImageSecureMeta)
    console.log('✅ Added new og:image:secure_url:', ogImg)
    
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
      {/* Article image (from Strapi) or footer-logo.png fallback */}
      {/* CRITICAL: ogImg contains the article image when ogImage prop is provided */}
      <meta property="og:image" content={ogImg} key={`og-image-${ogImg}`} />
      <meta property="og:image:secure_url" content={ogImg} key={`og-image-secure-${ogImg}`} />
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
