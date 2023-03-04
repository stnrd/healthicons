import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ChartLineStacked extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ChartLineStacked({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 40V7H6V41C6 41.5523 6.44772 42 7 42H41V40H8Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.7682 19.6402L29.7682 31.6402C29.5047 31.9564 29.0743 32.0788 28.6838 31.9487L17.3313 28.1645L7.76822 39.6402L6.23178 38.3598L16.2318 26.3598C16.4953 26.0436 16.9257 25.9211 17.3162 26.0513L28.6687 29.8355L38.2318 18.3598L39.7682 19.6402Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.7682 10.6402L28.7682 22.6402C28.4984 22.964 28.0544 23.0838 27.6583 22.9398L17.2887 19.169L7.73994 29.6727L6.26006 28.3273L16.2601 17.3273C16.533 17.0271 16.9604 16.9215 17.3417 17.0602L27.6815 20.8201L37.2318 9.35982L38.7682 10.6402Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}