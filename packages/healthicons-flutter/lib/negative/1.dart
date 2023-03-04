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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM29 12.0001C29 11.1911 28.5127 10.4619 27.7654 10.1523C27.018 9.84274 26.1578 10.0138 25.5858 10.5858L20.5858 15.5858C19.8047 16.3669 19.8047 17.6332 20.5858 18.4143C21.3668 19.1953 22.6332 19.1953 23.4142 18.4143L25 16.8285V36.0001C25 37.1046 25.8954 38.0001 27 38.0001C28.1046 38.0001 29 37.1046 29 36.0001V12.0001Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}