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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C25.1046 40 26 39.1046 26 38C26 36.9336 25.3464 35.6298 24.4091 34.3996C24.272 34.2196 24.1345 34.0486 24 33.888C23.8655 34.0486 23.728 34.2196 23.5909 34.3996C22.6536 35.6298 22 36.9336 22 38C22 39.1046 22.8954 40 24 40ZM24 42C26.2091 42 28 40.2091 28 38C28 34.5 24 31 24 31C24 31 20 34.5 20 38C20 40.2091 21.7909 42 24 42Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 10.8954 22.8954 10 24 10C25.1046 10 26 10.8954 26 12V24H22V12ZM21 26V28H27V26H21ZM29 27V30H19V27H4V25H5V22C5 20.8954 5.89543 20 7 20H10V19H7V14C7 12.8954 7.89543 12 9 12H16C17.1046 12 18 12.8954 18 14V19H15V20H20V12C20 9.79086 21.7909 8 24 8C26.2091 8 28 9.79086 28 12V20H33V19H30V14C30 12.8954 30.8954 12 32 12H39C40.1046 12 41 12.8954 41 14V19H38V20H41C42.1046 20 43 20.8954 43 22V25H44V27H29ZM41 25V22H28V24H29V25H41ZM36 20V19H35V20H36ZM19 24V25H7V22H20V24H19ZM13 20H12V19H13V20ZM16 14H9V17H10V15H12V17H13V15H15V17H16V14ZM32 14H39V17H38V15H36V17H35V15H33V17H32V14Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}