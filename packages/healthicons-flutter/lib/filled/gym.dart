import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Gym extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Gym({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 6C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H9ZM32 16H29V32H32V16ZM34 19H37V23H38V25H37V29H34V19ZM16 32H19L19 16H16L16 32ZM14 29H11L11 25H10V23H11L11 19H14L14 29ZM21 25H27V23H21V25Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}