import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RdtResultNoTest extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const RdtResultNoTest({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.5 22.4995C35.3284 22.4995 36 23.1711 36 23.9995C36 24.8279 35.3284 25.4995 34.5 25.4995C33.6716 25.4995 33 24.8279 33 23.9995C33 23.1711 33.6716 22.4995 34.5 22.4995Z" fill="#333333"/>
<path d="M31.504 24C31.504 23.5858 31.1673 23.25 30.752 23.25C30.3367 23.25 30 23.5858 30 24C30 24.4142 30.3367 24.75 30.752 24.75C31.1673 24.75 31.504 24.4142 31.504 24Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42 24C42 29.1085 39.8719 33.7199 36.454 36.9961L11.6574 10.898C14.8799 7.86119 19.2226 6 24 6C33.9411 6 42 14.0589 42 24ZM27.7629 24.9453L32.566 30.0005H34C37.3137 30.0005 40 27.3142 40 24.0005C40 20.6868 37.3137 18.0005 34 18.0005H21.1644L24.9645 22H26C27.1046 22 28 22.8954 28 24C28 24.3419 27.9142 24.6638 27.7629 24.9453Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2781 12.35L34.9338 38.2998C31.9029 40.6208 28.1125 42 24 42C14.0589 42 6 33.9411 6 24C6 19.5568 7.60986 15.4897 10.2781 12.35ZM12.9715 18.0883L16.6881 22H14C12.8954 22 12 22.8954 12 24C12 25.1046 12.8954 26 14 26H20.4886L24.2896 30.0005H14C10.6863 30.0005 8 27.3142 8 24.0005C8 21.0375 10.1478 18.5761 12.9715 18.0883Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}