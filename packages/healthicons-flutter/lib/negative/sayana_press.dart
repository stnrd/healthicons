import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SayanaPress extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SayanaPress({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM23 6L25 4V11H23V6ZM22 19H23V11H21C20.4477 11 20 11.4477 20 12V17H19V19H16C13.7909 19 12 20.7909 12 23V40C12 42.2091 13.7909 44 16 44H32C34.2091 44 36 42.2091 36 40V23C36 20.7909 34.2091 19 32 19H29V17H28V12C28 11.4477 27.5523 11 27 11H25V19H26V20C26 20.5523 25.5523 21 25 21V24H23V21C22.4477 21 22 20.5523 22 20V19ZM24 36C26.7614 36 29 33.7614 29 31C29 28.2386 26.7614 26 24 26C21.2386 26 19 28.2386 19 31C19 33.7614 21.2386 36 24 36ZM23 38V40H25V38H23Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}