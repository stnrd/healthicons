import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Health extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Health({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM27.4076 6.80092C25.6603 5.73303 23.4182 5.73303 21.671 6.80092L19.7195 7.99367C16.4534 9.98986 12.4722 10.3682 8.61872 10.7344C7.74585 10.8173 6.87948 10.8996 6.02952 11C6.02952 11 6.00485 12.8445 6.02952 13.6887L6.23778 20.817C6.41697 26.9498 9.14422 32.7654 13.8227 36.991C16.271 39.2023 18.953 41.028 21.9814 42.4676C23.6035 43.2387 25.5274 43.1684 27.0825 42.2813C29.7054 40.7851 31.988 38.9844 34.1951 36.991C38.8735 32.7654 41.6008 26.9498 41.78 20.817L41.9889 13.6659C42.0132 12.8335 41.9901 11 41.9901 11C40.9432 10.8272 39.8847 10.7005 38.8277 10.5739C35.5581 10.1824 32.3025 9.79264 29.4455 8.04646L27.4076 6.80092ZM21.9998 15V22H14.9998V26H21.9998V33H25.9998V26H32.9998V22H25.9998V15H21.9998Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}