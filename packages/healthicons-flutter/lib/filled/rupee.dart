import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Rupee extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Rupee({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 12C16 10.8954 16.8954 10 18 10L30 10C31.1046 10 32 10.8954 32 12C32 13.1046 31.1046 14 30 14H26.9297C27.2878 14.619 27.5653 15.2905 27.748 16H30C31.1046 16 32 16.8954 32 18C32 19.1046 31.1046 20 30 20H27.748C26.9927 22.9345 24.6142 25.2174 21.6267 25.8345L27.6641 34.8906C28.2768 35.8097 28.0285 37.0514 27.1094 37.6641C26.1903 38.2768 24.9486 38.0285 24.3359 37.1094L16.3359 25.1094C15.9268 24.4957 15.8886 23.7066 16.2367 23.0563C16.5847 22.406 17.2624 22 18 22H20C21.4806 22 22.7733 21.1956 23.4649 20H18C16.8954 20 16 19.1046 16 18C16 16.8954 16.8954 16 18 16L23.4649 16C22.7733 14.8044 21.4806 14 20 14H18C16.8954 14 16 13.1046 16 12Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}