import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class D extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const D({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 12C11 10.3431 12.3431 9 14 9H22C30.2843 9 37 15.7157 37 24C37 32.2843 30.2843 39 22 39H14C12.3431 39 11 37.6569 11 36V12ZM14 11C13.4477 11 13 11.4477 13 12V36C13 36.5523 13.4477 37 14 37H22C29.1797 37 35 31.1797 35 24C35 16.8203 29.1797 11 22 11H14ZM15 14C15 13.4477 15.4477 13 16 13H22C28.0751 13 33 17.9249 33 24C33 30.0751 28.0751 35 22 35H16C15.4477 35 15 34.5523 15 34V14ZM17 15V33H22C26.9706 33 31 28.9706 31 24C31 19.0294 26.9706 15 22 15H17Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}