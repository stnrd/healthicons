import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Svg9 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Svg9({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.9679 22C28.2048 22 30 20.1991 30 18C30 15.8009 28.2048 14 25.9679 14H22.0321C19.7952 14 18 15.8009 18 18C18 20.1991 19.7952 22 22.0321 22H25.9679Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM18.2278 31.3303C18.7795 32.883 20.2729 34 22.0321 34H25.9679C28.2048 34 30 32.1991 30 30V24.9201C28.8139 25.607 27.436 26 25.9679 26H22.0321C17.6062 26 14 22.4283 14 18C14 13.5717 17.6062 10 22.0321 10H25.9679C30.3938 10 34 13.5717 34 18V30C34 34.4283 30.3938 38 25.9679 38H22.0321C18.5384 38 15.5631 35.7778 14.4587 32.6697C14.0888 31.6288 14.6328 30.4853 15.6736 30.1154C16.7144 29.7456 17.858 30.2895 18.2278 31.3303Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}