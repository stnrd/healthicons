import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RuralPost extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const RuralPost({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 12H30V14H28V16H30V18H32V16H34V14H32V12Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM23 11L5 11V13H6V36H5C4.44772 36 4 36.4477 4 37C4 37.5523 4.44772 38 5 38H43C43.5523 38 44 37.5523 44 37C44 36.4477 43.5523 36 43 36H42V13H43V11H39V17H40V36H37V24H29V36H8V17H23V11ZM26 24H11V31H10V33H27V31H26V24ZM27 9H35C36.1046 9 37 9.89543 37 11V19C37 20.1046 36.1046 21 35 21H27C25.8954 21 25 20.1046 25 19V11C25 9.89543 25.8954 9 27 9Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}