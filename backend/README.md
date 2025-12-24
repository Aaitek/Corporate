# Aaitek Strapi Backend

This is the Strapi backend for the Aaitek website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env` and update the values:
```bash
cp .env.example .env
```

3. Configure PostgreSQL connection in `.env`:
```env
# PostgreSQL Configuration
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=aaitek
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your_password
DATABASE_SSL=false
```

**Note:** This project is configured to use PostgreSQL. Make sure PostgreSQL is installed and the database is created before starting Strapi.

4. Generate secure keys for your `.env` file:
```bash
openssl rand -base64 32
```

5. Start the development server:
```bash
npm run develop
```

6. Access the admin panel at `http://localhost:1337/admin`

## Database

This project uses **PostgreSQL** as the database.

### PostgreSQL Setup

1. **Install PostgreSQL:**
   ```bash
   # macOS (using Homebrew)
   brew install postgresql
   brew services start postgresql
   
   # Linux (Ubuntu/Debian)
   sudo apt-get install postgresql postgresql-contrib
   sudo systemctl start postgresql
   
   # Or download from: https://www.postgresql.org/download/
   ```

2. **Create the database:**
   ```bash
   # Using createdb command
   createdb aaitek
   
   # Or using psql:
   psql -U postgres
   CREATE DATABASE aaitek;
   \q
   ```

3. **Verify PostgreSQL is running:**
   ```bash
   pg_isready
   # Or check version
   psql -U postgres -c "SELECT version();"
   ```

4. **Configure connection in `.env`:**
   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_NAME=aaitek
   DATABASE_USERNAME=postgres
   DATABASE_PASSWORD=your_postgres_password
   DATABASE_SSL=false
   ```

### Troubleshooting Database Connection

- **Connection refused:** Make sure PostgreSQL service is running
- **Authentication failed:** Check username and password in `.env`
- **Database doesn't exist:** Create it using `createdb aaitek`
- **Port 5432 in use:** Check if another PostgreSQL instance is running

## Content Types

The following content types are available:

- **Service**: Services offered by Aaitek
- **Product**: Products offered by Aaitek
- **Case Study**: Partner success case studies
- **Testimonial**: Client testimonials
- **Article**: Blog articles and resources
- **Managed Service**: Managed services offered

## API Endpoints

All content types are available via the REST API at:
- `http://localhost:1337/api/services`
- `http://localhost:1337/api/products`
- `http://localhost:1337/api/case-studies`
- `http://localhost:1337/api/testimonials`
- `http://localhost:1337/api/articles`
- `http://localhost:1337/api/managed-services`

## Permissions

Make sure to configure permissions in the Strapi admin panel:
1. Go to Settings > Users & Permissions Plugin > Roles
2. Edit the Public role
3. Enable find and findOne for all content types

