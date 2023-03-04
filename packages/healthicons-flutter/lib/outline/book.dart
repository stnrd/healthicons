import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Book extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Book({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C11.2386 5 9 7.23858 9 10V40V42C9 42.5523 9.44772 43 10 43H38V41H11V40C11 38.3431 12.3431 37 14 37H38C38.5523 37 39 36.5523 39 36V6C39 5.44772 38.5523 5 38 5H14ZM11 35.9996C11.8357 35.3719 12.8744 35 14 35H37V7H14C12.3431 7 11 8.34315 11 10V35.9996ZM23 19V14H25V19L30 19V21H25V26H23V21H18V19L23 19Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}