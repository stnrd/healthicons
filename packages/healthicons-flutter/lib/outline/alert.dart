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
<path d="M21 8C21 6.34315 22.3431 5 24 5C25.6569 5 27 6.34315 27 8V30C27 31.6569 25.6569 33 24 33C22.3431 33 21 31.6569 21 30V8ZM21 40C21 38.3431 22.3431 37 24 37C25.6569 37 27 38.3431 27 40C27 41.6569 25.6569 43 24 43C22.3431 43 21 41.6569 21 40Z" stroke="#333333" stroke-width="2"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}