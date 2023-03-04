import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Negative extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Negative({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 24C13 23.4477 13.4477 23 14 23L34 23C34.5523 23 35 23.4477 35 24C35 24.5523 34.5523 25 34 25L14 25C13.4477 25 13 24.5523 13 24Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}