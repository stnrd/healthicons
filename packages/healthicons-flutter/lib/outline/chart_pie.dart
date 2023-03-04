import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ChartPie extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ChartPie({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.9545 15.3661L8.04549 34.3661L7.04549 32.634L39.9545 13.634L40.9545 15.3661Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25 5V24H23V5L25 5Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}