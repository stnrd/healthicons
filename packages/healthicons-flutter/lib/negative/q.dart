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
<path d="M29.4142 26.5858L32.3432 29.5148C33.3902 27.9339 34 26.0382 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34C26.0382 34 27.9339 33.3902 29.5148 32.3432L26.5858 29.4142C25.8047 28.6332 25.8047 27.3668 26.5858 26.5858C27.3668 25.8047 28.6332 25.8047 29.4142 26.5858Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C27.1447 38 30.0472 36.9632 32.3843 35.2128L34.5858 37.4142C35.3668 38.1953 36.6332 38.1953 37.4142 37.4142C38.1953 36.6332 38.1953 35.3668 37.4142 34.5858L35.2128 32.3843C36.9632 30.0472 38 27.1447 38 24C38 16.268 31.732 10 24 10Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}