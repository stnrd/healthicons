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
<path fill-rule="evenodd" clip-rule="evenodd" d="M34 12C34 10.8954 33.1046 10 32 10H18C17.0466 10 16.2258 10.6729 16.0388 11.6078L14.0388 21.6078C13.8802 22.401 14.215 23.2117 14.8871 23.6618C15.5592 24.1119 16.4363 24.1128 17.1094 23.6641C17.7814 23.2161 20.3955 22 24 22C27.3137 22 30 24.6863 30 28C30 31.3137 27.3137 34 24 34H21.7819C19.9595 34 18.4379 32.8626 17.881 31.3206C17.5058 30.2817 16.3595 29.7437 15.3206 30.1189C14.2817 30.4941 13.7437 31.6405 14.1189 32.6794C15.2453 35.7982 18.2656 38 21.7819 38H24C29.5228 38 34 33.5228 34 28C34 22.4772 29.5228 18 24 18C21.9864 18 20.1847 18.3044 18.6957 18.7194L19.6396 14H32C33.1046 14 34 13.1046 34 12Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}