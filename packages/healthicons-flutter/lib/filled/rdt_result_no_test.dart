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
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 24.0005C40 27.3142 37.3137 30.0005 34 30.0005H32.566L27.7629 24.9453C27.9142 24.6638 28 24.3419 28 24C28 22.8954 27.1046 22 26 22H24.9645L21.1644 18.0005H34C37.3137 18.0005 40 20.6868 40 24.0005ZM36 23.9995C36 23.1711 35.3284 22.4995 34.5 22.4995C33.6716 22.4995 33 23.1711 33 23.9995C33 24.8279 33.6716 25.4995 34.5 25.4995C35.3284 25.4995 36 24.8279 36 23.9995ZM30.752 23.25C31.1673 23.25 31.504 23.5858 31.504 24C31.504 24.4142 31.1673 24.75 30.752 24.75C30.3367 24.75 30 24.4142 30 24C30 23.5858 30.3367 23.25 30.752 23.25Z" fill="#333333"/>
<path d="M12 24C12 22.8954 12.8954 22 14 22H16.6881L12.9715 18.0883C10.1478 18.5761 8 21.0375 8 24.0005C8 27.3142 10.6863 30.0005 14 30.0005H24.2896L20.4886 26H14C12.8954 26 12 25.1046 12 24Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24ZM42 24C42 29.1085 39.8719 33.7199 36.4539 36.9962L11.6573 10.8981C14.8798 7.86121 19.2226 6 24 6C33.9411 6 42 14.0589 42 24ZM24 42C28.1125 42 31.9028 40.6209 34.9338 38.2999L10.2781 12.35C7.60984 15.4897 6 19.5569 6 24C6 33.9411 14.0589 42 24 42Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}