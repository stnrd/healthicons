import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class O extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const O({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 24C9 15.7157 15.7157 9 24 9C32.2843 9 39 15.7157 39 24C39 32.2843 32.2843 39 24 39C15.7157 39 9 32.2843 9 24ZM24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37C31.1797 37 37 31.1797 37 24C37 16.8203 31.1797 11 24 11ZM24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15ZM13 24C13 17.9249 17.9249 13 24 13C30.0751 13 35 17.9249 35 24C35 30.0751 30.0751 35 24 35C17.9249 35 13 30.0751 13 24Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}