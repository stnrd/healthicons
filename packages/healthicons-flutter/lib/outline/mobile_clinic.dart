import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MobileClinic extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const MobileClinic({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 13C4 11.3431 5.34315 10 7 10H29C30.6569 10 32 11.3431 32 13V19H35.718C36.4722 19 37.1987 19.2841 37.7529 19.7956L43.0348 24.6713C43.6501 25.2392 44 26.0384 44 26.8757V35H40V33H42V26.8757C42 26.5966 41.8834 26.3302 41.6783 26.1409L36.3963 21.2652C36.2116 21.0947 35.9694 21 35.718 21H32V33H34V35H23V33H30V13C30 12.4477 29.5523 12 29 12H7C6.44772 12 6 12.4477 6 13V33H9V35H4V13ZM14 33H17V35H14V33Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 36C12.1046 36 13 35.1046 13 34C13 32.8954 12.1046 32 11 32C9.89543 32 9 32.8954 9 34C9 35.1046 9.89543 36 11 36ZM11 38C13.2091 38 15 36.2091 15 34C15 31.7909 13.2091 30 11 30C8.79086 30 7 31.7909 7 34C7 36.2091 8.79086 38 11 38Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 36C21.1046 36 22 35.1046 22 34C22 32.8954 21.1046 32 20 32C18.8954 32 18 32.8954 18 34C18 35.1046 18.8954 36 20 36ZM20 38C22.2091 38 24 36.2091 24 34C24 31.7909 22.2091 30 20 30C17.7909 30 16 31.7909 16 34C16 36.2091 17.7909 38 20 38Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37 36C38.1046 36 39 35.1046 39 34C39 32.8954 38.1046 32 37 32C35.8954 32 35 32.8954 35 34C35 35.1046 35.8954 36 37 36ZM37 38C39.2091 38 41 36.2091 41 34C41 31.7909 39.2091 30 37 30C34.7909 30 33 31.7909 33 34C33 36.2091 34.7909 38 37 38Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M43 28H5V26H43V28Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 23V15H19V23H17Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 20H14V18H22V20Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}