# Testing SEO Meta Tags Locally

## What Works Locally

✅ **Browser Share Dialogs** (Safari, Chrome, Firefox)
- These execute JavaScript, so client-side meta tag updates will work
- Test by using the browser's share feature

✅ **Browser DevTools**
- Open DevTools → Elements → `<head>` section
- You should see updated meta tags after the page loads

## What Doesn't Work Locally

❌ **Social Media Crawlers** (Facebook, Twitter, LinkedIn)
- These don't execute JavaScript
- They only see the static HTML from `index.html`
- The `middleware.js` file only works on Vercel (not in local Vite dev server)

## How to Test Locally

### 1. Test Browser Share Dialog

1. Start your dev server: `npm run dev`
2. Navigate to a page (e.g., `/services/web-platform-development`)
3. Wait for the page to fully load
4. Use your browser's share feature:
   - **Safari**: Click Share button → Check preview
   - **Chrome**: Right-click → Inspect → Check `<head>` tags
5. You should see page-specific title, description, and image

### 2. Test in Browser DevTools

1. Open the page in your browser
2. Open DevTools (F12 or Cmd+Option+I)
3. Go to Elements/Inspector tab
4. Expand the `<head>` section
5. Look for these meta tags:
   - `<meta property="og:title" content="...">`
   - `<meta property="og:description" content="...">`
   - `<meta property="og:image" content="...">`
   - `<meta name="twitter:title" content="...">`
   - `<meta name="twitter:description" content="...">`
   - `<meta name="twitter:image" content="...">`

6. They should show page-specific values, not the default homepage values

### 3. Test with Console

Open browser console and run:
```javascript
// Check title
console.log(document.title)

// Check meta tags
console.log(document.querySelector('meta[property="og:title"]')?.content)
console.log(document.querySelector('meta[property="og:description"]')?.content)
console.log(document.querySelector('meta[property="og:image"]')?.content)
```

## Testing Social Media Crawlers

To test how social media crawlers see your site, you need to:

1. **Deploy to Vercel** (the middleware will work there)
2. **Use Facebook Debugger**: https://developers.facebook.com/tools/debug/
3. **Use Twitter Card Validator**: https://cards-dev.twitter.com/validator
4. **Use LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

These tools will show you exactly what meta tags the crawlers see.

## Expected Behavior

### Local (Vite Dev Server)
- ✅ Browser share dialogs: **Works** (client-side updates)
- ❌ Social crawlers: **Won't work** (no server-side rendering)

### Production (Vercel)
- ✅ Browser share dialogs: **Works** (client-side updates)
- ✅ Social crawlers: **Works** (middleware intercepts and serves correct HTML)

## Quick Test Checklist

- [ ] Page loads without errors
- [ ] DevTools shows updated `<title>` tag
- [ ] DevTools shows updated `og:title` meta tag
- [ ] DevTools shows updated `og:description` meta tag
- [ ] DevTools shows updated `og:image` meta tag (with full URL)
- [ ] Browser share dialog shows correct preview
- [ ] Console shows correct meta tag values
