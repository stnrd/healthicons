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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6Z" fill="#333333"/>
<path d="M26 13C26 11.8954 25.1046 11 24 11C22.8954 11 22 11.8954 22 13L22 27C22 28.1046 22.8954 29 24 29C25.1046 29 26 28.1046 26 27L26 13Z" fill="#333333"/>
<path d="M24 33C25.1046 33 26 33.8954 26 35C26 36.1046 25.1046 37 24 37C22.8954 37 22 36.1046 22 35C22 33.8954 22.8954 33 24 33Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}