import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class OxygenTank extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const OxygenTank({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 6H19V4H13V6H15V8H12.8293C12.4175 6.83481 11.3062 6 10 6C8.34315 6 7 7.34315 7 9C7 10.6569 8.34315 12 10 12C11.3062 12 12.4175 11.1652 12.8293 10H15V12.083C12.1623 12.559 10 15.027 10 18V43C10 43.5523 10.4477 44 11 44H21C21.5523 44 22 43.5523 22 43V18C22 15.027 19.8377 12.559 17 12.083V10H22V8H17V6ZM16 14C13.7909 14 12 15.7909 12 18V20H20V18C20 15.7909 18.2091 14 16 14ZM12 42V22H20V42H12ZM9 9C9 8.44772 9.44772 8 10 8C10.5523 8 11 8.44772 11 9C11 9.55228 10.5523 10 10 10C9.44772 10 9 9.55228 9 9ZM26 21C26 18.7909 27.7909 17 30 17C32.2091 17 34 18.7909 34 21V27C34 29.2091 32.2091 31 30 31C27.7909 31 26 29.2091 26 27V21ZM30 19C28.8954 19 28 19.8954 28 21V27C28 28.1046 28.8954 29 30 29C31.1046 29 32 28.1046 32 27V21C32 19.8954 31.1046 19 30 19ZM38 26H35V24H38C39.6569 24 41 25.3431 41 27C41 28.6569 39.6569 30 38 30C37.4477 30 37 30.4477 37 31V32H41V34H36C35.4477 34 35 33.5523 35 33V31C35 29.3431 36.3431 28 38 28C38.5523 28 39 27.5523 39 27C39 26.4477 38.5523 26 38 26Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}