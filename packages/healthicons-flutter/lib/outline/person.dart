import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Person extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Person({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 24C28.4204 24 32 20.4204 32 16C32 11.5796 28.4204 8 24 8C19.5796 8 16 11.5796 16 16C16 20.4204 19.5796 24 24 24ZM34 16C34 21.525 29.525 26 24 26C18.475 26 14 21.525 14 16C14 10.475 18.475 6 24 6C29.525 6 34 10.475 34 16Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.22348 34.2119C8.22038 35.0211 8 35.6291 8 36V40H40V36C40 35.6291 39.7796 35.0211 38.7765 34.2119C37.7958 33.4207 36.3341 32.6669 34.5622 32.015C31.0199 30.7117 26.7532 30 24 30C21.2468 30 16.9801 30.7117 13.4378 32.015C11.6659 32.6669 10.2042 33.4207 9.22348 34.2119ZM24 28C17.9925 28 6 31.0347 6 36V42H42V36C42 31.0347 30.0075 28 24 28Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}