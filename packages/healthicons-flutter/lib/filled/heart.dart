import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Heart extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Heart({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18.7241C6 12.6409 10.0359 7 15.5625 7C19.3976 7 22.2434 9.53088 24 13.1211C25.7565 9.53111 28.6022 7 32.4375 7C37.9647 7 42 12.6419 42 18.7241C42 31.7444 24 41 24 41C24 41 6 32.3045 6 18.7241Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}