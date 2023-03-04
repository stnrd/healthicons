import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class O extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const O({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}