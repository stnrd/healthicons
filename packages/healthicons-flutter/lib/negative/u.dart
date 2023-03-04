import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class U extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const U({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12V28C14 33.5229 18.4772 38 24 38C29.5228 38 34 33.5229 34 28V12C34 10.8954 33.1046 10 32 10C30.8954 10 30 10.8954 30 12V28C30 31.3137 27.3137 34 24 34C20.6863 34 18 31.3137 18 28V12Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}