module.exports = [
  'strapi::errors',
  // CORS MUST come BEFORE security middleware
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
      headers: '*', // Allow all headers - prevents preflight issues
      keepHeaderOnError: true,
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

