import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Church extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Church({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.3519 17.6661L25 13.4626V11L28 11V9L25 9V6H23V9L20 9V11L23 11V13.4626L16.6481 17.6661C16.3683 17.8513 16.2 18.1644 16.2 18.5V22.8766L6.63987 26.5671C6.25428 26.7159 6 27.0867 6 27.5V42H8V28.1859L17.5601 24.4954C17.9457 24.3466 18.2 23.9758 18.2 23.5625V19.0374L24 15.1991L29.8 19.0374V23.5625C29.8 24.0124 30.1005 24.4069 30.5342 24.5265L40 27.1366V42H42V26.375C42 25.9251 41.6995 25.5306 41.2658 25.411L31.8 22.8009V18.5C31.8 18.1644 31.6317 17.8513 31.3519 17.6661Z" fill="#333333"/>
<path d="M17 30C17 29.4477 16.5523 29 16 29C15.4477 29 15 29.4477 15 30L15 42H17L17 30Z" fill="#333333"/>
<path d="M32 29C32.5523 29 33 29.4477 33 30V42H31V30C31 29.4477 31.4477 29 32 29Z" fill="#333333"/>
<path d="M24 30C22.3431 30 21 31.3431 21 33V42H27V33C27 31.3431 25.6569 30 24 30Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}