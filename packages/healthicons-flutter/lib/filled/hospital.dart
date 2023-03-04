import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Hospital extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Hospital({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 43C8 42.4477 8.44772 42 9 42H39C39.5523 42 40 42.4477 40 43C40 43.5523 39.5523 44 39 44H9C8.44772 44 8 43.5523 8 43Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 8H10V6H19V8Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38 8H29V6H38V8Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 11H12V9H19V11Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36 11H29V9H36V11Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 38H16V36H32V38Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29 4H19C17.8954 4 17 4.89543 17 6V16C17 17.1046 17.8954 18 19 18H29C30.1046 18 31 17.1046 31 16V6C31 4.89543 30.1046 4 29 4ZM25 7V10H28V12H25V15H23V12H20V10H23V7H25Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 6V9L29 9V13H26V16H22V13H19V9H22V6H26ZM23 10H20V12H23V15H25V12H28V10H25V7H23V10ZM29 5H19C18.4477 5 18 5.44772 18 6V16C18 16.5523 18.4477 17 19 17H29C29.5523 17 30 16.5523 30 16V6C30 5.44772 29.5523 5 29 5ZM19 4H29C30.1046 4 31 4.89543 31 6V16C31 17.1046 30.1046 18 29 18H19C17.8954 18 17 17.1046 17 16V6C17 4.89543 17.8954 4 19 4Z" fill="#333333"/>
<path d="M16 20H20V23H16V20Z" fill="#333333"/>
<path d="M16 25H20V28H16V25Z" fill="#333333"/>
<path d="M16 30H20V33H16V30Z" fill="#333333"/>
<path d="M22 20H26V23H22V20Z" fill="#333333"/>
<path d="M22 25H26V28H22V25Z" fill="#333333"/>
<path d="M22 30H26V33H22V30Z" fill="#333333"/>
<path d="M28 20H32V23H28V20Z" fill="#333333"/>
<path d="M28 25H32V28H28V25Z" fill="#333333"/>
<path d="M28 30H32V33H28V30Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 42V7H14V42H12Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34 42V7H36V42H34Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23 36H17V42H23V36ZM25 36V42H31V36H25Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29 42V38H31V42H29Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 42V38H19V42H17Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}