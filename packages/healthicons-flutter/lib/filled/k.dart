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
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 23.1716L18 12C18 10.8954 17.1046 9.99999 16 9.99999C14.8954 10 14 10.8954 14 12L14 36C14 37.1046 14.8954 38 16 38C17.1046 38 18 37.1046 18 36L18 28.8284L20 26.8284L30.5858 37.4142C31.3668 38.1953 32.6332 38.1953 33.4142 37.4142C34.1953 36.6332 34.1953 35.3668 33.4142 34.5858L22.8284 24L33.4142 13.4142C34.1953 12.6332 34.1953 11.3668 33.4142 10.5858C32.6332 9.80473 31.3668 9.80473 30.5858 10.5858L18 23.1716Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}