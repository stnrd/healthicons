import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HighBars extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HighBars({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM35 6C33.3431 6 32 7.34314 32 9V39C32 40.6569 33.3431 42 35 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H35ZM19 21C19 19.3431 20.3431 18 22 18H26C27.6569 18 29 19.3431 29 21V39C29 40.6569 27.6569 42 26 42H22C20.3431 42 19 40.6569 19 39V21ZM9 30C7.34315 30 6 31.3431 6 33V39C6 40.6569 7.34315 42 9 42H13C14.6569 42 16 40.6569 16 39V33C16 31.3431 14.6569 30 13 30H9Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}