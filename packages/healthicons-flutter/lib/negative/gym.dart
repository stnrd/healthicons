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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM6 9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9ZM29 16H32V32H29V16ZM37 19H34V29H37V25H38V23H37V19ZM19 32H16L16 16H19L19 32ZM11 29H14L14 19H11V23H10V25H11L11 29ZM27 25H21V23H27V25Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}