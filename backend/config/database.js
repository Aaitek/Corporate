module.exports = ({ env }) => {
  // Railway provides PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD
  // Fallback to DATABASE_* variables if PG* variables are not available
  const host = env('PGHOST') || env('DATABASE_HOST', 'localhost');
  const port = env.int('PGPORT') || env.int('DATABASE_PORT', 5432);
  const database = env('PGDATABASE') || env('DATABASE_NAME', 'aaitek');
  const user = env('PGUSER') || env('DATABASE_USERNAME', 'mac');
  const password = env('PGPASSWORD') || env('DATABASE_PASSWORD', '');
  
  // Enable SSL for Railway PostgreSQL (production)
  const isSSL = env('DATABASE_SSL', 'true') === 'true' || env.bool('DATABASE_SSL', true);
  
  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: isSSL ? {
          rejectUnauthorized: false
        } : false,
      },
    },
  };
};

