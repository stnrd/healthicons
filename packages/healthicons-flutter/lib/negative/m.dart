import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class M extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const M({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM16 36L16 17.5241L22.4636 25.2804C22.8435 25.7364 23.4064 26 24 26C24.5936 26 25.1565 25.7364 25.5364 25.2804L32 17.5241V36C32 37.1046 32.8954 38 34 38C35.1046 38 36 37.1046 36 36V12C36 11.158 35.4726 10.4061 34.6808 10.1195C33.8891 9.8328 33.0026 10.0728 32.4636 10.7196L24 20.8759L15.5364 10.7196C14.9974 10.0728 14.1109 9.8328 13.3191 10.1195C12.5274 10.4061 12 11.158 12 12L12 36C12 37.1046 12.8954 38 14 38C15.1046 38 16 37.1046 16 36Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}