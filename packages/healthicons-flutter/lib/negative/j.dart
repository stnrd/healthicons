import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class J extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const J({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM32 12C32 10.8954 31.1046 10 30 10C28.8954 10 28 10.8954 28 12V30C28 32.2092 26.2091 34 24 34C21.7909 34 20 32.2092 20 30C20 28.8954 19.1046 28 18 28C16.8954 28 16 28.8954 16 30C16 34.4183 19.5817 38 24 38C28.4183 38 32 34.4183 32 30V12Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}