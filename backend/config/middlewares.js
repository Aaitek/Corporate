module.exports = [
  'strapi::errors',
  'strapi::security',
  // Custom CORS middleware - replaces strapi::cors to ensure it works
  'global::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

