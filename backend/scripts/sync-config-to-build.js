'use strict';
/**
 * Strapi treats tsconfig outDir as distDir and loads config from ${outDir}/config.
 * Copy ./config → ./build/config so database.js and other config are found at runtime.
 */
const fs = require('fs/promises');
const path = require('path');

const root = path.join(__dirname, '..');

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const src = path.join(root, 'config');
  const dest = path.join(root, 'build', 'config');
  const apiSrc = path.join(root, 'src', 'api');
  const apiDest = path.join(root, 'build', 'src', 'api');

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

  // Strapi dev (TypeScript) cleans outDir before compiling, which can delete build/config.
  // Wait briefly so this script can be used as a "post-clean" step when chained.
  if (process.env.SYNC_CONFIG_DELAY_MS) {
    const ms = Number(process.env.SYNC_CONFIG_DELAY_MS);
    if (Number.isFinite(ms) && ms > 0) {
      await sleep(ms);
    }
  }

  await fs.mkdir(path.join(root, 'build'), { recursive: true });
  await fs.cp(src, dest, { recursive: true, force: true });

  // Strapi content-types rely on schema.json files. When using TypeScript outDir as distDir,
  // tsc doesn't copy JSON assets, so we copy them into build/src/api.
  try {
    await fs.stat(apiSrc);
    await fs.mkdir(path.join(root, 'build', 'src'), { recursive: true });
    await fs.cp(apiSrc, apiDest, {
      recursive: true,
      force: true,
      filter: (p) => {
        // Always include directories
        if (!path.extname(p)) return true;
        // Only copy JSON assets (schemas)
        return path.extname(p).toLowerCase() === '.json';
      },
    });
  } catch {
    // If src/api doesn't exist, ignore
  }
}

main().catch((err) => {
  console.error('[sync-config-to-build]', err);
  process.exit(1);
});

