# React Health Icons

This package provides a simple and easy-to-use interface for accessing all the health icons within your React projects. You can see the full list of icons at [healthicons](https://healthicons.org/)

`healthicons-react` is an open source package that exports these Health Icons as React components that can be used in all of your React projects.

## Installation

```
yarn add healthicons-react
```

or

```
npm i healthicons-react
```

## Usage

By default `filled` icons are imported. To import another variant use the following syntax `from healthicons-react/[variant_name]` instead.

For the material icons(24px), use `from healthicons-react-native/[variant_name]-24px`.

```javascript
import { BloodBag } from 'healthicons-react';
import React from 'react';

function App() {
  return <BloodBag />;
}

export default App;
```

Icons can take any standard SVG properties as optional props, e.g.

```javascript
<BloodBag color="red" height={36} width={36} />;
```

Default values for the most common props are given below:

| Prop name   | Default value  |
| ----------- | -------------- |
| color       | "currentColor" |
| width       | "1.5em"        |
| height      | "1.5em"        |
| strokeWidth | 1.5            |
| fill        | "none"         |

## HealthIconsProvider

Tired of specifying the same props for every single icon, every time you use them? So were we. Use HealthIconsProvider to set the default icon props for everything inside HealthIconsProvider.

```tsx
import {
  BloodBag,
  HealthIconsProvider,
} from 'healthicons-react-native/dist/filled';
return (
  <HealthIconsProvider
    iconProps={{
      color: '#AAAAAA',
      strokeWidth: 1,
      width: '1em',
      height: '1em',
    }}
  >
    <SomeOtherContainer>
      <BloodBag />
    </SomeOtherContainer>
  </HealthIconsProvider>
);
```

## Naming conventions for icons

The React components in this package are named using the PascalCase convention, which is a variation of their reference names (e.g. add-circle-outline becomes AddCircleOutline). However, some names have been modified to comply with React component naming rules or to match the branding conventions of organizations, such as GitHub. The exceptions to the naming convention are as follows:

| HealthIcons Name | React Native Component |
| ---------------- | ---------------------- |
| `blood-bag`      | `BloodBag`             |
