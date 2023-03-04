import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class D extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const D({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 34V14H22C27.5228 14 32 18.4772 32 24C32 29.5228 27.5228 34 22 34H16Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM14 10C12.8954 10 12 10.8954 12 12V36C12 37.1046 12.8954 38 14 38H22C29.732 38 36 31.732 36 24C36 16.268 29.732 10 22 10H14Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}