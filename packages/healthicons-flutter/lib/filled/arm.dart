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
<path d="M4 37L4 27L16.5227 26.9999C17.5039 26.9999 18.4813 27.1203 19.4332 27.3582L22 27.9999L22.1556 27.7509C23.6688 25.3299 25.9955 23.5277 28.718 22.6679L34 20.9999V18.9031C34 17.9948 34.3091 17.1135 34.8765 16.4043L38 12.4999L38.3668 12.8026C39.1823 13.4753 39.3333 14.6666 38.7115 15.5216L38 16.4999L40 14.9999L40.9283 13.1434C41.4863 12.0273 42.9189 11.6891 43.9171 12.4378L44 12.4999L43 19.4999L38 22.4999L32.9534 28.6279C31.6718 30.1842 30.0188 31.3924 28.1469 32.1412L26 32.9999L25.1716 33.8284C24.4214 34.5785 23.404 34.9999 22.3431 34.9999L21 35L16.8474 36.3841C15.6238 36.792 14.3425 37 13.0527 37H4Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}