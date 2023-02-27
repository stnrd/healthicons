<div align="center">
    <image src="assets/og_image.png">
</div>

<div align="center">
  <a href="https://github.com/stnrd/healthicons/releases">
    <img src="https://img.shields.io/github/v/release/stnrd/healthicons?style=flat-square" alt="Version" />
  </a>
  <a href="https://www.npmjs.com/package/healthicons-react">
    <img src="https://img.shields.io/npm/dm/healthicons-react?color=98E8F3&label=react&style=flat-square" alt="React Library" />
  </a>
  <a href="https://www.npmjs.com/package/healthicons-react-native">
    <img src="https://img.shields.io/npm/dm/healthicons-react?color=98E8F3&label=react-native&style=flat-square" alt="React Native Library" />
  </a>
  <a href="https://github.com/stnrd/healthicons/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/stnrd/healthicons?style=flat-square" alt="License" />
  </a>
</div>

<div align="center">
  Introducing our new React and React Native Icon Wrapper package for <a href="https://healthicons.org"><strong>Health Icons</strong> </a>! This package provides a simple and easy-to-use interface for accessing all the health icons within your React or React Native projects. This package is perfect for any health-related application and will save you time and effort in creating and maintaining your application's iconography.
</div>

<div align="center">
  <a href="https://healthicons.org"><strong>Browse at healthicons.org &rarr;</strong></a>
</div>

## Basic

The icons are available via the `healthicons` NPM package:

```bash
yarn add healthicons
# or
npm i healthicons
```

Example usage:

```js
import HealthIcons from "healthicons/icons/healthicons.svg";
```

## React

A React library is available to install under the name `healthicons-react`. For more details, see the package [README](./packages/healthicons-react).

## React Native

A React Native library is available to install under the name `healthicons-react-native`. For more details, see the package [README](./packages/healthicons-react-native).

## CSS

Import the CSS File:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/stnrd/healthicons@main/css/healthicons.css"
/>
```

Here is an example in HTML:

```html
<i class="healthicons-filled-blood-bag"></i>
```

The class must always be "healthicons-" following by the icon type(filled, outline, negative). You can find the names of the icons [here](https://healthicons.org/).

The icons are set to be displayed as inline-block and will use the current font size as their default. To modify this behavior, you can make changes to the ::before styles of the element where the icons are applied as a mask.

## Health Icons

I would like to extend my gratitude to the creators and contributors of the Health Icons for their hard work in releasing such a comprehensive collection of icons for use in healthcare related projects.

## License

MIT License
