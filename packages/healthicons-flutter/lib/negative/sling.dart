import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Sling extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Sling({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24 22C28.4183 22 32 18.4183 32 14C32 9.58172 28.4183 6 24 6C19.5817 6 16 9.58172 16 14C16 18.4183 19.5817 22 24 22ZM16 31L16.0139 31L14.0598 33.4872C14.0207 33.3312 14 33.168 14 33C14 31.8954 14.8954 31 16 31ZM27 38.5C27 36.9008 25.9274 35.5521 24.4624 35.134L25.2182 33.2737C27.4143 33.9953 29 36.0625 29 38.5C29 39.8296 28.5282 41.0491 27.7428 42H32C36.9706 42 41 37.9706 41 33C41 28.0294 36.9706 24 32 24H16C11.0294 24 7 28.0294 7 33C7 37.9706 11.0294 42 16 42H24V41.9646C25.6961 41.7219 27 40.2632 27 38.5ZM23.0357 26L20.0674 29.0782L12.3109 38.9501C13.3821 39.6157 14.6462 40 16 40H20.3269L26.0144 26H23.0357ZM32 35C33.1046 35 34 34.1046 34 33C34 31.8954 33.1046 31 32 31V35Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}