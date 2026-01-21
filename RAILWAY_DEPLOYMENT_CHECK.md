# Railway Deployment Check - Server Hook Not Running

## The Problem
- ❌ `x-aaitek-backend: LIVE` header is **MISSING** from Railway responses
- ❌ `Access-Control-Allow-Origin` header is **EMPTY**
- ✅ Railway Root Directory is correct: `/backend`
- ✅ Repository is correct: `Aaitek/Corporate`

**This means Railway is NOT running your latest code from `backend/src/index.js`**

## Step 1: Check Railway Deployment Status

1. Go to Railway Dashboard
2. Click on your **Corporate** service
3. Go to **Deployments** tab
4. Check the **latest deployment**:
   - **Commit message:** Should be "Add debug logging and ensure CORS headers..."
   - **Commit hash:** Should match your latest push
   - **Status:** Should be "Active" or "Ready"

**If the latest deployment is old:**
- Railway hasn't auto-deployed
- **Manually trigger a redeploy:**
  1. Go to **Deployments** tab
  2. Click **"Redeploy"** on the latest deployment
  3. OR make a small change and push to trigger auto-deploy

## Step 2: Check Railway Logs

1. Go to Railway → **Corporate** service → **Logs** tab
2. Look for:
   - Strapi startup messages
   - Any errors during startup
   - Look for: `✅ CORS: Set header for origin:` (from our debug logs)

**If you see errors:**
- Copy the error message
- The error might be preventing the server hook from loading

**If you see NO errors but also NO debug logs:**
- The server hook isn't being executed
- Railway might not be loading `backend/src/index.js`

## Step 3: Verify File Structure

Railway should have this structure:
```
/backend/
  ├── src/
  │   └── index.js  ← This file MUST exist
  ├── config/
  │   └── middlewares.js
  └── package.json
```

**Check in Railway:**
1. Go to Railway → **Corporate** service → **Settings**
2. Verify **Root Directory** = `/backend` (NOT `/` or empty)
3. If wrong, change it and redeploy

## Step 4: Force Railway Redeploy

If Railway hasn't deployed the latest code:

1. **Option A: Manual Redeploy**
   - Railway → Deployments → Click "Redeploy" on latest

2. **Option B: Trigger Auto-Deploy**
   - Make a small change (add a comment)
   - Push to GitHub
   - Railway should auto-deploy

3. **Option C: Check GitHub Connection**
   - Railway → Settings → Source
   - Verify it's connected to `Aaitek/Corporate`
   - If not, reconnect

## Step 5: Test After Redeploy

After Railway redeploys (wait 2-3 minutes):

1. Test Railway API:
   - Open: `https://aaitech-production.up.railway.app/api/articles?populate=*&publicationState=live`
   - Check Response Headers
   - **You MUST see:** `x-aaitek-backend: LIVE`

2. If you see the diagnostic header:
   - ✅ Your code is running
   - CORS should work
   - Test from frontend

3. If you DON'T see the diagnostic header:
   - ❌ Railway is still not running your code
   - Check Railway logs for errors
   - Verify Root Directory is `/backend`

## Most Likely Issues

### Issue 1: Railway Not Auto-Deploying
**Symptom:** Latest deployment is old
**Fix:** Manually redeploy or check GitHub connection

### Issue 2: Root Directory Wrong
**Symptom:** Code exists but not being executed
**Fix:** Set Root Directory to `/backend` in Railway Settings

### Issue 3: Build Errors
**Symptom:** Deployment fails or errors in logs
**Fix:** Check Railway logs, fix errors, redeploy

## Quick Action Items

1. ✅ Check Railway → Deployments → Is latest deployment recent?
2. ✅ Check Railway → Logs → Any errors?
3. ✅ Check Railway → Settings → Root Directory = `/backend`
4. ✅ Manually redeploy if needed
5. ✅ Test for `x-aaitek-backend: LIVE` header after redeploy

Once you see the diagnostic header, CORS will work!
