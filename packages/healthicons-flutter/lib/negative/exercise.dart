import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Exercise extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Exercise({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM36 14H32V23H16V14H12V34H16V25H32V34H36V14ZM6 17V23H4V25H6V31H10V17H6ZM42 25H44V23H42V17H38V31H42V25Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}