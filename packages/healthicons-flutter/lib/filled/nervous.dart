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
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 25C18.8807 25 20 23.2091 20 21C20 18.7909 18.8807 17 17.5 17C16.1193 17 15 18.7909 15 21C15 23.2091 16.1193 25 17.5 25ZM30.5 25C31.8807 25 33 23.2091 33 21C33 18.7909 31.8807 17 30.5 17C29.1193 17 28 18.7909 28 21C28 23.2091 29.1193 25 30.5 25Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}