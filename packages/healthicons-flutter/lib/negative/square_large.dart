import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SquareLarge extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SquareLarge({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM7 6C6.44772 6 6 6.44772 6 7V41C6 41.5523 6.44772 42 7 42H41C41.5523 42 42 41.5523 42 41V7C42 6.44772 41.5523 6 41 6H7Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}