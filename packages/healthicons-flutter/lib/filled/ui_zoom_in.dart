import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UiZoomIn extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const UiZoomIn({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 22H22V20H32V22Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 16V26H26V16H28Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2071 31.3786L11.2928 38.2928L9.87859 36.8786L16.7929 29.9644L18.2071 31.3786Z" fill="#333333"/>
<path d="M6 39.1714L12.9266 32.2448L15.5 32.0647L16 32.5647L15.7122 35.1161L8.82843 41.9998L6 39.1714Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 34C34.1797 34 40 28.1797 40 21C40 13.8203 34.1797 8 27 8C19.8203 8 14 13.8203 14 21C14 28.1797 19.8203 34 27 34ZM27 36C35.2843 36 42 29.2843 42 21C42 12.7157 35.2843 6 27 6C18.7157 6 12 12.7157 12 21C12 29.2843 18.7157 36 27 36Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}