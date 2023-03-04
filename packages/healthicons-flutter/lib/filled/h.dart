import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class H extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const H({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 10C17.1046 10 18 10.8954 18 12V22H30V12C30 10.8954 30.8954 10 32 10C33.1046 10 34 10.8954 34 12V36C34 37.1046 33.1046 38 32 38C30.8954 38 30 37.1046 30 36V26H18V36C18 37.1046 17.1046 38 16 38C14.8954 38 14 37.1046 14 36V12C14 10.8954 14.8954 10 16 10Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}