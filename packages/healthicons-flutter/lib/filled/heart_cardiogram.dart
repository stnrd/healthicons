import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HeartCardiogram extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HeartCardiogram({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19.0345C9 13.3091 12.8117 8 18.0312 8C21.6533 8 24.341 10.382 26 13.7611C27.6589 10.3822 30.3466 8 33.9688 8C39.1889 8 43 13.31 43 19.0345C43 31.2888 26 40 26 40C26 40 14.5487 34.4872 10.4431 25.4444H20.5848L22.1968 22.5788L24.0797 29.1692L28.4891 23.5H34V21.5H27.5109L24.9203 24.8308L22.8032 17.4212L19.4152 23.4444H9.67984C9.89182 24.1288 10.1486 24.7957 10.4431 25.4444L6 25.4443V23.4443L9.67984 23.4444C9.24643 22.0453 9 20.5731 9 19.0345Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}