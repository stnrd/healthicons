import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MinistryOfHealth extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const MinistryOfHealth({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 16V14H27V12H25V10H23V12H21V14H23V16H25Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.6248 5.21913C24.2595 4.92696 23.7406 4.92696 23.3754 5.21913L8.64928 17H7C6.44772 17 6 17.4477 6 18V22C6 22.5523 6.44772 23 7 23H8V33H7C6.44772 33 6 33.4477 6 34V37H5C4.44772 37 4 37.4477 4 38V42C4 42.5523 4.44772 43 5 43H43C43.5523 43 44 42.5523 44 42V38C44 37.4477 43.5523 37 43 37H42V34C42 33.4477 41.5523 33 41 33H40V23H41C41.5523 23 42 22.5523 42 22V18C42 17.4477 41.5523 17 41 17H39.3508L24.6248 5.21913ZM36.1493 17L24.0001 7.28062L11.8508 17H36.1493ZM8 19V21H40V19H8ZM38 23H36V33H38V23ZM34 33V23H14V33H15C15.5523 33 16 33.4477 16 34V37H20V29C20 26.7909 21.7909 25 24 25C26.2091 25 28 26.7909 28 29V37H32V34C32 33.4477 32.4477 33 33 33H34ZM22 29V37H26V29C26 27.8954 25.1046 27 24 27C22.8954 27 22 27.8954 22 29ZM42 39V41H6V39H42ZM34 35V37H40V35H34ZM10 33V23H12V33H10ZM8 35H14V37H8V35Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}