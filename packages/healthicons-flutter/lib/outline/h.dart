import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class H extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const H({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 12C13 10.3431 14.3431 9 16 9C17.6569 9 19 10.3431 19 12V21H29V12C29 10.3431 30.3431 9 32 9C33.6569 9 35 10.3431 35 12V36C35 37.6569 33.6569 39 32 39C30.3431 39 29 37.6569 29 36V27H19V36C19 37.6569 17.6569 39 16 39C14.3431 39 13 37.6569 13 36V12ZM16 11C15.4477 11 15 11.4477 15 12V36C15 36.5523 15.4477 37 16 37C16.5523 37 17 36.5523 17 36V25H31V36C31 36.5523 31.4477 37 32 37C32.5523 37 33 36.5523 33 36V12C33 11.4477 32.5523 11 32 11C31.4477 11 31 11.4477 31 12V23H17V12C17 11.4477 16.5523 11 16 11Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}