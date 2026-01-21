'use strict';

module.exports = {
  register({ strapi }) {
    // Log to confirm this hook is being loaded
    console.log('🚀 Aaitek server hook: REGISTER function called');
    
    // Server-level middleware - runs for ALL requests
    strapi.server.app.use(async (ctx, next) => {
      // PROOF HEADER - if you see this, your code is running on Railway
      ctx.set('x-aaitek-backend', 'LIVE');
      ctx.set('x-aaitek-register', 'LOADED');
      
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
        
        // CRITICAL: Always set CORS headers for allowed origins
        if (origin && (allowed.includes(origin) || isVercelDomain)) {
          ctx.set('Access-Control-Allow-Origin', origin);
          ctx.set('Access-Control-Allow-Credentials', 'true');
          ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
          ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept, X-Requested-With');
          ctx.set('Vary', 'Origin');
          // Debug log to Railway logs
          console.log('✅ CORS: Set header for origin:', origin);
        } else if (origin) {
          // For debugging: log if origin is not in allowed list
          console.log('⚠️ CORS: Origin not allowed:', origin);
          // Still set header for debugging (browser will reject, but we can see it)
          ctx.set('Access-Control-Allow-Origin', origin);
        } else {
          // No origin header (direct browser access) - log for debugging
          console.log('⚠️ CORS: No origin header in request');
        }
      }
    });
  },
  
  bootstrap({ strapi }) {
    // Log to confirm bootstrap is called
    console.log('🚀 Aaitek server hook: BOOTSTRAP function called');
    
    // Also add middleware in bootstrap as backup
    strapi.server.app.use(async (ctx, next) => {
      ctx.set('x-aaitek-bootstrap', 'LOADED');
      await next();
      
      // Ensure CORS headers are set
      if (ctx.request.path.startsWith('/api')) {
        const origin = ctx.request.header.origin;
        const allowed = [
          'https://www.aaitek.com',
          'https://aaitek.com',
          'https://aaitek.com.au',
          'http://localhost:3000',
          'http://localhost:5173',
        ];
        const isVercelDomain = origin && /^https:\/\/.*\.vercel\.app$/.test(origin);
        
        if (origin && (allowed.includes(origin) || isVercelDomain)) {
          ctx.set('Access-Control-Allow-Origin', origin);
          ctx.set('Access-Control-Allow-Credentials', 'true');
        }
      }
    });
  },
};
