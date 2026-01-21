# Railway Root Directory Check - CRITICAL

## The Problem

If Railway is building from the **repo root** instead of the **`backend/`** directory, all your CORS config changes are in code that is **never executed**.

## How to Verify Railway Configuration

### Step 1: Check Root Directory in Railway

1. Go to Railway Dashboard
2. Click on your "Corporate" service (the one serving `aaitech-production.up.railway.app`)
3. Go to **Settings** tab
4. Look for **"Root Directory"** or **"Working Directory"**
5. It **MUST** be set to: `backend`
6. If it's set to `/` or empty, **that's the problem!**

### Step 2: Check Start Command

In the same Settings tab, verify:
- **Start Command** should be: `npm start`
- It should run from inside the `backend/` directory

### Step 3: Verify Diagnostic Headers

After Railway redeploys, test if the backend code is actually running:

1. Open: `https://aaitech-production.up.railway.app/api/articles?populate=*&publicationState=live`
2. Open Developer Tools (F12) → Network tab
3. Refresh the page
4. Click on the articles request
5. Check **Response Headers**

**You MUST see:**
- `x-strapi-runtime: BACKEND_ACTIVE`
- `x-cors-middleware: LOADED`

**Interpretation:**
- ❌ **If you do NOT see these headers** → Railway is NOT running your backend code
- ✅ **If you see them** → Backend is running, CORS should work

## How to Fix Root Directory in Railway

1. Go to Railway → "Corporate" service → **Settings**
2. Find **"Root Directory"** or **"Working Directory"**
3. Set it to: `backend`
4. Save
5. **Redeploy** the service
6. Wait for deployment to complete
7. Test the diagnostic headers again

## Alternative: Check Build Logs

1. Go to Railway → "Corporate" service → **Deployments**
2. Click on the latest deployment
3. Check **Build Logs**
4. Look for:
   - `npm run build` - should run from `backend/` directory
   - Should see Strapi building: `✔ Building admin panel`
   - If you see errors about missing files, root directory is wrong

## Current Repository Structure

```
repo/
├─ backend/              ← Strapi lives here
│  ├─ config/
│  │  ├─ middlewares.js  ← CORS config here
│  │  └─ env/production/middlewares.js
│  ├─ src/
│  │  └─ middlewares/
│  │     └─ cors.js      ← Custom CORS middleware
│  ├─ package.json
│  └─ railway.json
├─ src/                  ← Frontend code
└─ package.json          ← Frontend package.json
```

Railway **MUST** build from `backend/` directory, not the repo root!
