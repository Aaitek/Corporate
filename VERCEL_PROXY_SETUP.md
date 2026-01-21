# Vercel API Proxy Setup - CORS Solution

## What This Does

Instead of fighting CORS, we proxy all API calls through Vercel. The browser makes same-origin requests to `/api/*`, and Vercel serverless functions forward them to Railway.

## Benefits

✅ **No CORS issues** - Browser sees same-origin requests  
✅ **No CDN edge issues** - Server-side proxy handles everything  
✅ **Production-grade** - Standard pattern used by many companies  
✅ **Caching** - Vercel can cache responses for better performance  

## How It Works

1. **Frontend** calls `/api/articles` (same-origin)
2. **Vercel API route** (`/api/articles.js`) receives the request
3. **Vercel serverless function** forwards to Railway: `https://aaitech-production.up.railway.app/api/articles`
4. **Railway** responds with data
5. **Vercel** returns data to frontend (no CORS needed!)

## API Routes Created

- `/api/articles.js` - Articles endpoint
- `/api/case-studies.js` - Case studies endpoint
- `/api/products.js` - Products endpoint
- `/api/services.js` - Services endpoint (with slug support)
- `/api/testimonials.js` - Testimonials endpoint
- `/api/managed-services.js` - Managed services endpoint
- `/api/contact-submission.js` - Contact form submissions (POST)

## Environment Variables

### Vercel Environment Variables

Set in Vercel Dashboard → Settings → Environment Variables:

- `RAILWAY_API_URL` (optional): `https://aaitech-production.up.railway.app/api`
  - If not set, defaults to the hardcoded URL in the API routes
  - Useful if you need to switch Railway instances

### Frontend Environment Variables

**Remove or update `VITE_API_URL` in Vercel:**
- The frontend now uses `/api` proxy routes in production
- `VITE_API_URL` is only used in development mode
- You can remove it from Vercel environment variables (optional)

## Development vs Production

### Development Mode
- Uses direct API calls to `http://localhost:1337/api` (or `VITE_API_URL` if set)
- No proxy needed (same-origin in dev)

### Production Mode
- Always uses `/api/*` proxy routes
- Proxy routes forward to Railway
- No CORS issues

## Testing

1. **Deploy to Vercel**
2. **Visit** `https://www.aaitek.com/articles`
3. **Open Developer Tools** → Network tab
4. **Check** requests to `/api/articles` (should be 200 OK, no CORS errors)
5. **Articles should load** ✅

## Troubleshooting

### API routes return 500 error
- Check Railway is running and accessible
- Check `RAILWAY_API_URL` environment variable in Vercel
- Check Vercel function logs

### Still seeing CORS errors
- Make sure you're testing on the deployed Vercel site (not localhost)
- Clear browser cache
- Check Network tab - requests should go to `/api/*` not Railway directly

### Images not loading
- Images are served directly from Railway (not proxied)
- Check Railway URL is correct in `getImageUrl` function
- Images should have absolute URLs like `https://aaitech-production.up.railway.app/uploads/...`

## Migration Notes

- ✅ All API calls now go through Vercel proxy in production
- ✅ No changes needed to Railway CORS configuration (but can be simplified)
- ✅ Frontend code automatically detects production vs development
- ✅ Images still served directly from Railway (no proxy needed)
