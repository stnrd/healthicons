import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BloodPressure extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BloodPressure({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM15.5625 7C10.0359 7 6 12.6409 6 18.7241C6 32.3045 24 41 24 41C24 41 26.1234 39.9082 28.9115 37.947C25.4118 36.244 23 32.6537 23 28.5C23 22.701 27.701 18 33.5 18C36.7889 18 39.7247 19.5122 41.6499 21.8791C41.8765 20.8554 42 19.8027 42 18.7241C42 12.6419 37.9647 7 32.4375 7C28.6022 7 25.7565 9.53111 24 13.1211C22.2434 9.53088 19.3976 7 15.5625 7ZM40 28.5C40 32.0899 37.0899 35 33.5 35C29.9101 35 27 32.0899 27 28.5C27 24.9101 29.9101 22 33.5 22C37.0899 22 40 24.9101 40 28.5ZM42 28.5C42 33.1944 38.1944 37 33.5 37C28.8056 37 25 33.1944 25 28.5C25 23.8056 28.8056 20 33.5 20C38.1944 20 42 23.8056 42 28.5ZM36 29C36 30.1046 35.1046 31 34 31C32.8954 31 32 30.1046 32 29C32 28.8812 32.0104 28.7649 32.0302 28.6518L29.6108 26.2324L31.0251 24.8182L33.324 27.1171C33.5351 27.0413 33.7627 27 34 27C35.1046 27 36 27.8954 36 29Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}