import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AlertCircle extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AlertCircle({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24ZM26 13C26 11.8954 25.1046 11 24 11C22.8954 11 22 11.8954 22 13L22 27C22 28.1046 22.8954 29 24 29C25.1046 29 26 28.1046 26 27L26 13ZM24 33C25.1046 33 26 33.8954 26 35C26 36.1046 25.1046 37 24 37C22.8954 37 22 36.1046 22 35C22 33.8954 22.8954 33 24 33Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}