import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class IExamQualification extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const IExamQualification({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5H27.5576L37 15.3866V40C37 41.6569 35.6569 43 34 43H14C12.3431 43 11 41.6569 11 40V8C11 6.34315 12.3431 5 14 5Z" stroke="#333333" stroke-width="2" stroke-linejoin="round"/>
<path d="M15 33L33 33" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
<path d="M15 37H27" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
<path d="M15 28L20 16L25 28M16.25 25H23.75" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30 22L30 28" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
<path d="M27 25L33 25" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}