import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class U extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const U({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 12C13 10.3431 14.3431 9 16 9C17.6569 9 19 10.3431 19 12V28C19 30.7614 21.2386 33 24 33C26.7614 33 29 30.7614 29 28V12C29 10.3431 30.3431 9 32 9C33.6569 9 35 10.3431 35 12V28C35 34.0751 30.0751 39 24 39C17.9249 39 13 34.0751 13 28V12ZM16 11C15.4477 11 15 11.4477 15 12V28C15 32.9706 19.0294 37 24 37C28.9706 37 33 32.9706 33 28V12C33 11.4477 32.5523 11 32 11C31.4477 11 31 11.4477 31 12V28C31 31.866 27.866 35 24 35C20.134 35 17 31.866 17 28V12C17 11.4477 16.5523 11 16 11Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}