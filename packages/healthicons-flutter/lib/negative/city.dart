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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM9 42C8.44771 42 8 42.4477 8 43C8 43.5523 8.44771 44 9 44H39C39.5523 44 40 43.5523 40 43C40 42.4477 39.5523 42 39 42H38V25C38 24.4477 37.5523 24 37 24H33V10L17 4V20H15V13H13V20H11C10.4477 20 10 20.4477 10 21V42H9ZM12 22V42H17V22H12ZM36 42H34V40H31V42H29V26H36V42ZM22 13H20V15H22V13ZM24 13H26V15H24V13ZM30 13H28V15H30V13ZM20 17H22V19H20V17ZM26 17H24V19H26V17ZM28 17H30V19H28V17ZM22 21H20V23H22V21ZM24 21H26V23H24V21ZM30 21H28V23H30V21ZM20 25H22V27H20V25ZM26 25H24V27H26V25ZM22 29H20V31H22V29ZM24 29H26V31H24V29ZM20 33H22V35H20V33ZM26 33H24V35H26V33ZM22 37H20V39H22V37ZM24 37H26V39H24V37ZM31 30H34V28H31V30ZM34 34H31V32H34V34ZM31 38H34V36H31V38Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}