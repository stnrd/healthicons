import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Stop extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Stop({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 25.1409V12.5C30 11.6716 29.3285 11 28.5 11C27.6716 11 27 11.6716 27 12.5V23H25V9.5C25 8.67157 24.3285 8 23.5 8C22.6716 8 22 8.67157 22 9.5V23H20V12.5C20 11.6716 19.3285 11 18.5 11C17.6716 11 17 11.6716 17 12.5V25H15V16.5C15 15.6716 14.3285 15 13.5 15C12.6716 15 12 15.6716 12 16.5V29.7375C12 35.4053 16.5947 40 22.2625 40C26.0571 40 29.542 37.9061 31.3236 34.5557L37.2298 23.4485C37.667 22.6263 37.4098 21.6065 36.635 21.09C35.7542 20.5028 34.5598 20.7924 34.0458 21.7177L31.8742 25.6265C31.3731 26.5285 30 26.1727 30 25.1409Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM42.0952 24C42.0952 14.0063 33.9937 5.90476 24 5.90476C14.0063 5.90476 5.90476 14.0063 5.90476 24C5.90476 33.9937 14.0063 42.0952 24 42.0952C33.9937 42.0952 42.0952 33.9937 42.0952 24Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}