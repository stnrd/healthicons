import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Entry extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Entry({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 10.0001H14V37.0001H28V10.0001ZM12 8.00006V39.0001H30V8.00006H12Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.3162 4.4388C21.6687 4.22296 21 4.70493 21 5.38748V42.6126C21 43.2952 21.6687 43.7772 22.3162 43.5613L35.3162 39.228C35.7246 39.0919 36 38.7097 36 38.2793V9.72082C36 9.29039 35.7246 8.90825 35.3162 8.77214L22.3162 4.4388ZM26 25.0001C26.5523 25.0001 27 24.1046 27 23.0001C27 21.8955 26.5523 21.0001 26 21.0001C25.4477 21.0001 25 21.8955 25 23.0001C25 24.1046 25.4477 25.0001 26 25.0001Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}