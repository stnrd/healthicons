import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Thermometer extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Thermometer({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM18.9815 28.2045L18.9829 29.9831C17.1552 31.4507 15.986 33.7046 15.9881 36.2309C15.9917 40.6492 19.5763 44.228 23.9946 44.2244C28.4129 44.2208 31.9917 40.6361 31.988 36.2178C31.986 33.6914 30.8131 31.4395 28.9829 29.9749L28.9815 28.1968L28.9764 21.9846L28.9662 9.57744C28.9638 6.61877 26.7233 4.22213 23.9618 4.22439C21.2004 4.22666 18.9638 6.62696 18.9662 9.58563L18.9764 21.9928L18.9815 28.2045ZM26.9766 22.2829C25.5196 22.3085 24.1542 21.9555 22.9585 21.6464C22.2284 21.4577 21.5616 21.2853 20.9758 21.2254L20.9662 9.58399C20.9648 7.80879 22.3067 6.36861 23.9636 6.36725C25.6205 6.36589 26.9648 7.80388 26.9662 9.57908L26.9667 10.1979L24.9667 10.1995C24.4145 10.2 23.9671 10.6481 23.9676 11.2003C23.968 11.7526 24.4161 12.2 24.9684 12.1995L26.9684 12.1979L26.97 14.1979L24.97 14.1995C24.4177 14.2 23.9704 14.6481 23.9708 15.2003C23.9713 15.7526 24.4194 16.2 24.9716 16.1995L26.9716 16.1979L26.9733 18.1979L24.9733 18.1995C24.421 18.2 23.9737 18.6481 23.9741 19.2003C23.9746 19.7526 24.4226 20.2 24.9749 20.1995L26.9749 20.1979L26.9766 22.2829Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}