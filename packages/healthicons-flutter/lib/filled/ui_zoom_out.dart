import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UiZoomOut extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const UiZoomOut({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 22H21V20H33V22Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.3787 31.2072L11.2929 38.2929L9.87865 36.8786L16.9645 29.7929L18.3787 31.2072Z" fill="#333333"/>
<path d="M6 39.1716L12.9266 32.245L15.5 32.0649L16 32.5649L15.7122 35.1163L8.82843 42.0001L6 39.1716Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 34C34.1797 34 40 28.1797 40 21C40 13.8203 34.1797 8 27 8C19.8203 8 14 13.8203 14 21C14 28.1797 19.8203 34 27 34ZM27 36C35.2843 36 42 29.2843 42 21C42 12.7157 35.2843 6 27 6C18.7157 6 12 12.7157 12 21C12 29.2843 18.7157 36 27 36Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}