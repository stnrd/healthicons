import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Nervous extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Nervous({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40ZM24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 31.5C14 29.0147 16.0147 27 18.5 27H29.5C31.9853 27 34 29.0147 34 31.5C34 33.9853 31.9853 36 29.5 36H18.5C16.0147 36 14 33.9853 14 31.5ZM17 33C17 32.4477 17.4477 32 18 32H30C30.5523 32 31 32.4477 31 33C31 33.5523 30.5523 34 30 34H18C17.4477 34 17 33.5523 17 33ZM18 29C17.4477 29 17 29.4477 17 30C17 30.5523 17.4477 31 18 31H30C30.5523 31 31 30.5523 31 30C31 29.4477 30.5523 29 30 29H18Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.5 20C30.2239 20 30 20.2239 30 20.5C30 20.7761 30.2239 21 30.5 21C30.7761 21 31 20.7761 31 20.5C31 20.2239 30.7761 20 30.5 20ZM28 20.5C28 19.1193 29.1193 18 30.5 18C31.8807 18 33 19.1193 33 20.5C33 21.8807 31.8807 23 30.5 23C29.1193 23 28 21.8807 28 20.5Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 20C17.2239 20 17 20.2239 17 20.5C17 20.7761 17.2239 21 17.5 21C17.7761 21 18 20.7761 18 20.5C18 20.2239 17.7761 20 17.5 20ZM15 20.5C15 19.1193 16.1193 18 17.5 18C18.8807 18 20 19.1193 20 20.5C20 21.8807 18.8807 23 17.5 23C16.1193 23 15 21.8807 15 20.5Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}