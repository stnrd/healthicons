import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class F extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const F({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 12C15 10.3431 16.3431 9 18 9L30 9C31.6569 9 33 10.3431 33 12C33 13.6569 31.6569 15 30 15L21 15L21 21L30 21C31.6569 21 33 22.3431 33 24C33 25.6569 31.6569 27 30 27L21 27L21 36C21 37.6569 19.6569 39 18 39C16.3431 39 15 37.6569 15 36L15 12ZM18 11C17.4477 11 17 11.4477 17 12L17 36C17 36.5523 17.4477 37 18 37C18.5523 37 19 36.5523 19 36L19 26C19 25.4477 19.4477 25 20 25L30 25C30.5523 25 31 24.5523 31 24C31 23.4477 30.5523 23 30 23L20 23C19.4477 23 19 22.5523 19 22L19 14C19 13.4477 19.4477 13 20 13L30 13C30.5523 13 31 12.5523 31 12C31 11.4477 30.5523 11 30 11L18 11Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}