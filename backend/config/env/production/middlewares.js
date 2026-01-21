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
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        headers: [
          'Content-Type',
          'Authorization',
          'Origin',
          'Accept',
          'X-Requested-With',
        ],
        keepHeaderOnError: true,
        credentials: true,
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
  