import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Refused extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Refused({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM31 25.7311V9C31 7.89543 30.1046 7 29 7C27.8954 7 27 7.89543 27 9V23H25V6C25 4.89543 24.1046 4 23 4C21.8954 4 21 4.89543 21 6V23H19V9C19 7.89543 18.1046 7 17 7C15.8954 7 15 7.89543 15 9V25.1111H13V15C13 13.8954 12.1046 13 11 13C9.89543 13 9 13.8954 9 15V28.4444V32C9 38.6274 14.3726 44 21 44H22.4221C26.8271 44 30.8779 41.5866 32.975 37.7128L39.9127 24.8973C40.5317 23.7539 40.1921 22.3278 39.1241 21.5862C37.9556 20.7747 36.3491 21.0754 35.5532 22.2546L32.8288 26.2906C32.277 27.1082 31 26.7176 31 25.7311Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}