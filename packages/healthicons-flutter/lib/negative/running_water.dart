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
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM7 42L7 23H6V12H7V6H9V12H10V23H9L9 42H7ZM19 8H24C24.5523 8 25 7.55228 25 7C25 6.44772 24.5523 6 24 6H12C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8H17V11H12V24H25V11H19V8ZM28 24V30H42V24H40V21C40 15.4772 35.5228 11 30 11H27V21H28C29.1046 21 30 21.8954 30 23V24H28ZM35.5 42C37.433 42 39 40.3719 39 38.3636C39 35.1818 35.5 32 35.5 32C35.5 32 32 35.1818 32 38.3636C32 40.3719 33.567 42 35.5 42Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}