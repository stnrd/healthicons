import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PpeGown extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PpeGown({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM35.3404 8.52595C35.096 5.95978 32.9407 4 30.3629 4H27C27 5.65685 25.6569 7 24 7C22.3432 7 21 5.65685 21 4H17.6372C15.0594 4 12.9041 5.95977 12.6598 8.52595L11.2131 23.7156C11.1282 24.6069 11.441 25.4372 12 26.04V30C12 30.5523 12.4477 31 13 31H16.0001V43C16.0001 43.5523 16.4478 44 17.0001 44H31.0001C31.5524 44 32.0001 43.5523 32.0001 43V31H35C35.5523 31 36 30.5523 36 30V26.0402C36.5591 25.4374 36.8719 24.607 36.787 23.7156L35.3404 8.52595ZM32.0001 29H34V27H33.8006H32.0001V29ZM16 27H14.1996H14V29H16V27ZM31 25H17V23H31V25Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}