# Vue Healthicons

This package provides a simple and easy-to-use interface for accessing all the healthicons within your Vue projects. You can see the full list of icons at [healthicons](https://healthicons.org/)

`healthicons-vue` is an open source package that exports these Healthicons as Vue.js components that can be used in all of your Vue projects.

## Installation

```bash
yarn add healthicons-vue
```

or

```bash
npm i healthicons-vue
```

## Usage

### Vue 3

```javascript
<script setup>
  import { BloodBag } from 'healthicons-vue';
  // importing 24px icons
  import { BloodBagOutline24px } from 'healthicons-vue';
</script>

<template>
  <BloodBag />
</template>
```

### Vue 2

```javascript
<script>
  import { BloodBag } from 'healthicons-vue';

  export default {
      components: {
          BloodBag
      }
  }
</script>

<template>
  <BloodBag />
</template>
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

```javascript
<script setup>
import { HealthiconsProvider, Bloodbag } from 'healthicons-vue';
</script>

<template>
  <HealthiconsProvider
    :icon-props="{
      'color': '#AAAAAA',
      'stroke-width': 1,
      'width': '1em',
      'height': '1em',
    }"
  >
    <Container>
      <Bloodbag />
    </Container>
  </HealthiconsProvider>
</template>
```

## Naming conventions for icons

The Vue components in this package are named using the PascalCase convention, which is a variation of their reference names (e.g. add-circle-outline becomes AddCircleOutline).

| HealthIcons Name | Vue Component          |
| ---------------- | ---------------------- |
| `blood-bag`      | `BloodBag`             |
