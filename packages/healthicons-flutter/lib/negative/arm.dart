import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Arm extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Arm({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM4 27L4 37H13.0527C14.3425 37 15.6238 36.7921 16.8474 36.3842L21 35H22.3431C23.404 35 24.4214 34.5786 25.1716 33.8284L26 33L28.1469 32.1412C30.0188 31.3925 31.6718 30.1842 32.9534 28.628L38 22.5L43 19.5L44 12.5L43.9171 12.4379C42.9189 11.6892 41.4863 12.0274 40.9283 13.1434L40 15L38 16.5L38.7115 15.5217C39.3333 14.6667 39.1823 13.4754 38.3668 12.8026L38 12.5L34.8765 16.4043C34.3091 17.1136 34 17.9948 34 18.9031V21L28.718 22.668C25.9955 23.5277 23.6688 25.33 22.1556 27.751L22 28L19.4332 27.3583C18.4813 27.1203 17.5039 27 16.5227 27H4Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}