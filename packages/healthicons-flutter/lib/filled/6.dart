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
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.9679 14C27.7271 14 29.2205 15.117 29.7722 16.6697C30.142 17.7105 31.2856 18.2544 32.3264 17.8846C33.3672 17.5147 33.9112 16.3712 33.5413 15.3303C32.4369 12.2222 29.4616 10 25.9679 10H22.0321C17.6062 10 14 13.5717 14 18V30C14 34.4283 17.6062 38 22.0321 38H25.9679C30.3938 38 34 34.4283 34 30C34 25.5717 30.3938 22 25.9679 22H22.0321C20.564 22 19.1861 22.393 18 23.0799V18C18 15.8009 19.7952 14 22.0321 14H25.9679ZM18 30C18 27.8009 19.7952 26 22.0321 26H25.9679C28.2048 26 30 27.8009 30 30C30 32.1991 28.2048 34 25.9679 34H22.0321C19.7952 34 18 32.1991 18 30Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}