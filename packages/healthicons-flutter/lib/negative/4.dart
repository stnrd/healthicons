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
<path d="M26 18.6057V28.0002H19.737L26 18.6057Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM30 12.0002C30 11.1188 29.4231 10.3414 28.5796 10.086C27.7361 9.83057 26.8248 10.1574 26.3359 10.8908L14.3359 28.8908C13.9268 29.5045 13.8886 30.2936 14.2367 30.9439C14.5847 31.5942 15.2624 32.0002 16 32.0002H26V36.0002C26 37.1047 26.8954 38.0002 28 38.0002C29.1046 38.0002 30 37.1047 30 36.0002V32.0002H32C33.1046 32.0002 34 31.1048 34 30.0002C34 28.8956 33.1046 28.0002 32 28.0002H30V12.0002Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}