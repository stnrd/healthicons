import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Pwid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Pwid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 14.4142L34.2929 15.7071L35.7071 14.2929L31.7071 10.2929L30.2929 11.7071L31.5858 13L28.5 16.0858L25.7071 13.2929L24.2929 14.7071L25.5858 16L19.7071 21.8787C18.7517 22.8341 18.5754 24.2736 19.1783 25.4076L17.8684 26.7175L15.7035 24.264L8.32691 32.0289L12.4506 34.9154C13.4591 35.6214 14.6603 36 15.8913 36H31C31 37.1046 31.8954 38 33 38H42C43.1046 38 44 37.1046 44 36V30C44 28.8954 43.1046 28 42 28H41.5V34H38.5C36.8431 34 35.5 32.6569 35.5 31V29.5H37.5V31C37.5 31.5523 37.9477 32 38.5 32H39.5V28C39.5 26.8954 38.6046 26 37.5 26H34L31 28H21.5356L17.5356 32L15.4142 32.0001L20.5925 26.8218C21.7265 27.4246 23.1659 27.2483 24.1213 26.2929L30 20.4142L31.2929 21.7071L32.7071 20.2929L29.9142 17.5L33 14.4142ZM23.9786 20.4357L27 17.4142L28.5858 19L25.5644 22.0214L23.9786 20.4357ZM16.4749 33.0608L16.4141 33H16.5356L16.4749 33.0608Z" fill="#333333"/>
<path d="M4 11L14.3751 22.7585L6.67008 30.8691L4 29V11Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}