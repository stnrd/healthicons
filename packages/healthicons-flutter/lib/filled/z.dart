import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Z extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Z({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.7299 14L14 14C12.8955 14 12 13.1046 12 12C12 10.8954 12.8955 10 14 10L34 10C34.7761 10 35.482 10.4489 35.8112 11.1517C36.1404 11.8545 36.0333 12.6842 35.5365 13.2804L18.2701 34H34C35.1046 34 36 34.8954 36 36C36 37.1046 35.1046 38 34 38H14C13.224 38 12.518 37.5511 12.1888 36.8483C11.8597 36.1455 11.9668 35.3158 12.4636 34.7196L29.7299 14Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}