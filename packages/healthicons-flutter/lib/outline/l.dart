import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class L extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const L({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 12C15 10.3431 16.3431 9 18 9C19.6569 9 21 10.3431 21 12L21 33H30C31.6569 33 33 34.3431 33 36C33 37.6569 31.6569 39 30 39H18C16.3431 39 15 37.6569 15 36L15 12ZM18 11C17.4477 11 17 11.4477 17 12L17 36C17 36.5523 17.4477 37 18 37H30C30.5523 37 31 36.5523 31 36C31 35.4477 30.5523 35 30 35H20C19.4477 35 19 34.5523 19 34L19 12C19 11.4477 18.5523 11 18 11Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}