import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class E extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const E({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 12C16 10.8954 16.8954 10 18 10H30C31.1046 10 32 10.8954 32 12C32 13.1046 31.1046 14 30 14H20V22H30C31.1046 22 32 22.8954 32 24C32 25.1046 31.1046 26 30 26H20V34H30C31.1046 34 32 34.8954 32 36C32 37.1046 31.1046 38 30 38H18C16.8954 38 16 37.1046 16 36V12Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}