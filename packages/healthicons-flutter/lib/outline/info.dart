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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#333333"/>
<path d="M22 35C22 36.1046 22.8954 37 24 37C25.1046 37 26 36.1046 26 35V21C26 19.8954 25.1046 19 24 19C22.8954 19 22 19.8954 22 21V35Z" fill="#333333"/>
<path d="M24 15C22.8954 15 22 14.1046 22 13C22 11.8954 22.8954 11 24 11C25.1046 11 26 11.8954 26 13C26 14.1046 25.1046 15 24 15Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}