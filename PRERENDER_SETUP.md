# Prerendering Setup for Social Media Meta Tags ✅

## 🎯 The Problem
Social media crawlers (LinkedIn, Facebook, Twitter, WhatsApp) don't execute JavaScript. They only see the initial HTML from `index.html`, which has default meta tags, not article-specific ones.

## ✅ Solution: Prerender.io Service

Prerender.io automatically intercepts social crawlers at the CDN level and serves pre-rendered HTML with correct meta tags.

### Setup Steps:

1. **Sign up for Prerender.io** (Free tier: 250 pages/month)
   - Go to: https://prerender.io
   - Sign up for free account
   - Get your API token from the dashboard

2. **Add Token to Vercel**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `PRERENDER_TOKEN` = your Prerender.io API token
   - Redeploy your project

3. **Configure Prerender.io**
   - In Prerender.io dashboard, add your domain: `aaitek.com.au`
   - Enable "Crawl User Agents" (already configured for social crawlers)

4. **Test**
   - Go to https://developers.facebook.com/tools/debug/
   - Enter: `https://www.aaitek.com/article/Article`
   - Click "Scrape Again"
   - You should see the article image and title!

## 🔧 Alternative: Custom Edge Function (Current Setup)

We've also created a custom edge function (`api/prerender.js`) that:
- Detects social crawlers by user-agent
- Fetches article data from Strapi
- Serves HTML with correct meta tags

**However**, for Vite apps on Vercel, this function won't be automatically called for article routes. You would need to manually route requests to it, which is complex.

**Recommendation**: Use Prerender.io service (Step 1-4 above) for the most reliable solution.

## 🧪 Testing

After setup, test with:

1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **LinkedIn Inspector**: https://www.linkedin.com/post-inspector/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator

## 📝 What Gets Fixed

- ✅ Social media previews show article-specific images
- ✅ Each article has its own preview (title, description, image)
- ✅ Works automatically for all social platforms
- ✅ No manual cache clearing needed
