import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Entry extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Entry({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM21 10H14V37H21V10ZM21 8H12V39H21V42.6126C21 43.2951 21.6687 43.7771 22.3162 43.5613L35.3162 39.2279C35.7246 39.0918 36 38.7097 36 38.2792V9.72076C36 9.29033 35.7246 8.90819 35.3162 8.77207L22.3162 4.43874C21.6687 4.2229 21 4.70487 21 5.38742V8ZM27 23C27 24.1046 26.5523 25 26 25C25.4477 25 25 24.1046 25 23C25 21.8954 25.4477 21 26 21C26.5523 21 27 21.8954 27 23Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}