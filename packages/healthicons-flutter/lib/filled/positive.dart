import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Positive extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Positive({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24ZM13 24C13 23.4477 13.4477 23 14 23H23V14C23 13.4477 23.4477 13 24 13C24.5523 13 25 13.4477 25 14V23H34C34.5523 23 35 23.4477 35 24C35 24.5523 34.5523 25 34 25H25V34C25 34.5523 24.5523 35 24 35C23.4477 35 23 34.5523 23 34V25H14C13.4477 25 13 24.5523 13 24Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM11 24C11 22.3431 12.3431 21 14 21H21V14C21 12.3431 22.3431 11 24 11C25.6569 11 27 12.3431 27 14V21H34C35.6569 21 37 22.3431 37 24C37 25.6569 35.6569 27 34 27H27V34C27 35.6569 25.6569 37 24 37C22.3431 37 21 35.6569 21 34V27H14C12.3431 27 11 25.6569 11 24ZM14 23C13.4477 23 13 23.4477 13 24C13 24.5523 13.4477 25 14 25H23L23 34C23 34.5523 23.4477 35 24 35C24.5523 35 25 34.5523 25 34L25 25H34C34.5523 25 35 24.5523 35 24C35 23.4477 34.5523 23 34 23H25V14C25 13.4477 24.5523 13 24 13C23.4477 13 23 13.4477 23 14V23H14ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}