import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UiSecure extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const UiSecure({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 18C9.89543 18 9 18.8954 9 20V40C9 41.1046 9.89543 42 11 42H37C38.1046 42 39 41.1046 39 40V20C39 18.8954 38.1046 18 37 18H11ZM15 26H32.9999V24H15V26ZM32.9999 31H15V29H32.9999V31ZM15 36H32.9999V34H15V36Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 18V16C30 12.6863 27.3137 10 24 10C20.6863 10 18 12.6863 18 16V18H30ZM24 6C18.4772 6 14 10.4772 14 16V22H34V16C34 10.4772 29.5228 6 24 6Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}