import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class City extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const City({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 43C8 42.4477 8.44772 42 9 42H39C39.5523 42 40 42.4477 40 43C40 43.5523 39.5523 44 39 44H9C8.44772 44 8 43.5523 8 43Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22V42H17V22H12ZM11 20C10.4477 20 10 20.4477 10 21V43C10 43.5523 10.4477 44 11 44H18C18.5523 44 19 43.5523 19 43V21C19 20.4477 18.5523 20 18 20H11Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 4L33 10V24H31V11.386L19 6.886V42H27C27 42.5523 27.4477 43 28 43H33V44H17V42V4Z" fill="#333333"/>
<path d="M20 13H22V15H20V13Z" fill="#333333"/>
<path d="M24 13H26V15H24V13Z" fill="#333333"/>
<path d="M28 13H30V15H28V13Z" fill="#333333"/>
<path d="M20 17H22V19H20V17Z" fill="#333333"/>
<path d="M24 17H26V19H24V17Z" fill="#333333"/>
<path d="M28 17H30V19H28V17Z" fill="#333333"/>
<path d="M20 21H22V23H20V21Z" fill="#333333"/>
<path d="M24 21H26V23H24V21Z" fill="#333333"/>
<path d="M28 21H30V23H28V21Z" fill="#333333"/>
<path d="M20 25H22V27H20V25Z" fill="#333333"/>
<path d="M24 25H26V27H24V25Z" fill="#333333"/>
<path d="M20 29H22V31H20V29Z" fill="#333333"/>
<path d="M24 29H26V31H24V29Z" fill="#333333"/>
<path d="M20 33H22V35H20V33Z" fill="#333333"/>
<path d="M24 33H26V35H24V33Z" fill="#333333"/>
<path d="M20 37H22V39H20V37Z" fill="#333333"/>
<path d="M24 37H26V39H24V37Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29 26V42H36V26H29ZM28 24C27.4477 24 27 24.4477 27 25V43C27 43.5523 27.4477 44 28 44H37C37.5523 44 38 43.5523 38 43V25C38 24.4477 37.5523 24 37 24H28Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34 30H31V28H34V30Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34 34H31V32H34V34Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34 38H31V36H34V38Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34 42H31V40H34V42Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 13L15 22H13L13 13H15Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}