# Strapi Backend Deployment Guide

This guide will help you deploy your Strapi backend to a hosting service. We recommend **Railway** as it's the easiest option.

## Option 1: Deploy to Railway (Recommended) 🚂

Railway is the easiest way to deploy Strapi with PostgreSQL.

### Step 1: Create Railway Account
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub (recommended)

### Step 2: Create New Project
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose your repository
4. Select the **`backend`** folder (not the root)

### Step 3: Add PostgreSQL Database
1. In your Railway project, click **"+ New"**
2. Select **"Database"** → **"Add PostgreSQL"**
3. Railway will automatically create a PostgreSQL database

### Step 4: Configure Environment Variables
1. Go to your Strapi service in Railway
2. Click on **"Variables"** tab
3. Add the following variables:

**Database Variables** (from PostgreSQL service):
- `DATABASE_HOST` = (from PostgreSQL service → Variables → PGHOST)
- `DATABASE_PORT` = (from PostgreSQL service → Variables → PGPORT, usually 5432)
- `DATABASE_NAME` = (from PostgreSQL service → Variables → PGDATABASE)
- `DATABASE_USERNAME` = (from PostgreSQL service → Variables → PGUSER)
- `DATABASE_PASSWORD` = (from PostgreSQL service → Variables → PGPASSWORD)
- `DATABASE_SSL` = `true`

**App Configuration**:
- `HOST` = `0.0.0.0`
- `PORT` = `1337`
- `NODE_ENV` = `production`

**Security Keys** (Generate these - see below):
- `APP_KEYS` = `key1,key2,key3,key4` (generate 4 random strings)
- `API_TOKEN_SALT` = (generate random string)
- `ADMIN_JWT_SECRET` = (generate random string)
- `TRANSFER_TOKEN_SALT` = (generate random string)
- `JWT_SECRET` = (generate random string)

**Generate Security Keys:**
You can generate random strings using:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```
Run this 5 times to get 5 different keys.

### Step 5: Deploy
1. Railway will automatically detect your project and start building
2. Wait for the build to complete (usually 2-5 minutes)
3. Once deployed, Railway will provide you with a URL like: `https://your-app.railway.app`

### Step 6: Access Admin Panel
1. Go to `https://your-app.railway.app/admin`
2. Create your admin account
3. Configure permissions (Settings → Users & Permissions → Roles → Public → Enable find/findOne for all content types)

### Step 7: Update Vercel Environment Variable
1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add: `VITE_API_URL` = `https://your-app.railway.app/api`
4. Redeploy your Vercel frontend

---

## Option 2: Deploy to Render 🎨

### Step 1: Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub

### Step 2: Create PostgreSQL Database
1. Click **"New +"** → **"PostgreSQL"**
2. Name it `aaitek-db`
3. Note the connection details

### Step 3: Create Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Configure:
   - **Name**: `aaitek-strapi`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

### Step 4: Set Environment Variables
Add all the same variables as Railway (see above)

### Step 5: Deploy
Render will automatically deploy. Get your URL and update Vercel.

---

## Option 3: Deploy to DigitalOcean App Platform 💧

### Step 1: Create Account
1. Go to [digitalocean.com](https://digitalocean.com)
2. Sign up

### Step 2: Create App
1. Go to **Apps** → **Create App**
2. Connect GitHub repository
3. Select **`backend`** folder
4. Configure:
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`

### Step 3: Add Database
1. Add **PostgreSQL** component
2. Configure environment variables with database connection

### Step 4: Set Environment Variables
Add all required variables (same as Railway)

---

## Quick Setup Script

Run this locally to generate security keys:

```bash
cd backend
node -e "
const crypto = require('crypto');
console.log('APP_KEYS=' + Array(4).fill(0).map(() => crypto.randomBytes(32).toString('base64')).join(','));
console.log('API_TOKEN_SALT=' + crypto.randomBytes(32).toString('base64'));
console.log('ADMIN_JWT_SECRET=' + crypto.randomBytes(32).toString('base64'));
console.log('TRANSFER_TOKEN_SALT=' + crypto.randomBytes(32).toString('base64'));
console.log('JWT_SECRET=' + crypto.randomBytes(32).toString('base64'));
"
```

Copy the output and add to your hosting platform's environment variables.

---

## Post-Deployment Checklist

- [ ] Strapi backend is accessible at your deployment URL
- [ ] Admin panel is accessible at `/admin`
- [ ] Created admin account
- [ ] Configured public permissions for all content types
- [ ] Added `VITE_API_URL` to Vercel environment variables
- [ ] Redeployed Vercel frontend
- [ ] Tested API calls from production frontend
- [ ] CORS is working (no CORS errors in browser console)

---

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18-20)
- Ensure all dependencies are in `package.json`
- Check build logs for specific errors

### Database Connection Errors
- Verify all database environment variables are correct
- Check if database requires SSL (set `DATABASE_SSL=true`)
- Ensure database is accessible from your hosting platform

### CORS Errors
- Verify CORS configuration in `backend/config/middlewares.js`
- Make sure your frontend URL is in the allowed origins list

### Admin Panel Not Accessible
- Check if the service is running
- Verify PORT and HOST environment variables
- Check deployment logs for errors

---

## Need Help?

If you encounter issues:
1. Check the deployment logs in your hosting platform
2. Verify all environment variables are set correctly
3. Ensure database is running and accessible
4. Check Strapi documentation: [docs.strapi.io](https://docs.strapi.io)




