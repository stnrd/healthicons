import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LetrinaAlt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const LetrinaAlt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20C20 19.4477 20.4477 19 21 19H41C41.5523 19 42 19.4477 42 20C42 20.5523 41.5523 21 41 21H21C20.4477 21 20 20.5523 20 20Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42 23H12L12 28C12 29.5 13.7534 30 14.5 30V42H29V39H23.5V37H29V36.9401C36.2969 36.3509 42 31.4303 42 23Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6C6.89543 6 6 6.89543 6 8V10H18V8C18 6.89543 17.1046 6 16 6H8ZM18 12H6V25H18V12Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}