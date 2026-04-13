module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['toBeModified1', 'toBeModified2', 'toBeModified3', 'toBeModified4']),
  },
  // Railway / Render / etc.: trust X-Forwarded-Proto/Host so HTTPS + admin auth work. Override with BEHIND_PROXY=false locally if needed.
  proxy: env.bool(
    'BEHIND_PROXY',
    env('NODE_ENV', 'development') === 'production'
  ),
  // Public URL (required for stable admin on Railway). Example: https://corporate-production-xxxx.up.railway.app — no trailing slash
  url: env('PUBLIC_URL', ''),
});

