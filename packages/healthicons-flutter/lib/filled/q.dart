import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Q extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Q({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24C38 27.1447 36.9632 30.0472 35.2128 32.3843L37.4142 34.5858C38.1953 35.3668 38.1953 36.6332 37.4142 37.4142C36.6332 38.1953 35.3668 38.1953 34.5858 37.4142L32.3843 35.2128C30.0472 36.9632 27.1447 38 24 38C16.268 38 10 31.732 10 24ZM32.3432 29.5148L29.4142 26.5858C28.6332 25.8047 27.3668 25.8047 26.5858 26.5858C25.8047 27.3668 25.8047 28.6332 26.5858 29.4142L29.5148 32.3432C27.9339 33.3902 26.0382 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24C34 26.0382 33.3902 27.9339 32.3432 29.5148Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}