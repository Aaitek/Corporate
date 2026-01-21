module.exports = [
    'strapi::errors',
  
    // ✅ CORS MUST be before security
    {
      name: 'strapi::cors',
      config: {
        origin: [
          'https://www.aaitek.com',
          'https://aaitek.com',
          'https://aaitek.com.au',
          'http://localhost:3000',
          'http://localhost:5173',
          /^https:\/\/.*\.vercel\.app$/,
        ],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
        headers: '*', // Allow all headers (simpler and more permissive)
        keepHeaderOnError: true,
        credentials: true,
        maxAge: 86400, // Cache preflight for 24 hours
      },
    },
  
    'strapi::security',
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
  