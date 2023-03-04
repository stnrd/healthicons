import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UiFolder extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const UiFolder({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.9707 17H39C39.5523 17 40 17.4477 40 18V36C40 36.5523 39.5523 37 39 37H9C8.44772 37 8 36.5523 8 36V12C8 11.4477 8.44772 11 9 11H22.0825C22.4473 11 22.7832 11.1987 22.9589 11.5184L24.7117 10.5554C24.1847 9.59609 23.177 9 22.0825 9H9C7.34315 9 6 10.3431 6 12V36C6 37.6569 7.34315 39 9 39H39C40.6569 39 42 37.6569 42 36V18C42 16.3431 40.6569 15 39 15H27.1538L24.7117 10.5554L22.9589 11.5184L25.9707 17Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15H27.5V17H8V15Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}