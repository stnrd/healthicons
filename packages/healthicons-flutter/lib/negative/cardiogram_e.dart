import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CardiogramE extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CardiogramE({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9C14 8.44772 14.4477 8 15 8H23C23.5523 8 24 8.44772 24 9V11C24 11.5523 23.5523 12 23 12H15C14.4477 12 14 11.5523 14 11V9Z" fill="#333333"/>
<path d="M11 30C11 29.4477 11.4477 29 12 29H26C26.5523 29 27 29.4477 27 30C27 30.5523 26.5523 31 26 31H12C11.4477 31 11 30.5523 11 30Z" fill="#333333"/>
<path d="M12 34C11.4477 34 11 34.4477 11 35C11 35.5523 11.4477 36 12 36H26C26.5523 36 27 35.5523 27 35C27 34.4477 26.5523 34 26 34H12Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM15 6C13.3431 6 12 7.34315 12 9H9C7.34315 9 6 10.3431 6 12V21H13.035L16.3333 15.4661L18.3328 22.8048L20.5104 20H25.768C26.3203 20 26.768 20.4477 26.768 21C26.768 21.5523 26.3203 22 25.768 22H21.4896L17.4561 27.1952L15.6411 20.5339L14.1713 23H6V39C6 40.6569 7.34315 42 9 42H29C30.6569 42 32 40.6569 32 39V12C32 10.3431 30.6569 9 29 9H26C26 7.34315 24.6569 6 23 6H15ZM36 18C36 16.3431 37.3431 15 39 15C40.6569 15 42 16.3431 42 18V21H36V18ZM36 38V23H42V38L39 42L36 38Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}