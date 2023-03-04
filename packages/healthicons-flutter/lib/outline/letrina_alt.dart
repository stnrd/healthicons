import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LetrinaAlt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const LetrinaAlt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20C20 19.4477 20.4477 19 21 19H41C41.5523 19 42 19.4477 42 20C42 20.5523 41.5523 21 41 21H21C20.4477 21 20 20.5523 20 20Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29 36.9401C35.6994 36.3992 41.0553 32.2071 41.8875 25C41.9618 24.3572 42 23.6904 42 23H12C12 23.1481 12 23.2851 12 23.4121L12 28C12 29.5 13.7534 30 14.5 30V42H29V36.9401ZM27 40V35.0951L28.839 34.9466C32.0889 34.6842 34.8657 33.4692 36.8162 31.5022C38.3872 29.918 39.5083 27.7606 39.8725 25H14L14 27.8477C14.0771 27.8906 14.1819 27.9326 14.2995 27.9633C14.3595 27.9789 14.4125 27.9889 14.4537 27.9946C14.485 27.999 14.5021 27.9999 14.5042 28H16.5V40H27Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.5 35H28.5V37H23.5V35Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 8H9C8.44772 8 8 8.44772 8 9V23H16V9C16 8.44772 15.5523 8 15 8ZM9 6C7.34315 6 6 7.34315 6 9V25H18V9C18 7.34315 16.6569 6 15 6H9Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 10H17.5V12H7V10Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}