import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Confused extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Confused({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 15.1634 15.1634 8 24 8C32.8366 8 40 15.1634 40 24ZM17.5 26C18.8807 26 20 24.2091 20 22C20 19.7909 18.8807 18 17.5 18C16.1193 18 15 19.7909 15 22C15 24.2091 16.1193 26 17.5 26ZM30.5 26C31.8807 26 33 24.2091 33 22C33 19.7909 31.8807 18 30.5 18C29.1193 18 28 19.7909 28 22C28 24.2091 29.1193 26 30.5 26ZM21.2755 34.5495L21.3196 34.5138C22.5604 33.509 23.4968 32.7507 24.9466 32.3586C26.4248 31.9589 28.5482 31.9186 32.1401 32.7046C32.6796 32.8226 33.2127 32.481 33.3307 31.9414C33.4488 31.4019 33.1071 30.8688 32.5676 30.7508C28.8328 29.9336 26.3464 29.9083 24.4245 30.428C22.5614 30.9318 21.3336 31.9274 20.1502 32.8871L20.0169 32.9952C19.5877 33.3427 19.5215 33.9724 19.869 34.4016C20.2165 34.8308 20.8462 34.8971 21.2755 34.5495Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}