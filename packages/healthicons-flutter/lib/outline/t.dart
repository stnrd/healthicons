import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class T extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const T({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 12C13 10.3431 14.3431 9 16 9L32 9C33.6569 9 35 10.3431 35 12C35 13.6569 33.6569 15 32 15H27L27 36C27 37.6569 25.6569 39 24 39C22.3431 39 21 37.6569 21 36L21 15L16 15C14.3431 15 13 13.6569 13 12ZM16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13L23 13L23 36C23 36.5523 23.4477 37 24 37C24.5523 37 25 36.5523 25 36L25 13H32C32.5523 13 33 12.5523 33 12C33 11.4477 32.5523 11 32 11L16 11Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}