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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 11C15.433 11 17 12.567 17 14.5V40L13.5 44L10 40V14.5C10 12.567 11.567 11 13.5 11ZM13.5 13C14.3284 13 15 13.6716 15 14.5V17H12V14.5C12 13.6716 12.6716 13 13.5 13ZM13.5 40.9628L12 39.2485V19H15V39.2485L13.5 40.9628Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 28C31.8954 28 31 28.8954 31 30V42C31 43.1046 31.8954 44 33 44H36C37.1046 44 38 43.1046 38 42V30C38 28.8954 37.1046 28 36 28H33ZM36 30H33V35H36V30ZM36 37H33V42H36V37Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29 4H19V44H29V4ZM21 6H27V8H23V10H27V13H25V15H27V18H25V20H27V23H23V25H27V28H25V30H27V33H25V35H27V38H23V40H27V42H21V6Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}