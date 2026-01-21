'use strict';

module.exports = {
  register({ strapi }) {
    // Log to confirm this hook is being loaded
    console.log('🚀 Aaitek server hook: REGISTER function called');
    
    // Server-level middleware - runs for ALL requests
    // Set headers BEFORE processing request to ensure they're not stripped
    strapi.server.app.use(async (ctx, next) => {
      // PROOF HEADER - if you see this, your code is running on Railway
      ctx.set('x-aaitek-backend', 'LIVE');
      ctx.set('x-aaitek-register', 'LOADED');
      
      // Set CORS headers EARLY (before next()) to prevent Railway Edge from stripping them
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
        
        // Log for debugging
        console.log('🔍 CORS Check - Origin:', origin, 'Path:', ctx.request.path);
        console.log('🔍 CORS Check - Allowed:', allowed);
        console.log('🔍 CORS Check - Is Vercel:', isVercelDomain);
        console.log('🔍 CORS Check - Is Allowed:', origin && (allowed.includes(origin) || isVercelDomain));
        
        if (origin && (allowed.includes(origin) || isVercelDomain)) {
          ctx.set('Access-Control-Allow-Origin', origin);
          ctx.set('Access-Control-Allow-Credentials', 'true');
          ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
          ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept, X-Requested-With');
          ctx.set('Vary', 'Origin');
          console.log('✅ CORS: Set header EARLY for origin:', origin);
        } else {
          console.log('❌ CORS: Origin NOT allowed or missing. Origin:', origin);
        }
        
        // Handle preflight OPTIONS requests
        if (ctx.method === 'OPTIONS') {
          ctx.set('Access-Control-Allow-Origin', origin || '*');
          ctx.set('Access-Control-Allow-Credentials', 'true');
          ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
          ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept, X-Requested-With');
          ctx.status = 204;
          return;
        }
      }
      
      await next();

      // Fix 1: Disable caching for API routes (prevents Railway Edge from caching wrong variant)
      if (ctx.request.path.startsWith('/api')) {
        ctx.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        ctx.set('Pragma', 'no-cache');
        ctx.set('Expires', '0');
      }

      // Fix 2: Ensure CORS headers are still set AFTER request (backup)
      // This ensures headers persist even if something tries to remove them
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
        
        // CRITICAL: Re-set CORS headers after request to ensure they persist
        if (origin && (allowed.includes(origin) || isVercelDomain)) {
          ctx.set('Access-Control-Allow-Origin', origin);
          ctx.set('Access-Control-Allow-Credentials', 'true');
          ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
          ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept, X-Requested-With');
          ctx.set('Vary', 'Origin');
          console.log('✅ CORS: Re-set header AFTER request for origin:', origin);
        } else if (origin) {
          console.log('⚠️ CORS: Origin not allowed:', origin);
        } else {
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
