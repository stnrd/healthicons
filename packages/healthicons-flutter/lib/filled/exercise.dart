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
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 14H36V34H32V25H16V34H12V14H16V23H32V14ZM6 23V17H10V31H6V25H4V23H6ZM44 25H42V31H38V17H42V23H44V25Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}