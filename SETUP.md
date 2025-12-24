# Setup Guide for Aaitek Website

This guide will help you set up both the React frontend and Strapi backend.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## Step 1: Install Frontend Dependencies

```bash
npm install
```

## Step 2: Setup Frontend Environment

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Update `.env` with your API URL (default is already set for local development)

## Step 3: Setup Strapi Backend

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Generate secure keys for your `.env` file. You can use this command:
```bash
# Generate APP_KEYS (run 4 times)
openssl rand -base64 32

# Generate API_TOKEN_SALT
openssl rand -base64 32

# Generate ADMIN_JWT_SECRET
openssl rand -base64 32

# Generate TRANSFER_TOKEN_SALT
openssl rand -base64 32

# Generate JWT_SECRET
openssl rand -base64 32
```

Or use an online generator and update your `.env` file with:
```
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-key-1,your-key-2,your-key-3,your-key-4
API_TOKEN_SALT=your-salt
ADMIN_JWT_SECRET=your-secret
TRANSFER_TOKEN_SALT=your-transfer-salt
JWT_SECRET=your-jwt-secret

# PostgreSQL Configuration
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=aaitek
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your_postgres_password
DATABASE_SSL=false
```

**Note:** Before starting Strapi, make sure:
1. PostgreSQL is installed and running
2. Create the database: `createdb aaitek` (or using psql: `CREATE DATABASE aaitek;`)
3. Update the database credentials in `.env` file

## Step 4: Start Strapi Backend

1. From the `backend` directory:
```bash
npm run develop
```

2. Wait for Strapi to start (this may take a minute on first run)

3. Open http://localhost:1337/admin in your browser

4. Create your admin account

5. Configure permissions:
   - Go to Settings > Users & Permissions Plugin > Roles
   - Click on "Public" role
   - Enable `find` and `findOne` permissions for:
     - Service
     - Product
     - Case Study
     - Testimonial
     - Article
     - Managed Service

## Step 5: Start React Frontend

1. Open a new terminal window (keep Strapi running)

2. From the root directory:
```bash
npm run dev
```

3. Open http://localhost:3000 in your browser

## Step 6: Add Content

1. Go to the Strapi admin panel (http://localhost:1337/admin)

2. Start adding content:
   - **Services**: Add your services
   - **Products**: Add your products
   - **Case Studies**: Add partner success stories
   - **Testimonials**: Add client testimonials
   - **Articles**: Add blog posts and resources
   - **Managed Services**: Add managed service offerings

## Troubleshooting

### Port Already in Use
If port 3000 or 1337 is already in use:
- Frontend: Change port in `vite.config.js`
- Backend: Change PORT in `backend/.env`

### CORS Errors
Make sure the frontend URL is added to CORS origins in `backend/config/middlewares.js`

### Database Issues
Strapi uses PostgreSQL. If you encounter database issues:
- Make sure PostgreSQL is running: `pg_isready` or check service status
- Verify database exists: `psql -l` (should list `aaitek` database)
- Check your database credentials in `backend/.env`
- Test connection: `psql -U postgres -d aaitek`
- Ensure PostgreSQL is listening on port 5432 (default)

## Production Build

### Frontend
```bash
npm run build
```

### Backend
```bash
cd backend
npm run build
npm start
```

## Next Steps

1. Customize the content in Strapi
2. Update the logo and branding
3. Add your actual content from the Excel file
4. Configure production environment variables
5. Deploy to your hosting platform

