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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM35.5365 13.2804C36.2436 12.4319 36.129 11.1707 35.2804 10.4636C34.4319 9.75648 33.1707 9.87113 32.4636 10.7197L24 20.876L15.5365 10.7197C14.8294 9.87113 13.5682 9.75648 12.7197 10.4636C11.8711 11.1707 11.7565 12.4319 12.4636 13.2804L22 24.7242V36.0001C22 37.1046 22.8955 38.0001 24 38.0001C25.1046 38.0001 26 37.1046 26 36.0001V24.7242L35.5365 13.2804Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}