import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Neutral extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Neutral({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40ZM24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM17.5 25C18.8807 25 20 23.2091 20 21C20 18.7909 18.8807 17 17.5 17C16.1193 17 15 18.7909 15 21C15 23.2091 16.1193 25 17.5 25ZM33 21C33 23.2091 31.8807 25 30.5 25C29.1193 25 28 23.2091 28 21C28 18.7909 29.1193 17 30.5 17C31.8807 17 33 18.7909 33 21ZM17 30C16.4477 30 16 30.4477 16 31C16 31.5523 16.4477 32 17 32H31C31.5523 32 32 31.5523 32 31C32 30.4477 31.5523 30 31 30L17 30Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}