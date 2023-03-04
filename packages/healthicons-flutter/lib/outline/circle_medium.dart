import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CircleMedium extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CircleMedium({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38ZM24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}