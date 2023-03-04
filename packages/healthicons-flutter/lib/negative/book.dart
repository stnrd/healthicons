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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM14 5C11.2386 5 9 7.23858 9 10V42C9 42.5523 9.44771 43 10 43H38V41H11V40C11 38.3431 12.3431 37 14 37H38C38.5523 37 39 36.5523 39 36V6C39 5.44772 38.5523 5 38 5H14ZM23 21V26H25V21H30V19H25V14H23V19H18V21H23Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}