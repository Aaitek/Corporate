module.exports = ({ env }) => {
  const isSSL = env('DATABASE_SSL', 'false') === 'true' || env.bool('DATABASE_SSL', false);
  
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'aaitek'),
        user: env('DATABASE_USERNAME', 'mac'),
        password: env('DATABASE_PASSWORD', ''),
        ssl: isSSL ? {
          rejectUnauthorized: false
        } : false,
      },
    },
  };
};

