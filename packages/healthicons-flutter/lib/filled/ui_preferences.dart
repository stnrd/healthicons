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
<path d="M16 32C16 34.2091 14.2091 36 12 36C9.79086 36 8 34.2091 8 32C8 29.7909 9.79086 28 12 28C14.2091 28 16 29.7909 16 32Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 22.0001C23.4743 22.0001 23 22.396 23 22.9217V41C23 41.5523 23.4477 42 24 42C24.5523 42 25 41.5523 25 41V22.9217C25 22.396 24.5257 22.0001 24 22.0001ZM23 15C23 15.5523 23.4741 16 24.0264 16C24.5786 16 25 15.5523 25 15V7C25 6.44772 24.5523 6 24 6C23.4477 6 23 6.44772 23 7V15Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36 33.0001C35.4743 33.0001 35 33.396 35 33.9217V41C35 41.5523 35.4477 42 36 42C36.5523 42 37 41.5523 37 41V33.9217C37 33.396 36.5257 33.0001 36 33.0001ZM35 26C35 26.5523 35.4741 27 36.0264 27C36.5786 27 37 26.5523 37 26V7C37 6.44772 36.5523 6 36 6C35.4477 6 35 6.44772 35 7V26Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 38.0001C11.4743 38.0001 11 38.396 11 38.9217V41C11 41.5523 11.4477 42 12 42C12.5523 42 13 41.5523 13 41V38.9217C13 38.396 12.5257 38.0001 12 38.0001ZM11 31C11 31.5523 11.4741 32 12.0264 32C12.5786 32 13 31.5523 13 31L13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V31Z" fill="#333333"/>
<path d="M28 16C28 18.2091 26.2091 20 24 20C21.7909 20 20 18.2091 20 16C20 13.7909 21.7909 12 24 12C26.2091 12 28 13.7909 28 16Z" fill="#333333"/>
<path d="M40 27C40 29.2091 38.2091 31 36 31C33.7909 31 32 29.2091 32 27C32 24.7909 33.7909 23 36 23C38.2091 23 40 24.7909 40 27Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}