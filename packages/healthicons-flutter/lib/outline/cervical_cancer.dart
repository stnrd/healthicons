import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CervicalCancer extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CervicalCancer({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.5344 6H37.395C40.521 13.8479 42.1079 20.1062 42.1 25.8515C42.0923 31.4661 40.5624 36.5114 37.5956 42.0001H35.6139C38.806 36.3419 40.3781 31.3648 40.3857 25.8489C40.3933 20.288 38.8115 14.0907 35.5344 6Z" fill="#333333"/>
<path d="M10.8051 6H12.6657C9.38856 14.0907 7.80678 20.288 7.81442 25.8489C7.82199 31.3648 9.39413 36.3419 12.5862 42.0001H10.6045C7.63767 36.5114 6.10783 31.4661 6.10013 25.8515C6.09224 20.1062 7.67909 13.8479 10.8051 6Z" fill="#333333"/>
<path d="M23.243 31.5463V42H24.9573V31.5461L31.9793 24.1731L30.7671 22.9003L24.1 29.9006L17.433 22.9003L16.2208 24.1731L23.243 31.5463Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.2532 16.3001L26.8345 14.4553C27.8858 13.2288 27.8388 11.353 26.7276 10.1862C26.3702 9.81093 25.8854 9.6001 25.38 9.6001H22.8202C22.3147 9.6001 21.8299 9.81093 21.4725 10.1862C20.3613 11.353 20.3144 13.2288 21.3656 14.4553L22.9469 16.3001L19.1772 20.698L20.4515 21.9022L24.1001 17.6455L27.7487 21.9022L29.0229 20.698L25.2532 16.3001ZM22.8202 11.4001C22.7694 11.4001 22.7206 11.4213 22.6847 11.459C22.2182 11.9488 22.1985 12.7363 22.6398 13.2511L24.1001 14.9547L25.5603 13.2511C26.0016 12.7363 25.9819 11.9488 25.5154 11.459C25.4795 11.4213 25.4308 11.4001 25.38 11.4001H22.8202Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}