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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24.7892 9.48775C24.6397 9.18883 24.3342 9 24 9C23.6658 9 23.3603 9.18883 23.2108 9.48775L9.09315 37.723C8.95639 37.9966 8.97101 38.3214 9.13178 38.5815C9.29255 38.8417 9.57655 39 9.88235 39H38.1176C38.4235 39 38.7074 38.8417 38.8682 38.5815C39.029 38.3214 39.0436 37.9966 38.9068 37.723L24.7892 9.48775Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}