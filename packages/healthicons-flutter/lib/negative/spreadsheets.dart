import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Spreadsheets extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Spreadsheets({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM30 4H11C10.4477 4 10 4.44772 10 5V43C10 43.5523 10.4477 44 11 44H37C37.5523 44 38 43.5523 38 43V12H31C30.4477 12 30 11.5523 30 11V4ZM14 19C14 18.4477 14.4477 18 15 18H33C33.5523 18 34 18.4477 34 19V34C34 34.5523 33.5523 35 33 35H15C14.4477 35 14 34.5523 14 34V19ZM16 20V23H32V20H16ZM16 28V25H20V28H16ZM16 33V30H20V33H16ZM22 30V33H26V30H22ZM28 33V30H32V33H28ZM28 28V25H32V28H28ZM22 28H26V25H22V28ZM32 10H37.4142L32 4.58579V10Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}