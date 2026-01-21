# Check Railway Logs for CORS Debug Messages

## The Problem
- ✅ Server hook IS running (we see register/bootstrap logs)
- ❌ CORS headers are NOT appearing in response
- ❌ Request from frontend is still failing

## Step 1: Check Railway Logs When Frontend Makes Request

1. Go to Railway → Corporate service → **Logs** tab
2. **Keep the logs tab open**
3. Go to `https://www.aaitek.com/articles` in another tab
4. **Refresh the page** (this triggers the API request)
5. **Immediately go back to Railway logs**
6. Look for these messages:

### You SHOULD see:
```
✅ CORS: Set header EARLY for origin: https://www.aaitek.com
✅ CORS: Re-set header AFTER request for origin: https://www.aaitek.com
```

### If you DON'T see these:
- The origin might not be matching
- Check what origin is being sent

### If you see:
```
⚠️ CORS: Origin not allowed: [some origin]
```
- The origin doesn't match the allowed list
- Check what origin is being sent

## Step 2: Check What Origin is Being Sent

1. Go to `https://www.aaitek.com/articles`
2. Open Developer Tools → Network tab
3. Click on the failed `articles` request
4. Check **Request Headers**
5. Look for: `Origin: https://www.aaitek.com` (or `https://aaitek.com`)

**Note:** The Origin header might be:
- `https://www.aaitek.com`
- `https://aaitek.com` (without www)
- Something else

## Step 3: Verify Allowed Origins Match

Check if the origin in the request matches exactly what's in the code:

**In `backend/src/index.js`, allowed origins are:**
- `https://www.aaitek.com`
- `https://aaitek.com`
- `https://aaitek.com.au`
- `http://localhost:3000`
- `http://localhost:5173`
- Any `*.vercel.app` domain

**If the request sends `https://aaitek.com` but you only have `https://www.aaitek.com`:**
- Add both to the allowed list

## Step 4: Test with curl (Bypass Browser CORS)

Test if Railway is actually sending the headers:

```bash
curl -H "Origin: https://www.aaitek.com" \
     -v \
     https://aaitech-production.up.railway.app/api/articles?populate=*&publicationState=live
```

**Look for in the response:**
- `< access-control-allow-origin: https://www.aaitek.com`
- `< x-aaitek-backend: LIVE`

**If you see these:**
- Railway IS sending the headers
- The problem is with the browser or Railway Edge caching

**If you DON'T see these:**
- Railway is NOT sending the headers
- Check Railway logs for errors

## Most Likely Issues

### Issue 1: Origin Mismatch
**Symptom:** Logs show "Origin not allowed"
**Fix:** Add the exact origin to the allowed list

### Issue 2: Railway Edge Caching
**Symptom:** Headers appear in curl but not in browser
**Fix:** The cache-control headers should help, but might need to wait for cache to expire

### Issue 3: Headers Being Stripped
**Symptom:** Logs show headers being set, but they don't appear in response
**Fix:** Railway Edge might be interfering - check Railway settings

## Quick Test

Run this in your terminal:

```bash
curl -H "Origin: https://www.aaitek.com" \
     -H "Access-Control-Request-Method: GET" \
     -v \
     https://aaitech-production.up.railway.app/api/articles?populate=*&publicationState=live 2>&1 | grep -i "access-control"
```

**You should see:**
- `access-control-allow-origin: https://www.aaitek.com`
- `access-control-allow-credentials: true`

If you see these, Railway is working correctly!
