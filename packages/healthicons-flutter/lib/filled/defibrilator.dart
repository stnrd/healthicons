import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Defibrilator extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Defibrilator({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.8435 9.97199C42.1819 12.5473 42.5883 16.1635 41.3674 19.2688C39.2798 24.5787 34.5828 29.3892 30.1272 33.9525C27.948 36.1843 25.8266 38.357 24.0964 40.5C23.6971 40.1108 23.2842 39.7103 22.8605 39.2993C17.1712 33.7804 9.53589 26.3737 6.6807 19.2688C6.2266 18.1389 6.00942 16.929 6.04239 15.713C6.07536 14.4971 6.3578 13.3005 6.87247 12.1964C7.38715 11.0922 8.12326 10.1037 9.03591 9.29101C12.6689 6.04659 18.3562 6.5524 21.8132 9.98079L24.0964 12.2451L26.7408 9.62255C27.6081 8.76244 28.6431 8.0866 29.7825 7.63627C30.9219 7.18593 32.1418 6.97054 33.3679 7.00324C34.594 7.03593 35.8006 7.31604 36.9139 7.82645C38.0273 8.33687 39.0241 9.06689 39.8435 9.97199ZM18.9688 24.8016L26.9091 14.5359L25.3818 22.2861H29.9083C30.3238 22.2861 30.558 22.7634 30.3038 23.092L22.3635 33.3577L23.8909 25.6075H19.3643C18.9488 25.6075 18.7146 25.1302 18.9688 24.8016Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}