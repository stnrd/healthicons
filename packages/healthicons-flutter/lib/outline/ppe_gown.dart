import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PpeGown extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PpeGown({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6596 8.52595C12.904 5.95978 15.0593 4 17.6371 4H19H20H21C21 5.65685 22.3431 7 24 7C25.6569 7 27 5.65685 27 4H28H29H30.3629C32.9407 4 35.096 5.95978 35.3404 8.52595L36.787 23.7156C36.9142 25.051 36.1487 26.2495 35 26.751V30C35 30.5523 34.5523 31 34 31H32V43C32 43.5523 31.5523 44 31 44H17C16.4477 44 16 43.5523 16 43V31H14C13.4477 31 13 30.5523 13 30V26.751C11.8513 26.2495 11.0858 25.051 11.213 23.7156L12.6596 8.52595ZM30 30V27H18V30V42H30V30ZM32 27V29H33V27H32H32ZM32 25H32V11H30V25H18V11H16V25H16H14.1995C13.6097 25 13.1481 24.4923 13.204 23.9052L14.6506 8.71557C14.7973 7.17587 16.0904 6 17.6371 6H19.416C20.1876 7.7659 21.9497 9 24 9C26.0503 9 27.8124 7.7659 28.584 6H30.3629C31.9096 6 33.2027 7.17587 33.3494 8.71557L34.796 23.9052C34.8519 24.4923 34.3903 25 33.8005 25H32ZM16 27H16V29H15V27H16Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}