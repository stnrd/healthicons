import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Imm extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Imm({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26 25.5C26 27.433 24.433 29 22.5 29C20.567 29 19 27.433 19 25.5C19 23.567 20.567 22 22.5 22C24.433 22 26 23.567 26 25.5Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 24C33 28.9706 28.9706 33 24 33C19.0294 33 15 28.9706 15 24C15 19.0294 19.0294 15 24 15C28.9706 15 33 19.0294 33 24ZM31 24C31 27.866 27.866 31 24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17C27.866 17 31 20.134 31 24Z" fill="#333333"/>
<path d="M14.5 11C16.433 11 18 12.567 18 14.5C18 16.433 16.433 18 14.5 18C12.567 18 11 16.433 11 14.5C11 12.567 12.567 11 14.5 11Z" fill="#333333"/>
<path d="M39 31.5C39 33.433 37.433 35 35.5 35C33.567 35 32 33.433 32 31.5C32 29.567 33.567 28 35.5 28C37.433 28 39 29.567 39 31.5Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31 15C32.6569 15 34 13.6569 34 12C34 10.3431 32.6569 9 31 9C29.3431 9 28 10.3431 28 12C28 13.6569 29.3431 15 31 15ZM31 13C31.5523 13 32 12.5523 32 12C32 11.4477 31.5523 11 31 11C30.4477 11 30 11.4477 30 12C30 12.5523 30.4477 13 31 13Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C16 33.6569 14.6569 35 13 35C11.3431 35 10 33.6569 10 32C10 30.3431 11.3431 29 13 29C14.6569 29 16 30.3431 16 32ZM14 32C14 32.5523 13.5523 33 13 33C12.4477 33 12 32.5523 12 32C12 31.4477 12.4477 31 13 31C13.5523 31 14 31.4477 14 32Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24ZM42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}