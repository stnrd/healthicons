import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CircleLarge extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CircleLarge({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.0001 44.0003C35.0458 44.0003 44.0002 35.0458 44.0002 24.0001C44.0002 12.9543 35.0458 4 24.0001 4C12.9543 4 4 12.9543 4 24.0001C4 35.0458 12.9543 44.0003 24.0001 44.0003Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 41.5C33.665 41.5 41.5 33.665 41.5 24C41.5 14.335 33.665 6.5 24 6.5C14.335 6.5 6.5 14.335 6.5 24C6.5 33.665 14.335 41.5 24 41.5ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}