# Vercel Environment Variables Setup

## Problem
The frontend deployed on Vercel is trying to access `localhost:1337`, which doesn't exist on Vercel's servers. This causes CORS errors and API connection failures.

## Solution
You need to set the `VITE_API_URL` environment variable in Vercel to point to your production Strapi API.

## Steps to Fix

### 1. Deploy Your Strapi Backend
First, you need to deploy your Strapi backend to a hosting service. Options:
- **Vercel** (for serverless)
- **Railway** (recommended for Strapi)
- **Render**
- **DigitalOcean**
- **AWS/Azure/GCP**
- **Your own server**

### 2. Set Environment Variable in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://your-strapi-backend-url.com/api` (replace with your actual Strapi URL)
   - **Environment**: Select all (Production, Preview, Development)

4. **Important**: After adding the variable, you need to redeploy:
   - Go to **Deployments** tab
   - Click the three dots (⋯) on the latest deployment
   - Click **Redeploy**

### 3. Update CORS in Strapi

The CORS configuration has been updated to allow requests from:
- `https://a-aitech.vercel.app`
- `https://aaitek.com.au`
- Any Vercel preview URLs (`*.vercel.app`)

Make sure your Strapi backend's CORS configuration matches this.

## Example Environment Variables

### For Local Development
```env
VITE_API_URL=http://localhost:1337/api
```

### For Production (Vercel)
```env
VITE_API_URL=https://your-strapi-backend.railway.app/api
# or
VITE_API_URL=https://api.aaitek.com.au/api
```

## Testing

After setting the environment variable and redeploying:
1. Check the browser console - CORS errors should be gone
2. API calls should work correctly
3. Services, products, and other content should load from your Strapi backend

## Current Status

✅ CORS configuration updated in `backend/config/middlewares.js`
✅ API URL uses environment variable (already configured)
⏳ **Action Required**: Set `VITE_API_URL` in Vercel environment variables

