import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class IUtensils extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const IUtensils({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM19 4H28V8H24V10H28V13H26V15H28V18H26V20H28V23H24V25H28V28H26V30H28V33H26V35H28V38H24V40H28V44H19V4ZM33 28C31.8954 28 31 28.8954 31 30V35H38V30C38 28.8954 37.1046 28 36 28H33ZM38 37H31V42C31 43.1046 31.8954 44 33 44H36C37.1046 44 38 43.1046 38 42V37ZM10 14C10 12.3431 11.3431 11 13 11C14.6569 11 16 12.3431 16 14V17H10V14ZM10 40V19H16V40L13 44L10 40Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}