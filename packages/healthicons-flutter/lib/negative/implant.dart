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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24 6C22.3431 6 21 7.34314 21 9V39C21 40.6569 22.3431 42 24 42C25.6569 42 27 40.6569 27 39V9C27 7.34315 25.6569 6 24 6Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}