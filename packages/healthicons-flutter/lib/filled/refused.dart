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
<path d="M31 9V25.7311C31 26.7176 32.277 27.1082 32.8288 26.2906L35.5532 22.2546C36.3491 21.0754 37.9556 20.7747 39.1241 21.5862C40.1921 22.3278 40.5317 23.7539 39.9127 24.8973L32.975 37.7128C30.8779 41.5866 26.8271 44 22.4221 44H21C14.3726 44 9 38.6274 9 32V15C9 13.8954 9.89543 13 11 13C12.1046 13 13 13.8954 13 15V25.1111H15V9C15 7.89543 15.8954 7 17 7C18.1046 7 19 7.89543 19 9V23H21V6C21 4.89543 21.8954 4 23 4C24.1046 4 25 4.89543 25 6V23H27V9C27 7.89543 27.8954 7 29 7C30.1046 7 31 7.89543 31 9Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}