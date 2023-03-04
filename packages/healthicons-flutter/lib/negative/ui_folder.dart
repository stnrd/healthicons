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
<path d="M24.8718 15L22.9589 11.5184C22.7832 11.1987 22.4473 11 22.0825 11H9C8.44772 11 8 11.4477 8 12V15H24.8718Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM39 15C40.6569 15 42 16.3431 42 18V36C42 37.6569 40.6569 39 39 39H9C7.34315 39 6 37.6569 6 36V12C6 10.3431 7.34315 9 9 9H22.0825C23.177 9 24.1847 9.59609 24.7117 10.5554L27.1538 15H39Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}