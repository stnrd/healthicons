import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class INoteAction extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const INoteAction({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 8H17V10.0008C17 10.5531 17.4477 11.0008 18 11.0008C18.5523 11.0008 19 10.5531 19 10.0008V8H27V10.0008C27 10.5531 27.4477 11.0008 28 11.0008C28.5523 11.0008 29 10.5531 29 10.0008V8H30C31.6569 8 33 9.34315 33 11V35C33 36.6569 31.6569 38 30 38H13C11.3431 38 10 36.6569 10 35V11C10 9.34315 11.3431 8 13 8ZM15 18C14.4477 18 14 18.4477 14 19C14 19.5523 14.4477 20 15 20H28C28.5523 20 29 19.5523 29 19C29 18.4477 28.5523 18 28 18H15ZM14 24C14 23.4477 14.4477 23 15 23H22C22.5523 23 23 23.4477 23 24C23 24.5523 22.5523 25 22 25H15C14.4477 25 14 24.5523 14 24ZM15 28C14.4477 28 14 28.4477 14 29C14 29.5523 14.4477 30 15 30H26C26.5523 30 27 29.5523 27 29C27 28.4477 26.5523 28 26 28H15Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 10V35C8 37.7614 10.2386 40 13 40H30V42H13C9.13401 42 6 38.866 6 35V10H8Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 10C37.3431 10 36 11.3431 36 13V16H42V13C42 11.3431 40.6569 10 39 10ZM42 18H36V33L39 37L42 33V18Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 6C26.5523 6 27 6.44772 27 7V11C27 11.5523 26.5523 12 26 12C25.4477 12 25 11.5523 25 11V7C25 6.44772 25.4477 6 26 6Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 6C16.5523 6 17 6.44772 17 7V11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11V7C15 6.44772 15.4477 6 16 6Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}