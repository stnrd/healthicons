import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Electricity extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Electricity({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21L25 12V18H29L23 27L23 21H19Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM17 34C16.4803 31.8176 14.0324 27.4611 13.0699 26.2851C11.4217 24.2678 10.3888 21.8354 10.0901 19.2681C9.79137 16.7008 10.2391 14.1031 11.3816 11.7742C12.524 9.44531 14.3149 7.47995 16.5477 6.10453C18.7806 4.72911 21.3646 3.99959 24.0022 4C26.6398 4.00041 29.2237 4.73075 31.4561 6.10687C33.6885 7.48299 35.4787 9.44891 36.6204 11.7782C37.7621 14.1074 38.209 16.7053 37.9094 19.2725C37.6099 21.8396 36.5762 24.2717 34.9273 26.2885C33.9648 27.4628 31.5198 31.8193 31 34H17ZM17 37C17 36.4477 17.4477 36 18 36H30C30.5523 36 31 36.4477 31 37C31 37.5523 30.5523 38 30 38H18C17.4477 38 17 37.5523 17 37ZM31 40H17V42C17 43.1046 17.8954 44 19 44H29C30.1046 44 31 43.1046 31 42V40Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}