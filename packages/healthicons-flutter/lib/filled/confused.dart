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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40ZM24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 26C18.8807 26 20 24.2091 20 22C20 19.7909 18.8807 18 17.5 18C16.1193 18 15 19.7909 15 22C15 24.2091 16.1193 26 17.5 26ZM30.5 26C31.8807 26 33 24.2091 33 22C33 19.7909 31.8807 18 30.5 18C29.1193 18 28 19.7909 28 22C28 24.2091 29.1193 26 30.5 26Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.3196 34.5138L21.2755 34.5495C20.8462 34.8971 20.2165 34.8308 19.869 34.4016C19.5214 33.9724 19.5877 33.3427 20.0169 32.9952C20.0613 32.9592 20.1057 32.9232 20.1502 32.8871C21.3336 31.9274 22.5614 30.9318 24.4245 30.428C26.3464 29.9083 28.8328 29.9336 32.5676 30.7508C33.1071 30.8688 33.4488 31.4019 33.3307 31.9414C33.2127 32.481 32.6796 32.8226 32.1401 32.7046C28.5482 31.9186 26.4248 31.9589 24.9466 32.3586C23.4968 32.7507 22.5604 33.509 21.3196 34.5138Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}