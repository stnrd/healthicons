import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Z extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Z({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 9L34 9C35.1641 9 36.2231 9.67338 36.7168 10.7275L35.8112 11.1517L36.7168 10.7275C37.2105 11.7817 37.0499 13.0263 36.3047 13.9206L20.4052 33H34C35.6569 33 37 34.3432 37 36C37 37.6569 35.6569 39 34 39H14C12.836 39 11.777 38.3266 11.2833 37.2725L12.1859 36.8497L11.2833 37.2725C10.7895 36.2183 10.9502 34.9737 11.6954 34.0795L27.5949 15L14 15C12.3432 15 11 13.6569 11 12C11 10.3431 12.3432 9 14 9ZM34 11L14 11C13.4478 11 13 11.4477 13 12C13 12.5523 13.4478 13 14 13L29.73 13C30.118 13 30.471 13.2245 30.6355 13.5758C30.8001 13.9272 30.7466 14.3421 30.4982 14.6402L13.2318 35.3598C12.9834 35.6579 12.9299 36.0728 13.0944 36.4242C13.259 36.7755 13.612 37 14 37H34C34.5523 37 35 36.5523 35 36C35 35.4477 34.5523 35 34 35H18.2701C17.8821 35 17.5291 34.7755 17.3645 34.4242C17.1999 34.0728 17.2535 33.6579 17.5019 33.3598L34.7683 12.6402C35.0167 12.3421 35.0702 11.9272 34.9056 11.5758C34.741 11.2245 34.3881 11 34 11Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}