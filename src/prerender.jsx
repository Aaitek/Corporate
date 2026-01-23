import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { AppRoutes } from './AppRoutes'
import { HelmetProvider } from 'react-helmet-async'
import { SEO } from './seoMap'

const SITE = 'https://aaitek.com'

// This function name MUST be exactly `prerender`
export async function prerender(data) {
  const url = data?.url || '/'
  const pathname = url === '/' ? '/' : url.split('?')[0]
  const canonical = `${SITE}${pathname}`
  
  // Get page-specific meta tags from SEO map
  const meta = SEO[pathname] || SEO['/']
  
  // Render React app with StaticRouter
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  )
  
  // Return HTML with page-specific meta tags
  return {
    html,
    head: {
      lang: 'en',
      title: meta.title,
      elements: new Set([
        { type: 'meta', props: { name: 'description', content: meta.description } },
        
        { type: 'link', props: { rel: 'canonical', href: canonical } },
        
        { type: 'meta', props: { property: 'og:type', content: 'website' } },
        { type: 'meta', props: { property: 'og:url', content: canonical } },
        { type: 'meta', props: { property: 'og:title', content: meta.title } },
        { type: 'meta', props: { property: 'og:description', content: meta.description } },
        { type: 'meta', props: { property: 'og:image', content: meta.image } },
        { type: 'meta', props: { property: 'og:image:secure_url', content: meta.image } },
        { type: 'meta', props: { property: 'og:image:width', content: '1200' } },
        { type: 'meta', props: { property: 'og:image:height', content: '630' } },
        { type: 'meta', props: { property: 'og:site_name', content: 'Aaitek Technology Specialists' } },
        
        { type: 'meta', props: { name: 'twitter:card', content: 'summary_large_image' } },
        { type: 'meta', props: { name: 'twitter:title', content: meta.title } },
        { type: 'meta', props: { name: 'twitter:description', content: meta.description } },
        { type: 'meta', props: { name: 'twitter:image', content: meta.image } },
      ]),
    },
  }
}
