module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'res.cloudinary.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'res.cloudinary.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: function (origin, callback) {
        // Allow requests with no origin (mobile apps, curl, etc)
        if (!origin) return callback(null, true);
        
        const allowedOrigins = [
          'http://localhost:3000',
          'http://localhost:5173',
          'https://a-aitech.vercel.app',
          'https://aaitek.com.au',
        ];
        
        // Check if origin is in allowed list
        if (allowedOrigins.includes(origin)) {
          return callback(null, true);
        }
        
        // Allow all Vercel preview deployments
        if (origin.includes('.vercel.app')) {
          return callback(null, true);
        }
        
        // Allow all Railway preview deployments
        if (origin.includes('.railway.app')) {
          return callback(null, true);
        }
        
        // Default: deny
        callback(new Error('Not allowed by CORS'));
      },
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

