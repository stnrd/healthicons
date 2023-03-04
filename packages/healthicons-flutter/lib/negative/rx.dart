import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Rx extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Rx({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM17 13C16.4477 13 16 13.4477 16 14V22V30H18V23H20.5857L26.5858 29.0001L22.2929 33.293L23.7072 34.7072L28 30.4143L32.2928 34.7072L33.7071 33.293L29.4142 29.0001L33.7072 24.7072L32.2929 23.293L28 27.5859L23.3984 22.9844C25.9736 22.7813 28 20.6273 28 18C28 15.2386 25.7614 13 23 13H17ZM18 21H23C24.6569 21 26 19.6569 26 18C26 16.3431 24.6569 15 23 15H18V21Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}