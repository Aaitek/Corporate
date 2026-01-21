# Debug: Articles Not Showing

## Step 1: Check Browser Console (MOST IMPORTANT)

1. Go to `https://www.aaitek.com/articles`
2. Open **Developer Tools** (F12)
3. Go to **Console** tab
4. Look for these log messages:

### What to Look For:

**✅ Good Signs:**
```
🔍 Fetching articles from: https://aaitech-production.up.railway.app/api
✅ Articles API Response: { data: [...] }
✅ Mapped articles: [...]
```

**❌ Error Signs:**
```
❌ Error fetching articles: ...
❌ Error message: ...
❌ Error code: ERR_NETWORK
🚫 Network/CORS error detected!
```

**⚠️ Warning Signs:**
```
⚠️ No articles found in API response
```

## Step 2: Check Network Tab

1. In Developer Tools → **Network** tab
2. **Clear the log** (🚫 icon)
3. **Refresh the page** (F5)
4. **Filter by "XHR" or "Fetch"**
5. Look for request to: `aaitech-production.up.railway.app/api/articles`

### Check the Request:

**Click on the request** and check:

**Request Headers:**
- Should show the full URL: `https://aaitech-production.up.railway.app/api/articles?...`

**Response:**
- **Status:** Should be `200 OK` (not `CORS error` or `(failed)`)
- **Response Headers:** Should have `access-control-allow-origin`
- **Response Body:** Should contain JSON with articles data

## Step 3: Common Issues & Fixes

### Issue 1: "VITE_API_URL is missing" Error

**Symptom:** Page crashes or shows error in console
**Fix:**
1. Vercel → Settings → Environment Variables
2. Verify `VITE_API_URL` is set
3. **Redeploy** Vercel (required!)

### Issue 2: CORS Error

**Symptom:** Console shows "CORS policy" error
**Fix:**
- Railway CORS should be fixed, but verify:
  1. Check Railway is running
  2. Test Railway API directly: `https://aaitech-production.up.railway.app/api/articles?populate=*&publicationState=live`
  3. Check Response Headers for `access-control-allow-origin`

### Issue 3: Network Error

**Symptom:** Console shows "ERR_NETWORK" or "Failed to fetch"
**Fix:**
- Railway might be down or unreachable
- Check Railway dashboard → Logs
- Verify Railway service is running

### Issue 4: "No articles found in API response"

**Symptom:** Console shows warning, but no error
**Possible causes:**
1. **No articles in Strapi:**
   - Go to Railway Strapi admin: `https://aaitech-production.up.railway.app/admin`
   - Check if articles exist
   - Check if articles are **published** (not draft)

2. **Response structure is wrong:**
   - Check Network tab → Response
   - Should be: `{ data: [{ id: ..., attributes: {...} }] }`
   - If structure is different, the mapping code needs fixing

3. **Articles are drafts:**
   - In Strapi, articles must be **published** (not draft)
   - Check `publicationState=live` is working

## Step 4: Test Railway API Directly

1. Open: `https://aaitech-production.up.railway.app/api/articles?populate=*&publicationState=live&sort=publishedAt:desc`
2. Should show JSON with articles
3. If it shows empty `{ data: [] }`, there are no published articles in Strapi

## Step 5: Verify Strapi Has Articles

1. Go to: `https://aaitech-production.up.railway.app/admin`
2. Login to Strapi
3. Go to **Content Manager** → **Articles**
4. Check:
   - Do articles exist? ✅
   - Are they **published** (green checkmark)? ✅
   - Do they have content? ✅

## Quick Checklist

- [ ] Browser console checked (what errors do you see?)
- [ ] Network tab checked (what's the request status?)
- [ ] `VITE_API_URL` is set in Vercel
- [ ] Vercel was **redeployed** after setting env var
- [ ] Railway API is accessible (test direct URL)
- [ ] Articles exist in Strapi
- [ ] Articles are **published** in Strapi
- [ ] No CORS errors in console

## What to Tell Me

Please share:
1. **Console errors** (copy/paste the red error messages)
2. **Network request status** (200 OK? CORS error? Failed?)
3. **Response from Railway API** (when you test the direct URL)
4. **Strapi status** (do articles exist and are they published?)

This will help me identify the exact issue!
