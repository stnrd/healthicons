import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Respirology extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Respirology({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.9677 6.00038C25.0147 6.00042 25.0147 6.00044 25.0147 6.00047L25.0113 11.9348C25.0095 15.0387 25.0074 18.4163 25.0064 19.5104C25.0057 20.2958 25.2875 20.5408 25.4233 20.6333C25.5181 20.698 25.6175 20.7348 25.6951 20.7545C25.7325 20.7641 25.7605 20.7685 25.7738 20.7703L25.7811 20.7712L25.7727 20.7706L25.7659 20.7702L25.7617 20.77L25.7595 20.7699L25.7583 20.7698C25.7577 20.7698 25.757 20.7698 25.7151 21.7689C25.6733 22.768 25.6726 22.768 25.672 22.768L25.6679 22.7678L25.6619 22.7675L25.6478 22.7667C25.6375 22.766 25.6254 22.7652 25.6117 22.764C25.5842 22.7617 25.5498 22.7582 25.5095 22.7528C25.4293 22.7421 25.3236 22.7239 25.2007 22.6926C24.9575 22.6306 24.6294 22.5128 24.2967 22.2861C24.1913 22.2142 24.089 22.1339 23.9912 22.0447C23.8934 22.1339 23.7911 22.2142 23.6857 22.2861C23.3531 22.5128 23.0249 22.6306 22.7818 22.6926C22.6589 22.7239 22.5532 22.7421 22.4729 22.7528C22.4326 22.7582 22.3982 22.7617 22.3708 22.764C22.357 22.7652 22.3449 22.766 22.3346 22.7667L22.3205 22.7675L22.3145 22.7678L22.3118 22.7679L22.3104 22.768C22.3098 22.768 22.3092 22.768 22.2673 21.7689C22.2254 20.7698 22.2248 20.7698 22.2242 20.7698L22.223 20.7699L22.2207 20.77L22.2165 20.7702L22.2098 20.7706L22.2022 20.7711L22.2087 20.7703C22.222 20.7685 22.2499 20.7641 22.2874 20.7545C22.3649 20.7348 22.4643 20.698 22.5591 20.6333C22.695 20.5408 22.9768 20.2958 22.976 19.5104C22.975 18.4163 22.973 15.0387 22.9711 11.9348L22.9677 6.00086C22.9677 6.00083 22.9677 6.00042 23.0147 6.00038L9 6C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6L24.9677 6.00038ZM17.7058 14.2403C21.5367 14.2372 21.4888 19.0773 21.4642 21.5628C21.4623 21.7525 21.4606 21.9288 21.4607 22.0878C21.4611 22.5953 21.4839 23.1944 21.5087 23.8489C21.624 26.8864 21.7846 31.1179 19.9702 32.9303C17.7229 35.1751 13.2256 36.3003 10.9749 34.433C8.72429 32.5657 12.4578 14.2446 17.7058 14.2403ZM26.4899 21.5601C26.4613 19.0747 26.4055 14.2346 30.2364 14.2315C35.4843 14.2272 39.2479 32.5421 37.0003 34.4131C34.7527 36.2841 30.2535 35.1663 28.0026 32.9251C26.1852 31.1157 26.3389 26.884 26.4492 23.8463C26.4729 23.1918 26.4947 22.5926 26.4943 22.0851C26.4942 21.926 26.4921 21.7499 26.4899 21.5601Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}