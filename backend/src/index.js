'use strict';

module.exports = {
  register({ strapi }) {
    // Log to confirm this hook is being loaded
    console.log('🚀 Aaitek server hook: REGISTER function called');
    
    // Server-level middleware - runs for ALL requests
    // CRITICAL: This runs AFTER Strapi's built-in CORS, so we can override it
    strapi.server.app.use(async (ctx, next) => {
      // PROOF HEADER - if you see this, your code is running on Railway
      ctx.set('x-aaitek-backend', 'LIVE');
      ctx.set('x-aaitek-register', 'LOADED');
      
      await next();
      
      // CRITICAL: Set CORS headers AFTER Strapi processes the request
      // This ensures we override any wildcard (*) that Strapi might set
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
        console.log('🔍 CORS Check - Current header:', ctx.response.get('Access-Control-Allow-Origin'));
        
        // CRITICAL: Override ANY existing CORS header (including wildcard *)
        // This ensures we always set the specific origin when present
        if (origin && (allowed.includes(origin) || isVercelDomain)) {
          // Force override - remove any existing wildcard
          ctx.remove('Access-Control-Allow-Origin');
          ctx.set('Access-Control-Allow-Origin', origin);
          ctx.set('Access-Control-Allow-Credentials', 'true');
          ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
          ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept, X-Requested-With');
          ctx.set('Vary', 'Origin');
          console.log('✅ CORS: OVERRIDE header to specific origin:', origin);
        } else if (origin) {
          // Origin present but not allowed - don't set wildcard, just log
          console.log('❌ CORS: Origin NOT allowed:', origin);
          // Remove any wildcard that might have been set
          ctx.remove('Access-Control-Allow-Origin');
          ctx.remove('Access-Control-Allow-Credentials');
        } else {
          // No origin (direct browser access) - don't set CORS headers
          console.log('⚠️ CORS: No origin header (direct access)');
          // Remove any wildcard that might have been set
          ctx.remove('Access-Control-Allow-Origin');
          ctx.remove('Access-Control-Allow-Credentials');
        }
      }

      // Fix 1: Disable caching for API routes (prevents Railway Edge from caching wrong variant)
      if (ctx.request.path.startsWith('/api')) {
        ctx.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
        ctx.set('Pragma', 'no-cache');
        ctx.set('Expires', '0');
        ctx.set('X-Accel-Expires', '0'); // Nginx/Railway Edge cache control
      }
    });
  },
  
  bootstrap({ strapi }) {
    // Log to confirm bootstrap is called
    console.log('🚀 Aaitek server hook: BOOTSTRAP function called');
    
    // Final override - runs last to ensure CORS is correct
    strapi.server.app.use(async (ctx, next) => {
      await next();
      
      ctx.set('x-aaitek-bootstrap', 'LOADED');
      
      // Final CORS override - ensure no wildcard remains
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
        
        // Final check: if origin is allowed, force set it (override any wildcard)
        if (origin && (allowed.includes(origin) || isVercelDomain)) {
          ctx.remove('Access-Control-Allow-Origin');
          ctx.set('Access-Control-Allow-Origin', origin);
          ctx.set('Access-Control-Allow-Credentials', 'true');
          console.log('✅ BOOTSTRAP: Final CORS override for origin:', origin);
        } else if (origin) {
          // Remove wildcard if origin not allowed
          ctx.remove('Access-Control-Allow-Origin');
          ctx.remove('Access-Control-Allow-Credentials');
        }
      }
    });
  },
};
