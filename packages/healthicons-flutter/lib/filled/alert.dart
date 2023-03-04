import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Alert extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Alert({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 7C21 5.34315 22.3431 4 24 4C25.6569 4 27 5.34315 27 7V31C27 32.6569 25.6569 34 24 34C22.3431 34 21 32.6569 21 31V7Z" fill="#333333"/>
<path d="M21 41C21 39.3431 22.3431 38 24 38C25.6569 38 27 39.3431 27 41C27 42.6569 25.6569 44 24 44C22.3431 44 21 42.6569 21 41Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}