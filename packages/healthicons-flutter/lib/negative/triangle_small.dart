import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TriangleSmall extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const TriangleSmall({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24.8944 11.5528C24.725 11.214 24.3788 11 24 11C23.6212 11 23.275 11.214 23.1056 11.5528L11.1056 35.5528C10.9506 35.8628 10.9671 36.2309 11.1494 36.5257C11.3316 36.8205 11.6534 37 12 37H36C36.3466 37 36.6684 36.8205 36.8507 36.5257C37.0329 36.2309 37.0494 35.8628 36.8944 35.5528L24.8944 11.5528Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}