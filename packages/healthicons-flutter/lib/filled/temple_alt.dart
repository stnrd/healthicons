import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TempleAlt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const TempleAlt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 14.0479V12.0479H34V14.0479H14ZM14 16.0479H13C12.4477 16.0479 12 15.6001 12 15.0479V11.0479C12 10.4956 12.4477 10.0479 13 10.0479H35C35.5523 10.0479 36 10.4956 36 11.0479V15.0479C36 15.6001 35.5523 16.0479 35 16.0479H34V18.0479H36C36.5523 18.0479 37 18.4956 37 19.0479V23.0479C37 23.6001 36.5523 24.0479 36 24.0479V26.0479H38C38.5523 26.0479 39 26.4956 39 27.0479V31.0479C39 31.6001 38.5523 32.0479 38 32.0479H37V36.0479H35V32.0479H13V36.0479H11V32.0479H10C9.44772 32.0479 9 31.6001 9 31.0479V27.0479C9 26.4956 9.44772 26.0479 10 26.0479H12V24.0479C11.4477 24.0479 11 23.6001 11 23.0479V19.0479C11 18.4956 11.4477 18.0479 12 18.0479H14V16.0479ZM37 28.0479V30.0479H11V28.0479H37ZM16 18.0479H32V16.0479H16V18.0479ZM13 20.0479V22.0479H35V20.0479H13ZM34 24.0479H14V26.0479H34V24.0479ZM28 34.0479H20V42.0479H28V34.0479Z" fill="#333333"/>
<path d="M24 6.04785C21.2386 6.04785 19 8.28643 19 11.0479H29C29 8.28643 26.7614 6.04785 24 6.04785Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.126 10.0479H27.874C27.4299 8.32262 25.8638 7.04785 24 7.04785C22.1362 7.04785 20.5701 8.32262 20.126 10.0479ZM18 11.0479C18 7.73414 20.6863 5.04785 24 5.04785C27.3137 5.04785 30 7.73414 30 11.0479V12.0479H18V11.0479Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25 11H23V30H25V11ZM21 9V32H27V9H21Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 40V38H20V40H9ZM8 42C7.44772 42 7 41.5523 7 41V37C7 36.4477 7.44772 36 8 36H21C21.5523 36 22 36.4477 22 37V41C22 41.5523 21.5523 42 21 42H8Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 40V38H39V40H28ZM27 42C26.4477 42 26 41.5523 26 41V37C26 36.4477 26.4477 36 27 36H40C40.5523 36 41 36.4477 41 37V41C41 41.5523 40.5523 42 40 42H27Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}