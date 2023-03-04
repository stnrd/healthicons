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
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 8H9C8.44771 8 8 8.44772 8 9V39C8 39.5523 8.44772 40 9 40H39C39.5523 40 40 39.5523 40 39V9C40 8.44771 39.5523 8 39 8ZM9 6C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H9Z" fill="#333333"/>
<path d="M29 16H32V32H29V16Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31 17H30V31H31V17ZM29 16V32H32V16H29Z" fill="#333333"/>
<path d="M34 19H37V29H34V19Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36 20H35V28H36V20ZM34 19V29H37V19H34Z" fill="#333333"/>
<path d="M19 32H16L16 16H19L19 32Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 31H18L18 17H17L17 31ZM19 32L19 16H16L16 32H19Z" fill="#333333"/>
<path d="M14 29H11L11 19H14L14 29Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 28H13L13 20H12L12 28ZM14 29L14 19H11L11 29H14Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38 25H34V23H38V25Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 25H10V23H13.5V25Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 25H21V23H27V25Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}