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
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C9.44772 4 9 4.44772 9 5V43C9 43.5523 9.44772 44 10 44H38C38.5523 44 39 43.5523 39 43V15C39 14.7348 38.8946 14.4804 38.7071 14.2929L28.7071 4.29289C28.5196 4.10536 28.2652 4 28 4H10ZM11 42V6H27V15C27 15.5523 27.4477 16 28 16H37V42H11ZM35.5858 14L29 7.41421V14H35.5858ZM17 33H19V26H20.5857L25.5858 31.0001L22.2929 34.293L23.7072 35.7072L27 32.4143L30.2928 35.7072L31.7071 34.293L28.4142 31.0001L31.7072 27.7072L30.2929 26.293L27 29.5859L23.3948 25.9808C25.4186 25.7825 27 24.0759 27 22C27 19.7909 25.2091 18 23 18H18C17.4477 18 17 18.4477 17 19V33ZM23 24H19V20H23C24.1046 20 25 20.8954 25 22C25 23.1046 24.1046 24 23 24Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}