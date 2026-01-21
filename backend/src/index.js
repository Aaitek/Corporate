'use strict';

module.exports = {
  register({ strapi }) {
    // Server-level middleware - runs for ALL requests
    strapi.server.app.use(async (ctx, next) => {
      // PROOF HEADER - if you see this, your code is running on Railway
      ctx.set('x-aaitek-backend', 'LIVE');
      
      await next();

      // Fix 1: Disable caching for API routes (prevents Railway Edge from caching wrong variant)
      if (ctx.request.path.startsWith('/api')) {
        ctx.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        ctx.set('Pragma', 'no-cache');
        ctx.set('Expires', '0');
      }

      // Fix 2: Hard-set CORS header for API responses (guarantees header exists)
      // This runs AFTER the request, so it overrides any previous CORS settings
      if (ctx.request.path.startsWith('/api')) {
        const origin = ctx.request.header.origin;
        const allowed = [
          'https://www.aaitek.com',
          'https://aaitek.com',
          'https://aaitek.com.au',
          'http://localhost:3000',
          'http://localhost:5173',
        ];
        
        // Check if origin matches Vercel pattern
        const isVercelDomain = origin && /^https:\/\/.*\.vercel\.app$/.test(origin);
        
        // ALWAYS set CORS headers if origin is present and allowed
        if (origin && (allowed.includes(origin) || isVercelDomain)) {
          ctx.set('Access-Control-Allow-Origin', origin);
          ctx.set('Access-Control-Allow-Credentials', 'true');
          ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
          ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept, X-Requested-With');
          ctx.set('Vary', 'Origin');
        } else if (origin) {
          // For debugging: log if origin is not in allowed list
          console.log('⚠️ CORS: Origin not allowed:', origin);
        }
      }
    });
  },
};
