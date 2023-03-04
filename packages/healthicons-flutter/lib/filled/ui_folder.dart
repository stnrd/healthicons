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
<path d="M42 18C42 16.3431 40.6569 15 39 15H9C7.34315 15 6 16.3431 6 18V36C6 37.6569 7.34315 39 9 39H39C40.6569 39 42 37.6569 42 36V18Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 11H22.0825C22.4473 11 22.7832 11.1987 22.9589 11.5184L26.805 18.5185C27.1712 19.1849 26.689 20 25.9286 20H9C8.44772 20 8 19.5523 8 19V12C8 11.4477 8.44772 11 9 11ZM22.0825 9C23.177 9 24.1847 9.59609 24.7117 10.5554L28.5579 17.5554C29.6564 19.5547 28.2099 22 25.9286 22H9C7.34315 22 6 20.6569 6 19V12C6 10.3431 7.34315 9 9 9H22.0825Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15H27.5V17H8V15Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}