import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Svg8 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Svg8({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 18C30 15.8009 28.2048 14 25.9679 14H22.0321C19.7952 14 18 15.8009 18 18C18 20.1991 19.7952 22 22.0321 22H25.9679C28.2048 22 30 20.1991 30 18Z" fill="#333333"/>
<path d="M25.9679 26H22.0321C19.7952 26 18 27.8009 18 30C18 32.1991 19.7952 34 22.0321 34H25.9679C28.2048 34 30 32.1991 30 30C30 27.8009 28.2048 26 25.9679 26Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM14 18C14 20.3929 15.053 22.5357 16.7194 24C15.053 25.4643 14 27.6071 14 30C14 34.4283 17.6062 38 22.0321 38H25.9679C30.3938 38 34 34.4283 34 30C34 27.6071 32.947 25.4643 31.2806 24C32.947 22.5357 34 20.3929 34 18C34 13.5717 30.3938 10 25.9679 10H22.0321C17.6062 10 14 13.5717 14 18Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}