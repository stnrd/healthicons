import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Mouth extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Mouth({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 14.1818C15.2 10.2545 7 18.5453 4 24C7 28.3636 15.2 36 24 36C32.8 36 41 28.3636 44 24C41 18.5454 33 9.81822 24 14.1818ZM41.6044 23.8759C40.1404 21.5563 37.8704 18.8812 35.1456 17.0765C32.0369 15.0175 28.5484 14.1992 24.8725 15.9814C24.3415 16.2389 23.7239 16.2487 23.1849 16.0081C19.5922 14.4048 16.066 15.2261 12.9057 17.2555C10.1567 19.0209 7.8594 21.6083 6.39928 23.8805C7.87025 25.7409 10.1705 28.0471 12.9679 29.9951C16.3101 32.3223 20.1618 34 24 34C27.8382 34 31.6899 32.3223 35.0321 29.9951C37.8319 28.0455 40.1336 25.737 41.6044 23.8759Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5552 23.9581C15.6832 24.9918 19.7444 26 24 26C28.1964 26 32.2037 24.9628 35.3345 23.9229C32.1553 22.912 28.0661 22 24 22C19.8856 22 15.7482 22.9338 12.5552 23.9581ZM9.03371 23.0988C12.4476 21.7291 18.2022 20 24 20C29.7006 20 35.3594 21.6717 38.7926 23.0297C39.6211 23.3574 39.5703 24.5234 38.736 24.8357C35.4141 26.079 29.9194 28 24 28C17.9609 28 12.3638 26.1057 9.0651 24.8259C8.26067 24.5138 8.23291 23.4201 9.03371 23.0988Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}