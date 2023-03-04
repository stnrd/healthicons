import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Z extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Z({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM14 14L29.7299 14L12.4636 34.7196C11.9668 35.3158 11.8597 36.1455 12.1888 36.8483C12.518 37.5511 13.224 38 14 38H34C35.1046 38 36 37.1046 36 36C36 34.8954 35.1046 34 34 34H18.2701L35.5365 13.2804C36.0333 12.6842 36.1404 11.8545 35.8112 11.1517C35.482 10.4489 34.7761 10 34 10L14 10C12.8955 10 12 10.8954 12 12C12 13.1046 12.8955 14 14 14Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}