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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM9 42C8.44771 42 8 42.4477 8 43C8 43.5523 8.44771 44 9 44H39C39.5523 44 40 43.5523 40 43C40 42.4477 39.5523 42 39 42H36V8H38V6H31C31 4.89543 30.1046 4 29 4H19C17.8954 4 17 4.89543 17 6H10V8H12V42H9ZM34 11V42H31V38H32V36H16V38H17V42H14V11H17V16C17 17.1046 17.8954 18 19 18H29C30.1046 18 31 17.1046 31 16V11H34ZM23 42H25V38H23V42ZM34 8V9H31V8H34ZM14 9H17V8H14V9ZM25 7H23V10H20V12H23V15H25V12H28V10H25V7ZM16 20H20V23H16V20ZM20 25H16V28H20V25ZM16 30H20V33H16V30ZM26 20H22V23H26V20ZM22 25H26V28H22V25ZM26 30H22V33H26V30ZM28 20H32V23H28V20ZM32 25H28V28H32V25ZM28 30H32V33H28V30Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}