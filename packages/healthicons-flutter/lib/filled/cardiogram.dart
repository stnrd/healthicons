import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Cardiogram extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Cardiogram({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 4C18.3431 4 17 5.34315 17 7H13C11.3431 7 10 8.34315 10 10V20.9886H17.6326L21.0207 14.9654L23.1377 22.375L25.7284 19.0442H31.2175C31.7698 19.0442 32.2175 19.4919 32.2175 20.0442C32.2175 20.5965 31.7698 21.0442 31.2175 21.0442H26.7066L22.2972 26.7133L20.4143 20.123L18.8023 22.9886H10V41C10 42.6569 11.3431 44 13 44H35C36.6569 44 38 42.6569 38 41V10C38 8.34315 36.6569 7 35 7H31C31 5.34315 29.6569 4 28 4H20ZM19 7C19 6.44772 19.4477 6 20 6H28C28.5523 6 29 6.44772 29 7V9C29 9.55228 28.5523 10 28 10H20C19.4477 10 19 9.55228 19 9V7ZM16 31C16 30.4477 16.4477 30 17 30H31C31.5523 30 32 30.4477 32 31C32 31.5523 31.5523 32 31 32H17C16.4477 32 16 31.5523 16 31ZM17 36C16.4477 36 16 36.4477 16 37C16 37.5523 16.4477 38 17 38H23C23.5523 38 24 37.5523 24 37C24 36.4477 23.5523 36 23 36H17Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}