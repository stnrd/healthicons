import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Tally extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Tally({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0.0478516H0V48.0479H48V0.0478516ZM44.157 24C44.157 35.0457 35.2027 44 24.157 44C13.1113 44 4.15698 35.0457 4.15698 24C4.15698 12.9543 13.1113 4 24.157 4C35.2027 4 44.157 12.9543 44.157 24ZM16 15C16 14.4477 16.4477 14 17 14C17.5523 14 18 14.4477 18 15V17.4302L21 19.9907V15C21 14.4477 21.4477 14 22 14C22.5523 14 23 14.4477 23 15V21.6978L26 24.2583V15C26 14.4477 26.4477 14 27 14C27.5523 14 28 14.4477 28 15V25.9654L31 28.5259V15C31 14.4477 31.4477 14 32 14C32.5523 14 33 14.4477 33 15V30.233L36.1192 32.8952L34.8208 34.4165L33 32.8624V33C33 33.5523 32.5523 34 32 34C31.4477 34 31 33.5523 31 33V31.1554L28 28.5948V33C28 33.5523 27.5523 34 27 34C26.4477 34 26 33.5523 26 33V26.8878L23 24.3272V33C23 33.5523 22.5523 34 22 34C21.4477 34 21 33.5523 21 33V22.6202L18 20.0596V33C18 33.5523 17.5523 34 17 34C16.4477 34 16 33.5523 16 33V18.3526L12.2334 15.1377L13.5318 13.6165L16 15.7231V15Z" fill="#333333"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}