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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C12 6.44772 12.4477 6 13 6H35C35.5523 6 36 6.44772 36 7V8H41C41.5523 8 42 8.44772 42 9V15C42 17.7614 39.7614 20 37 20H35.3172C33.776 24.3604 29.7862 27.5641 25 27.9589V34H32C32.5523 34 33 34.4477 33 35V41C33 41.5523 32.5523 42 32 42H16C15.4477 42 15 41.5523 15 41V35C15 34.4477 15.4477 34 16 34H23V27.9589C18.2138 27.5641 14.224 24.3604 12.6828 20H11C8.23858 20 6 17.7614 6 15V9C6 8.44772 6.44772 8 7 8H12V7ZM34 16V9V8H14V9V16C14 21.5228 18.4772 26 24 26C29.5228 26 34 21.5228 34 16ZM36 10V16V18H37C38.6569 18 40 16.6569 40 15V10H36ZM8 10H12V16V18H11C9.34315 18 8 16.6569 8 15V10ZM17 36V40H31V36H17Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}