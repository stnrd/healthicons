import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TriangleMedium extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const TriangleMedium({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 39H9L16.5 24L24 9L31.5 24L39 39H24Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 8C24.3788 8 24.725 8.214 24.8944 8.55279L39.8944 38.5528C40.0494 38.8628 40.0329 39.2309 39.8507 39.5257C39.6684 39.8205 39.3466 40 39 40H9C8.65342 40 8.33156 39.8205 8.14935 39.5257C7.96714 39.2309 7.95058 38.8628 8.10557 38.5528L23.1056 8.55279C23.275 8.214 23.6212 8 24 8ZM24 11.2361L10.618 38H37.382L24 11.2361Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}