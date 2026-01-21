# Debug: Request Not Showing in Network Tab

## The Problem
If you can't see the request in the Network tab, it means the request is **not being made at all**. This could be because:
1. `VITE_API_URL` is not set in Vercel (so it's trying to use `localhost:1337`)
2. JavaScript error preventing the request
3. Request is being blocked before it's sent

## Step 1: Check Browser Console

1. Go to `https://www.aaitek.com/articles`
2. Open **Developer Tools** (F12)
3. Go to **Console** tab (NOT Network tab)
4. Look for these log messages:

### You SHOULD see:
```
🔍 Fetching articles from: https://aaitech-production.up.railway.app/api
```

### If you see:
```
🔍 Fetching articles from: http://localhost:1337/api
```
**Problem:** `VITE_API_URL` is NOT set in Vercel!

### If you see:
```
🔍 Fetching articles from: Not set - using default
```
**Problem:** `VITE_API_URL` is NOT set in Vercel!

### If you see NO logs at all:
**Problem:** JavaScript error preventing the page from loading, OR the component is not mounting.

## Step 2: Check Vercel Environment Variable

1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Look for `VITE_API_URL`
5. **It MUST be:** `https://aaitech-production.up.railway.app/api`
6. **Check which environments it's set for:**
   - ✅ Production
   - ✅ Preview
   - ✅ Development (optional)

### If `VITE_API_URL` is missing or wrong:
1. **Add/Edit** the variable:
   - Key: `VITE_API_URL`
   - Value: `https://aaitech-production.up.railway.app/api`
   - Environments: Select **Production** (and Preview if you want)
2. **Save**
3. **Redeploy** your Vercel project:
   - Go to **Deployments** tab
   - Click **...** on latest deployment
   - Click **Redeploy**

## Step 3: Check for JavaScript Errors

1. In Browser Console, look for **RED errors**
2. Common errors:
   - `Uncaught ReferenceError: ...`
   - `Uncaught TypeError: ...`
   - `Failed to fetch`
   - `Network Error`

### If you see errors:
- Take a screenshot or copy the error message
- The error is preventing the request from being made

## Step 4: Verify Vercel Redeployed

After setting `VITE_API_URL` in Vercel:

1. **Redeploy** is REQUIRED for environment variables to take effect
2. Go to Vercel → **Deployments** tab
3. Click **...** on latest deployment → **Redeploy**
4. Wait for deployment to finish (1-2 minutes)
5. **Clear browser cache** or use **Incognito mode**
6. Visit `https://www.aaitek.com/articles` again
7. Check Console for the log message

## Step 5: Test the Request Manually

If you want to test if the API works:

1. Open Browser Console (F12)
2. Go to **Console** tab
3. Type this command:
```javascript
fetch('https://aaitech-production.up.railway.app/api/articles?populate=*&publicationState=live')
  .then(r => r.json())
  .then(data => console.log('✅ API works!', data))
  .catch(err => console.error('❌ API error:', err))
```

### If this works:
- API is fine, the problem is with the frontend code or environment variable

### If this fails with CORS error:
- CORS is still not configured correctly on Railway
- Check Railway response headers

## Quick Checklist

- [ ] Check Browser Console for log: `🔍 Fetching articles from: ...`
- [ ] Verify `VITE_API_URL` is set in Vercel Environment Variables
- [ ] Verify `VITE_API_URL` value is: `https://aaitech-production.up.railway.app/api`
- [ ] Verify `VITE_API_URL` is set for **Production** environment
- [ ] **Redeploy** Vercel after setting environment variable
- [ ] Clear browser cache or use Incognito mode
- [ ] Check for JavaScript errors in Console
- [ ] Test API manually with `fetch()` command

## Most Common Issue

**99% of the time:** `VITE_API_URL` is not set in Vercel, or Vercel wasn't redeployed after setting it.

**Fix:**
1. Set `VITE_API_URL` in Vercel
2. **Redeploy** Vercel (this is critical!)
3. Clear cache and test again
