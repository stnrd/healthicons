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
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.0001 8H13C11.3431 8 10 9.34315 10 11V35C10 36.6569 11.3431 38 13 38H30C31.6569 38 33 36.6569 33 35V11C33 9.34315 31.6569 8 30 8H29.0001V10H30C30.5523 10 31 10.4477 31 11V35C31 35.5523 30.5523 36 30 36H13C12.4477 36 12 35.5523 12 35V11C12 10.4477 12.4477 10 13 10H17.0001V8ZM19.0001 10H27.0001V8H19.0001L19.0001 10Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 19C14 18.4477 14.4477 18 15 18H28C28.5523 18 29 18.4477 29 19C29 19.5523 28.5523 20 28 20H15C14.4477 20 14 19.5523 14 19Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 24C14 23.4477 14.4477 23 15 23H22C22.5523 23 23 23.4477 23 24C23 24.5523 22.5523 25 22 25H15C14.4477 25 14 24.5523 14 24Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 29C14 28.4477 14.4477 28 15 28H26C26.5523 28 27 28.4477 27 29C27 29.5523 26.5523 30 26 30H15C14.4477 30 14 29.5523 14 29Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 10V35C8 37.7614 10.2386 40 13 40H30V42H13C9.13401 42 6 38.866 6 35V10H8Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36 13C36 11.3431 37.3431 10 39 10C40.6569 10 42 11.3431 42 13V33.3028L39 37.8028L36 33.3028V13ZM39 12C38.4477 12 38 12.4477 38 13V32.6972L39 34.1972L40 32.6972V13C40 12.4477 39.5523 12 39 12Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41 17H37V15H41V17Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 6C26.5523 6 27 6.44772 27 7V11C27 11.5523 26.5523 12 26 12C25.4477 12 25 11.5523 25 11V7C25 6.44772 25.4477 6 26 6Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 6C16.5523 6 17 6.44772 17 7V11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11V7C15 6.44772 15.4477 6 16 6Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}