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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 17.524L16 35.9999C16 37.1045 15.1046 37.9999 14 37.9999C12.8954 37.9999 12 37.1045 12 35.9999L12 11.9999C12 11.1579 12.5274 10.406 13.3191 10.1194C14.1109 9.8327 14.9974 10.0727 15.5364 10.7195L32 30.4758L32 11.9999C32 10.8953 32.8954 9.99989 34 9.99989C35.1046 9.99989 36 10.8953 36 11.9999L36 35.9999C36 36.8419 35.4726 37.5938 34.6808 37.8804C33.8891 38.1671 33.0026 37.9271 32.4636 37.2803L16 17.524Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}