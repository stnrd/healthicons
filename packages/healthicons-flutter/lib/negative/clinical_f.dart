import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ClinicalF extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ClinicalF({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM17 7C17 5.34315 18.3431 4 20 4H28C29.6569 4 31 5.34315 31 7H35C36.6569 7 38 8.34315 38 10V41C38 42.6569 36.6569 44 35 44H13C11.3431 44 10 42.6569 10 41V10C10 8.34315 11.3431 7 13 7H17ZM20 6C19.4477 6 19 6.44772 19 7V9C19 9.55228 19.4477 10 20 10H28C28.5523 10 29 9.55228 29 9V7C29 6.44772 28.5523 6 28 6H20ZM19 15V18H16V20H19V23H21V20H24V18H21V15H19ZM17 26C16.4477 26 16 26.4477 16 27C16 27.5523 16.4477 28 17 28H31C31.5523 28 32 27.5523 32 27C32 26.4477 31.5523 26 31 26H17ZM16 32C16 31.4477 16.4477 31 17 31H31C31.5523 31 32 31.4477 32 32C32 32.5523 31.5523 33 31 33H17C16.4477 33 16 32.5523 16 32ZM17 36C16.4477 36 16 36.4477 16 37C16 37.5523 16.4477 38 17 38H31C31.5523 38 32 37.5523 32 37C32 36.4477 31.5523 36 31 36H17Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}