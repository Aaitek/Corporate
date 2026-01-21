# Verify New Vercel Setup

## ✅ Old Project Deleted
The old Vercel project (`a-aitech.vercel.app`) has been deleted.

## Current Setup (from screenshots)

**Project:** `corporate`
- **Repository:** `Aaitek/Corporate`
- **Domains:** 
  - `www.aaitek.com` ✅
  - `corporate-sage-sigma.vercel.app` ✅
- **Latest Deployment:** "HARD-FIX: Use absolute URLs only..." (35m ago)
- **Status:** Ready ✅

## What to Verify Now

### 1. Check Environment Variables

1. Go to Vercel Dashboard → `corporate` project
2. Go to **Settings** → **Environment Variables**
3. Verify `VITE_API_URL` is set:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://aaitech-production.up.railway.app/api`
   - **Environment:** Production (and Preview if needed)

**If missing:**
- Add it now
- **Redeploy** the project (required for env vars to take effect)

### 2. Test Articles on New Domain

1. Go to: `https://www.aaitek.com/articles`
2. Open **Developer Tools** (F12) → **Console** tab
3. Check for errors
4. Articles should load ✅

### 3. Verify Old Domain is Gone

1. Try to visit: `https://a-aitech.vercel.app/articles`
2. Should show: "404" or "Project not found" ✅
3. This confirms the old project is deleted

### 4. Check API Calls

1. On `https://www.aaitek.com/articles`
2. Open **Developer Tools** → **Network** tab
3. Filter by "XHR" or "Fetch"
4. Look for requests to: `https://aaitech-production.up.railway.app/api/articles`
5. Should be **200 OK** (not CORS error) ✅

## If Articles Don't Load

### Check Console for Errors

**If you see:**
```
VITE_API_URL is missing. Set it in Vercel environment variables.
```
**Fix:** Add `VITE_API_URL` in Vercel and redeploy

**If you see:**
```
CORS error
```
**Fix:** Railway CORS should be fixed, but check Railway deployment

**If you see:**
```
Network Error
```
**Fix:** Check Railway is running and accessible

## Quick Checklist

- [ ] Old Vercel project deleted ✅
- [ ] New project `corporate` is active
- [ ] `VITE_API_URL` is set in Vercel
- [ ] Vercel project redeployed after setting env var
- [ ] Articles load on `www.aaitek.com/articles`
- [ ] Old domain `a-aitech.vercel.app` is inaccessible
- [ ] No CORS errors in console
- [ ] API calls return 200 OK

## Next Steps

1. **Set `VITE_API_URL`** if not already set
2. **Redeploy** Vercel project
3. **Test** `www.aaitek.com/articles`
4. **Verify** articles are loading

Everything should work now! 🎉
