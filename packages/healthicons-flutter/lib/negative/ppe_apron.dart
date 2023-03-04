import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PpeApron extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PpeApron({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM19.4279 7.02686C16.3825 7.31493 14 9.8792 14 12.9999V24.9999C14 26.1045 14.8954 26.9999 16 26.9999H18V39L20.8377 39.9459C22.8904 40.6301 25.1096 40.6301 27.1623 39.9459L30 39V26.9999H32C33.1046 26.9999 34 26.1045 34 24.9999V12.9999C34 9.8792 31.6175 7.31493 28.5721 7.02686C27.7945 8.77841 26.0399 10 24 10C21.9601 10 20.2055 8.77841 19.4279 7.02686ZM19 25V23H29V25H19Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}