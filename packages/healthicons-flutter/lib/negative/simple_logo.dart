import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SimpleLogo extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SimpleLogo({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24.5443 44C16.5606 44 10.0885 37.4878 10.0885 29.4545C10.0885 18.5455 24.5443 4 24.5443 4C24.5443 4 39 18.5455 39 29.4545C39 37.4878 32.528 44 24.5443 44ZM32.8463 33.244C32.0747 32.6474 30.9684 32.7928 30.3752 33.5689L30.1324 33.8864C27.3108 37.578 21.7778 37.578 18.9562 33.8864L18.7134 33.5689C18.1203 32.7928 17.0139 32.6474 16.2423 33.244C15.4707 33.8407 15.3262 34.9536 15.9194 35.7298L16.1622 36.0474C20.3946 41.5848 28.694 41.5848 32.9264 36.0474L33.1692 35.7298C33.7624 34.9536 33.6178 33.8407 32.8463 33.244Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}