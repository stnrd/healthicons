import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class WheelchairAlt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const WheelchairAlt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 33C16.5523 33 17 32.5523 17 32C17 31.4477 16.5523 31 16 31C15.4477 31 15 31.4477 15 32C15 32.5523 15.4477 33 16 33Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6H12.7808L15.5308 17H26C27.6569 17 29 18.3431 29 20V23H30C31.6569 23 33 24.3431 33 26V27.414L39.0713 33.4853L41.1926 31.364L42.6068 32.7782L39.0713 36.3137L33 30.2425V36.1707C34.1652 36.5825 35 37.6938 35 39C35 40.6569 33.6569 42 32 42C30.3431 42 29 40.6569 29 39C29 37.6938 29.8348 36.5825 31 36.1707V29H25.5422C25.8396 29.947 26 30.9548 26 32C26 37.5228 21.5228 42 16 42C10.4772 42 6 37.5228 6 32C6 26.9043 9.81139 22.6988 14.7389 22.0788L11.2192 8H8V6ZM27 23V20C27 19.4477 26.5523 19 26 19H16.0308L16.7884 22.0306C18.0622 22.13 19.269 22.468 20.3641 23H27ZM12 32C12 29.7909 13.7909 28 16 28C18.2091 28 20 29.7909 20 32C20 34.2091 18.2091 36 16 36C13.7909 36 12 34.2091 12 32ZM32 38C31.4477 38 31 38.4477 31 39C31 39.5523 31.4477 40 32 40C32.5523 40 33 39.5523 33 39C33 38.4477 32.5523 38 32 38Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}