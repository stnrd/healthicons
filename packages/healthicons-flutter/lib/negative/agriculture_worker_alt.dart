import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AgricultureWorkerAlt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AgricultureWorkerAlt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM19.5 13C17.567 13 16 11.433 16 9.5C16 7.567 17.567 6 19.5 6C21.433 6 23 7.567 23 9.5C23 11.433 21.433 13 19.5 13ZM32 16C32.3643 16 32.7058 16.0974 33 16.2676V15H32C30.3431 15 29 13.6569 29 12V6H31V12C31 12.5523 31.4477 13 32 13H33V6H35V13H36C36.5523 13 37 12.5523 37 12V6H39V12C39 13.6569 37.6569 15 36 15H35V41C35 41.5523 34.5523 42 34 42C33.4477 42 33 41.5523 33 41V19.7324C32.7058 19.9026 32.3643 20 32 20H25V22.998V23V31V40C25 41.1046 24.1046 42 23 42C21.8954 42 21 41.1046 21 40V31H18V40C18 41.1046 17.1046 42 16 42C14.8954 42 14 41.1046 14 40V31V27.917C11.1623 27.441 9 24.973 9 22C9 18.6863 11.6863 16 15 16H18H19.5H32ZM12 22C12 20.8954 12.8954 20 14 20V24C12.8954 24 12 23.1046 12 22Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}