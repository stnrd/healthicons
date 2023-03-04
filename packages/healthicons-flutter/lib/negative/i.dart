import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class I extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const I({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14H22V34H16C14.8954 34 14 34.8954 14 36C14 37.1046 14.8954 38 16 38H32C33.1046 38 34 37.1046 34 36C34 34.8954 33.1046 34 32 34H26V14H32C33.1046 14 34 13.1046 34 12C34 10.8954 33.1046 10 32 10H16Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}