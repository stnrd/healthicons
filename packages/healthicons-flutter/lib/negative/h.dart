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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12V36C14 37.1046 14.8954 38 16 38C17.1046 38 18 37.1046 18 36V26H30V36C30 37.1046 30.8954 38 32 38C33.1046 38 34 37.1046 34 36V12C34 10.8954 33.1046 10 32 10C30.8954 10 30 10.8954 30 12V22H18V12Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}