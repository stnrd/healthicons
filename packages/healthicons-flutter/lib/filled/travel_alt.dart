import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TravelAlt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const TravelAlt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35 9.5C35 11.433 33.433 13 31.5 13C29.567 13 28 11.433 28 9.5C28 7.567 29.567 6 31.5 6C33.433 6 35 7.567 35 9.5Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.5 11C32.3284 11 33 10.3284 33 9.5C33 8.67157 32.3284 8 31.5 8C30.6716 8 30 8.67157 30 9.5C30 10.3284 30.6716 11 31.5 11ZM31.5 13C33.433 13 35 11.433 35 9.5C35 7.567 33.433 6 31.5 6C29.567 6 28 7.567 28 9.5C28 11.433 29.567 13 31.5 13Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 16C17.8954 16 17 16.8954 17 18C17 19.1046 17.8954 20 19 20H26V40C26 41.1046 26.8954 42 28 42C29.1046 42 30 41.1046 30 40V31H33V40C33 41.1046 33.8954 42 35 42C36.1046 42 37 41.1046 37 40V27.917C39.8377 27.441 42 24.973 42 22C42 18.6863 39.3137 16 36 16H19ZM39 22C39 20.8954 38.1046 20 37 20V24C38.1046 24 39 23.1046 39 22Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 32C6 30.8954 6.89543 30 8 30H21C22.1046 30 23 30.8954 23 32V40C23 41.1046 22.1046 42 21 42H8C6.89543 42 6 41.1046 6 40V32ZM10 39V33H12V39H10ZM17 33V39H19V33H17Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 28C11 26.8954 11.8954 26 13 26H16C17.1046 26 18 26.8954 18 28V30H16V28H13V30H11V28Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}