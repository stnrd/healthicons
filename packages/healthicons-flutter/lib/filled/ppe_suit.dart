import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PpeSuit extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PpeSuit({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 8C18 5.79086 19.7909 4 22 4H26C28.2091 4 30 5.79086 30 8V14.4167H31C33.2091 14.4167 35 16.2075 35 18.4167V31C35 32.6569 33.6569 34 32 34C31.6494 34 31.3128 33.9398 31 33.8293V41C31 42.6569 29.6569 44 28 44C26.3431 44 25 42.6569 25 41V29H23V41C23 42.6569 21.6569 44 20 44C18.3431 44 17 42.6569 17 41V33.8293C16.6872 33.9398 16.3506 34 16 34C14.3431 34 13 32.6569 13 31V18.4167C13 16.2075 14.7909 14.4167 17 14.4167H18V8ZM31 31C31 31.5523 31.4477 32 32 32C32.5523 32 33 31.5523 33 31V30H31V31ZM16 32C15.4477 32 15 31.5523 15 31V30H17V31C17 31.5523 16.5523 32 16 32ZM26 11C27.1046 11 28 10.1046 28 9V7H20V9C20 10.1046 20.8954 11 22 11H26ZM17.4001 23.7917H22.8999V14.4167H25.0999V23.7917H30.6001V25.875H17.4001V23.7917Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}