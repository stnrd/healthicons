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
<path fill-rule="evenodd" clip-rule="evenodd" d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24ZM22 35C22 36.1046 22.8954 37 24 37C25.1046 37 26 36.1046 26 35V21C26 19.8954 25.1046 19 24 19C22.8954 19 22 19.8954 22 21V35ZM24 15C22.8954 15 22 14.1046 22 13C22 11.8954 22.8954 11 24 11C25.1046 11 26 11.8954 26 13C26 14.1046 25.1046 15 24 15Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}