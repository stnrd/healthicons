import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CriticalCare extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CriticalCare({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 6C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H9ZM13 13C12.4477 13 12 13.4477 12 14V29.9592C12 30.5115 12.4477 30.9592 13 30.9592H23V33.102H18.4615V35.102H29.5385V33.102H25V30.9592H35C35.5523 30.9592 36 30.5115 36 29.9592V14C36 13.4477 35.5523 13 35 13H13Z" fill="#333333"/>
<path d="M13.8462 21.679H19.504L22.9071 15.694L25.0336 23.0566L27.6358 19.7469H33.1494C33.7042 19.7469 34.1539 20.1918 34.1539 20.7406C34.1539 21.2893 33.7042 21.7342 33.1494 21.7342H28.6184L24.1894 27.3674L22.298 20.8188L20.6789 23.6663H13.8462V21.679Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}