import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'

export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: '#root', // MUST match your React mount element
      // Add all routes for prerendering
      additionalPrerenderRoutes: [
        // Static routes
        '/',
        '/services',
        '/products',
        '/academy',
        '/industries',
        '/hire-developers',
        '/hire-talent',
        '/partner-success',
        '/case-studies',
        '/press-releases',
        '/articles',
        '/webinars',
        '/videos',
        '/resources',
        '/about',
        '/company',
        '/contact',
        '/career',
        '/careers',
        '/brand-guidelines',
        '/BrandGuidelines',
        '/privacy-policy',
        '/terms-conditions',
        
        // Academy detail routes
        '/academy/full-stack-engineering',
        '/academy/cloud-engineering',
        '/academy/data-ai-engineering',
        '/academy/devops-platform-engineering',
        '/academy/salesforce',
        '/academy/sap',
        '/academy/servicenow',
        '/academy/cms-dxp-platforms',
        '/academy/cybersecurity-foundations',
        '/academy/cloud-security',
        '/academy/ai-governance',
        '/academy/custom-enterprise-programs',
        
        // Hire Talent detail routes
        '/hire-talent/staff-augmentation',
        '/hire-talent/dedicated-teams',
        '/hire-talent/on-demand-support',
        '/hire-talent/frontend-fullstack-engineering',
        '/hire-talent/backend-api-engineering',
        '/hire-talent/cloud-devops',
        '/hire-talent/data-ai',
        '/hire-talent/enterprise-platforms',
        
        // Partner Success detail routes
        '/partner-success/case-studies',
        '/partner-success/client-success-stories',
        '/partner-success/platform-migrations',
        '/partner-success/ai-automation-outcomes',
        
        // Product detail routes
        '/products/ai-sales-agent',
        '/products/ai-booking-agent',
        '/products/ai-trade-strategy-agent',
        
        // Industry detail routes
        '/industries/sports-media',
        '/industries/financial-services-insurance',
        '/industries/healthcare-life-sciences',
        '/industries/government-public-sector',
        '/industries/retail-ecommerce',
        '/industries/real-estate-property',
        '/industries/education-training',
        '/industries/energy-utilities',
        
        // Service detail routes (key services)
        '/services/ux-ui-design',
        '/services/web-platform-development',
        '/services/mobile-app-development',
        '/services/ecommerce-solutions',
        '/services/cloud-engineering',
        '/services/devops-platform-engineering',
        '/services/data-engineering',
        '/services/ai-ml-engineering',
        '/services/enterprise-platforms',
        '/services/cybersecurity',
        '/services/managed-services',
      ],
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:1337',
        changeOrigin: true,
      },
    },
  },
})
