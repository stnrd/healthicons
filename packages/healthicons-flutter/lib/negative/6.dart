import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Svg6 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Svg6({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0321 26C19.7952 26 18 27.8009 18 30C18 32.1991 19.7952 34 22.0321 34H25.9679C28.2048 34 30 32.1991 30 30C30 27.8009 28.2048 26 25.9679 26H22.0321Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM29.7722 16.6697C29.2205 15.117 27.7271 14 25.9679 14H22.0321C19.7952 14 18 15.8009 18 18V23.0799C19.1861 22.393 20.564 22 22.0321 22H25.9679C30.3938 22 34 25.5717 34 30C34 34.4283 30.3938 38 25.9679 38H22.0321C17.6062 38 14 34.4283 14 30V18C14 13.5717 17.6062 10 22.0321 10H25.9679C29.4616 10 32.4369 12.2222 33.5413 15.3303C33.9112 16.3712 33.3672 17.5147 32.3264 17.8846C31.2856 18.2544 30.142 17.7105 29.7722 16.6697Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}