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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 12C14 10.8954 14.8954 10 16 10H32C32.782 10 33.4922 10.4557 33.8181 11.1666C34.1439 11.8774 34.0256 12.713 33.5152 13.3054C31.7545 15.3491 29.1526 19.0282 26.8365 23.2815C24.51 27.5537 22.5696 32.2285 21.9792 36.2879C21.8202 37.3809 20.8052 38.1382 19.7121 37.9792C18.6191 37.8202 17.8618 36.8052 18.0208 35.7121C18.7104 30.9715 20.9033 25.813 23.3235 21.3685C24.8189 18.6225 26.4382 16.0818 27.9223 14H16C14.8954 14 14 13.1046 14 12Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}