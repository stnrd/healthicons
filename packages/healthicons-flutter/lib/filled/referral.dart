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
<path d="M37 27C37 28.6575 35.6575 30 34 30C32.3425 30 31 28.6575 31 27C31 25.3425 32.3425 24 34 24C35.6575 24 37 25.3425 37 27Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34 25C32.8948 25 32 25.8948 32 27C32 28.1052 32.8948 29 34 29C35.1052 29 36 28.1052 36 27C36 25.8948 35.1052 25 34 25ZM30 27C30 24.7902 31.7902 23 34 23C36.2098 23 38 24.7902 38 27C38 29.2098 36.2098 31 34 31C31.7902 31 30 29.2098 30 27Z" fill="#333333"/>
<path d="M26 37.3636C26 34.4618 31.33 33 34 33C36.67 33 42 34.4618 42 37.3636V42H26V37.3636Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.2936 36.867C28.0106 37.1519 28 37.3082 28 37.3636V40H40V37.3636C40 37.3082 39.9894 37.1519 39.7064 36.867C39.4052 36.5637 38.9011 36.2325 38.2004 35.9263C36.788 35.3091 35.0608 35 34 35C32.9392 35 31.212 35.3091 29.7996 35.9263C29.0989 36.2325 28.5948 36.5637 28.2936 36.867ZM34 33C31.33 33 26 34.4618 26 37.3636V42H42V37.3636C42 34.4618 36.67 33 34 33Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 38C15 38.5369 15.1801 39.0412 15.4974 39.3981C15.7984 39.7367 16.2714 40 17 40H26.9996L26.9999 42H17C15.7286 42 14.7016 41.5133 14.0026 40.7269C13.3199 39.9588 13 38.9631 13 38V33.0006L15 33V38Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 30.5858L19.7071 36.2929L18.2929 37.7071L14 33.4142L9.70711 37.7071L8.29289 36.2929L14 30.5858Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 8C11 6.89543 11.8954 6 13 6H21C22.1046 6 23 6.89543 23 8V9H28V28H6V9H11V8ZM11 11H8V13H11V11ZM11 15H8V26H13V20H21V26H26V15H23V16C23 17.1046 22.1046 18 21 18H13C11.8954 18 11 17.1046 11 16V15ZM23 13H26V11H23V13ZM19 26V22H15V26H19ZM16 11V8H18V11H21V13H18V16H16V13H13V11H16Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}