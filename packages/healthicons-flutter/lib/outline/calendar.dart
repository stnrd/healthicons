import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Calendar extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Calendar({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 25H15V27H17V25ZM15 23C13.8954 23 13 23.8954 13 25V27C13 28.1046 13.8954 29 15 29H17C18.1046 29 19 28.1046 19 27V25C19 23.8954 18.1046 23 17 23H15Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25 25H23V27H25V25ZM23 23C21.8954 23 21 23.8954 21 25V27C21 28.1046 21.8954 29 23 29H25C26.1046 29 27 28.1046 27 27V25C27 23.8954 26.1046 23 25 23H23Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 25H31V27H33V25ZM31 23C29.8954 23 29 23.8954 29 25V27C29 28.1046 29.8954 29 31 29H33C34.1046 29 35 28.1046 35 27V25C35 23.8954 34.1046 23 33 23H31Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 33H15V35H17V33ZM15 31C13.8954 31 13 31.8954 13 33V35C13 36.1046 13.8954 37 15 37H17C18.1046 37 19 36.1046 19 35V33C19 31.8954 18.1046 31 17 31H15Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25 33H23V35H25V33ZM23 31C21.8954 31 21 31.8954 21 33V35C21 36.1046 21.8954 37 23 37H25C26.1046 37 27 36.1046 27 35V33C27 31.8954 26.1046 31 25 31H23Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 33H31V35H33V33ZM31 31C29.8954 31 29 31.8954 29 33V35C29 36.1046 29.8954 37 31 37H33C34.1046 37 35 36.1046 35 35V33C35 31.8954 34.1046 31 33 31H31Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 11C9.44772 11 9 11.4477 9 12V39C9 39.5523 9.44772 40 10 40H38C38.5509 40 39 39.5515 39 38.9978V12.0022C39 11.4485 38.5509 11 38 11H35V9H38C39.6583 9 41 10.3467 41 12.0022V38.9978C41 40.6533 39.6583 42 38 42H10C8.34315 42 7 40.6569 7 39V12C7 10.3431 8.34315 9 10 9H15V11H10ZM31 11H19V9H31V11Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 20H9V18H39V20Z" fill="#333333"/>
<path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V14C17 14.5523 16.5523 15 16 15C15.4477 15 15 14.5523 15 14V7Z" fill="#333333"/>
<path d="M31 7C31 6.44772 31.4477 6 32 6C32.5523 6 33 6.44772 33 7V14C33 14.5523 32.5523 15 32 15C31.4477 15 31 14.5523 31 14V7Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}