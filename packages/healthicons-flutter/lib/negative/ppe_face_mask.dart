import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PpeFaceMask extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PpeFaceMask({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0L0 0L0 48H48V0ZM24.2941 11.0442C24.1025 10.9853 23.8975 10.9853 23.7059 11.0442L10.7059 15.0442C10.2863 15.1733 10 15.561 10 16V17H9C6.23858 17 4 19.2386 4 22V26C4 28.7614 6.23858 31 9 31H11.4564C12.5788 32.7244 14.2864 34.0574 16.3532 34.6934L23.7059 36.9558C23.8975 37.0147 24.1025 37.0147 24.2941 36.9558L31.6468 34.6934C33.7136 34.0574 35.4212 32.7244 36.5436 31H39C41.7614 31 44 28.7614 44 26V22C44 19.2386 41.7614 17 39 17H38V16C38 15.561 37.7137 15.1733 37.2941 15.0442L24.2941 11.0442ZM10.4823 29C10.1684 28.0814 10 27.1015 10 26.0914V19H9C7.34315 19 6 20.3431 6 22V26C6 27.6569 7.34315 29 9 29H10.4823ZM39 29H37.5177C37.8316 28.0814 38 27.1015 38 26.0914V19H39C40.6569 19 42 20.3431 42 22V26C42 27.6569 40.6569 29 39 29ZM18 21H30V19H18V21ZM18 27H30V25H18V27Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}