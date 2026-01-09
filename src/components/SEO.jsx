import { Helmet } from 'react-helmet-async'
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

  // Default structured data if none provided
  const defaultStructuredData = structuredData || {
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

  return (
    <Helmet>
      {/* Document Title */}
      <title>{title}</title>
      
      {/* Core Meta Tags */}
      <meta name="description" content={description} />
      <meta name="robots" content={indexable ? `${robots},max-image-preview:large` : 'noindex,nofollow'} />
      <meta name="theme-color" content="#0B0F17" />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={ogTitleText} />
      <meta property="og:description" content={ogDescText} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      {twitterTitleText && <meta name="twitter:title" content={twitterTitleText} />}
      {twitterDescText && <meta name="twitter:description" content={twitterDescText} />}
      {twitterImg && <meta name="twitter:image" content={twitterImg} />}
      
      {/* Canonical URL */}
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
          "logo": `${siteUrl}/logo.png`,
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
