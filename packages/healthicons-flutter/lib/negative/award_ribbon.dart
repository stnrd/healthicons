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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM39.9989 20C39.9989 26.3258 36.3279 31.7942 31 34.391V43.0001C31 43.3689 30.797 43.7078 30.4719 43.8818C30.1467 44.0558 29.7522 44.0367 29.4453 43.8322L24 40.202L18.5547 43.8322C18.2478 44.0367 17.8533 44.0558 17.5281 43.8818C17.203 43.7078 17 43.3689 17 43.0001V34.3921C11.6709 31.7957 7.9989 26.3267 7.9989 20C7.9989 11.1634 15.1623 4 23.9989 4C32.8355 4 39.9989 11.1634 39.9989 20ZM37.9989 20C37.9989 27.732 31.7309 34 23.9989 34C16.2669 34 9.9989 27.732 9.9989 20C9.9989 12.268 16.2669 6 23.9989 6C31.7309 6 37.9989 12.268 37.9989 20ZM24 9C17.9249 9 13 13.9249 13 20C13 26.0751 17.9249 31 24 31C30.0751 31 35 26.0751 35 20C35 13.9249 30.0751 9 24 9Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}