import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Pills2 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Pills2({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3036 15.308C20.8142 15.0976 21.0576 14.5131 20.8472 14.0024C20.6367 13.4918 20.0522 13.2485 19.5416 13.4589L11.6964 16.692C11.1858 16.9024 10.9424 17.4869 11.1528 17.9976C11.3633 18.5082 11.9478 18.7515 12.4584 18.5411L20.3036 15.308Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16ZM24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16Z" fill="#333333"/>
<path d="M35.9107 33.9251C36.449 34.0489 36.9856 33.7129 37.1094 33.1746C37.2331 32.6364 36.8971 32.0997 36.3588 31.976L28.0893 30.0749C27.551 29.9511 27.0144 30.2871 26.8906 30.8254C26.7669 31.3636 27.1029 31.9003 27.6412 32.024L35.9107 33.9251Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 42C37.5228 42 42 37.5228 42 32C42 26.4772 37.5228 22 32 22C26.4772 22 22 26.4772 22 32C22 37.5228 26.4772 42 32 42ZM32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}