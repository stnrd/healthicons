import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class L extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const L({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12V36C16 37.1046 16.8954 38 18 38H30C31.1046 38 32 37.1046 32 36C32 34.8954 31.1046 34 30 34H20V12Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}