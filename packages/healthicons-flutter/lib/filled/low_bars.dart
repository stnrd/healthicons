import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LowBars extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const LowBars({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M35 6C33.3431 6 32 7.34315 32 9V39C32 40.6569 33.3431 42 35 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H35ZM34 9C34 8.44772 34.4477 8 35 8H39C39.5523 8 40 8.44772 40 9V39C40 39.5523 39.5523 40 39 40H35C34.4477 40 34 39.5523 34 39V9Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 21C19 19.3431 20.3431 18 22 18H26C27.6569 18 29 19.3431 29 21V39C29 40.6569 27.6569 42 26 42H22C20.3431 42 19 40.6569 19 39V21ZM22 20C21.4477 20 21 20.4477 21 21V39C21 39.5523 21.4477 40 22 40H26C26.5523 40 27 39.5523 27 39V21C27 20.4477 26.5523 20 26 20H22Z" fill="#333333"/>
<path d="M6 33C6 31.3431 7.34315 30 9 30H13C14.6569 30 16 31.3431 16 33V39C16 40.6569 14.6569 42 13 42H9C7.34315 42 6 40.6569 6 39V33Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}