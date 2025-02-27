import { promises as fs } from 'node:fs';
import os from 'node:os';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import decompress from 'decompress';

import { Listr } from 'listr2';
import fetch from 'node-fetch';

const url = 'https://healthicons.org/icons.zip';
const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const healthiconsIconsDir = path.join(rootDir, 'icons');

const tasks = new Listr(
  [
    {
      title: 'Create temp directory',
      task: async (ctx) => {
        try {
          ctx.tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'download'));
        } catch (err) {
          ctx.skip = true;
          throw new Error(err.message);
        }
      },
    },
    {
      title: 'Download and extract icons icons',
      skip: (ctx) => ctx.skip,
      task: async (ctx) => {
        try {
          const resp = await fetch(url);
          const buffer = await resp.buffer();

          await decompress(buffer, ctx.tmpDir);
        } catch (err) {
          ctx.skip = true;
          throw new Error(err.message);
        }
      },
    },
    {
      title: 'Backup existing icons',
      skip: (ctx) => ctx.skip,
      task: async (_) => {
        try {
          await fs.rename(healthiconsIconsDir, 'icons.bak');
        } catch (err) {
          throw new Error(err.message);
        }
      },
    },
    {
      title: 'Move downloaded icons to icons directory',
      skip: (ctx) => ctx.skip,
      task: async (ctx) => {
        try {
          // Move over svg folder
          // The only folder needed
          await fs.rename(
            path.join(ctx.tmpDir, 'icons', 'svg'),
            healthiconsIconsDir,
          );

          // Move over metadata.json
          await fs.rename(
            path.join(ctx.tmpDir, 'icons', 'meta-data.json'),
            path.join(healthiconsIconsDir, 'meta-data.json'),
          );
        } catch (err) {
          ctx.skip = true;
          throw new Error(err.message);
        }
      },
    },
    {
      title: 'Remove backup of existing icons',
      skip: (ctx) => ctx.skip,
      task: async () => {
        try {
          await fs.rmdir(path.join(rootDir, 'icons.bak'), { recursive: true });
        } catch (err) {
          throw new Error(err.message);
        }
      },
    },
  ],
  {
    concurrent: false,
    exitOnError: false,
    rendererOptions: { collapse: false, collapseErrors: false },
  },
);

await tasks.run();
