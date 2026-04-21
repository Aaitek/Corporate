'use strict';

const ensurePublicReadPermissions = require('./bootstrap/ensure-public-read-permissions');

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
          'https://aaitek.com',
          'http://localhost:3000',
          'http://localhost:5173',
          'http://localhost:1337',
        ];
        const isVercelDomain = origin && /^https:\/\/.*\.vercel\.app$/.test(origin);
        const isRailwayPreview = origin && /^https:\/\/.*\.up\.railway\.app$/.test(origin);
        
        // Log for debugging
        console.log('🔍 CORS Check - Origin:', origin, 'Path:', ctx.request.path);
        console.log('🔍 CORS Check - Allowed:', allowed);
        console.log('🔍 CORS Check - Is Vercel:', isVercelDomain);
        console.log(
          '🔍 CORS Check - Is Allowed:',
          origin && (allowed.includes(origin) || isVercelDomain || isRailwayPreview)
        );

        if (origin && (allowed.includes(origin) || isVercelDomain || isRailwayPreview)) {
          ctx.set('Access-Control-Allow-Origin', origin);
          ctx.set('Access-Control-Allow-Credentials', 'true');
          ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
          ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept, X-Requested-With');
          ctx.set('Vary', 'Origin');
          console.log('✅ CORS: Set header EARLY for origin:', origin);
        } else {
          console.log('❌ CORS: Origin NOT allowed or missing. Origin:', origin);
        }
        
        // Handle preflight OPTIONS requests - CRITICAL for CORS
        if (ctx.method === 'OPTIONS') {
          // For OPTIONS, we MUST respond with CORS headers even if origin check fails
          // This allows the browser to proceed with the actual request
          if (origin && (allowed.includes(origin) || isVercelDomain || isRailwayPreview)) {
            ctx.set('Access-Control-Allow-Origin', origin);
            ctx.set('Access-Control-Allow-Credentials', 'true');
            ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
            ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept, X-Requested-With');
            ctx.set('Access-Control-Max-Age', '86400'); // Cache preflight for 24 hours
            ctx.status = 204;
            console.log('✅ OPTIONS preflight: Allowed for origin:', origin);
            return;
          } else {
            // Even if origin doesn't match, respond to OPTIONS (browser requirement)
            console.log('⚠️ OPTIONS preflight: Origin not in allowed list:', origin);
            ctx.status = 204;
            return;
          }
        }
      }
      
      await next();

      // CRITICAL: Set CORS headers AFTER all processing, as the VERY LAST thing
      // This ensures they override anything Strapi or Railway Edge might set
      if (ctx.request.path.startsWith('/api')) {
        const origin = ctx.request.header.origin;
        const allowed = [
          'https://www.aaitek.com',
          'https://aaitek.com',
          'https://aaitek.com',
          'http://localhost:3000',
          'http://localhost:5173',
          'http://localhost:1337',
        ];
        const isVercelDomain = origin && /^https:\/\/.*\.vercel\.app$/.test(origin);
        const isRailwayPreview = origin && /^https:\/\/.*\.up\.railway\.app$/.test(origin);
        
        // Disable caching for API routes (prevents Railway Edge from caching wrong variant)
        ctx.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
        ctx.set('Pragma', 'no-cache');
        ctx.set('Expires', '0');
        ctx.set('X-Accel-Expires', '0'); // Nginx/Railway Edge cache control
        
        // FORCE set CORS headers - override anything that might exist
        if (origin && (allowed.includes(origin) || isVercelDomain || isRailwayPreview)) {
          // Remove any existing CORS headers first
          ctx.response.remove('Access-Control-Allow-Origin');
          ctx.response.remove('Access-Control-Allow-Credentials');
          
          // Force set the correct headers
          ctx.response.set('Access-Control-Allow-Origin', origin);
          ctx.response.set('Access-Control-Allow-Credentials', 'true');
          ctx.response.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
          ctx.response.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept, X-Requested-With');
          ctx.response.set('Vary', 'Origin');
          
          console.log('✅ CORS: FORCE set header AFTER request for origin:', origin);
          console.log('✅ CORS: Response headers after setting:', ctx.response.headers);
        } else if (origin) {
          console.log('❌ CORS: Origin not allowed:', origin);
        } else {
          console.log('⚠️ CORS: No origin header in request');
        }
      }
    });
  },
  
  async bootstrap({ strapi }) {
    // Log to confirm bootstrap is called
    console.log('🚀 Aaitek server hook: BOOTSTRAP function called');

    await ensurePublicReadPermissions(strapi);

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
          'https://aaitek.com',
          'http://localhost:3000',
          'http://localhost:5173',
          'http://localhost:1337',
        ];
        const isVercelDomain = origin && /^https:\/\/.*\.vercel\.app$/.test(origin);
        const isRailwayPreview = origin && /^https:\/\/.*\.up\.railway\.app$/.test(origin);
        
        if (origin && (allowed.includes(origin) || isVercelDomain || isRailwayPreview)) {
          ctx.set('Access-Control-Allow-Origin', origin);
          ctx.set('Access-Control-Allow-Credentials', 'true');
        }
      }
    });
  },
};
