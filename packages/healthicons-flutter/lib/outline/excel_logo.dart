import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ExcelLogo extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ExcelLogo({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 6.89543 15.8059 6 16.8 6H40.2C41.1941 6 42 6.89543 42 8V40C42 41.1046 41.1941 42 40.2 42H16.8C15.8059 42 15 41.1046 15 40V34H7.8C6.80589 34 6 33.1046 6 32V16C6 14.8954 6.80589 14 7.8 14H15V8ZM28 14V8H17V14L28 14ZM30 8V14L40 14V8H30ZM28 16L24 16V23H28V16ZM30 23V16L40 16V23L30 23ZM28 25H24V32H28V25ZM30 32V25L40 25V32H30ZM28 34H17V40H28V34ZM30 40V34H40V40H30ZM22 16V32H7.8V16H22ZM11.2258 19H13.3732L15.1156 22.754L16.957 19H18.9631L16.1992 24L19.0261 29H16.9102L15.0112 25.07L13.1203 29H10.9729L13.8466 23.982L11.2258 19Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}