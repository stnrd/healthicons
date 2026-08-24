# Solid.js Healthicons

This package provides Healthicons as Solid.js components. See the full icon list at [healthicons.org](https://healthicons.org/).

## Installation

```bash
yarn add healthicons-solid-js solid-js
```

or

```bash
npm i healthicons-solid-js solid-js
```

## Usage

```tsx
import { BloodBag } from 'healthicons-solid-js';
import { BloodBagOutline24px } from 'healthicons-solid-js';

export function Example() {
  return (
  <>
    <BloodBag width={24} height={24} />
    <BloodBagOutline24px color="red" />
  </>
  );
}
```

## HealthIconsProvider

Set default icon props for all icons inside the provider:

```tsx
import { HealthIconsProvider, BloodBag } from 'healthicons-solid-js';

export function Example() {
  return (
    <HealthIconsProvider
      iconProps={{
        color: '#1E441E',
        width: '2em',
        height: '2em',
      }}
    >
      <BloodBag />
    </HealthIconsProvider>
  );
}
```

## Variant subpaths

Import from a specific variant for smaller bundles:

```tsx
import { BloodBag } from 'healthicons-solid-js/filled';
import { BloodBag as BloodBagOutline } from 'healthicons-solid-js/outline';
```
