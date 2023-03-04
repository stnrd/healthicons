import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SquareSmall extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SquareSmall({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 14V34H34V14H14ZM13 12C12.4477 12 12 12.4477 12 13V35C12 35.5523 12.4477 36 13 36H35C35.5523 36 36 35.5523 36 35V13C36 12.4477 35.5523 12 35 12H13Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}