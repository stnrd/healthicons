import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UiUserProfile extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const UiUserProfile({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM11 35.6309C11 35.9699 11.0569 36.3046 11.1662 36.6211C7.9711 33.3726 6 28.9165 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24C42 28.9242 40.0227 33.3866 36.8188 36.6364C36.9377 36.3105 37 35.9636 37 35.6116C37 34.0838 35.8495 32.7922 34.3209 32.6341C26.5628 31.8315 21.4852 31.7531 13.6894 32.6164C12.1487 32.787 11 34.0943 11 35.6309ZM4 24C4 34.7724 12.5166 43.5555 23.1839 43.9837C23.3641 43.9938 23.5448 43.9993 23.726 43.9999C23.7712 44.0001 23.8165 44 23.8617 43.9995C23.9078 43.9998 23.9539 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24ZM24 28C28.4183 28 32 24.4183 32 20C32 15.5817 28.4183 12 24 12C19.5817 12 16 15.5817 16 20C16 24.4183 19.5817 28 24 28Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}