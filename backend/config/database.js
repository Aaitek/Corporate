'use strict';

/**
 * Parse postgres:// or postgresql:// URLs for Knex/pg (Railway DATABASE_PUBLIC_URL).
 */
function parseDatabaseUrl(databaseUrl) {
  try {
    const u = new URL(databaseUrl);
    const pathname = u.pathname.replace(/^\//, '');
    const port = u.port ? parseInt(u.port, 10) : 5432;
    return {
      host: u.hostname,
      port,
      database: pathname || 'postgres',
      user: decodeURIComponent(u.username || ''),
      password: decodeURIComponent(u.password || ''),
    };
  } catch {
    return null;
  }
}

module.exports = ({ env }) => {
  const databaseUrl = env('DATABASE_PUBLIC_URL') || env('DATABASE_URL');

  if (databaseUrl) {
    const parsed = parseDatabaseUrl(databaseUrl);
    if (!parsed) {
      throw new Error(
        'Invalid DATABASE_PUBLIC_URL / DATABASE_URL — must be a postgres:// or postgresql:// URL.'
      );
    }

    // Public proxy URLs (e.g. *.proxy.rlwy.net) require TLS. Override with DATABASE_SSL=false if needed.
    const hasExplicitSSL = process.env.DATABASE_SSL !== undefined;
    const isSSL = hasExplicitSSL
      ? env('DATABASE_SSL', 'false') === 'true' || env.bool('DATABASE_SSL', false)
      : true;

    return {
      connection: {
        client: 'postgres',
        connection: {
          host: parsed.host,
          port: parsed.port,
          database: parsed.database,
          user: parsed.user,
          password: parsed.password,
          ssl: isSSL
            ? {
                rejectUnauthorized: false,
              }
            : false,
        },
      },
    };
  }

  // Railway provides PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD
  // Fallback to DATABASE_* variables if PG* variables are not available
  const host = env('PGHOST') || env('DATABASE_HOST', 'localhost');
  const port = env.int('PGPORT') || env.int('DATABASE_PORT', 5432);
  const database = env('PGDATABASE') || env('DATABASE_NAME', 'aaitek');
  const user = env('PGUSER') || env('DATABASE_USERNAME', 'postgres');
  const password = env('PGPASSWORD') || env('DATABASE_PASSWORD', '');

  // Local Postgres usually has no TLS; managed DBs (e.g. Railway) need SSL.
  // Set DATABASE_SSL=true|false to override. If unset: SSL off for localhost only.
  const isLocalHost =
    host === 'localhost' ||
    host === '127.0.0.1' ||
    host === '::1';
  const hasExplicitSSL = process.env.DATABASE_SSL !== undefined;
  const isSSL = hasExplicitSSL
    ? env('DATABASE_SSL', 'false') === 'true' || env.bool('DATABASE_SSL', false)
    : !isLocalHost;

  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: isSSL
          ? {
              rejectUnauthorized: false,
            }
          : false,
      },
    },
  };
};
