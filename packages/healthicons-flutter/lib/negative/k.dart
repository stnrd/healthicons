import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class K extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const K({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM18 12L18 23.1716L30.5858 10.5858C31.3668 9.80473 32.6332 9.80473 33.4142 10.5858C34.1953 11.3668 34.1953 12.6332 33.4142 13.4142L22.8284 24L33.4142 34.5858C34.1953 35.3668 34.1953 36.6332 33.4142 37.4142C32.6332 38.1953 31.3668 38.1953 30.5858 37.4142L20 26.8284L18 28.8284V36C18 37.1046 17.1046 38 16 38C14.8954 38 14 37.1046 14 36L14 12C14 10.8954 14.8954 10 16 9.99999C17.1046 9.99999 18 10.8954 18 12Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}