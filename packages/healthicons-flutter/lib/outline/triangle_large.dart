import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TriangleLarge extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const TriangleLarge({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 5C24.3788 5 24.725 5.214 24.8944 5.55279L42.8944 41.5528C43.0494 41.8628 43.0329 42.2309 42.8507 42.5257C42.6684 42.8205 42.3466 43 42 43H6C5.65342 43 5.33156 42.8205 5.14935 42.5257C4.96714 42.2309 4.95058 41.8628 5.10557 41.5528L23.1056 5.55279C23.275 5.214 23.6212 5 24 5ZM24 8.23607L7.61803 41H40.382L24 8.23607Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}