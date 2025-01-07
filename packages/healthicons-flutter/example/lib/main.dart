import 'dart:math';

import 'package:flutter/material.dart';
import 'package:healthicons_flutter/filled/database.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        body: Center(child: _InteractiveIcon()),
      ),
    );
  }
}

class _InteractiveIcon extends StatefulWidget {
  const _InteractiveIcon();

  @override
  State<_InteractiveIcon> createState() => _InteractiveIconState();
}

class _InteractiveIconState extends State<_InteractiveIcon> {
  Color? color;
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: _changeColor,
      child: Database(
        color: color,
      ),
    );
  }

  void _changeColor() {
    setState(() {
      color = Colors.primaries[Random().nextInt(Colors.primaries.length)];
    });
  }
}
