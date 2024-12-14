# Healthicons - Flutter

[![Pub Version](https://img.shields.io/pub/v/healthicons_flutter?style=flat-square)](https://pub.dev/packages/healthicons_flutter)
[![Pub Popularity](https://img.shields.io/pub/popularity/healthicons_flutter?style=flat-square)](https://pub.dev/packages/healthicons_flutter/score)
[![License](https://img.shields.io/github/license/healthicons-icons/healthicons?style=flat-square)](https://github.com/healthicons-icons/healthicons/blob/main/packages/healthicons-flutter/LICENSE)

This package provides a simple and easy-to-use interface for accessing all the healthicons within your Flutter projects. You can see the full list of icons at [healthicons](https://healthicons.org/)

`healthicons_flutter` is an open source package that exports these icons as Flutter widgets (`flutter_svg`) that can be used in all of your Flutter projects.

## Installation

```
flutter pub add healthicons_flutter
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
        child: const healthicons(),
      ),
    );
  }
}
```

Default values for the most common props are given below:

| Prop name | Default value  |
| --------- | -------------- |
| color     | "currentColor" |
| width     | "1.5em"        |
| height    | "1.5em"        |

## Icon names

The Flutter widges are named as PascalCase variations of their reference names (i.e. `ui_menu_grid` becomes `UiMenuGrid`).
