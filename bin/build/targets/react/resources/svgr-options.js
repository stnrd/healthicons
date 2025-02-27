/** @type {import('@svgr/core').Config} */
export const svgrOptions = {
  plugins: ['@svgr/plugin-jsx'],
  icon: true,
  ref: true,
  typescript: true,
  svgProps: {
    width: '1.5em',
    height: '1.5em',
    color: 'currentColor',
    fill: 'currentColor',
  },
  jsx: {
    babelConfig: {
      plugins: [
        [
          '@svgr/babel-plugin-remove-jsx-attribute',
          {
            elements: ['path'],
            attributes: ['fill'],
          },
          'remove-fill',
        ],
      ],
    },
  },
};

/** @type {import('@svgr/core').Config} */
export const nativeSvgrOptions = {
  ...svgrOptions,
  native: true,
  jsx: {
    babelConfig: {
      plugins: [
        [
          '@svgr/babel-plugin-remove-jsx-attribute',
          {
            elements: ['Path'],
            attributes: ['fill'],
          },
          'remove-fill',
        ],
        [
          '@svgr/babel-plugin-remove-jsx-attribute',
          {
            elements: ['Svg'],
            attributes: ['xmlns'],
          },
        ],
      ],
    },
  },
};
