import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class J extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const J({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 12C27 10.3431 28.3431 9 30 9C31.6569 9 33 10.3431 33 12V30C33 34.9706 28.9706 39 24 39C19.0294 39 15 34.9706 15 30C15 28.3432 16.3431 27 18 27C19.6569 27 21 28.3432 21 30C21 31.6569 22.3431 33 24 33C25.6569 33 27 31.6569 27 30V12ZM30 11C29.4477 11 29 11.4477 29 12V30C29 32.7614 26.7614 35 24 35C21.2386 35 19 32.7614 19 30C19 29.4477 18.5523 29 18 29C17.4477 29 17 29.4477 17 30C17 33.866 20.134 37 24 37C27.866 37 31 33.866 31 30V12C31 11.4477 30.5523 11 30 11Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}