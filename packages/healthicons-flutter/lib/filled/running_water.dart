import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RunningWater extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const RunningWater({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 22H7L7 13H8H9L9 22H8ZM34.5564 34.58C34.8883 34.1274 35.2216 33.7346 35.5 33.4282C35.7784 33.7346 36.1117 34.1274 36.4436 34.58C37.2863 35.7291 38 37.1023 38 38.3636C38 39.856 36.845 41 35.5 41C34.155 41 33 39.856 33 38.3636C33 37.1023 33.7137 35.7291 34.5564 34.58ZM40 25H41V29H29V25H30H31V24V23C31 21.3431 29.6569 20 28 20V12H30C34.9706 12 39 16.0294 39 21V24V25H40ZM19 12H24V23H13V12H17H18H19Z" fill="#333333" stroke="#333333" stroke-width="2"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}