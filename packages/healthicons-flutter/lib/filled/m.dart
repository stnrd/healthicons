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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 17.5241L16 36C16 37.1046 15.1046 38 14 38C12.8954 38 12 37.1046 12 36L12 12C12 11.158 12.5274 10.4061 13.3191 10.1195C14.1109 9.8328 14.9974 10.0728 15.5364 10.7196L24 20.8759L32.4636 10.7196C33.0026 10.0728 33.8891 9.8328 34.6808 10.1195C35.4726 10.4061 36 11.158 36 12L36 36C36 37.1046 35.1046 38 34 38C32.8954 38 32 37.1046 32 36L32 17.5241L25.5364 25.2804C25.1565 25.7364 24.5936 26 24 26C23.4064 26 22.8435 25.7364 22.4636 25.2804L16 17.5241Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}