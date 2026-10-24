import fs from 'node:fs/promises';
import path from 'node:path';
import { fromHtml } from 'hast-util-from-html';
import { toHtml } from 'hast-util-to-html';
import { build, defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import solidPlugin from 'vite-plugin-solid';
import { generateExport } from '../../lib/import-export.js';
import contextTemplate from './resources/context-template.js';
import iconTemplate from './resources/icon-template.js';

function removeFillFromPaths(node) {
  if (node.type === 'element') {
    if (node.tagName === 'path' && node.properties.fill) {
      delete node.properties.fill;
    }

    if (node.children) {
      node.children.forEach(removeFillFromPaths);
    }
  }
}

function preprocessSvg(iconContent) {
  const iconAst = fromHtml(iconContent, { fragment: true });

  removeFillFromPaths(iconAst.children[0]);

  iconAst.children[0].properties.color = 'currentColor';
  iconAst.children[0].properties.fill = 'currentColor';

  return toHtml(iconAst);
}

export default async (ctx, target) => {
  const promises = [];

  const outDir = path.join(target.path, 'src');

  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(outDir, { recursive: true });

  await fs.writeFile(
    path.join(outDir, 'HealthIconsContext.tsx'),
    contextTemplate(),
  );

  const mainIndexContent = [
    generateExport(
      ['HealthIconsContext', 'HealthIconsProvider'],
      './HealthIconsContext.tsx',
    ),
  ];

  for (const [variant, icons] of Object.entries(ctx.icons)) {
    const variantOutDir = path.join(outDir, variant);
    await fs.mkdir(variantOutDir, { recursive: true });

    const variantIndexContent = [
      generateExport(
        ['HealthIconsContext', 'HealthIconsProvider'],
        '../HealthIconsContext.tsx',
      ),
    ];

    const generateIconFile = async (src, iconName, solidFileName) => {
      const iconContent = await fs.readFile(src, 'utf8');
      const transformedIcon = preprocessSvg(iconContent);

      const componentContent = iconTemplate(
        '../HealthIconsContext.tsx',
        iconName,
        transformedIcon,
      );

      const solidPath = path.join(variantOutDir, solidFileName);

      return fs.writeFile(solidPath, componentContent);
    };

    for (const icon of icons) {
      const solidFileName = `${icon.pascalName}.tsx`;

      promises.push(
        generateIconFile(icon.path, icon.pascalName, solidFileName),
      );

      const mainIndexExportName
        = variant === ctx.global.defaultVariant
          ? icon.pascalName
          : [icon.pascalName, 'as', icon.pascalNameVariant].join(' ');

      mainIndexContent.push(
        generateExport(
          mainIndexExportName,
          `./${variant}/${solidFileName}`,
        ),
      );

      variantIndexContent.push(
        generateExport(icon.pascalName, `./${solidFileName}`),
      );
    }

    promises.push(
      fs.writeFile(path.join(variantOutDir, 'index.ts'), variantIndexContent),
    );
  }

  promises.push(fs.writeFile(path.join(outDir, 'index.ts'), mainIndexContent));

  await Promise.all(promises);

  const baseConfig = {
    root: target.path,
    logLevel: 'silent',
    build: {
      outDir: 'dist',
      lib: {
        entry: path.join('src', 'index.ts'),
        fileName: (format, entryName) => {
          return format === 'cjs' ? `${entryName}.js` : `esm/${entryName}.mjs`;
        },
        formats: ['cjs', 'es'],
      },
      rollupOptions: {
        external: ['solid-js'],
      },
    },
    plugins: [
      solidPlugin(),
      dts({
        include: ['src'],
      }),
    ],
  };

  await build(defineConfig(baseConfig));

  for (const variant of Object.keys(ctx.icons)) {
    baseConfig.build.outDir = path.join('dist', variant);
    baseConfig.build.lib.entry = path.join('src', variant, 'index.ts');

    await build(defineConfig(baseConfig));
  }
};
