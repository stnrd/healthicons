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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26ZM20.3037 15.3083C20.8143 15.0978 21.0576 14.5133 20.8472 14.0027C20.6368 13.492 20.0522 13.2487 19.5416 13.4591L11.6964 16.6922C11.1858 16.9026 10.9424 17.4872 11.1529 17.9978C11.3633 18.5084 11.9478 18.7518 12.4585 18.5413L20.3037 15.3083Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 42C37.5228 42 42 37.5228 42 32C42 26.4772 37.5228 22 32 22C26.4772 22 22 26.4772 22 32C22 37.5228 26.4772 42 32 42ZM35.9107 33.9252C36.449 34.0489 36.9856 33.7129 37.1093 33.1746C37.2331 32.6364 36.8971 32.0998 36.3588 31.976L28.0893 30.0749C27.551 29.9511 27.0144 30.2871 26.8906 30.8254C26.7669 31.3636 27.1029 31.9003 27.6412 32.024L35.9107 33.9252Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}