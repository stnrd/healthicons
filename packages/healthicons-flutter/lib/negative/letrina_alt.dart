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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM21 19C20.4477 19 20 19.4477 20 20C20 20.5523 20.4477 21 21 21H41C41.5523 21 42 20.5523 42 20C42 19.4477 41.5523 19 41 19H21ZM12 25H6V12H18V23H42C42 31.4303 36.2969 36.3509 29 36.9401V37H23.5V39H29V42H14.5V30C13.7534 30 12 29.5 12 28L12 25ZM6 8C6 6.89543 6.89543 6 8 6H16C17.1046 6 18 6.89543 18 8V10H6V8Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}