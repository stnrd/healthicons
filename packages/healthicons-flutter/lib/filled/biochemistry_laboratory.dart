import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BiochemistryLaboratory extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BiochemistryLaboratory({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 6C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H9ZM36 11C36 13.6889 34.2819 15.1583 32 16.6785C30.743 15.841 29.657 15.019 28.9351 14H33C33.5523 14 34 13.5523 34 13C34 12.4477 33.5523 12 33 12H28.0864C28.0297 11.6858 28 11.3534 28 11H26C26 14.411 28.0774 16.3814 30.1876 17.8651C29.3567 18.4227 28.5312 19.0276 27.8496 19.7206C26.7781 20.81 26 22.1741 26 24C26 25.8259 26.7781 27.19 27.8496 28.2794C28.5312 28.9724 29.3567 29.5773 30.1876 30.1349C28.0774 31.6186 26 33.589 26 37H28C28 34.3111 29.7181 32.8418 32 31.3215C33.257 32.159 34.343 32.981 35.0649 34H31C30.4477 34 30 34.4477 30 35C30 35.5523 30.4477 36 31 36H35.9136C35.9703 36.3142 36 36.6466 36 37H38C38 33.589 35.9226 31.6186 33.8124 30.1349C34.6433 29.5773 35.4688 28.9724 36.1504 28.2794C37.2219 27.19 38 25.8259 38 24C38 22.1741 37.2219 20.81 36.1504 19.7206C35.4688 19.0276 34.6433 18.4227 33.8124 17.8651C35.9226 16.3814 38 14.411 38 11H36ZM29.3995 21C30.1035 20.318 30.9957 19.7203 32 19.0672C33.0043 19.7203 33.8965 20.318 34.6005 21H29.3995ZM28.1277 23C28.0439 23.3107 28 23.6419 28 24C28 24.3581 28.0439 24.6893 28.1277 25H35.8723C35.9561 24.6893 36 24.3581 36 24C36 23.6419 35.9561 23.3107 35.8723 23H28.1277ZM32 28.9328C30.9957 28.2797 30.1035 27.682 29.3995 27H34.6005C33.8965 27.682 33.0043 28.2797 32 28.9328ZM13 17C13 16.4477 13.4477 16 14 16H21C21.5523 16 22 16.4477 22 17V19C22 19.5523 21.5523 20 21 20H20V24.0476L24.2311 30.898C25.8771 33.5629 23.9602 37 20.8279 37H14.1721C11.0398 37 9.1229 33.5629 10.7689 30.898L15 24.0476V20H14C13.4477 20 13 19.5523 13 19V17Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}