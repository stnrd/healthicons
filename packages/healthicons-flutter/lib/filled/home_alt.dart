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
<path d="M41.7083 23.794L24.0579 6.08569L6.29405 23.7916C5.90289 24.1815 5.90185 24.8147 6.29174 25.2059C6.68163 25.597 7.31479 25.5981 7.70595 25.2082L11 21.9249V40.9998C11 41.5521 11.4477 41.9998 12 41.9998H19C19.5523 41.9998 20 41.5521 20 40.9998V33C20 31.8954 20.8954 31 22 31H26C27.1046 31 28 31.8954 28 33V40.9998C28 41.5521 28.4477 41.9998 29 41.9998H36C36.5523 41.9998 37 41.5521 37 40.9998V21.9033L40.2917 25.2059C40.6816 25.597 41.3148 25.5981 41.7059 25.2082C42.0971 24.8183 42.0981 24.1851 41.7083 23.794Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}