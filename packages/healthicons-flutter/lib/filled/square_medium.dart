import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SquareMedium extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SquareMedium({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 10C9 9.44772 9.44772 9 10 9H38C38.5523 9 39 9.44772 39 10V38C39 38.5523 38.5523 39 38 39H10C9.44772 39 9 38.5523 9 38V10Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}