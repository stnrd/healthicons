import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Y extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Y({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.2804 10.4636C36.129 11.1707 36.2436 12.4319 35.5365 13.2804L26.0001 24.7242V36.0001C26.0001 37.1046 25.1046 38.0001 24.0001 38.0001C22.8955 38.0001 22.0001 37.1046 22.0001 36.0001V24.7242L12.4636 13.2804C11.7565 12.4319 11.8711 11.1707 12.7197 10.4636C13.5682 9.75648 14.8294 9.87113 15.5365 10.7197L24.0001 20.876L32.4636 10.7197C33.1707 9.87113 34.4319 9.75648 35.2804 10.4636Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}