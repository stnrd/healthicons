import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Positive extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Positive({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44ZM14 23C13.4477 23 13 23.4477 13 24C13 24.5523 13.4477 25 14 25H23V34C23 34.5523 23.4477 35 24 35C24.5523 35 25 34.5523 25 34V25H34C34.5523 25 35 24.5523 35 24C35 23.4477 34.5523 23 34 23H25V14C25 13.4477 24.5523 13 24 13C23.4477 13 23 13.4477 23 14V23H14Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}