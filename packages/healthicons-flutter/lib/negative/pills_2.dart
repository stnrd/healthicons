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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16ZM20.8472 14.0027C21.0576 14.5133 20.8143 15.0978 20.3037 15.3083L12.4585 18.5413C11.9478 18.7518 11.3633 18.5084 11.1529 17.9978C10.9424 17.4872 11.1858 16.9026 11.6964 16.6922L19.5416 13.4591C20.0522 13.2487 20.6368 13.492 20.8472 14.0027ZM42 32C42 37.5228 37.5228 42 32 42C26.4772 42 22 37.5228 22 32C22 26.4772 26.4772 22 32 22C37.5228 22 42 26.4772 42 32ZM37.1093 33.1746C36.9856 33.7129 36.449 34.0489 35.9107 33.9252L27.6412 32.024C27.1029 31.9003 26.7669 31.3636 26.8906 30.8254C27.0144 30.2871 27.551 29.9511 28.0893 30.0749L36.3588 31.976C36.8971 32.0998 37.2331 32.6364 37.1093 33.1746Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}