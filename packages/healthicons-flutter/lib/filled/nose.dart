import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Nose extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Nose({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.915 6.40344C31.1378 5.8981 30.9088 5.30781 30.4035 5.085C29.8981 4.86219 29.3078 5.09123 29.085 5.59657L29.0812 5.60522L29.0681 5.63468C29.0563 5.66113 29.0384 5.70109 29.0146 5.75381C28.967 5.85925 28.8957 6.01573 28.8022 6.21734C28.6153 6.62061 28.3397 7.20416 27.987 7.92086C27.2812 9.35509 26.2687 11.3182 25.0421 13.4346C22.5625 17.713 19.3008 22.451 16.0091 24.824C11.6647 27.9421 10.3595 31.7759 11.2741 34.9855C12.1703 38.1305 15.139 40.3726 18.6437 40.3726H21.8726C23.3237 40.3726 24.5 41.5489 24.5 43H26.5C26.5 40.4443 24.4282 38.3726 21.8726 38.3726H21.2969C21.5215 38.0367 21.8795 37.7078 22.4227 37.4545C23.4172 36.9907 25.1029 36.755 27.7739 37.3749C28.3119 37.4998 28.8493 37.1649 28.9741 36.6269C29.099 36.0889 28.7641 35.5515 28.2261 35.4267C25.2972 34.7469 23.1162 34.9244 21.5774 35.6419C20.2196 36.2751 19.4217 37.306 19.1156 38.3726H18.6437C15.9969 38.3726 13.8393 36.6893 13.1976 34.4374C12.5743 32.2502 13.3194 29.2159 17.1762 26.4481L17.1779 26.4469C20.8478 23.8016 24.2893 18.7222 26.7725 14.4375C28.0274 12.2722 29.0613 10.2673 29.7815 8.80397C30.1417 8.07185 30.424 7.4742 30.6168 7.05848C30.7131 6.85059 30.7871 6.68811 30.8373 6.57698C30.8624 6.52142 30.8816 6.47868 30.8946 6.44951L30.9095 6.41602L30.9145 6.4046L30.915 6.40344C30.9151 6.40321 30.915 6.40344 30 6.00001L30.915 6.40344Z" fill="#333333"/>
<path d="M35.7557 34.991C35.2367 37.0815 33.9392 38.9698 32.5289 39.8487L31.4711 38.1513C32.3531 37.6017 33.3938 36.2043 33.8147 34.5091C34.2236 32.8618 34.0101 31.101 32.655 29.6936L34.0958 28.3064C36.0417 30.3276 36.2866 32.8526 35.7557 34.991Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}