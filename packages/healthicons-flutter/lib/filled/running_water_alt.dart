import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RunningWaterAlt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const RunningWaterAlt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 12C26 10.8954 25.1046 10 24 10C22.8954 10 22 10.8954 22 12V24H26V12ZM28 20V12C28 9.79086 26.2091 8 24 8C21.7909 8 20 9.79086 20 12V20H14V19H18V14C18 12.8954 17.1046 12 16 12H9C7.89543 12 7 12.8954 7 14V19H11V20H7C5.89543 20 5 20.8954 5 22V25H4V27H19V30H29V27H44V25H43V22C43 20.8954 42.1046 20 41 20H37V19H41V14C41 12.8954 40.1046 12 39 12H32C30.8954 12 30 12.8954 30 14V19H34V20H28ZM27 26H21V28H27V26ZM28 38C28 40.2091 26.2091 42 24 42C21.7909 42 20 40.2091 20 38C20 34.5 24 31 24 31C24 31 28 34.5 28 38ZM13 17H12V15H10V17H9V14H16V17H15V15H13V17ZM35 17H36V15H38V17H39V14H32V17H33V15H35V17Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}