import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Discharge extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Discharge({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.00003 37C4.00003 36.4477 4.44774 36 5.00003 36H43C43.5523 36 44 36.4477 44 37C44 37.5523 43.5523 38 43 38H5.00003C4.44774 38 4.00003 37.5523 4.00003 37Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.6489 20.0637C4.13178 20.2576 3.86978 20.834 4.0637 21.3511L6.95436 29.0596L5.02988 36.7575C4.89594 37.2933 5.2217 37.8362 5.75749 37.9701C6.29329 38.1041 6.83622 37.7783 6.97017 37.2425L8.97017 29.2425C9.01935 29.0458 9.00756 28.8388 8.93636 28.6489L5.93636 20.6489C5.74244 20.1318 5.16602 19.8698 4.6489 20.0637Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M43.3512 20.0637C43.8683 20.2576 44.1303 20.834 43.9364 21.3511L41.0457 29.0596L42.9702 36.7575C43.1041 37.2933 42.7784 37.8362 42.2426 37.9701C41.7068 38.1041 41.1638 37.7783 41.0299 37.2425L39.0299 29.2425C38.9807 29.0458 38.9925 28.8388 39.0637 28.6489L42.0637 20.6489C42.2576 20.1318 42.834 19.8698 43.3512 20.0637Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9616 29.7253C16.8389 29.296 16.4465 29 16 29H8.00003C7.44774 29 7.00003 29.4477 7.00003 30C7.00003 30.5523 7.44774 31 8.00003 31H15.2457L17.0385 37.2747C17.1902 37.8058 17.7437 38.1132 18.2747 37.9615C18.8058 37.8098 19.1133 37.2563 18.9616 36.7253L16.9616 29.7253Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.0385 29.7253C31.1612 29.296 31.5535 29 32 29H40C40.5523 29 41 29.4477 41 30C41 30.5523 40.5523 31 40 31H32.7543L30.9616 37.2747C30.8098 37.8058 30.2563 38.1132 29.7253 37.9615C29.1943 37.8098 28.8868 37.2563 29.0385 36.7253L31.0385 29.7253Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 27H7.00003V25H18V27Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 27H41V25H30V27Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 30C18 30.5523 17.5523 31 17 31H8.00003C7.44774 31 7.00003 30.5523 7.00003 30C7.00003 29.4477 7.44774 29 8.00003 29H17C17.5523 29 18 29.4477 18 30Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 30C30 30.5523 30.4477 31 31 31H40C40.5523 31 41 30.5523 41 30C41 29.4477 40.5523 29 40 29H31C30.4477 29 30 29.4477 30 30Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 25C14.4477 25 14 25.4477 14 26V30C14 30.5523 14.4477 31 15 31C15.5523 31 16 30.5523 16 30V26C16 25.4477 15.5523 25 15 25Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 25C33.5523 25 34 25.4477 34 26V30C34 30.5523 33.5523 31 33 31C32.4477 31 32 30.5523 32 30V26C32 25.4477 32.4477 25 33 25Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23 18V10H25V18H23Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 13H28V15H20V13Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}