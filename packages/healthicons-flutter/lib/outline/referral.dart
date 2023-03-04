import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Referral extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Referral({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34 26C32.8948 26 32 26.8948 32 28C32 29.1052 32.8948 30 34 30C35.1052 30 36 29.1052 36 28C36 26.8948 35.1052 26 34 26ZM30 28C30 25.7902 31.7902 24 34 24C36.2098 24 38 25.7902 38 28C38 30.2098 36.2098 32 34 32C31.7902 32 30 30.2098 30 28Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.2936 36.867C28.0106 37.1519 28 37.3082 28 37.3636V40H40V37.3636C40 37.3082 39.9894 37.1519 39.7064 36.867C39.4052 36.5637 38.9011 36.2325 38.2004 35.9263C36.788 35.3091 35.0608 35 34 35C32.9392 35 31.212 35.3091 29.7996 35.9263C29.0989 36.2325 28.5948 36.5637 28.2936 36.867ZM34 33C31.33 33 26 34.4618 26 37.3636V42H42V37.3636C42 34.4618 36.67 33 34 33Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 38C15 38.5369 15.1801 39.0412 15.4974 39.3981C15.7984 39.7367 16.2714 40 17 40H26.9996L26.9999 42H17C15.7286 42 14.7016 41.5133 14.0026 40.7269C13.3199 39.9588 13 38.9631 13 38V33.0006L15 33V38Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 30.5858L19.7071 36.2929L18.2929 37.7071L14 33.4142L9.70711 37.7071L8.29289 36.2929L14 30.5858Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 9C10 7.34315 11.3431 6 13 6H21C22.6569 6 24 7.34315 24 9V10H28V29H6V10H10V9ZM10 12H8V14H10V12ZM10 16H8V27H13V21H21V27H26V16H24V17C24 18.6569 22.6569 20 21 20H13C11.3431 20 10 18.6569 10 17V16ZM24 14H26V12H24V14ZM19 27V23H15V27H19ZM13 8C12.4477 8 12 8.44772 12 9V17C12 17.5523 12.4477 18 13 18H21C21.5523 18 22 17.5523 22 17V9C22 8.44772 21.5523 8 21 8H13ZM16 12V9H18V12H21V14H18V17H16V14H13V12H16Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}