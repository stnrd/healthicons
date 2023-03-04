import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SocialDistancing extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SocialDistancing({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 14H40" stroke="#333333" stroke-width="2"/>
<path d="M10.8301 11L8.70876 13.1213C8.31823 13.5118 8.31823 14.145 8.70876 14.5355L10.8301 16.6569" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
<path d="M37.1699 16.6567L39.2912 14.5354C39.6818 14.1449 39.6818 13.5117 39.2912 13.1212L37.1699 10.9999" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
<path d="M14 25.5C14 26.8815 12.8815 28 11.5 28C10.1185 28 9 26.8815 9 25.5C9 24.1185 10.1185 23 11.5 23C12.8815 23 14 24.1185 14 25.5Z" fill="#333333" stroke="#333333" stroke-width="2"/>
<path d="M5 34.2667C5 33.4942 5.70876 32.6709 7.22607 31.9793C8.65822 31.3265 10.3918 31 11.5 31C12.6082 31 14.3418 31.3265 15.7739 31.9793C17.2912 32.6709 18 33.4942 18 34.2667V37H5V34.2667Z" fill="#333333" stroke="#333333" stroke-width="2"/>
<path d="M39 25.5C39 26.8815 37.8815 28 36.5 28C35.1185 28 34 26.8815 34 25.5C34 24.1185 35.1185 23 36.5 23C37.8815 23 39 24.1185 39 25.5Z" fill="#333333" stroke="#333333" stroke-width="2"/>
<path d="M30 34.2667C30 33.4942 30.7088 32.6709 32.2261 31.9793C33.6582 31.3265 35.3918 31 36.5 31C37.6082 31 39.3418 31.3265 40.7739 31.9793C42.2912 32.6709 43 33.4942 43 34.2667V37H30V34.2667Z" fill="#333333" stroke="#333333" stroke-width="2"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}