import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Exercise extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Exercise({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M31 14C31 13.4477 31.4477 13 32 13H36C36.5523 13 37 13.4477 37 14V16H40C40.5523 16 41 16.4477 41 17V23H44V25H41V31C41 31.5523 40.5523 32 40 32H37V34C37 34.5523 36.5523 35 36 35H32C31.4477 35 31 34.5523 31 34V25H17V34C17 34.5523 16.5523 35 16 35H12C11.4477 35 11 34.5523 11 34V32H8C7.44772 32 7 31.5523 7 31V25H4V23H7V17C7 16.4477 7.44772 16 8 16H11V14C11 13.4477 11.4477 13 12 13H16C16.5523 13 17 13.4477 17 14V23H31V14ZM13 33H15V15H13V33ZM11 18H9V30H11V18ZM37 30V18H39V30H37ZM35 15V33H33V15H35Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}