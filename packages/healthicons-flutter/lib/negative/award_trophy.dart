import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AwardTrophy extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AwardTrophy({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM13 6C12.4477 6 12 6.44772 12 7V8H7C6.44772 8 6 8.44772 6 9V15C6 17.7614 8.23858 20 11 20H12.6828C14.1153 24.0529 17.6633 27.1065 22 27.8341V34H16C15.4477 34 15 34.4477 15 35V41C15 41.5523 15.4477 42 16 42H32C32.5523 42 33 41.5523 33 41V35C33 34.4477 32.5523 34 32 34H26V27.8341C30.3367 27.1065 33.8847 24.0529 35.3172 20H37C39.7614 20 42 17.7614 42 15V9C42 8.44772 41.5523 8 41 8H36V7C36 6.44772 35.5523 6 35 6H13ZM36 10V16V18H37C38.6569 18 40 16.6569 40 15V10H36ZM8 10H12V16V18H11C9.34315 18 8 16.6569 8 15V10Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}