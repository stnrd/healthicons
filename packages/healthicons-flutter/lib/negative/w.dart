import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class W extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const W({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM10.027 12.3286C9.84545 11.2391 10.5815 10.2086 11.671 10.027C12.7606 9.84545 13.791 10.5815 13.9726 11.671L17.0494 30.1319L22.2633 21.0075C22.6194 20.3844 23.2821 19.9998 23.9998 19.9998C24.7175 19.9998 25.3802 20.3844 25.7363 21.0075L30.9502 30.1319L34.027 11.671C34.2086 10.5815 35.2391 9.84545 36.3286 10.027C37.4182 10.2086 38.1542 11.2391 37.9726 12.3286L33.9726 36.3286C33.8336 37.163 33.1846 37.8196 32.352 37.9686C31.5193 38.1175 30.683 37.7265 30.2633 36.9921L23.9998 26.031L17.7363 36.9921C17.3166 37.7265 16.4803 38.1175 15.6477 37.9686C14.815 37.8196 14.1661 37.163 14.027 36.3286L10.027 12.3286Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}