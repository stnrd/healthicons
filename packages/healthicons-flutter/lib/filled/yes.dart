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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44ZM34.7415 17.6709C35.1121 17.2614 35.0805 16.629 34.6709 16.2585C34.2614 15.8879 33.629 15.9195 33.2585 16.3291L21.2809 29.5675L14.6905 23.2766C14.291 22.8953 13.658 22.91 13.2766 23.3095C12.8953 23.709 12.91 24.342 13.3095 24.7234L20.6429 31.7234L21.3858 32.4325L22.0749 31.6709L34.7415 17.6709Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}