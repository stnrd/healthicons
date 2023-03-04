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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM27 4V15C27 15.5523 27.4477 16 28 16H39V43C39 43.5523 38.5523 44 38 44H10C9.44771 44 9 43.5523 9 43V5C9 4.44772 9.44771 4 10 4H27ZM29 4.58579V14H38.4142L29 4.58579ZM18 18C17.4477 18 17 18.4477 17 19V25V33H19V26H20.5857L25.5858 31.0001L22.2929 34.293L23.7072 35.7072L27 32.4143L30.2928 35.7072L31.7071 34.293L28.4142 31.0001L31.7072 27.7072L30.2929 26.293L27 29.5859L23.3948 25.9808C25.4186 25.7825 27 24.0759 27 22C27 19.7909 25.2091 18 23 18H18ZM19 24H23C24.1046 24 25 23.1046 25 22C25 20.8954 24.1046 20 23 20H19V24Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}