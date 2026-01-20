'use strict';

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // DIAGNOSTIC HEADER - proves this middleware is running
    ctx.set('x-strapi-runtime', 'BACKEND_ACTIVE');
    ctx.set('x-cors-middleware', 'LOADED');
    
    const origin = ctx.request.header.origin;
    
    // Allowed origins
    const allowedOrigins = [
      'https://www.aaitek.com',
      'https://aaitek.com',
      'https://aaitek.com.au',
      'http://localhost:3000',
      'http://localhost:5173',
    ];
    
    // Check if origin matches Vercel pattern
    const isVercelDomain = origin && /^https:\/\/.*\.vercel\.app$/.test(origin);
    
    // Check if origin is allowed
    const isAllowed = origin && (allowedOrigins.includes(origin) || isVercelDomain);
    
    // Always set CORS headers for allowed origins
    if (isAllowed) {
      ctx.set('Access-Control-Allow-Origin', origin);
      ctx.set('Access-Control-Allow-Credentials', 'true');
      ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
      ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept, X-Requested-With');
      ctx.set('Access-Control-Max-Age', '86400');
    }
    
    // Handle preflight requests
    if (ctx.method === 'OPTIONS') {
      ctx.status = 204;
      return;
    }
    
    await next();
  };
};
