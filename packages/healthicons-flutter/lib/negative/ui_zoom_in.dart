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
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 21C40 28.1797 34.1797 34 27 34C19.8203 34 14 28.1797 14 21C14 13.8203 19.8203 8 27 8C34.1797 8 40 13.8203 40 21ZM22 22H26V26H28V22H32V20H28V16H26V20H22V22Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM12.9266 32.2448L14.6318 32.1255L15.7901 30.9671C13.4324 28.3173 12 24.8259 12 21C12 12.7157 18.7157 6 27 6C35.2843 6 42 12.7157 42 21C42 29.2843 35.2843 36 27 36C23.2615 36 19.8423 34.6323 17.2157 32.37L15.8702 33.7155L15.7122 35.1161L8.82843 41.9998L6 39.1714L12.9266 32.2448Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}