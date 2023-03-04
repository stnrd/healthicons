import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UiPreferences extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const UiPreferences({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 34C13.1046 34 14 33.1046 14 32C14 30.8954 13.1046 30 12 30C10.8954 30 10 30.8954 10 32C10 33.1046 10.8954 34 12 34ZM12 36C14.2091 36 16 34.2091 16 32C16 29.7909 14.2091 28 12 28C9.79086 28 8 29.7909 8 32C8 34.2091 9.79086 36 12 36Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 22.0001C23.4743 22.0001 23 22.396 23 22.9217V41C23 41.5523 23.4477 42 24 42C24.5523 42 25 41.5523 25 41V22.9217C25 22.396 24.5257 22.0001 24 22.0001ZM25 13C25 13.5523 24.5523 14 24 14C23.4477 14 23 13.5523 23 13V7C23 6.44772 23.4477 6 24 6C24.5523 6 25 6.44772 25 7V13Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36 42C35.4477 42 35 41.5523 35 41V33.9217C35 33.396 35.4743 33.0001 36 33.0001C36.5257 33.0001 37 33.396 37 33.9217V41C37 41.5523 36.5523 42 36 42ZM35 24C35 24.5523 35.4477 25 36 25C36.5523 25 37 24.5523 37 24V7C37 6.44771 36.5523 6 36 6C35.4477 6 35 6.44772 35 7V24Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 42C11.4477 42 11 41.5523 11 41V38.9217C11 38.396 11.4743 38.0001 12 38.0001C12.5257 38.0001 13 38.396 13 38.9217V41C13 41.5523 12.5523 42 12 42ZM11 28C11 28.5523 11.4477 29 12 29C12.5523 29 13 28.5523 13 28L13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V28Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 18C25.1046 18 26 17.1046 26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16C22 17.1046 22.8954 18 24 18ZM24 20C26.2091 20 28 18.2091 28 16C28 13.7909 26.2091 12 24 12C21.7909 12 20 13.7909 20 16C20 18.2091 21.7909 20 24 20Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36 29C37.1046 29 38 28.1046 38 27C38 25.8954 37.1046 25 36 25C34.8954 25 34 25.8954 34 27C34 28.1046 34.8954 29 36 29ZM36 31C38.2091 31 40 29.2091 40 27C40 24.7909 38.2091 23 36 23C33.7909 23 32 24.7909 32 27C32 29.2091 33.7909 31 36 31Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}