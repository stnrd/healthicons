import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Yes extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Yes({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24ZM34.6709 16.2585C35.0805 16.629 35.1121 17.2614 34.7415 17.6709L22.0749 31.6709L21.3858 32.4325L20.6429 31.7234L13.3095 24.7234C12.91 24.342 12.8953 23.709 13.2766 23.3095C13.658 22.91 14.291 22.8953 14.6905 23.2766L21.2809 29.5675L33.2585 16.3291C33.629 15.9195 34.2614 15.8879 34.6709 16.2585Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}