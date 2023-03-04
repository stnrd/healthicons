import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LowBars extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const LowBars({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.29289 37.2929L13.6569 30.9289M9.0858 40.5L14.9749 34.6109M35 41H39C40.1046 41 41 40.1046 41 39V9C41 7.89543 40.1046 7 39 7H35C33.8954 7 33 7.89543 33 9V39C33 40.1046 33.8954 41 35 41ZM22 41H26C27.1046 41 28 40.1046 28 39V21C28 19.8954 27.1046 19 26 19H22C20.8954 19 20 19.8954 20 21V39C20 40.1046 20.8954 41 22 41ZM9 41H13C14.1046 41 15 40.1046 15 39V33C15 31.8954 14.1046 31 13 31H9C7.89543 31 7 31.8954 7 33V39C7 40.1046 7.89543 41 9 41Z" stroke="#333333" stroke-width="2"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}