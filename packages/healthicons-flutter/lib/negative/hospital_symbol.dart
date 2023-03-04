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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM3.9695 24.291C3.9695 13.2453 12.9238 4.29099 23.9695 4.29099C35.0152 4.29099 43.9695 13.2453 43.9695 24.291C43.9695 35.3367 35.0152 44.291 23.9695 44.291C12.9238 44.291 3.9695 35.3367 3.9695 24.291ZM19.9914 26.0476V33.0476H15.9914V15.0476H19.9914V22.0476L27.9914 22.0476V15.0476H31.9914V33.0476H27.9914V26.0476L19.9914 26.0476Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}