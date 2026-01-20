module.exports = [
  'strapi::errors',
  'strapi::security',
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
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'X-Requested-With'],
      credentials: true,
      keepHeaderOnError: true,
    },
  },
  // Custom CORS middleware as backup - ensures headers are always set correctly
  'global::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
