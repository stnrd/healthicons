import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class P extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const P({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 12C13 10.3431 14.3431 9 16 9L26 9C30.9706 9 35 13.0294 35 18C35 22.9706 30.9706 27 26 27L19 27L19 36C19 37.6569 17.6569 39 16 39C14.3431 39 13 37.6569 13 36L13 12ZM16 11C15.4477 11 15 11.4477 15 12L15 36C15 36.5523 15.4477 37 16 37C16.5523 37 17 36.5523 17 36L17 26C17 25.4477 17.4477 25 18 25L26 25C29.866 25 33 21.866 33 18C33 14.134 29.866 11 26 11L16 11ZM17 14C17 13.4477 17.4477 13 18 13L26 13C28.7614 13 31 15.2386 31 18C31 20.7614 28.7614 23 26 23L18 23C17.4477 23 17 22.5523 17 22L17 14ZM19 15L19 21L26 21C27.6569 21 29 19.6569 29 18C29 16.3431 27.6569 15 26 15L19 15Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}