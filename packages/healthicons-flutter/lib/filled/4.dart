import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Svg4 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Svg4({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.5796 10.086C29.4231 10.3414 30 11.1188 30 12.0002V28.0002H32C33.1046 28.0002 34 28.8956 34 30.0002C34 31.1048 33.1046 32.0002 32 32.0002H30V36.0002C30 37.1047 29.1046 38.0002 28 38.0002C26.8954 38.0002 26 37.1047 26 36.0002V32.0002H16C15.2624 32.0002 14.5847 31.5942 14.2367 30.9439C13.8886 30.2936 13.9268 29.5045 14.3359 28.8908L26.3359 10.8908C26.8248 10.1574 27.7361 9.83057 28.5796 10.086ZM26 28.0002V18.6057L19.737 28.0002H26Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}