import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class EcoCare extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const EcoCare({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 24.9585C17 27.7661 20.1423 28.6621 22.4412 27.9165C21.3434 31.167 22.363 33.7002 23.2712 34.6799L24.7379 33.3201C24.3818 32.9361 23.5738 31.3755 24.1866 29.0531C25.2981 31.9421 31 31.4689 31 27.1982V16C28.1178 18.4388 25.039 19.4029 22.5046 20.1966C19.3234 21.1928 17 21.9204 17 24.9585ZM24.4327 28.2786L22.5658 27.5719C23.0662 26.2514 23.9164 24.8203 25.2567 23.331C25.6262 22.9205 26.2584 22.8872 26.669 23.2567C27.0795 23.6262 27.1128 24.2584 26.7433 24.669C25.5602 25.9836 24.842 27.1986 24.4327 28.2786Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM15.5625 7C10.0359 7 6 12.6409 6 18.7241C6 32.3045 24 41 24 41C24 41 42 31.7444 42 18.7241C42 12.6419 37.9647 7 32.4375 7C28.6022 7 25.7565 9.53111 24 13.1211C22.2434 9.53088 19.3976 7 15.5625 7Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}