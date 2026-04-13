module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['toBeModified1', 'toBeModified2', 'toBeModified3', 'toBeModified4']),
  },
  // Trust reverse-proxy headers (Railway, Render, etc.). Default true — set BEHIND_PROXY=false only for unusual local setups.
  proxy: env.bool('BEHIND_PROXY', true),
  // Public URL (required for stable admin on Railway). Example: https://corporate-production-xxxx.up.railway.app — no trailing slash
  url: env('PUBLIC_URL', ''),
});

