import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Svg1 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Svg1({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.8787 9.87877C25.7367 9.02077 27.027 8.76411 28.1481 9.22845C29.2691 9.69279 30 10.7867 30 12.0001L30 36.0001C30 37.6569 28.6569 39.0001 27 39.0001C25.3431 39.0001 24 37.6569 24 36.0001L24 19.2363C22.8221 20.2916 21.0106 20.2534 19.8787 19.1214C18.7071 17.9498 18.7071 16.0503 19.8787 14.8788L24.8787 9.87877ZM27.3827 11.0762C27.009 10.9214 26.5789 11.007 26.2929 11.293L21.2929 16.293C20.9024 16.6835 20.9024 17.3167 21.2929 17.7072C21.6834 18.0977 22.3166 18.0977 22.7071 17.7072L24.2929 16.1214C24.5789 15.8354 25.009 15.7499 25.3827 15.9046C25.7564 16.0594 26 16.4241 26 16.8285L26 36.0001C26 36.5524 26.4477 37.0001 27 37.0001C27.5523 37.0001 28 36.5524 28 36.0001L28 12.0001C28 11.5956 27.7564 11.231 27.3827 11.0762Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}