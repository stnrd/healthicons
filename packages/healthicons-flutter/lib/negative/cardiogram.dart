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
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM17 7C17 5.34315 18.3431 4 20 4H28C29.6569 4 31 5.34315 31 7H35C36.6569 7 38 8.34315 38 10V41C38 42.6569 36.6569 44 35 44H13C11.3431 44 10 42.6569 10 41V22.9886H18.2175H18.8023L19.0891 22.4789L20.4143 20.123L21.756 24.8189L22.2972 26.7133L23.5068 25.1581L26.7066 21.0442H31.2175C31.7698 21.0442 32.2175 20.5965 32.2175 20.0442C32.2175 19.4919 31.7698 19.0442 31.2175 19.0442H26.2175H25.7284L25.4281 19.4302L23.1377 22.375L21.679 17.2695L21.0207 14.9654L19.8459 17.0539L17.6326 20.9886H10V10C10 8.34315 11.3431 7 13 7H17ZM20 6C19.4477 6 19 6.44772 19 7V9C19 9.55228 19.4477 10 20 10H28C28.5523 10 29 9.55228 29 9V7C29 6.44772 28.5523 6 28 6H20ZM16 31C16 30.4477 16.4477 30 17 30H31C31.5523 30 32 30.4477 32 31C32 31.5523 31.5523 32 31 32H17C16.4477 32 16 31.5523 16 31ZM17 36C16.4477 36 16 36.4477 16 37C16 37.5523 16.4477 38 17 38H23C23.5523 38 24 37.5523 24 37C24 36.4477 23.5523 36 23 36H17Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}