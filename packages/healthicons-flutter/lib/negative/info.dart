import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Info extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Info({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44ZM24 37C22.8954 37 22 36.1046 22 35V21C22 19.8954 22.8954 19 24 19C25.1046 19 26 19.8954 26 21V35C26 36.1046 25.1046 37 24 37ZM22 13C22 14.1046 22.8954 15 24 15C25.1046 15 26 14.1046 26 13C26 11.8954 25.1046 11 24 11C22.8954 11 22 11.8954 22 13Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}