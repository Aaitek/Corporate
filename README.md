# Aaitek Website

A modern React website with Strapi CMS backend, following the structure and design of Dotsquares.

## Features

- **React Frontend**: Modern, responsive React application with Vite
- **Strapi Backend**: Headless CMS for content management
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Responsive Design**: Mobile-first, fully responsive layout
- **Modern UI**: Clean, professional design following Dotsquares' aesthetic

## Main Menu Structure

- Services
- Products
- Hire Developers
- Partner Success (case-study driven)
- Managed Services
- Resources

## Getting Started

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Copy `.env.example` to `.env` and update the values:
```bash
cp .env.example .env
```

4. Install and setup PostgreSQL:
   ```bash
   # macOS (using Homebrew)
   brew install postgresql
   brew services start postgresql
   
   # Create database
   createdb aaitek
   ```

5. Configure PostgreSQL connection in `backend/.env`:
   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_NAME=aaitek
   DATABASE_USERNAME=postgres
   DATABASE_PASSWORD=your_postgres_password
   DATABASE_SSL=false
   ```

6. Start the Strapi server:
```bash
npm run develop
```

7. Access the admin panel at [http://localhost:1337/admin](http://localhost:1337/admin)

## Database

This project uses **PostgreSQL** as the database. Make sure PostgreSQL is installed and running:

### PostgreSQL Setup

1. **Install PostgreSQL:**
   ```bash
   # macOS (using Homebrew)
   brew install postgresql
   brew services start postgresql
   
   # Or download from: https://www.postgresql.org/download/
   ```

2. **Create the database:**
   ```bash
   createdb aaitek
   # Or using psql:
   psql -U postgres
   CREATE DATABASE aaitek;
   \q
   ```

3. **Verify PostgreSQL is running:**
   ```bash
   pg_isready
   # Or
   psql -U postgres -c "SELECT version();"
   ```

4. **Configure connection in `backend/.env`:**
   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_NAME=aaitek
   DATABASE_USERNAME=postgres
   DATABASE_PASSWORD=your_password
   DATABASE_SSL=false
   ```

## Project Structure

```
.
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── sections/     # Page sections
│   ├── pages/            # Page components
│   ├── utils/            # Utility functions
│   └── App.jsx           # Main app component
├── backend/              # Strapi backend
│   ├── src/
│   │   └── api/          # API content types
│   └── config/           # Strapi configuration
└── package.json
```

## Content Management

All content is managed through Strapi CMS. After setting up the backend:

1. Create an admin account in the Strapi admin panel
2. Configure permissions for public access
3. Add content through the admin interface

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:1337/api
```

## Build for Production

### Frontend
```bash
npm run build
```

### Backend
```bash
cd backend
npm run build
```

## Technologies Used

- React 18
- Vite
- React Router
- Tailwind CSS
- Strapi 4
- PostgreSQL
- Axios

## License

MIT

