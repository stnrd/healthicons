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
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 4H19V44H28V40H24V38H28V35H26V33H28V30H26V28H28V25H24V23H28V20H26V18H28V15H26V13H28V10H24V8H28V4Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 28C31.8954 28 31 28.8954 31 30V35H38V30C38 28.8954 37.1046 28 36 28H33ZM38 37H31V42C31 43.1046 31.8954 44 33 44H36C37.1046 44 38 43.1046 38 42V37Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 30V33H36V30H33ZM38 30C38 28.8954 37.1046 28 36 28H33C31.8954 28 31 28.8954 31 30V35H38V30ZM31 37H38V42C38 43.1046 37.1046 44 36 44H33C31.8954 44 31 43.1046 31 42V37ZM36 39H33V42H36V39Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 11C11.3431 11 10 12.3431 10 14V17H16V14C16 12.3431 14.6569 11 13 11ZM16 19H10V40L13 44L16 40V19Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}