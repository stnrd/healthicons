import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Svg1 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Svg1({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.7654 10.1523C28.5127 10.4619 29 11.1911 29 12.0001L29 36.0001C29 37.1046 28.1046 38.0001 27 38.0001C25.8954 38.0001 25 37.1046 25 36.0001L25 16.8285L23.4142 18.4143C22.6332 19.1953 21.3668 19.1953 20.5858 18.4143C19.8047 17.6332 19.8047 16.3669 20.5858 15.5858L25.5858 10.5858C26.1578 10.0138 27.018 9.84274 27.7654 10.1523Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}