import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PpeMaskN95 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PpeMaskN95({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.7059 11.0442C23.8975 10.9853 24.1025 10.9853 24.2941 11.0442L37.2941 15.0442C37.7137 15.1733 38 15.561 38 16V17H39C41.7614 17 44 19.2386 44 22V26C44 28.7614 41.7614 31 39 31H36.5436C35.4212 32.7244 33.7136 34.0575 31.6468 34.6934L24.2941 36.9558C24.1025 37.0147 23.8975 37.0147 23.7059 36.9558L16.3532 34.6934C14.2864 34.0575 12.5788 32.7244 11.4564 31H9C6.23858 31 4 28.7614 4 26V22C4 19.2386 6.23858 17 9 17H10V16C10 15.561 10.2863 15.1733 10.7059 15.0442L23.7059 11.0442ZM10 26.0914C10 27.1015 10.1684 28.0814 10.4823 29H9C7.34315 29 6 27.6569 6 26V22C6 20.3431 7.34315 19 9 19H10V26.0914ZM37.5177 29H39C40.6569 29 42 27.6569 42 26V22C42 20.3431 40.6569 19 39 19H38V26.0914C38 27.1015 37.8316 28.0814 37.5177 29ZM25 16V32H23V16H25ZM33 26C33 27.1046 32.1046 28 31 28C29.8954 28 29 27.1046 29 26C29 24.8954 29.8954 24 31 24C32.1046 24 33 24.8954 33 26Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}