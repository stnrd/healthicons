import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class F extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const F({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM18 10C16.8954 10 16 10.8954 16 12V36C16 37.1046 16.8954 38 18 38C19.1046 38 20 37.1046 20 36V26H30C31.1046 26 32 25.1046 32 24C32 22.8954 31.1046 22 30 22H20V14H30C31.1046 14 32 13.1046 32 12C32 10.8954 31.1046 10 30 10H18Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}