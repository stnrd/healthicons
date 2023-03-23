import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BloodDrop extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BloodDrop({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24 44C31.732 44 38 37.8496 38 30.2626C38 18.2424 24 4 24 4C24 4 10 18.2424 10 30.2626C10 37.8496 16.268 44 24 44Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}