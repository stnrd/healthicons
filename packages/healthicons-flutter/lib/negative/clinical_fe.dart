import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ClinicalFe extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ClinicalFe({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9C14 8.44772 14.4477 8 15 8H23C23.5523 8 24 8.44772 24 9V11C24 11.5523 23.5523 12 23 12H15C14.4477 12 14 11.5523 14 11V9Z" fill="#333333"/>
<path d="M14 18V21H11V23H14V26H16V23H19V21H16V18H14Z" fill="#333333"/>
<path d="M12 29C11.4477 29 11 29.4477 11 30C11 30.5523 11.4477 31 12 31H26C26.5523 31 27 30.5523 27 30C27 29.4477 26.5523 29 26 29H12Z" fill="#333333"/>
<path d="M11 35C11 34.4477 11.4477 34 12 34H26C26.5523 34 27 34.4477 27 35C27 35.5523 26.5523 36 26 36H12C11.4477 36 11 35.5523 11 35Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM15 6C13.3431 6 12 7.34315 12 9H9C7.34315 9 6 10.3431 6 12V39C6 40.6569 7.34315 42 9 42H29C30.6569 42 32 40.6569 32 39V12C32 10.3431 30.6569 9 29 9H26C26 7.34315 24.6569 6 23 6H15ZM36 18C36 16.3431 37.3431 15 39 15C40.6569 15 42 16.3431 42 18V21H36V18ZM36 38V23H42V38L39 42L36 38Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}