import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class I extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const I({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 12C13 10.3431 14.3431 9 16 9L32 9C33.6569 9 35 10.3431 35 12C35 13.6569 33.6569 15 32 15H27L27 33H32C33.6569 33 35 34.3431 35 36C35 37.6569 33.6569 39 32 39H16C14.3431 39 13 37.6569 13 36C13 34.3431 14.3431 33 16 33H21L21 15L16 15C14.3431 15 13 13.6569 13 12ZM16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13L23 13L23 35H16C15.4477 35 15 35.4477 15 36C15 36.5523 15.4477 37 16 37H32C32.5523 37 33 36.5523 33 36C33 35.4477 32.5523 35 32 35H25L25 13H32C32.5523 13 33 12.5523 33 12C33 11.4477 32.5523 11 32 11L16 11Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}