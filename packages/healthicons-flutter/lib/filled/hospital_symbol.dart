import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HospitalSymbol extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HospitalSymbol({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.9639 3.98039C12.9182 3.98943 3.9712 12.9511 3.98025 23.9968C3.98929 35.0425 12.9509 43.9894 23.9966 43.9804C35.0423 43.9713 43.9893 35.0097 43.9802 23.964C43.9712 12.9183 35.0096 3.97134 23.9639 3.98039ZM19.9913 33.0475L19.9913 26.0475L27.9913 26.0475L27.9913 33.0475L31.9913 33.0475L31.9913 15.0475L27.9913 15.0475L27.9913 22.0475L19.9913 22.0475L19.9913 15.0475L15.9913 15.0475L15.9913 33.0475L19.9913 33.0475Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}