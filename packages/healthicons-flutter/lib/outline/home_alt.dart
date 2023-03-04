import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HomeAlt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HomeAlt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.7083 23.794L24.0579 6.08569L6.29405 23.7916C5.90289 24.1815 5.90185 24.8147 6.29174 25.2059C6.68163 25.597 7.31479 25.5981 7.70595 25.2082L10 22.9216V40.9998C10 41.5521 10.4477 41.9998 11 41.9998H20C20.5523 41.9998 21 41.5521 21 40.9998V32.259C21 31.7068 21.4477 31.259 22 31.259H26C26.5523 31.259 27 31.7068 27 32.259V40.9998C27 41.5521 27.4477 41.9998 28 41.9998H37C37.5523 41.9998 38 41.5521 38 40.9998V22.9066L40.2917 25.2059C40.6816 25.597 41.3148 25.5981 41.7059 25.2082C42.0971 24.8183 42.0981 24.1851 41.7083 23.794ZM36 20.9L24.0533 8.91412L12 20.9281V39.9998H19V32.259C19 30.6022 20.3431 29.259 22 29.259H26C27.6569 29.259 29 30.6022 29 32.259V39.9998H36V20.9Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}