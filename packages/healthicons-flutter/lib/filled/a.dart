import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class A extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const A({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 10C24.8074 10 25.5356 10.4855 25.8462 11.2308L33.329 29.1894C33.3413 29.2172 33.353 29.2452 33.364 29.2736L35.8462 35.2308C36.271 36.2504 35.7889 37.4213 34.7693 37.8462C33.7497 38.271 32.5787 37.7888 32.1539 36.7692L30.1667 32H17.8334L15.8462 36.7692C15.4214 37.7888 14.2504 38.271 13.2308 37.8462C12.2112 37.4213 11.729 36.2504 12.1539 35.2308L14.636 29.2736C14.6471 29.2452 14.6588 29.2172 14.6711 29.1895L22.1539 11.2308C22.4644 10.4855 23.1926 10 24 10ZM19.5 28H28.5L24 17.2L19.5 28Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}