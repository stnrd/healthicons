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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 12C14 10.8954 14.8954 10 16 10L32 10C33.1046 10 34 10.8954 34 12C34 13.1046 33.1046 14 32 14H26L26 34H32C33.1046 34 34 34.8954 34 36C34 37.1046 33.1046 38 32 38H16C14.8954 38 14 37.1046 14 36C14 34.8954 14.8954 34 16 34H22L22 14L16 14C14.8954 14 14 13.1046 14 12Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}