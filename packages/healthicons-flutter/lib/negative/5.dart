import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Svg5 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Svg5({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM32 10C33.1046 10 34 10.8954 34 12C34 13.1046 33.1046 14 32 14H19.6396L18.6957 18.7194C20.1847 18.3044 21.9864 18 24 18C29.5228 18 34 22.4772 34 28C34 33.5228 29.5228 38 24 38H21.7819C18.2656 38 15.2453 35.7982 14.1189 32.6794C13.7437 31.6405 14.2817 30.4941 15.3206 30.1189C16.3595 29.7437 17.5058 30.2817 17.881 31.3206C18.4379 32.8626 19.9595 34 21.7819 34H24C27.3137 34 30 31.3137 30 28C30 24.6863 27.3137 22 24 22C20.3955 22 17.7814 23.2161 17.1094 23.6641C16.4363 24.1128 15.5592 24.1119 14.8871 23.6618C14.215 23.2117 13.8802 22.401 14.0388 21.6078L16.0388 11.6078C16.2258 10.6729 17.0466 10 18 10H32Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}