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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 17C15 12.0294 19.0294 8 24 8C28.9706 8 33 12.0294 33 17V18H35V17C35 10.9249 30.0751 6 24 6C17.9249 6 13 10.9249 13 17V18H15V17ZM31 18V17C31 13.134 27.866 10 24 10C20.134 10 17 13.134 17 17V18H19V17C19 14.2386 21.2386 12 24 12C26.7614 12 29 14.2386 29 17V18H31Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 20H37V40H11L11 20H15V18H11C9.89543 18 9 18.8954 9 20V40C9 41.1046 9.89543 42 11 42H37C38.1046 42 39 41.1046 39 40V20C39 18.8954 38.1046 18 37 18H17V20Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.9999 26H15V24H32.9999V26Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.9999 31H15V29H32.9999V31Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.9999 36H15V34H32.9999V36Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}