import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ChartLine extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ChartLine({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM8 7V32.1195L13.3297 25.3686C13.1189 24.9583 13 24.493 13 24C13 22.3431 14.3431 21 16 21C17.6387 21 18.9706 22.3139 18.9995 23.9457L25.6328 26.1568C26.1818 25.4528 27.038 25 28 25C28.3668 25 28.7182 25.0658 29.043 25.1863L35.4207 17.5331C35.1535 17.0844 35 16.5601 35 16C35 14.3431 36.3431 13 38 13C39.6569 13 41 14.3431 41 16C41 17.6569 39.6569 19 38 19C37.6332 19 37.2818 18.9342 36.957 18.8137L30.5793 26.4669C30.8465 26.9156 31 27.4399 31 28C31 29.6569 29.6569 31 28 31C26.3613 31 25.0294 29.6861 25.0005 28.0543L18.3672 25.8432C17.8182 26.5472 16.962 27 16 27C15.5696 27 15.1603 26.9094 14.7903 26.7461L8 35.3472V40H41V42H7C6.44772 42 6 41.5523 6 41V7H8Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}