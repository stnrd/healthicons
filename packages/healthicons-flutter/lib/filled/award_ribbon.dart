import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AwardRibbon extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AwardRibbon({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0001 20C13.0001 13.9249 17.925 9 24.0001 9C30.0753 9 35.0001 13.9249 35.0001 20C35.0001 26.0751 30.0753 31 24.0001 31C17.925 31 13.0001 26.0751 13.0001 20Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.0001 34.391C36.328 31.7942 39.999 26.3258 39.999 20C39.999 11.1634 32.8356 4 23.999 4C15.1625 4 7.99902 11.1634 7.99902 20C7.99902 26.3267 11.6711 31.7957 17.0001 34.3921V43.0001C17.0001 43.3689 17.2031 43.7078 17.5283 43.8818C17.8534 44.0558 18.248 44.0367 18.5548 43.8322L24.0001 40.202L29.4454 43.8322C29.7523 44.0367 30.1468 44.0558 30.472 43.8818C30.7971 43.7078 31.0001 43.3689 31.0001 43.0001V34.391ZM23.999 34C31.731 34 37.999 27.732 37.999 20C37.999 12.268 31.731 6 23.999 6C16.267 6 9.99902 12.268 9.99902 20C9.99902 27.732 16.267 34 23.999 34Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}