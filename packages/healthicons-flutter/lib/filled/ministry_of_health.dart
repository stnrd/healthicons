import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MinistryOfHealth extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const MinistryOfHealth({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.3754 5.21913C23.7406 4.92696 24.2595 4.92696 24.6248 5.21913L39.3508 17H42V23H6V17H8.64928L23.3754 5.21913ZM25 10V12H27V14H25V16H23V14H21V12H23V10H25Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 25C21.7909 25 20 26.7909 20 29V37H14V33H12V25H8V33H6V37H4V43H44V37H42V33H40V25H36V33H34V37H28V29C28 26.7909 26.2091 25 24 25ZM24 27C25.1046 27 26 27.8954 26 29V37H22V29C22 27.8954 22.8954 27 24 27Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}