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
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.0321 34C20.2729 34 18.7795 32.883 18.2278 31.3303C17.858 30.2895 16.7144 29.7456 15.6736 30.1154C14.6328 30.4853 14.0888 31.6288 14.4587 32.6697C15.5631 35.7778 18.5384 38 22.0321 38H25.9679C30.3938 38 34 34.4283 34 30V18C34 13.5717 30.3938 10 25.9679 10H22.0321C17.6062 10 14 13.5717 14 18C14 22.4283 17.6062 26 22.0321 26H25.9679C27.436 26 28.8139 25.607 30 24.9201V30C30 32.1991 28.2048 34 25.9679 34H22.0321ZM30 18C30 20.1991 28.2048 22 25.9679 22H22.0321C19.7952 22 18 20.1991 18 18C18 15.8009 19.7952 14 22.0321 14H25.9679C28.2048 14 30 15.8009 30 18Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}