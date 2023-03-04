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
<path d="M12 13C12 12.4477 12.4477 12 13 12H35C35.5523 12 36 12.4477 36 13V35C36 35.5523 35.5523 36 35 36H13C12.4477 36 12 35.5523 12 35V13Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}