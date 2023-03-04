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
<path fill-rule="evenodd" clip-rule="evenodd" d="M23 12L5 12L5 14L23 14V12ZM23 16H8H6V18V37H5C4.44772 37 4 37.4477 4 38C4 38.5523 4.44772 39 5 39H43C43.5523 39 44 38.5523 44 38C44 37.4477 43.5523 37 43 37H42V18V16H40H39V18H40V37H37V25H29V37H8V18H23V16ZM39 14V12L43 12V14L39 14ZM26 25H11V32H10V34L27 34V32H26V25Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 18V13H8V18H6Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 18V13H42V18H40Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35 10H27C25.8954 10 25 10.8954 25 12V20C25 21.1046 25.8954 22 27 22H35C36.1046 22 37 21.1046 37 20V12C37 10.8954 36.1046 10 35 10ZM32 13V15H34V17H32V19H30V17H28V15H30V13H32Z" fill="#333333"/>
<path d="M8 14L23 14V16H8V14Z" fill="#333333"/>
<path d="M40 14L39 14V16H40V14Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}