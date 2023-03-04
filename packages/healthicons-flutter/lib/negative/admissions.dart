import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Admissions extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Admissions({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM9 6C7.34315 6 6 7.34314 6 9V39C6 40.6569 7.34314 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H9Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.0381 14.5819H17V33.3986H26.0381V14.5819ZM15 12.5819V35.3986H28.0381V12.5819H15Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.8353 10.0654C22.1878 9.84954 21.5191 10.3315 21.5191 11.0141V37.2128C21.5191 37.8953 22.1878 38.3773 22.8353 38.1614L31.7004 35.2064C32.1087 35.0703 32.3842 34.6882 32.3842 34.2577V13.9691C32.3842 13.5387 32.1087 13.1565 31.7004 13.0204L22.8353 10.0654ZM25.1408 24.8378C25.5408 24.8378 25.8651 24.1892 25.8651 23.3891C25.8651 22.589 25.5408 21.9404 25.1408 21.9404C24.7407 21.9404 24.4164 22.589 24.4164 23.3891C24.4164 24.1892 24.7407 24.8378 25.1408 24.8378Z" fill="#333333"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}