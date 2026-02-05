// SEO utility to prevent duplicate meta tags
export const setMetaTags = ({
  title = 'Aaitek – Empowering Businesses With AI, Data Analytics & Cloud',
  description = 'Transform your digital vision into reality with Aaitek. Enterprise-grade AI, cloud solutions, and digital transformation services.',
  image = 'https://www.aaitek.com/og-image.png',
  url = 'https://www.aaitek.com/'
}) => {
  // Only run in browser environment
  if (typeof document === 'undefined') return;

  // Remove existing dynamic meta tags first
  const existingTags = document.querySelectorAll('meta[data-dynamic="true"]');
  existingTags.forEach(tag => tag.remove());

  // Set document title
  document.title = title;

  // Meta tags to update/create
  const metaTags = {
    'description': description,
    'og:type': 'website',
    'og:url': url,
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'og:image:url': image,
    'og:image:secure_url': image,
    'og:image:type': 'image/png',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': title,
    'og:site_name': 'Aaitek Technology Specialists',
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image
  };

  Object.entries(metaTags).forEach(([key, value]) => {
    const isOg = key.startsWith('og:');
    const isTwitter = key.startsWith('twitter:');
    
    let meta = document.querySelector(
      isOg ? `meta[property="${key}"]` : `meta[name="${key}"]`
    );

    if (!meta) {
      meta = document.createElement('meta');
      if (isOg) {
        meta.setAttribute('property', key);
      } else {
        meta.setAttribute('name', key);
      }
      meta.setAttribute('data-dynamic', 'true');
      document.head.appendChild(meta);
    } else {
      // Mark as dynamic if it wasn't already
      meta.setAttribute('data-dynamic', 'true');
    }

    meta.setAttribute('content', value);
  });

  // Update canonical link
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('data-dynamic', 'true');
    document.head.appendChild(canonical);
  } else {
    canonical.setAttribute('data-dynamic', 'true');
  }
  canonical.setAttribute('href', url);
};
