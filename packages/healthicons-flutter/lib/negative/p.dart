import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class P extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const P({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26 22H18V14H26C28.2091 14 30 15.7909 30 18C30 20.2091 28.2091 22 26 22Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM16 10C14.8954 10 14 10.8954 14 12V36C14 37.1046 14.8954 38 16 38C17.1046 38 18 37.1046 18 36V26H26C30.4183 26 34 22.4183 34 18C34 13.5817 30.4183 10 26 10H16Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}