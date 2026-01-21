# Railway Deployment Guide for Aaitek Backend

## Current Setup Status

✅ **Git Remote:** Already configured to `https://github.com/Aaitek/Corporate.git`
✅ **Railway Config:** `backend/railway.json` and `backend/Procfile` are ready
✅ **Backend Code:** Strapi backend is configured for Railway

## Steps to Deploy Backend to Railway

### Step 1: Connect GitHub Repository to Railway

1. Go to [Railway.app](https://railway.app) and sign in
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose the repository: **`Aaitek/Corporate`**
5. Railway will detect it's a monorepo and ask which service to deploy

### Step 2: Configure the Backend Service

1. **Select Root Directory:** Set to `backend/`
2. **Service Name:** Name it `aaitek-backend` or `strapi-backend`

### Step 3: Add PostgreSQL Database

1. In your Railway project, click **"+ New"**
2. Select **"Database"** → **"Add PostgreSQL"**
3. Railway will automatically create a PostgreSQL database
4. Note the database credentials (they'll be in environment variables)

### Step 4: Set Environment Variables

Go to your backend service → **Variables** tab and add:

#### Database Variables (from Railway PostgreSQL service):
```
DATABASE_HOST=<provided by Railway>
DATABASE_PORT=5432
DATABASE_NAME=<provided by Railway>
DATABASE_USERNAME=<provided by Railway>
DATABASE_PASSWORD=<provided by Railway>
DATABASE_SSL=true
```

**Note:** Railway automatically provides these as `$PGHOST`, `$PGPORT`, `$PGDATABASE`, `$PGUSER`, `$PGPASSWORD`. You can reference them or Railway will auto-inject them.

#### Strapi Required Variables:
```
APP_KEYS=<generate 4 random strings, comma-separated>
API_TOKEN_SALT=<generate random string>
ADMIN_JWT_SECRET=<generate random string>
TRANSFER_TOKEN_SALT=<generate random string>
JWT_SECRET=<generate random string>
```

**To generate secrets, run this in terminal:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```
Run this 5 times to get 5 different secrets.

#### Public URL:
```
PUBLIC_URL=https://your-service-name.up.railway.app
```

**Note:** Railway will provide a default domain. You can also add a custom domain later.

#### Node Environment:
```
NODE_ENV=production
```

### Step 5: Deploy

1. Railway will automatically detect the `backend/railway.json` configuration
2. It will run `npm run build` (from railway.json)
3. Then start with `npm start` (from Procfile)
4. Watch the deployment logs to ensure it builds successfully

### Step 6: Access Strapi Admin

1. Once deployed, Railway will provide a URL like: `https://your-service.up.railway.app`
2. Visit: `https://your-service.up.railway.app/admin`
3. Create your admin account
4. Your Strapi backend is now live!

### Step 7: Update Frontend Environment Variable

1. Go to **Vercel** → Your project → **Environment Variables**
2. Update `VITE_API_URL` to: `https://your-railway-service.up.railway.app/api`
3. Redeploy your Vercel frontend

## Important Notes

### Railway Auto-Deploy
- Railway will automatically deploy when you push to the `main` branch
- Make sure your backend code is in the `backend/` folder
- The `railway.json` tells Railway to:
  - Build: `npm run build`
  - Start: `npm start` (from Procfile)

### Database Migrations
- Strapi will automatically run migrations on first start
- If you need to reset, you can delete the database and recreate it

### File Uploads
- By default, Strapi stores uploads locally
- For production, consider using:
  - AWS S3
  - Cloudinary
  - Railway's volume storage (if available)

### CORS Configuration
- Make sure your Strapi `config/middlewares.js` allows your Vercel domain
- Add your frontend URL to allowed origins

## Troubleshooting

### Build Fails
- Check Railway logs for errors
- Ensure `package.json` has correct build script
- Verify Node.js version (should be 18-20)

### Database Connection Issues
- Verify all database environment variables are set
- Check `DATABASE_SSL=true` for Railway PostgreSQL
- Ensure database service is running

### Strapi Won't Start
- Check `APP_KEYS` and other secrets are set
- Verify `PUBLIC_URL` matches your Railway domain
- Check logs for specific error messages

## Quick Checklist

- [ ] Railway project created
- [ ] GitHub repo connected (`Aaitek/Corporate`)
- [ ] Backend service configured (root: `backend/`)
- [ ] PostgreSQL database added
- [ ] All environment variables set
- [ ] Deployment successful
- [ ] Strapi admin accessible
- [ ] Vercel `VITE_API_URL` updated
- [ ] Frontend redeployed on Vercel

## Support

If you encounter issues:
1. Check Railway deployment logs
2. Check Strapi logs in Railway
3. Verify all environment variables are correct
4. Ensure database is running and accessible
