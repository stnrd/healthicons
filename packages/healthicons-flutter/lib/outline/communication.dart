import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Communication extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Communication({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 33H29.5C36.4036 33 42 27.4036 42 20.5C42 13.5964 36.4036 8 29.5 8H18.5C11.5964 8 6 13.5964 6 20.5C6 28.4145 11.2167 33.2537 16.9239 36.2262C19.7585 37.7025 22.6136 38.6566 24.7728 39.2414C25.2149 39.3611 25.626 39.4649 26 39.5542V33ZM28 42C28 42 27.2439 41.8897 26 41.6077C20.2362 40.3007 4 35.305 4 20.5C4 12.4919 10.4919 6 18.5 6H29.5C37.5081 6 44 12.4919 44 20.5C44 28.5081 37.5081 35 29.5 35H28V42Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 22C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20C23.4477 20 23 20.4477 23 21C23 21.5523 23.4477 22 24 22ZM24 24C25.6569 24 27 22.6569 27 21C27 19.3431 25.6569 18 24 18C22.3431 18 21 19.3431 21 21C21 22.6569 22.3431 24 24 24Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 22C32.5523 22 33 21.5523 33 21C33 20.4477 32.5523 20 32 20C31.4477 20 31 20.4477 31 21C31 21.5523 31.4477 22 32 22ZM32 24C33.6569 24 35 22.6569 35 21C35 19.3431 33.6569 18 32 18C30.3431 18 29 19.3431 29 21C29 22.6569 30.3431 24 32 24Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 22C16.5523 22 17 21.5523 17 21C17 20.4477 16.5523 20 16 20C15.4477 20 15 20.4477 15 21C15 21.5523 15.4477 22 16 22ZM16 24C17.6569 24 19 22.6569 19 21C19 19.3431 17.6569 18 16 18C14.3431 18 13 19.3431 13 21C13 22.6569 14.3431 24 16 24Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}