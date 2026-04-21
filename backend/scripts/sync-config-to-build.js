'use strict';
/**
 * Strapi treats tsconfig outDir as distDir and loads config from ${outDir}/config.
 * Copy ./config → ./build/config so database.js and other config are found at runtime.
 */
const fs = require('fs/promises');
const path = require('path');

const root = path.join(__dirname, '..');

async function main() {
  const src = path.join(root, 'config');
  const dest = path.join(root, 'build', 'config');

  try {
    await fs.stat(src);
  } catch {
    console.error(
      '[sync-config-to-build] Missing folder:',
      src,
      '\nAdd Strapi config here (database.js, server.js, middlewares.js, admin.js, etc.) or pull the latest from your repo.'
    );
    process.exit(1);
  }

  await fs.mkdir(path.join(root, 'build'), { recursive: true });
  await fs.cp(src, dest, { recursive: true, force: true });
}

main().catch((err) => {
  console.error('[sync-config-to-build]', err);
  process.exit(1);
});

