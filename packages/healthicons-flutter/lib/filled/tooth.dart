import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Tooth extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Tooth({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9591 9.2814C16.6218 6.84016 12.7792 7.98807 9.58534 11.8657C6.50278 15.6083 8.60445 22.3544 10.1153 27.2039C10.4755 28.3602 10.8022 29.4087 11.0169 30.2829C12.1324 34.8237 13.1996 37.6532 15.6331 39.701C16.8383 40.715 18.2048 38.9724 19.6465 37.1338C20.8965 35.5398 22.203 33.8737 23.5098 33.8697C24.7954 33.8658 26.0812 35.5293 27.3138 37.1239C28.7366 38.9646 30.0886 40.7135 31.2874 39.701C33.1461 38.1311 33.9903 36.9793 35.0116 33.745C36.1254 30.2179 37.9238 26 39.3536 21.138C40.3596 17.7171 40.4801 14.2345 37.5808 10.8727C33.4414 6.07315 27.704 8.55223 25.0332 10.1396L28.6508 13.2408C29.0701 13.6002 29.1187 14.2315 28.7592 14.6508C28.3998 15.0701 27.7685 15.1187 27.3492 14.7592L20.9591 9.2814Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}