// Alternative SQLite configuration (simplest option - no database setup needed)
// To use this, rename this file to database.js or copy its contents to database.js

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    },
    useNullAsDefault: true,
  },
});

