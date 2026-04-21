'use strict';

/**
 * In Strapi TS dev mode, Strapi cleans the outDir (build/) before compiling.
 * That can delete build/config right after we sync it.
 *
 * This helper waits a moment, then re-syncs config once Strapi has finished cleaning,
 * so database.js is present when Strapi boots.
 */

const path = require('path');
const fs = require('fs/promises');
const { spawn } = require('child_process');

const root = path.join(__dirname, '..');

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function runSyncOnce() {
  const child = spawn(process.execPath, [path.join(root, 'scripts', 'sync-config-to-build.js')], {
    cwd: root,
    stdio: 'inherit',
    env: process.env,
  });

  await new Promise((resolve, reject) => {
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`sync-config-to-build exited with ${code}`));
    });
    child.on('error', reject);
  });
}

async function main() {
  const buildConfigDb = path.join(root, 'build', 'config', 'database.js');

  // Strapi's TS develop flow can clean build/ after this process starts.
  // So instead of syncing once (which might happen too early), keep syncing
  // for a short window until build/config/database.js exists and stays present.
  const start = Date.now();
  const maxMs = 25_000;

  // Initial small delay so Strapi can begin its startup/clean.
  await sleep(500);

  while (Date.now() - start < maxMs) {
    try {
      await fs.access(buildConfigDb);
      // If it exists, we still do a couple of extra sync passes to survive a late clean.
      await sleep(750);
    } catch {
      // Missing → sync immediately
      try {
        await runSyncOnce();
      } catch (err) {
        // Keep trying within the window
        console.error('[sync-config-after-clean] sync attempt failed:', err?.message || err);
      }
      await sleep(500);
    }
  }
}

main().catch((err) => {
  console.error('[sync-config-after-clean]', err);
  // Do not fail Strapi dev process if this helper fails.
});

