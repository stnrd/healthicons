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
<path d="M24 17.2L28.5 28H19.5L24 17.2Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM25.8462 11.2308C25.5356 10.4855 24.8074 10 24 10C23.1926 10 22.4644 10.4855 22.1539 11.2308L14.6711 29.1895C14.6588 29.2172 14.6471 29.2452 14.636 29.2736L12.1539 35.2308C11.729 36.2504 12.2112 37.4213 13.2308 37.8462C14.2504 38.271 15.4214 37.7888 15.8462 36.7692L17.8334 32H30.1667L32.1539 36.7692C32.5787 37.7888 33.7497 38.271 34.7693 37.8462C35.7889 37.4213 36.271 36.2504 35.8462 35.2308L33.364 29.2736C33.353 29.2452 33.3413 29.2172 33.329 29.1894L25.8462 11.2308Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}