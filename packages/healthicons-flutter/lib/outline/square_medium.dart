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
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 11V37H37V11H11ZM10 9C9.44772 9 9 9.44772 9 10V38C9 38.5523 9.44772 39 10 39H38C38.5523 39 39 38.5523 39 38V10C39 9.44772 38.5523 9 38 9H10Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}