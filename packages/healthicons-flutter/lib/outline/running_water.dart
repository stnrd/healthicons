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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 12L8 6H6V42H8L8 22H11V24H25V20.6667H28C29.1046 20.6667 30 21.5621 30 22.6667V23H28V31H42V23H40V22C40 16.4772 35.5228 12 30 12H25V10H19V8H26C26.5523 8 27 7.55228 27 7C27 6.44772 26.5523 6 26 6H10C9.44771 6 9 6.44772 9 7C9 7.55228 9.44771 8 10 8H17V10H11V12H8ZM38 22C38 17.5817 34.4183 14 30 14H25V18.6667H28C30.2091 18.6667 32 20.4575 32 22.6667V23H38V22ZM40 25H30V29H40V25ZM23 12H13V22H23V12ZM11 20H8V14H11V20Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.5 42C37.433 42 39 40.3719 39 38.3636C39 35.1818 35.5 32 35.5 32C35.5 32 32 35.1818 32 38.3636C32 40.3719 33.567 42 35.5 42ZM35.5 40C36.2571 40 37 39.3401 37 38.3636C37 37.4318 36.4476 36.2765 35.6372 35.1714C35.5915 35.109 35.5457 35.0478 35.5 34.9879C35.4543 35.0478 35.4085 35.109 35.3628 35.1714C34.5524 36.2765 34 37.4318 34 38.3636C34 39.3401 34.7429 40 35.5 40Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}