import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Svg7 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Svg7({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14H27.9223C26.4382 16.0818 24.8189 18.6225 23.3235 21.3685C20.9033 25.813 18.7104 30.9715 18.0208 35.7121C17.8618 36.8052 18.6191 37.8202 19.7121 37.9792C20.8052 38.1382 21.8202 37.3809 21.9792 36.2879C22.5696 32.2285 24.51 27.5537 26.8365 23.2815C29.1526 19.0282 31.7545 15.3491 33.5152 13.3054C34.0256 12.713 34.1439 11.8774 33.8181 11.1666C33.4922 10.4557 32.782 10 32 10H16Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}