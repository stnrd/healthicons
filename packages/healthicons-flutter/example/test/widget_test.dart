import 'package:flutter_test/flutter_test.dart';
import 'package:healthicons_flutter/filled/database.dart';

void main() {
  testWidgets('Find icon', (WidgetTester tester) async {
    await tester.pumpWidget(const App());

    expect(find.byType(Database), findsOneWidget);
  });
}
