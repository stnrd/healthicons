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
<path d="M23.9999 40C32.8366 40 40 32.8365 40 24C40 15.1633 32.8366 8 23.9999 8C15.1634 8 8 15.1633 8 24C8 32.8365 15.1634 40 23.9999 40Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}