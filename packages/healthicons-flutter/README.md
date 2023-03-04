# Flutter Health Icons

This package provides a simple and easy-to-use interface for accessing all the health icons within your Flutter projects. You can see the full list of icons at [healthicons](https://healthicons.org/)

`healthicons-flutter` is an open source package that exports these Health Icons as Flutter widgets that can be used in all of your Flutter projects.

## Installation

```
flutter pub add healthicons-flutter
```

## Usage

```dart
import 'package:flutter/material.dart';
import 'package:healthicons_flutter/healthicons_flutter.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({ super.key });

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: DemoPage(),
    );
  }
}

class DemoPage extends StatelessWidget {
  const DemoPage({ super.key });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: const Healthicons(),
      ),
    );
  }
}
```

Icons can take any standard SVG properties as optional props, e.g.

Default values for the most common props are given below:

| Prop name | Default value  |
| --------- | -------------- |
| color     | "currentColor" |
| width     | "1.5em"        |
| height    | "1.5em"        |

## Naming conventions for icons

The React components in this package are named using the PascalCase convention, which is a variation of their reference names (e.g. add-circle-outline becomes AddCircleOutline). However, some names have been modified to comply with React component naming rules or to match the branding conventions of organizations, such as GitHub. The exceptions to the naming convention are as follows:

| HealthIcons Name | React Native Component |
| ---------------- | ---------------------- |
| `blood-bag`      | `BloodBag`             |
