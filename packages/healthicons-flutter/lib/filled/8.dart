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
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.9679 14C28.2048 14 30 15.8009 30 18C30 20.1991 28.2048 22 25.9679 22H22.0321C19.7952 22 18 20.1991 18 18C18 15.8009 19.7952 14 22.0321 14H25.9679ZM16.7194 24C15.053 22.5357 14 20.3929 14 18C14 13.5717 17.6062 10 22.0321 10H25.9679C30.3938 10 34 13.5717 34 18C34 20.3929 32.947 22.5357 31.2806 24C32.947 25.4643 34 27.6071 34 30C34 34.4283 30.3938 38 25.9679 38H22.0321C17.6062 38 14 34.4283 14 30C14 27.6071 15.053 25.4643 16.7194 24ZM22.0321 26H25.9679C28.2048 26 30 27.8009 30 30C30 32.1991 28.2048 34 25.9679 34H22.0321C19.7952 34 18 32.1991 18 30C18 27.8009 19.7952 26 22.0321 26Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}