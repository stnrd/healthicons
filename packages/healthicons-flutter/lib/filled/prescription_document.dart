import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PrescriptionDocument extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PrescriptionDocument({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 15V4H10C9.44772 4 9 4.44772 9 5V43C9 43.5523 9.44772 44 10 44H38C38.5523 44 39 43.5523 39 43V16H28C27.4477 16 27 15.5523 27 15ZM29 14V4.58579L38.4142 14H29ZM17 19C17 18.4477 17.4477 18 18 18H23C25.2091 18 27 19.7909 27 22C27 24.0759 25.4186 25.7825 23.3948 25.9808L27 29.5859L30.2929 26.293L31.7072 27.7072L28.4142 31.0001L31.7071 34.293L30.2928 35.7072L27 32.4143L23.7072 35.7072L22.2929 34.293L25.5858 31.0001L20.5857 26H19V33H17V25V19ZM23 24H19V20H23C24.1046 20 25 20.8954 25 22C25 23.1046 24.1046 24 23 24Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}