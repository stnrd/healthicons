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
<path d="M14 19C14 18.4477 14.4477 18 15 18H28C28.5523 18 29 18.4477 29 19C29 19.5523 28.5523 20 28 20H15C14.4477 20 14 19.5523 14 19Z" fill="#333333"/>
<path d="M15 23C14.4477 23 14 23.4477 14 24C14 24.5523 14.4477 25 15 25H22C22.5523 25 23 24.5523 23 24C23 23.4477 22.5523 23 22 23H15Z" fill="#333333"/>
<path d="M14 29C14 28.4477 14.4477 28 15 28H26C26.5523 28 27 28.4477 27 29C27 29.5523 26.5523 30 26 30H15C14.4477 30 14 29.5523 14 29Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM15 8H13C11.3431 8 10 9.34315 10 11V35C10 36.6569 11.3431 38 13 38H30C31.6569 38 33 36.6569 33 35V11C33 9.34315 31.6569 8 30 8H29V10.0008C29 10.5531 28.5523 11.0008 28 11.0008C27.4477 11.0008 27 10.5531 27 10.0008V7C27 6.44772 26.5523 6 26 6C25.4477 6 25 6.44772 25 7V8H19V10.0008C19 10.5531 18.5523 11.0008 18 11.0008C17.4477 11.0008 17 10.5531 17 10.0008V7C17 6.44772 16.5523 6 16 6C15.4477 6 15 6.44772 15 7V8ZM8 10V35C8 37.7614 10.2386 40 13 40H30V42H13C9.13401 42 6 38.866 6 35V10H8ZM36 13C36 11.3431 37.3431 10 39 10C40.6569 10 42 11.3431 42 13V16H36V13ZM36 33V18H42V33L39 37L36 33Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}