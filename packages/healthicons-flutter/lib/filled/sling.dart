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
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 14C32 18.4183 28.4183 22 24 22C19.5817 22 16 18.4183 16 14C16 9.58172 19.5817 6 24 6C28.4183 6 32 9.58172 32 14ZM16.2124 31.0111C16.1426 31.0038 16.0718 31 16 31C14.8954 31 14 31.8954 14 33C14 33.2136 14.0335 33.4193 14.0955 33.6123L16.2124 31.0111ZM24.7949 35.2474C26.0869 35.7622 27 37.0244 27 38.5C27 40.2632 25.6961 41.7219 24 41.9646V42H23.5H23.2727H19.2572H18H16C11.0294 42 7 37.9706 7 33C7 28.0294 11.0294 24 16 24H21.9185H22.3939H23.5H28H29.5026H32C36.9706 24 41 28.0294 41 33C41 37.9706 36.9706 42 32 42H27.7428C28.5282 41.0491 29 39.8296 29 38.5C29 36.1937 27.5804 34.2189 25.5674 33.4018L24.7949 35.2474ZM23.0357 26H23.5H26.4974L20.6375 40H16C14.6515 40 13.392 39.6187 12.3235 38.958L21.9697 27.1055L23.0357 26ZM34 33C34 34.1046 33.1046 35 32 35V31C33.1046 31 34 31.8954 34 33Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}