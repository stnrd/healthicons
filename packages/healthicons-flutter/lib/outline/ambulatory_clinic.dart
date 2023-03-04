import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AmbulatoryClinic extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AmbulatoryClinic({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0193 11.9846C13.0768 11.2752 13.2616 10.6012 13.5512 9.98462H6V12.4662L10 15.4969V42.0154H38V15.5321L42.5 12.5014V9.98462H24.4488C24.7384 10.6012 24.9232 11.2752 24.9807 11.9846H39.687L36 14.4678V40.0154H12V14.5031L8.67616 11.9846H13.0193Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 26H16V30H20V26ZM14 24V32H22V24H14Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 26H26V40H32V26ZM24 24V42H34V24H24Z" fill="#333333"/>
<path d="M6 41C6 41.5523 6.44772 42 7 42H41C41.5523 42 42 41.5523 42 41C42 40.4477 41.5523 40 41 40H7C6.44772 40 6 40.4477 6 41Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 16H10V14H15V16Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 16H23V14H37.5V16Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25 12C25 15.3137 22.3137 18 19 18C15.6863 18 13 15.3137 13 12C13 8.68629 15.6863 6 19 6C22.3137 6 25 8.68629 25 12ZM20 9V11H22V13H20V15H18V13H16V11H18V9H20Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}