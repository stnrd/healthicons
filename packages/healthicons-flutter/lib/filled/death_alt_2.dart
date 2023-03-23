import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DeathAlt2 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const DeathAlt2({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.0106 4.0131L16.0106 4L11 16.9916L15.9779 43.9828L31.9779 44L37 17.0129L32.0106 4.0131ZM23.0002 26V17.9975L19.9999 18L19.9982 16L23.0002 15.9975V13H25.0002V15.9959L27.9982 15.9935L27.9999 17.9935L25.0002 17.9959V26L23.0002 26Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}