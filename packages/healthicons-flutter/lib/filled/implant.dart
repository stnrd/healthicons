import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Implant extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Implant({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 9C21 7.34315 22.3431 6 24 6C25.6569 6 27 7.34315 27 9V39C27 40.6569 25.6569 42 24 42C22.3431 42 21 40.6569 21 39V9Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}