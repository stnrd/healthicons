import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Hematology extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Hematology({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 8H9C8.44771 8 8 8.44772 8 9V39C8 39.5523 8.44772 40 9 40H39C39.5523 40 40 39.5523 40 39V9C40 8.44771 39.5523 8 39 8ZM9 6C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H9Z" fill="#333333"/>
<path d="M32.0116 27.1297C32.0152 31.5297 28.498 34.9898 24.018 34.9934C19.538 34.9971 16.0152 31.5429 16.0116 27.1429C16.008 22.7429 24 12.9934 24 12.9934C24 12.9934 32.0082 23.044 32.0116 27.1297Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}