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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 12C16 10.8954 16.8954 10 18 10L30 10C31.1046 10 32 10.8954 32 12C32 13.1046 31.1046 14 30 14L20 14L20 22L30 22C31.1046 22 32 22.8954 32 24C32 25.1046 31.1046 26 30 26L20 26L20 36C20 37.1046 19.1046 38 18 38C16.8954 38 16 37.1046 16 36L16 12Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}