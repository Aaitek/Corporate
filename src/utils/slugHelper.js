// Helper function to convert service names to slugs
export const serviceNameToSlug = (serviceName) => {
  return serviceName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/&/g, '')
    .replace(/[()]/g, '')
    .replace(/\//g, '-')
    .replace(/-+/g, '-') // Remove double dashes
    .replace(/^-|-$/g, '') // Remove leading/trailing dashes
}

// Map of service names to their exact slugs in servicesData.js
export const serviceSlugMap = {
  // Product & Experience
  'UX & UI Design': 'ux-ui-design',
  'Web Platform Development': 'web-platform-development',
  'Mobile Application Development': 'mobile-app-development',
  'eCommerce Solutions': 'ecommerce-solutions',
  'Product Discovery & Strategy': 'product-discovery-strategy',
  'Interactive & Immersive Experiences': 'interactive-immersive',
  
  // Software Engineering
  'Custom Software Development': 'custom-software-development',
  'API & Integration Engineering': 'api-integration-engineering',
  'Enterprise System Integration': 'enterprise-system-integration',
  'Legacy Modernisation': 'legacy-modernisation',
  'Bespoke Application Development': 'bespoke-application-development',
  
  // Cloud & DevOps
  'Cloud Architecture & Strategy': 'cloud-architecture-strategy',
  'Cloud Migration & Modernisation': 'cloud-migration-modernisation',
  'Managed Cloud Hosting': 'managed-cloud-hosting',
  'DevOps & CI/CD Automation': 'devops-cicd-automation',
  'Cloud Security & Governance': 'cloud-security-governance',
  
  // Data & AI
  'Data Engineering & Pipelines': 'data-engineering-pipelines',
  'AI & Machine Learning Solutions': 'ai-machine-learning',
  'Intelligent Automation': 'intelligent-automation',
  'Advanced Analytics & Insights': 'advanced-analytics-insights',
  'AI Governance & Responsible AI': 'ai-governance-responsible-ai',
  
  // Digital Growth
  'Search & AI-Driven Optimisation': 'search-ai-optimisation',
  'Performance & Paid Marketing': 'performance-paid-marketing',
  'Social & Brand Growth': 'social-brand-growth',
  'Online Reputation Management': 'online-reputation-management',
  'Conversion Optimisation (CRO)': 'conversion-optimisation-cro',
  
  // Managed Services
  'Application Support & Maintenance': 'application-support-maintenance',
  'Platform Optimisation': 'platform-optimisation',
  'Development Support Services': 'development-support-services',
  'Digital Operations & Delivery': 'digital-operations-delivery',
  'IT Support & Managed Services': 'it-support-managed-services',
  
  // Enterprise Platforms
  'CMS & Digital Experience Platforms': 'cms-digital-experience-platforms',
  'CRM Platforms': 'crm-platforms',
  'ServiceNow Solutions': 'servicenow-solutions',
  'ERP & Enterprise Systems': 'erp-enterprise-systems',
}

// Get slug for a service name (uses map if available, otherwise generates)
export const getServiceSlug = (serviceName) => {
  return serviceSlugMap[serviceName] || serviceNameToSlug(serviceName)
}


// Map of hire talent names to their exact slugs in hireTalentData.js
export const hireTalentSlugMap = {
  // Engagement Models
  'Staff Augmentation': 'staff-augmentation',
  'Dedicated Teams': 'dedicated-teams',
  'On-Demand Support': 'on-demand-support',
  
  // Expertise Areas
  'Frontend & Full-Stack Engineering': 'frontend-fullstack-engineering',
  'Backend & API Engineering': 'backend-api-engineering',
  'Cloud & DevOps': 'cloud-devops',
  'Data & AI': 'data-ai',
  'Enterprise Platforms': 'enterprise-platforms',
}

// Get slug for a hire talent name (uses map if available, otherwise generates)
export const getHireTalentSlug = (talentName) => {
  return hireTalentSlugMap[talentName] || serviceNameToSlug(talentName)
}
