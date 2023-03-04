import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Ambulance extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Ambulance({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 17C4 15.3431 5.34315 14 7 14H27C28.6569 14 30 15.3431 30 17V19H35.718C36.4722 19 37.1987 19.284 37.7529 19.7956L43.0348 24.6713C43.6501 25.2392 44 26.0384 44 26.8757V35H38V33H42V26.8757C42 26.5966 41.8834 26.3302 41.6783 26.1409L36.3963 21.2652C36.2116 21.0947 35.9694 21 35.718 21H30V33H32V35H15V33H28V17C28 16.4477 27.5523 16 27 16H7C6.44772 16 6 16.4477 6 17V33H9V35H4V17Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 36C13.1046 36 14 35.1046 14 34C14 32.8954 13.1046 32 12 32C10.8954 32 10 32.8954 10 34C10 35.1046 10.8954 36 12 36ZM12 38C14.2091 38 16 36.2091 16 34C16 31.7909 14.2091 30 12 30C9.79086 30 8 31.7909 8 34C8 36.2091 9.79086 38 12 38Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35 36C36.1046 36 37 35.1046 37 34C37 32.8954 36.1046 32 35 32C33.8954 32 33 32.8954 33 34C33 35.1046 33.8954 36 35 36ZM35 38C37.2091 38 39 36.2091 39 34C39 31.7909 37.2091 30 35 30C32.7909 30 31 31.7909 31 34C31 36.2091 32.7909 38 35 38Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M43 28L29 28V26L43 26V28Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 27V19H18V27H16Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 16C33.5523 16 34 16.4477 34 17V20H32V17C32 16.4477 32.4477 16 33 16Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 24H13V22H21V24Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35 20H31V18H35V20Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 13.5C32.4477 13.5 32 13.0523 32 12.5V11C32 10.4477 32.4477 10 33 10C33.5523 10 34 10.4477 34 11V12.5C34 13.0523 33.5523 13.5 33 13.5Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.5 17C36.5 16.4477 36.9477 16 37.5 16H39C39.5523 16 40 16.4477 40 17C40 17.5523 39.5523 18 39 18H37.5C36.9477 18 36.5 17.5523 36.5 17Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.759 14.1715C35.3881 13.7622 35.4193 13.1298 35.8285 12.759L36.7427 11.9306C37.152 11.5597 37.7844 11.5908 38.1552 12.0001C38.5261 12.4093 38.4949 13.0417 38.0857 13.4126L37.1715 14.241C36.7622 14.6119 36.1298 14.5807 35.759 14.1715Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}