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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24.7667 6.47382C24.6215 6.18343 24.3247 6 24 6C23.6753 6 23.3785 6.18343 23.2334 6.47382L6.09049 40.7595C5.95764 41.0252 5.97184 41.3408 6.12801 41.5935C6.28419 41.8462 6.56008 42 6.85714 42H41.1429C41.4399 42 41.7158 41.8462 41.872 41.5935C42.0282 41.3408 42.0424 41.0252 41.9095 40.7595L24.7667 6.47382Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}