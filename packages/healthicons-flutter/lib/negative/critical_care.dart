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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM9 6C7.34315 6 6 7.34314 6 9V39C6 40.6569 7.34314 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H9Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 13C12.4477 13 12 13.4477 12 14V29.9592C12 30.5115 12.4477 30.9592 13 30.9592H35C35.5523 30.9592 36 30.5115 36 29.9592V14C36 13.4477 35.5523 13 35 13H13ZM19.504 21.679H13.8462V23.6663H20.6789L22.298 20.8188L24.1894 27.3674L28.6184 21.7342H33.1494C33.7042 21.7342 34.1539 21.2893 34.1539 20.7406C34.1539 20.1918 33.7042 19.7469 33.1494 19.7469H27.6358L25.0336 23.0566L22.9071 15.694L19.504 21.679Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 20.679H18.9222L22.72 14H13V20.679ZM13 24.6663V29.9592H35V21.5089C34.6962 22.2323 33.9766 22.7342 33.1494 22.7342H29.1042L23.7699 29.5189L21.9952 23.3744L21.2606 24.6663H13ZM22.298 20.8188L24.1894 27.3674L28.6184 21.7342H33.1494C33.7042 21.7342 34.1539 21.2893 34.1539 20.7406C34.1539 20.1918 33.7042 19.7469 33.1494 19.7469H27.6358L25.0336 23.0566L22.9071 15.694L19.504 21.679H13.8462V23.6663H20.6789L22.298 20.8188ZM25.4531 20.9052L27.15 18.7469H33.1494C33.9766 18.7469 34.6962 19.2488 35 19.9722V14H23.4588L25.4531 20.9052ZM12 14C12 13.4477 12.4477 13 13 13H35C35.5523 13 36 13.4477 36 14V29.9592C36 30.5115 35.5523 30.9592 35 30.9592H13C12.4477 30.9592 12 30.5115 12 29.9592V14Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.5385 35.102H18.4615V33.102H29.5385V35.102Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23 35V28.7142H25V35H23Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}