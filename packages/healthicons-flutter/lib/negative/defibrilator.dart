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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM41.3674 19.2688C42.5882 16.1635 42.1819 12.5473 39.8435 9.97198C39.024 9.06689 38.0272 8.33687 36.9139 7.82645C35.8005 7.31604 34.594 7.03593 33.3679 7.00324C32.1418 6.97054 30.9218 7.18593 29.7824 7.63627C28.643 8.0866 27.6081 8.76244 26.7408 9.62255L24.0963 12.2451L21.8131 9.98079C18.3562 6.5524 12.6689 6.04659 9.03585 9.29101C8.1232 10.1037 7.38708 11.0922 6.87241 12.1964C6.35774 13.3005 6.0753 14.4971 6.04233 15.713C6.00935 16.929 6.22654 18.1389 6.68064 19.2688C9.53582 26.3736 17.1712 33.7804 22.8604 39.2993C23.2838 39.7101 23.6972 40.111 24.0963 40.5C25.8265 38.357 27.9479 36.1843 30.1271 33.9525C34.5828 29.3892 39.2798 24.5787 41.3674 19.2688ZM26.909 14.5359L18.9687 24.8016C18.7145 25.1302 18.9488 25.6075 19.3642 25.6075H23.8908L22.3635 33.3577L30.3038 23.092C30.558 22.7634 30.3237 22.2861 29.9083 22.2861H25.3817L26.909 14.5359Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}