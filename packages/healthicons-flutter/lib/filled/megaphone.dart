import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Megaphone extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Megaphone({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 31V38C12 39.1046 12.8954 40 14 40C15.1046 40 16 39.1046 16 38V31H12Z" fill="#333333"/>
<path d="M7 26V20C7 18.3431 8.34315 17 10 17H16V29H11.5H10C8.34315 29 7 27.6569 7 26Z" fill="#333333"/>
<path d="M34 23V22C34 20.3431 32.6569 19 31 19V26C32.6569 26 34 24.6569 34 23Z" fill="#333333"/>
<path d="M18 30V15L27.4631 8.97803C28.1288 8.55439 29 9.0326 29 9.82169V35.1783C29 35.9674 28.1288 36.4456 27.4631 36.022L18 30Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.8322 17.4453C41.1385 17.9048 41.0143 18.5257 40.5548 18.832L37.5548 20.832C37.0953 21.1384 36.4744 21.0142 36.1681 20.5547C35.8617 20.0952 35.9859 19.4743 36.4454 19.1679L39.4454 17.1679C39.9049 16.8616 40.5258 16.9858 40.8322 17.4453ZM36.0001 24C36.0001 23.4477 36.4478 23 37.0001 23H41.0001C41.5524 23 42.0001 23.4477 42.0001 24C42.0001 24.5523 41.5524 25 41.0001 25H37.0001C36.4478 25 36.0001 24.5523 36.0001 24ZM36.1681 27.4453C36.4744 26.9858 37.0953 26.8616 37.5548 27.1679L40.5548 29.1679C41.0143 29.4743 41.1385 30.0952 40.8322 30.5547C40.5258 31.0142 39.9049 31.1384 39.4454 30.832L36.4454 28.832C35.9859 28.5257 35.8617 27.9048 36.1681 27.4453Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}