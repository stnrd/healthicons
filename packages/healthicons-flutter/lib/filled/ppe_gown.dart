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
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.3629 4C32.9407 4 35.096 5.95978 35.3404 8.52595L36.787 23.7156C36.8719 24.607 36.5591 25.4374 36 26.0402V30C36 30.5523 35.5523 31 35 31H32.0001V43C32.0001 43.5523 31.5524 44 31.0001 44H17.0001C16.4478 44 16.0001 43.5523 16.0001 43V31H13C12.4477 31 12 30.5523 12 30V26.04C11.441 25.4372 11.1282 24.6069 11.2131 23.7156L12.6598 8.52595C12.9041 5.95977 15.0594 4 17.6372 4H21C21 5.65685 22.3432 7 24 7C25.6569 7 27 5.65685 27 4H30.3629ZM34 29H32.0001V27H33.8006H34V29ZM14.1996 27H16V29H14V27H14.1996ZM17 25H31V23H17V25Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}