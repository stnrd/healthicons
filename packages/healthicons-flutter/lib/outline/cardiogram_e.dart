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
<path d="M12 29C11.4477 29 11 29.4477 11 30C11 30.5523 11.4477 31 12 31H26C26.5523 31 27 30.5523 27 30C27 29.4477 26.5523 29 26 29H12Z" fill="#333333"/>
<path d="M11 35C11 34.4477 11.4477 34 12 34H20C20.5523 34 21 34.4477 21 35C21 35.5523 20.5523 36 20 36H12C11.4477 36 11 35.5523 11 35Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C12 7.34315 13.3431 6 15 6H23C24.6569 6 26 7.34315 26 9H29C30.6569 9 32 10.3431 32 12V39C32 40.6569 30.6569 42 29 42H9C7.34315 42 6 40.6569 6 39V12C6 10.3431 7.34315 9 9 9H12ZM8 23H14.1713L15.6411 20.5338L17.4561 27.1952L21.4896 22H25.768C26.3203 22 26.768 21.5522 26.768 21C26.768 20.4477 26.3203 20 25.768 20H20.5104L18.3328 22.8047L16.3333 15.4661L13.035 21H8V12C8 11.4477 8.44772 11 9 11H12C12 12.6569 13.3431 14 15 14H23C24.6569 14 26 12.6569 26 11H29C29.5523 11 30 11.4477 30 12V39C30 39.5523 29.5523 40 29 40H9C8.44772 40 8 39.5523 8 39V23ZM24 9V11C24 11.5523 23.5523 12 23 12H15C14.4477 12 14 11.5523 14 11V9C14 8.44772 14.4477 8 15 8H23C23.5523 8 24 8.44772 24 9Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 14C37.3431 14 36 15.3431 36 17V37.3028L39 41.8028L42 37.3028V17C42 15.3431 40.6569 14 39 14ZM38 17C38 16.4477 38.4477 16 39 16C39.5523 16 40 16.4477 40 17V19H38V17ZM38 36.6972V21H40V36.6972L39 38.1972L38 36.6972Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}