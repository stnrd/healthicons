import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HealthDataSecurity extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HealthDataSecurity({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 7C17 5.34315 18.3431 4 20 4H28C29.6569 4 31 5.34315 31 7H34C35.6569 7 37 8.34315 37 10V25H35V10C35 9.44772 34.5523 9 34 9H31C31 10.6569 29.6569 12 28 12H20C18.3431 12 17 10.6569 17 9H14C13.4477 9 13 9.44772 13 10V38C13 38.5523 13.4477 39 14 39H26V41H14C12.3431 41 11 39.6569 11 38V10C11 8.34315 12.3431 7 14 7H17ZM20 6C19.4477 6 19 6.44772 19 7V9C19 9.55228 19.4477 10 20 10H28C28.5523 10 29 9.55228 29 9V7C29 6.44772 28.5523 6 28 6H20ZM23 16V19H20V21H23V24H25V21H28V19H25V16H23ZM28 27C27.4477 27 27 27.4477 27 28V34.7889C27 37.1294 28.1697 39.315 30.1171 40.6133L33.4453 42.8321C33.7812 43.056 34.2188 43.056 34.5547 42.8321L37.8829 40.6133C39.8303 39.315 41 37.1294 41 34.7889V28C41 27.4477 40.5523 27 40 27H28ZM37.7071 32.7072L33.7071 36.7072C33.3165 37.0977 32.6834 37.0977 32.2928 36.7072L30.2928 34.7072L31.7071 33.293L33 34.5859L36.2928 31.293L37.7071 32.7072Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}