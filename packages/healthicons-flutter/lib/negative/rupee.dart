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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14H20C21.4806 14 22.7733 14.8044 23.4649 16H18C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20H23.4649C22.7733 21.1956 21.4806 22 20 22H18C17.2624 22 16.5847 22.406 16.2367 23.0563C15.8886 23.7066 15.9268 24.4957 16.3359 25.1094L24.3359 37.1094C24.9486 38.0285 26.1903 38.2768 27.1094 37.6641C28.0285 37.0514 28.2768 35.8097 27.6641 34.8906L21.6267 25.8345C24.6142 25.2174 26.9927 22.9345 27.748 20H30C31.1046 20 32 19.1046 32 18C32 16.8954 31.1046 16 30 16H27.748C27.5653 15.2905 27.2878 14.619 26.9297 14H30C31.1046 14 32 13.1046 32 12C32 10.8954 31.1046 10 30 10H18Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}