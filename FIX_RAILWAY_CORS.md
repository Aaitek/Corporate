# Fix Railway CORS Issue - Step by Step Guide

## The Problem
Your new Railway project (`aaitech-production.up.railway.app`) is not sending CORS headers because:
1. Railway might not be connected to your NEW GitHub repo
2. Railway Root Directory might not be set to `backend/`
3. Railway might not have the latest code with CORS fixes

## Step 1: Verify Railway is Connected to NEW GitHub Repo

1. Go to [Railway Dashboard](https://railway.app)
2. Click on your project (the one serving `aaitech-production.up.railway.app`)
3. Go to **Settings** tab
4. Check **"Source"** or **"Repository"**
5. **It MUST show:** `Aaitek/Corporate` (your NEW repo)
6. If it shows the OLD repo → **Disconnect and reconnect to the new repo**

### How to Reconnect:
1. In Railway → Settings → **Disconnect** the old repo
2. Click **"Connect GitHub Repo"**
3. Select **`Aaitek/Corporate`**
4. Railway will redeploy automatically

## Step 2: Check Root Directory (CRITICAL!)

1. In Railway → Your service → **Settings** tab
2. Find **"Root Directory"** or **"Working Directory"**
3. **It MUST be:** `backend`
4. If it's `/` or empty → **Change it to `backend`**
5. **Save** and Railway will redeploy

**Why this matters:** If Root Directory is wrong, Railway builds from the wrong folder and your CORS code never runs!

## Step 3: Verify Latest Code is Deployed

1. In Railway → **Deployments** tab
2. Check the latest deployment
3. Look at the **commit hash** or **commit message**
4. It should match your latest commit: `"Fix CORS: Use array-based origin config..."`
5. If it's old → **Trigger a manual redeploy:**
   - Go to **Settings** → **Redeploy** or
   - Make a small change and push to GitHub

## Step 4: Check Environment Variables in Railway

1. In Railway → Your service → **Variables** tab
2. Verify these are set:
   - `NODE_ENV=production`
   - `PUBLIC_URL=https://aaitech-production.up.railway.app`
   - Database variables (PGHOST, PGPORT, etc.)
   - Strapi secrets (APP_KEYS, JWT_SECRET, etc.)

## Step 5: Verify Vercel Environment Variable

1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Check `VITE_API_URL`
5. **It MUST be:** `https://aaitech-production.up.railway.app/api`
6. If it's wrong → **Update it** and **Redeploy** Vercel

## Step 6: Test if Backend Code is Running

After Railway redeploys, test if your CORS code is actually running:

1. Open: `https://aaitech-production.up.railway.app/api/articles?populate=*&publicationState=live`
2. Open **Developer Tools** (F12) → **Network** tab
3. Refresh the page
4. Click on the articles request
5. Check **Response Headers**

### You MUST see these diagnostic headers:
- ✅ `x-strapi-runtime: BACKEND_ACTIVE` (proves server hook is running)
- ✅ `x-cors-middleware: LOADED` (proves custom middleware is running)
- ✅ `x-cors-fix: APPLIED` (proves bootstrap hook is running)
- ✅ `access-control-allow-origin: https://www.aaitek.com` (the actual CORS header)

### If you DON'T see these headers:
- ❌ Railway is NOT running your backend code
- ❌ Root Directory is wrong, OR
- ❌ Railway is connected to old repo, OR
- ❌ Latest code is not deployed

## Step 7: Test from Frontend

1. Go to `https://www.aaitek.com/articles`
2. Open **Developer Tools** (F12) → **Console** tab
3. Check for errors
4. Go to **Network** tab
5. Refresh the page
6. Click on the articles API request
7. Check **Response Headers**

### You should see:
- ✅ `access-control-allow-origin: https://www.aaitek.com`
- ✅ Articles should load without CORS errors

## Quick Checklist

- [ ] Railway connected to NEW GitHub repo (`Aaitek/Corporate`)
- [ ] Railway Root Directory = `backend`
- [ ] Latest code deployed (check commit hash)
- [ ] Railway environment variables set correctly
- [ ] Vercel `VITE_API_URL` = `https://aaitech-production.up.railway.app/api`
- [ ] Diagnostic headers appear in API response
- [ ] CORS header appears when testing from frontend
- [ ] Articles load on `aaitek.com/articles`

## Most Common Issues

### Issue 1: Root Directory is Wrong
**Symptom:** No diagnostic headers in response
**Fix:** Set Root Directory to `backend` in Railway Settings

### Issue 2: Connected to Old Repo
**Symptom:** Old commit hash in deployments
**Fix:** Disconnect and reconnect to new repo

### Issue 3: Vercel API URL Wrong
**Symptom:** Frontend tries to connect to wrong URL
**Fix:** Update `VITE_API_URL` in Vercel and redeploy

### Issue 4: Railway Not Deployed
**Symptom:** Service shows as "Not Deployed" or errors
**Fix:** Check Railway logs, fix errors, redeploy

## Still Not Working?

If after all these steps it still doesn't work:

1. **Check Railway Logs:**
   - Railway → Your service → **Logs** tab
   - Look for errors during startup
   - Check if Strapi is starting correctly

2. **Test API Directly:**
   - Open: `https://aaitech-production.up.railway.app/api/articles`
   - Check if it returns data (should work even without CORS)

3. **Check Railway Edge Layer:**
   - Railway might have an edge layer that strips headers
   - Try accessing the API with `curl`:
     ```bash
     curl -H "Origin: https://www.aaitek.com" \
          -H "Access-Control-Request-Method: GET" \
          -v https://aaitech-production.up.railway.app/api/articles
     ```
   - Check if `Access-Control-Allow-Origin` header is present

4. **Contact Support:**
   - If diagnostic headers don't appear, Railway is not running your code
   - This is a Railway configuration issue, not a code issue
