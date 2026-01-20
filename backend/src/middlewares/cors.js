'use strict';

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
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
    
    if (isAllowed) {
      ctx.set('Access-Control-Allow-Origin', origin);
      ctx.set('Access-Control-Allow-Credentials', 'true');
    } else if (origin) {
      // For other origins, don't set CORS headers (browser will block)
      // But we still allow the request to proceed server-side
    }
    
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept, X-Requested-With');
    ctx.set('Access-Control-Max-Age', '86400');
    
    // Handle preflight requests
    if (ctx.method === 'OPTIONS') {
      ctx.status = 204;
      return;
    }
    
    await next();
  };
};
