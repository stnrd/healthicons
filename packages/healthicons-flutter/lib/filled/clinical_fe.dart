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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C12 7.34315 13.3431 6 15 6H23C24.6569 6 26 7.34315 26 9H29C30.6569 9 32 10.3431 32 12V39C32 40.6569 30.6569 42 29 42H9C7.34315 42 6 40.6569 6 39V12C6 10.3431 7.34315 9 9 9H12ZM15 8C14.4477 8 14 8.44772 14 9V11C14 11.5523 14.4477 12 15 12H23C23.5523 12 24 11.5523 24 11V9C24 8.44772 23.5523 8 23 8H15ZM14 18V21H11V23H14V26H16V23H19V21H16V18H14ZM12 29C11.4477 29 11 29.4477 11 30C11 30.5523 11.4477 31 12 31H26C26.5523 31 27 30.5523 27 30C27 29.4477 26.5523 29 26 29H12ZM11 35C11 34.4477 11.4477 34 12 34H26C26.5523 34 27 34.4477 27 35C27 35.5523 26.5523 36 26 36H12C11.4477 36 11 35.5523 11 35Z" fill="#333333"/>
<path d="M36 18C36 16.3431 37.3431 15 39 15C40.6569 15 42 16.3431 42 18V21H36V18Z" fill="#333333"/>
<path d="M36 38V23H42V38L39 42L36 38Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}