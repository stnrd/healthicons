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
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM35 9.5C35 11.433 33.433 13 31.5 13C29.567 13 28 11.433 28 9.5C28 7.567 29.567 6 31.5 6C33.433 6 35 7.567 35 9.5ZM17 18C17 16.8954 17.8954 16 19 16H31.5H33H36C39.3137 16 42 18.6863 42 22C42 24.973 39.8377 27.441 37 27.917V31V40C37 41.1046 36.1046 42 35 42C33.8954 42 33 41.1046 33 40V31H30V40C30 41.1046 29.1046 42 28 42C26.8954 42 26 41.1046 26 40V31V23V22.998V20H19C17.8954 20 17 19.1046 17 18ZM37 20C38.1046 20 39 20.8954 39 22C39 23.1046 38.1046 24 37 24V20ZM6 32C6 30.8954 6.89543 30 8 30H11V28C11 26.8954 11.8954 26 13 26H16C17.1046 26 18 26.8954 18 28V30H21C22.1046 30 23 30.8954 23 32V40C23 41.1046 22.1046 42 21 42H8C6.89543 42 6 41.1046 6 40V32ZM16 30V28H13V30H16ZM10 39V33H12V39H10ZM17 33V39H19V33H17Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}