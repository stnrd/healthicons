// @ts-check
import antfu from '@antfu/eslint-config';

export default antfu({
  typescript: true,
  formatters: true,
  stylistic: {
    semi: true,
    overrides: {
      'style/arrow-parens': 'error',
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    },
  },
  javascript: {
    overrides: {
      'antfu/no-top-level-await': 'off',
    },
  },
  ignores: [
    'css/*.css',
    '**/.expo/',
    'packages/healthicons-flutter/.dart_tool/',
    'packages/healthicons-flutter/build/',
    'packages/healthicons-flutter/example/',
    'examples/',
  ],
  rules: {
    'style/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: [
          'block',
          'block-like',
          'cjs-export',
          'class',
          'multiline-block-like',
          'multiline-const',
          'multiline-expression',
          'multiline-let',
          'multiline-var',
        ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let'],
        next: [
          'block',
          'block-like',
          'cjs-export',
          'class',
        ],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'multiline-block-like',
          'multiline-const',
          'multiline-expression',
          'multiline-let',
          'multiline-var',
        ],
      },
    ],
  },
});
