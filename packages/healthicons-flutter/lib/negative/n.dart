import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class N extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const N({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM16 35.9999L16 17.524L32.4636 37.2803C33.0026 37.9271 33.8891 38.1671 34.6808 37.8804C35.4726 37.5938 36 36.8419 36 35.9999V11.9999C36 10.8953 35.1046 9.99989 34 9.99989C32.8954 9.99989 32 10.8953 32 11.9999L32 30.4758L15.5364 10.7195C14.9974 10.0727 14.1109 9.8327 13.3191 10.1194C12.5274 10.406 12 11.1579 12 11.9999L12 35.9999C12 37.1045 12.8954 37.9999 14 37.9999C15.1046 37.9999 16 37.1045 16 35.9999Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}