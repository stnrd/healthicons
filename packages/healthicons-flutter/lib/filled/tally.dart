import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Tally extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Tally({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.157 44C35.2027 44 44.157 35.0457 44.157 24C44.157 12.9543 35.2027 4 24.157 4C13.1113 4 4.15698 12.9543 4.15698 24C4.15698 35.0457 13.1113 44 24.157 44ZM17 14C16.4477 14 16 14.4477 16 15V15.7231L13.5318 13.6165L12.2334 15.1377L16 18.3526V33C16 33.5523 16.4477 34 17 34C17.5523 34 18 33.5523 18 33V20.0596L21 22.6202V33C21 33.5523 21.4477 34 22 34C22.5523 34 23 33.5523 23 33V24.3272L26 26.8878V33C26 33.5523 26.4477 34 27 34C27.5523 34 28 33.5523 28 33V28.5948L31 31.1554V33C31 33.5523 31.4477 34 32 34C32.5523 34 33 33.5523 33 33V32.8624L34.8208 34.4165L36.1192 32.8952L33 30.233V15C33 14.4477 32.5523 14 32 14C31.4477 14 31 14.4477 31 15V28.5259L28 25.9654V15C28 14.4477 27.5523 14 27 14C26.4477 14 26 14.4477 26 15V24.2583L23 21.6978V15C23 14.4477 22.5523 14 22 14C21.4477 14 21 14.4477 21 15V19.9907L18 17.4302V15C18 14.4477 17.5523 14 17 14Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}