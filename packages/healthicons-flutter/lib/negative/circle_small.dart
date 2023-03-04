import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CircleSmall extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CircleSmall({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3725 17.3726 12 24 12C30.6274 12 36 17.3725 36 24Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}