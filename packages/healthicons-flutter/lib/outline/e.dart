import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class E extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const E({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 12C15 10.3431 16.3431 9 18 9H30C31.6569 9 33 10.3431 33 12C33 13.6569 31.6569 15 30 15H21V21H30C31.6569 21 33 22.3431 33 24C33 25.6569 31.6569 27 30 27H21V33H30C31.6569 33 33 34.3431 33 36C33 37.6569 31.6569 39 30 39H18C16.3431 39 15 37.6569 15 36V12ZM18 11C17.4477 11 17 11.4477 17 12V36C17 36.5523 17.4477 37 18 37H30C30.5523 37 31 36.5523 31 36C31 35.4477 30.5523 35 30 35H20C19.4477 35 19 34.5523 19 34V26C19 25.4477 19.4477 25 20 25H30C30.5523 25 31 24.5523 31 24C31 23.4477 30.5523 23 30 23H20C19.4477 23 19 22.5523 19 22V14C19 13.4477 19.4477 13 20 13H30C30.5523 13 31 12.5523 31 12C31 11.4477 30.5523 11 30 11H18Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}