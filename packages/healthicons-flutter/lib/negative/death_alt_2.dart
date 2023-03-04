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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM16.0105 4L32.0105 4.0131L36.9999 17.0129L31.9777 44L15.9777 43.9828L10.9999 16.9916L16.0105 4ZM23.0001 17.9967V26L25.0001 26V17.9967H28.0001V15.9967H25.0001V13H23.0001V15.9967H20.0001V17.9967H23.0001Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}