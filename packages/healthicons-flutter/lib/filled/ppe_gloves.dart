import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PpeGloves extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PpeGloves({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 6.5C24 5.67157 24.6716 5 25.5 5C26.3284 5 27 5.67157 27 6.5V19H28V8.5C28 7.67157 28.6716 7 29.5 7C30.3284 7 31 7.67157 31 8.5V19V24L33.9227 20.3466C34.5322 19.5848 35.6231 19.4154 36.4349 19.9566C37.2993 20.5329 37.5329 21.7007 36.9566 22.5651L32.7073 28.9391C31.7907 30.314 30.5346 31.3913 29.0908 32.0898L30 43H18L18.9049 32.1411C17.1641 31.0908 16 29.1814 16 27V19V10.5C16 9.67157 16.6716 9 17.5 9C18.3284 9 19 9.67157 19 10.5V19H20V8.5C20 7.67157 20.6716 7 21.5 7C22.3284 7 23 7.67157 23 8.5V19H24V6.5ZM12 12H14V28C14 29.8502 15.0919 31.7842 16.5166 32.6438L17.0611 32.9723L16.2161 41H14.205L14.9431 33.9885C13.1808 32.6467 12 30.286 12 28V12Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}